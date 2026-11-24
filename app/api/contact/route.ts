import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import { quoteFormSchema } from '@/lib/validations/quote';
import { serviceRequestSchema } from '@/lib/validations/service-request';
import {
  generateOwnerNotificationEmail,
  generateCustomerConfirmationEmail,
  generateOwnerQuoteNotificationEmail,
  generateCustomerQuoteConfirmationEmail,
  generateOwnerServiceRequestEmail,
  generateCustomerServiceRequestConfirmationEmail,
  sanitizeHeader,
} from '@/lib/email/contact-template';

// Request body size limit: 50 KB
const MAX_PAYLOAD_SIZE = 50 * 1024;

// Simple in-memory rate limiting map (IP -> timestamps array)
// Note: For distributed multi-instance or serverless deployments, an external store like Upstash Redis is recommended.
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // 5 submissions per 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps older than the window
  const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recentTimestamps);
    return false; // Rate limit exceeded
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  // Periodic cleanup if map grows large
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((times, key) => {
      const valid = times.filter((t: number) => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, valid);
      }
    });
  }

  return true;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Check request size limit
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: 'Payload exceeds size limit. Please shorten your message.',
        },
        { status: 413 }
      );
    }

    // 2. Client IP detection and rate limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Too many requests from your IP. Please wait a few minutes before submitting again or call (516) 717-7515.',
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON safely
    let rawBody;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Malformed request payload.',
        },
        { status: 400 }
      );
    }

    // 4. Server-side validation using Zod
    const isServiceRequest = rawBody.formType === 'service-request' || 'serviceAddress' in rawBody;

    if (isServiceRequest) {
      const serviceValidation = serviceRequestSchema.safeParse(rawBody);

      if (!serviceValidation.success) {
        const fieldErrors: Record<string, string> = {};
        serviceValidation.error.issues.forEach((err: any) => {
          const fieldName = err.path[0] as string;
          if (fieldName && !fieldErrors[fieldName]) {
            fieldErrors[fieldName] = err.message;
          }
        });

        return NextResponse.json(
          {
            success: false,
            message: 'Please review and correct the errors in the service request form.',
            errors: fieldErrors,
          },
          { status: 400 }
        );
      }

      const serviceData = serviceValidation.data;

      // Honeypot Spam Protection
      if (serviceData.honeypot && serviceData.honeypot.trim().length > 0) {
        return NextResponse.json({
          success: true,
          message:
            'Thank you! Your service request has been received. Our team will contact you soon to confirm availability.',
        });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const contactEmail1 = process.env.CONTACT_EMAIL_1 || 'Hvac6671@gmail.com';
      const contactEmail2 = process.env.CONTACT_EMAIL_2 || '247hvacnyc@gmail.com';

      const submissionDate = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'medium',
      });

      if (!resendApiKey) {
        console.warn(
          '[Service Request API] RESEND_API_KEY is not configured in environment variables. Email dispatch skipped.'
        );
        return NextResponse.json({
          success: true,
          message:
            'Thank you! Your service request has been received. Our team will contact you soon to confirm availability.',
        });
      }

      const resend = new Resend(resendApiKey);
      const ownerEmailData = generateOwnerServiceRequestEmail(serviceData, submissionDate);
      const ownerRecipients = [sanitizeHeader(contactEmail1), sanitizeHeader(contactEmail2)].filter(Boolean);

      const ownerResult = await resend.emails.send({
        from: sanitizeHeader(resendFromEmail),
        to: ownerRecipients,
        replyTo: serviceData.email ? sanitizeHeader(serviceData.email) : undefined,
        subject: ownerEmailData.subject,
        html: ownerEmailData.html,
      });

      if (ownerResult.error) {
        console.error('[Service Request API] Owner notification dispatch error:', ownerResult.error);
        return NextResponse.json(
          {
            success: false,
            message: 'Failed to submit service request. Please call us directly at (516) 717-7515.',
          },
          { status: 500 }
        );
      }

      // Customer confirmation email (if email was provided and owner email succeeded)
      if (serviceData.email && serviceData.email.trim().length > 0) {
        try {
          const customerHtml = generateCustomerServiceRequestConfirmationEmail(
            serviceData.fullName,
            serviceData.preferredDate,
            serviceData.preferredTime
          );
          await resend.emails.send({
            from: sanitizeHeader(resendFromEmail),
            to: [sanitizeHeader(serviceData.email)],
            subject: 'Service Request Received - 247 HVAC of Long Island',
            html: customerHtml,
          });
        } catch (confirmationErr) {
          console.error('[Service Request API] Customer confirmation email dispatch failed:', confirmationErr);
        }
      }

      return NextResponse.json({
        success: true,
        message:
          'Thank you! Your service request has been received. Our team will contact you soon to confirm availability.',
      });
    }

    const isQuoteForm = rawBody.formType === 'quote' || 'zipCode' in rawBody;

    if (isQuoteForm) {
      const quoteValidation = quoteFormSchema.safeParse(rawBody);

      if (!quoteValidation.success) {
        const fieldErrors: Record<string, string> = {};
        quoteValidation.error.issues.forEach((err: any) => {
          const fieldName = err.path[0] as string;
          if (fieldName && !fieldErrors[fieldName]) {
            fieldErrors[fieldName] = err.message;
          }
        });

        return NextResponse.json(
          {
            success: false,
            message: 'Please review and correct the errors in the quote form.',
            errors: fieldErrors,
          },
          { status: 400 }
        );
      }

      const quoteData = quoteValidation.data;

      // Honeypot Spam Protection
      if (quoteData.honeypot && quoteData.honeypot.trim().length > 0) {
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your quote request has been received. Our team will contact you soon.',
        });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const contactEmail1 = process.env.CONTACT_EMAIL_1 || 'Hvac6671@gmail.com';
      const contactEmail2 = process.env.CONTACT_EMAIL_2 || '247hvacnyc@gmail.com';

      const submissionDate = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'medium',
      });

      if (!resendApiKey) {
        console.warn(
          '[Quote API] RESEND_API_KEY is not configured in environment variables. Email dispatch skipped.'
        );
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your quote request has been received. Our team will contact you soon.',
        });
      }

      const resend = new Resend(resendApiKey);
      const ownerEmailData = generateOwnerQuoteNotificationEmail(quoteData, submissionDate);
      const ownerRecipients = [sanitizeHeader(contactEmail1), sanitizeHeader(contactEmail2)].filter(Boolean);

      const ownerResult = await resend.emails.send({
        from: sanitizeHeader(resendFromEmail),
        to: ownerRecipients,
        replyTo: quoteData.email ? sanitizeHeader(quoteData.email) : undefined,
        subject: ownerEmailData.subject,
        html: ownerEmailData.html,
      });

      if (ownerResult.error) {
        console.error('[Quote API] Owner notification dispatch error:', ownerResult.error);
        return NextResponse.json(
          {
            success: false,
            message: 'Failed to submit quote request. Please call us directly at (516) 717-7515.',
          },
          { status: 500 }
        );
      }

      // Customer confirmation email (if email was provided and owner email succeeded)
      if (quoteData.email && quoteData.email.trim().length > 0) {
        try {
          const customerHtml = generateCustomerQuoteConfirmationEmail(quoteData.fullName);
          await resend.emails.send({
            from: sanitizeHeader(resendFromEmail),
            to: [sanitizeHeader(quoteData.email)],
            subject: 'Thank You for Requesting a Free Quote - 247 HVAC of Long Island',
            html: customerHtml,
          });
        } catch (confirmationErr) {
          console.error('[Quote API] Customer confirmation email dispatch failed:', confirmationErr);
        }
      }

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your quote request has been received. Our team will contact you soon.',
      });
    }

    // Default: Contact Form Validation
    const validationResult = contactFormSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((err: any) => {
        const fieldName = err.path[0] as string;
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: 'Please review and correct the errors in the form.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 5. Honeypot Spam Protection
    // If the hidden honeypot field was filled, silently return a success response without sending emails
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been received. Our team will contact you soon.',
      });
    }

    // 6. Read and validate environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const contactEmail1 = process.env.CONTACT_EMAIL_1 || 'Hvac6671@gmail.com';
    const contactEmail2 = process.env.CONTACT_EMAIL_2 || '247hvacnyc@gmail.com';

    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Check if Resend API key is present
    if (!resendApiKey) {
      // In development or if key is not yet configured, log server warning
      console.warn(
        '[Contact API] RESEND_API_KEY is not configured in environment variables. Email dispatch skipped.'
      );

      // Return user-friendly success without breaking the frontend
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been received. Our team will contact you soon.',
      });
    }

    const resend = new Resend(resendApiKey);

    // 7. Send Owner Notification Email to both recipients
    const ownerHtml = generateOwnerNotificationEmail(data, submissionDate);
    const ownerRecipients = [sanitizeHeader(contactEmail1), sanitizeHeader(contactEmail2)].filter(Boolean);

    const ownerEmailPayload = {
      from: sanitizeHeader(resendFromEmail),
      to: ownerRecipients,
      replyTo: sanitizeHeader(data.email),
      subject: 'New Website Inquiry - 247 HVAC of Long Island',
      html: ownerHtml,
    };

    const ownerResult = await resend.emails.send(ownerEmailPayload);

    if (ownerResult.error) {
      console.error('[Contact API] Owner notification dispatch error:', ownerResult.error);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to submit inquiry. Please call us directly at (516) 717-7515.',
        },
        { status: 500 }
      );
    }

    // 8. Send Customer Confirmation Email (ONLY after owner notification is accepted)
    try {
      const customerHtml = generateCustomerConfirmationEmail(data.firstName);
      await resend.emails.send({
        from: sanitizeHeader(resendFromEmail),
        to: [sanitizeHeader(data.email)],
        subject: 'Thank You for Contacting 247 HVAC of Long Island',
        html: customerHtml,
      });
    } catch (confirmationErr) {
      // Log failure separately without exposing internal details to the customer
      console.error('[Contact API] Customer confirmation email dispatch failed:', confirmationErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will contact you soon.',
    });
  } catch (err) {
    console.error('[Contact API] Unexpected server error:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please call our office directly at (516) 717-7515.',
      },
      { status: 500 }
    );
  }
}
