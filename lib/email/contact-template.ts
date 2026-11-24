import { ContactFormData } from '@/lib/validations/contact';

/**
 * HTML entities escape utility to prevent XSS / injection in email bodies
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Strip newlines to prevent header injection in email subjects or recipients
 */
export function sanitizeHeader(value: string): string {
  if (!value) return '';
  return value.replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Generates the HTML template for the owner notification email sent to both recipients
 */
export function generateOwnerNotificationEmail(data: ContactFormData, submissionDate: string): string {
  const safeFirstName = escapeHtml(data.firstName);
  const safeLastName = escapeHtml(data.lastName);
  const safeFullName = `${safeFirstName} ${safeLastName}`;
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeService = escapeHtml(data.serviceRequired);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br/>');
  const safeDate = escapeHtml(submissionDate);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry - 247 HVAC of Long Island</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #061A40; padding: 28px 32px; text-align: left;">
              <div style="color: #00BFFF; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                247 HVAC of Long Island
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; line-height: 1.3;">
                New Website Inquiry Received
              </h1>
            </td>
          </tr>

          <!-- Summary Intro -->
          <tr>
            <td style="padding: 24px 32px 12px 32px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155;">
                A new inquiry was submitted through the <strong>247 HVAC of Long Island</strong> contact form. Details are summarized below:
              </p>
            </td>
          </tr>

          <!-- Data Table -->
          <tr>
            <td style="padding: 12px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="10" style="border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td width="35%" style="color: #64748b; font-weight: 700; padding: 10px 0;">Customer Name:</td>
                  <td width="65%" style="color: #061A40; font-weight: 700; padding: 10px 0;">${safeFullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="color: #64748b; font-weight: 700; padding: 10px 0;">Customer Email:</td>
                  <td style="padding: 10px 0;">
                    <a href="mailto:${safeEmail}" style="color: #0066CC; text-decoration: underline; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="color: #64748b; font-weight: 700; padding: 10px 0;">Customer Phone:</td>
                  <td style="padding: 10px 0;">
                    <a href="tel:${safePhone}" style="color: #0066CC; text-decoration: underline; font-weight: 700;">${safePhone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="color: #64748b; font-weight: 700; padding: 10px 0;">Selected Service:</td>
                  <td style="color: #0066CC; font-weight: 700; padding: 10px 0;">${safeService}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="color: #64748b; font-weight: 700; padding: 10px 0;">Date & Time:</td>
                  <td style="color: #334155; padding: 10px 0;">${safeDate}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 700; padding: 10px 0;">Website Source:</td>
                  <td style="color: #334155; padding: 10px 0;">247 HVAC of Long Island Website (<a href="https://247hvaclongisland.com" style="color: #0066CC;">247hvaclongisland.com</a>)</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Message -->
          <tr>
            <td style="padding: 12px 32px 28px 32px;">
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px;">
                <div style="color: #061A40; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
                  Customer Message:
                </div>
                <div style="color: #1e293b; font-size: 14px; line-height: 1.6;">
                  ${safeMessage}
                </div>
              </div>
            </td>
          </tr>

          <!-- Quick Action Bar -->
          <tr>
            <td style="padding: 0 32px 28px 32px; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="tel:${safePhone}" style="display: inline-block; background-color: #D32F2F; color: #ffffff; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-right: 10px; margin-bottom: 8px;">
                      Call Customer Now
                    </a>
                    <a href="mailto:${safeEmail}?subject=Re:%20247%20HVAC%20Inquiry%20-${encodeURIComponent(data.serviceRequired)}" style="display: inline-block; background-color: #0066CC; color: #ffffff; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-bottom: 8px;">
                      Reply via Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 12px; color: #64748b;">
              &copy; 247 HVAC of Long Island &bull; 700 Rockaway Turnpike #400 Lawrence, NY 11559 &bull; (516) 717-7515
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Generates the HTML template for the customer confirmation email
 */
export function generateCustomerConfirmationEmail(firstName: string): string {
  const safeFirstName = escapeHtml(firstName);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting 247 HVAC of Long Island</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #061A40; padding: 28px 32px; text-align: left;">
              <div style="color: #00BFFF; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                247 HVAC of Long Island
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; line-height: 1.3;">
                Thank You for Contacting Us
              </h1>
            </td>
          </tr>

          <!-- Body Content (Exact required text) -->
          <tr>
            <td style="padding: 32px; font-size: 15px; line-height: 1.6; color: #334155;">
              <p style="margin-top: 0; margin-bottom: 16px;">
                Hello <strong>${safeFirstName}</strong>,
              </p>

              <p style="margin-top: 0; margin-bottom: 16px;">
                Thank you for contacting 247 HVAC of Long Island!
              </p>

              <p style="margin-top: 0; margin-bottom: 16px;">
                We have successfully received your inquiry. Our team appreciates your interest and will review your request.
              </p>

              <p style="margin-top: 0; margin-bottom: 16px;">
                A member of our team will contact you as soon as possible.
              </p>

              <p style="margin-top: 0; margin-bottom: 24px;">
                If your request is urgent, please call our office directly at <a href="tel:5167177515" style="color: #D32F2F; font-weight: 700; text-decoration: underline;">(516) 717-7515</a>.
              </p>

              <p style="margin-top: 0; margin-bottom: 8px;">
                Thank you for choosing 247 HVAC of Long Island.
              </p>

              <p style="margin-top: 0; margin-bottom: 0; font-weight: 700; color: #061A40;">
                Best regards,<br/>
                247 HVAC of Long Island
              </p>
            </td>
          </tr>

          <!-- Direct Dispatch Box -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px 20px;">
                <div style="font-size: 13px; font-weight: 700; color: #0066CC; margin-bottom: 4px;">
                  Need 24/7 Emergency Service?
                </div>
                <div style="font-size: 14px; color: #1e3a8a;">
                  Our dispatch desk is open 24 Hours &ndash; 7 Days a week across Nassau, Queens, and Suffolk County. Call <a href="tel:5167177515" style="font-weight: 800; color: #D32F2F; text-decoration: underline;">(516) 717-7515</a>.
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 12px; color: #64748b;">
              &copy; 247 HVAC of Long Island &bull; 700 Rockaway Turnpike #400 Lawrence, NY 11559 &bull; (516) 717-7515 &bull; <a href="https://247hvaclongisland.com" style="color: #0066CC;">247hvaclongisland.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

import { QuoteFormData } from '@/lib/validations/quote';

/**
 * Generates the HTML template for the owner notification email for Quote requests
 */
export function generateOwnerQuoteNotificationEmail(
  data: QuoteFormData,
  submissionDate: string
): { subject: string; html: string; isEmergency: boolean } {
  const isEmergency =
    data.service === 'Emergency 24/7 No Heat / No AC Service' ||
    data.urgency === 'Emergency – Within 2 Hours';

  const safeFullName = escapeHtml(data.fullName);
  const safePhone = escapeHtml(data.phone);
  const safeEmail = data.email ? escapeHtml(data.email) : 'Not Provided';
  const safeZip = escapeHtml(data.zipCode);
  const safeService = escapeHtml(data.service);
  const safePropertyType = escapeHtml(data.propertyType);
  const safeInstallType = data.installationType ? escapeHtml(data.installationType) : 'N/A';
  const safeSystemAge = data.systemAge ? escapeHtml(data.systemAge) : 'Brand New Installation';
  const safeWorkingStatus = data.workingStatus ? escapeHtml(data.workingStatus) : 'N/A';
  const safeUrgency = escapeHtml(data.urgency);
  const safeBrand = data.brand ? escapeHtml(data.brand) : 'Not Specified';
  const safeDescription = data.description ? escapeHtml(data.description).replace(/\n/g, '<br/>') : 'None provided';
  const safeContactMethod = data.preferredContactMethod ? escapeHtml(data.preferredContactMethod) : 'Any';
  const safeServiceTime = data.preferredServiceTime ? escapeHtml(data.preferredServiceTime) : 'Flexible';
  const safeDate = escapeHtml(submissionDate);

  const subject = isEmergency
    ? `🚨 EMERGENCY HVAC Quote Request - ${safeFullName} (${safeZip})`
    : `New Free Quote Request: ${safeService} - ${safeFullName}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: ${isEmergency ? '#991B1B' : '#061A40'}; padding: 28px 32px; text-align: left;">
              <div style="color: ${isEmergency ? '#FCA5A5' : '#00BFFF'}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                247 HVAC of Long Island &bull; Free Quote Request
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; line-height: 1.3;">
                ${isEmergency ? '🚨 URGENT: Emergency HVAC Quote Request' : 'New Free Quote Request Received'}
              </h1>
            </td>
          </tr>

          ${
            isEmergency
              ? `
          <!-- Emergency Alert Box -->
          <tr>
            <td style="padding: 18px 32px 0 32px;">
              <div style="background-color: #FEF2F2; border: 2px solid #EF4444; border-radius: 12px; padding: 14px 18px; color: #991B1B;">
                <strong style="font-size: 14px; text-transform: uppercase;">⚠️ High-Priority Emergency Flag</strong>
                <p style="margin: 4px 0 0 0; font-size: 13px; line-height: 1.5;">
                  Customer requested immediate emergency assistance. Contact customer immediately at <a href="tel:${safePhone}" style="color: #DC2626; font-weight: 800; text-decoration: underline;">${safePhone}</a>.
                </p>
              </div>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Section 1: Contact Information -->
          <tr>
            <td style="padding: 24px 32px 8px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                1. Contact Information
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Full Name:</td>
                  <td width="62%" style="color: #061A40; font-weight: 700;">${safeFullName}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Phone Number:</td>
                  <td><a href="tel:${safePhone}" style="color: #0066CC; font-weight: 700; text-decoration: underline;">${safePhone}</a></td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Email Address:</td>
                  <td>${data.email ? `<a href="mailto:${safeEmail}" style="color: #0066CC; font-weight: 600;">${safeEmail}</a>` : '<span style="color: #94a3b8;">Not Provided</span>'}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">ZIP Code:</td>
                  <td style="color: #061A40; font-weight: 700;">${safeZip}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 2: HVAC Service Details -->
          <tr>
            <td style="padding: 12px 32px 8px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                2. HVAC Service Details
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Requested Service:</td>
                  <td width="62%" style="color: #0066CC; font-weight: 700;">${safeService}</td>
                </tr>
                ${
                  data.installationType
                    ? `
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Installation Type:</td>
                  <td style="color: #061A40; font-weight: 700;">${safeInstallType}</td>
                </tr>
                `
                    : ''
                }
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Property Type:</td>
                  <td style="color: #061A40; font-weight: 600;">${safePropertyType}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Current System Age:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeSystemAge}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 3: Service Requirements -->
          <tr>
            <td style="padding: 12px 32px 8px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                3. Service Requirements
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">System Working Status:</td>
                  <td width="62%" style="color: #061A40; font-weight: 600;">${safeWorkingStatus}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Urgency Requested:</td>
                  <td style="color: ${isEmergency ? '#DC2626' : '#061A40'}; font-weight: 700;">${safeUrgency}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Current System Brand:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeBrand}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600; vertical-align: top;">Project Description:</td>
                  <td style="color: #334155; line-height: 1.5;">${safeDescription}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 4: Additional Information -->
          <tr>
            <td style="padding: 12px 32px 20px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                4. Additional Information
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Preferred Contact Method:</td>
                  <td width="62%" style="color: #061A40; font-weight: 600;">${safeContactMethod}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Preferred Service Time:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeServiceTime}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Submission Date & Time:</td>
                  <td style="color: #64748b;">${safeDate}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 12px; color: #64748b;">
              &copy; 247 HVAC of Long Island &bull; Automated Quote Dispatch System &bull; <a href="https://247hvaclongisland.com" style="color: #0066CC;">247hvaclongisland.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return { subject, html, isEmergency };
}

/**
 * Generates the HTML template for customer quote confirmation email
 */
export function generateCustomerQuoteConfirmationEmail(fullName: string): string {
  const safeName = escapeHtml(fullName);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Free HVAC Quote Request - 247 HVAC of Long Island</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #061A40; padding: 28px 32px; text-align: left;">
              <div style="color: #00BFFF; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                247 HVAC of Long Island
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; line-height: 1.3;">
                We Have Received Your Free Quote Request!
              </h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; font-size: 15px; line-height: 1.6; color: #334155;">
              <p style="margin-top: 0; margin-bottom: 16px; font-weight: 600; color: #061A40;">
                Dear ${safeName},
              </p>

              <p style="margin-top: 0; margin-bottom: 16px;">
                Thank you for requesting a free quote from <strong>247 HVAC of Long Island</strong>. We have received your HVAC project details and our team is currently preparing your estimate.
              </p>

              <p style="margin-top: 0; margin-bottom: 16px;">
                One of our licensed HVAC specialists will reach out shortly via your preferred contact method to review options and confirm your service appointment.
              </p>

              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px 20px; margin: 20px 0;">
                <div style="font-size: 13px; font-weight: 700; color: #0066CC; margin-bottom: 4px;">
                  Need Immediate Emergency Service?
                </div>
                <div style="font-size: 14px; color: #1e3a8a;">
                  If your heating or air conditioning is completely down, please call our 24/7 emergency dispatch line directly at <a href="tel:5167177515" style="font-weight: 800; color: #D32F2F; text-decoration: underline;">(516) 717-7515</a>.
                </div>
              </div>

              <p style="margin-top: 0; margin-bottom: 0; font-weight: 700; color: #061A40;">
                Best regards,<br/>
                247 HVAC of Long Island Team<br/>
                <a href="https://247hvaclongisland.com" style="color: #0066CC; text-decoration: none;">https://247hvaclongisland.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 12px; color: #64748b;">
              &copy; 247 HVAC of Long Island &bull; 700 Rockaway Turnpike #400 Lawrence, NY 11559 &bull; (516) 717-7515
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

import { ServiceRequestFormData } from '@/lib/validations/service-request';

/**
 * Generates the HTML template for the owner notification email for Service Requests
 */
export function generateOwnerServiceRequestEmail(
  data: ServiceRequestFormData,
  submissionDate: string
): { subject: string; html: string; isEmergency: boolean } {
  const isEmergency =
    data.service === 'Emergency 24/7 No Heat / No AC Service' ||
    data.urgency === 'Emergency – Within 2 Hours';

  const safeFullName = escapeHtml(data.fullName);
  const safePhone = escapeHtml(data.phone);
  const safeEmail = data.email ? escapeHtml(data.email) : 'Not Provided';
  const safeZip = escapeHtml(data.zipCode);
  const safeAddress = escapeHtml(data.serviceAddress);
  const safeService = escapeHtml(data.service);
  const safePropertyType = escapeHtml(data.propertyType);
  const safeInstallType = data.installationType ? escapeHtml(data.installationType) : 'N/A';
  const safeSystemAge = data.systemAge ? escapeHtml(data.systemAge) : 'Brand New Installation';
  const safeWorkingStatus = data.workingStatus ? escapeHtml(data.workingStatus) : 'N/A';
  const safeUrgency = escapeHtml(data.urgency);
  const safePreferredDate = escapeHtml(data.preferredDate);
  const safePreferredTime = escapeHtml(data.preferredTime);
  const safeBrand = data.brand ? escapeHtml(data.brand) : 'Not Specified';
  const safeDescription = data.description ? escapeHtml(data.description).replace(/\n/g, '<br/>') : 'None provided';
  const safeContactMethod = data.preferredContactMethod ? escapeHtml(data.preferredContactMethod) : 'Any';
  const safeMaintenanceType = data.maintenanceType ? escapeHtml(data.maintenanceType) : '';
  const safeOtherDesc = data.otherServiceDescription ? escapeHtml(data.otherServiceDescription).replace(/\n/g, '<br/>') : '';
  const safeDate = escapeHtml(submissionDate);

  const subject = isEmergency
    ? `🚨 HIGH PRIORITY: Emergency Service Request - ${safeFullName} (${safeZip})`
    : `New Service Request: ${safeService} - ${safeFullName} (${safePreferredDate})`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: ${isEmergency ? '#991B1B' : '#0B5345'}; padding: 28px 32px; text-align: left;">
              <div style="color: ${isEmergency ? '#FCA5A5' : '#A2D9CE'}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                247 HVAC of Long Island &bull; Service Request Dispatch
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; line-height: 1.3;">
                ${isEmergency ? '🚨 HIGH PRIORITY: Emergency HVAC Service Request' : 'New HVAC Service Request Received'}
              </h1>
            </td>
          </tr>

          ${
            isEmergency
              ? `
          <!-- Emergency Alert Box -->
          <tr>
            <td style="padding: 18px 32px 0 32px;">
              <div style="background-color: #FEF2F2; border: 2px solid #EF4444; border-radius: 12px; padding: 14px 18px; color: #991B1B;">
                <strong style="font-size: 14px; text-transform: uppercase;">⚠️ HIGH PRIORITY EMERGENCY REQUEST</strong>
                <p style="margin: 4px 0 0 0; font-size: 13px; line-height: 1.5;">
                  Customer requested immediate service (${safeUrgency}). Please call customer right away at <a href="tel:${safePhone}" style="color: #DC2626; font-weight: 800; text-decoration: underline;">${safePhone}</a>.
                </p>
              </div>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Section 1: Contact Information -->
          <tr>
            <td style="padding: 24px 32px 8px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                1. Contact Information
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Full Name:</td>
                  <td width="62%" style="color: #061A40; font-weight: 700;">${safeFullName}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Phone Number:</td>
                  <td><a href="tel:${safePhone}" style="color: #0066CC; font-weight: 700; text-decoration: underline;">${safePhone}</a></td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Email Address:</td>
                  <td>${data.email ? `<a href="mailto:${safeEmail}" style="color: #0066CC; font-weight: 600;">${safeEmail}</a>` : '<span style="color: #94a3b8;">Not Provided</span>'}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">ZIP Code:</td>
                  <td style="color: #061A40; font-weight: 700;">${safeZip}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600; vertical-align: top;">Full Service Address:</td>
                  <td style="color: #061A40; font-weight: 700; line-height: 1.4;">${safeAddress}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 2: HVAC Service Details -->
          <tr>
            <td style="padding: 12px 32px 8px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                2. HVAC Service Details
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Requested Service:</td>
                  <td width="62%" style="color: #0066CC; font-weight: 700;">${safeService}</td>
                </tr>
                ${
                  safeMaintenanceType
                    ? `
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Maintenance Type:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeMaintenanceType}</td>
                </tr>
                `
                    : ''
                }
                ${
                  safeOtherDesc
                    ? `
                <tr>
                  <td style="color: #64748b; font-weight: 600; vertical-align: top;">Other Service Needs:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeOtherDesc}</td>
                </tr>
                `
                    : ''
                }
                ${
                  data.installationType
                    ? `
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Installation Type:</td>
                  <td style="color: #061A40; font-weight: 700;">${safeInstallType}</td>
                </tr>
                `
                    : ''
                }
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Property Type:</td>
                  <td style="color: #061A40; font-weight: 600;">${safePropertyType}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Current System Age:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeSystemAge}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">System Working Status:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeWorkingStatus}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 3: Service Scheduling -->
          <tr>
            <td style="padding: 12px 32px 8px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                3. Service Scheduling Preferences
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Requested Urgency:</td>
                  <td width="62%" style="color: ${isEmergency ? '#DC2626' : '#061A40'}; font-weight: 700;">${safeUrgency}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Preferred Date:</td>
                  <td style="color: #0066CC; font-weight: 700;">${safePreferredDate}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Preferred Time Slot:</td>
                  <td style="color: #061A40; font-weight: 700;">${safePreferredTime}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 4: Additional Information -->
          <tr>
            <td style="padding: 12px 32px 20px 32px;">
              <h3 style="color: #061A40; margin: 0 0 10px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                4. Additional Information
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size: 14px;">
                <tr>
                  <td width="38%" style="color: #64748b; font-weight: 600;">Current System Brand:</td>
                  <td width="62%" style="color: #061A40; font-weight: 600;">${safeBrand}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Preferred Contact Method:</td>
                  <td style="color: #061A40; font-weight: 600;">${safeContactMethod}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600; vertical-align: top;">Issue / Service Needs:</td>
                  <td style="color: #334155; line-height: 1.5;">${safeDescription}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Submission Date & Time:</td>
                  <td style="color: #64748b;">${safeDate}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 12px; color: #64748b;">
              &copy; 247 HVAC of Long Island &bull; Service Request Dispatch &bull; <a href="https://247hvaclongisland.com" style="color: #0066CC;">247hvaclongisland.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return { subject, html, isEmergency };
}

/**
 * Generates the HTML template for customer service request confirmation email
 */
export function generateCustomerServiceRequestConfirmationEmail(
  fullName: string,
  preferredDate: string,
  preferredTime: string
): string {
  const safeName = escapeHtml(fullName);
  const safeDate = escapeHtml(preferredDate);
  const safeTime = escapeHtml(preferredTime);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Request Received - 247 HVAC of Long Island</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #061A40; padding: 28px 32px; text-align: left;">
              <div style="color: #00BFFF; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                247 HVAC of Long Island
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; line-height: 1.3;">
                We Have Received Your Service Request
              </h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; font-size: 15px; line-height: 1.6; color: #334155;">
              <p style="margin-top: 0; margin-bottom: 16px; font-weight: 600; color: #061A40;">
                Dear ${safeName},
              </p>

              <p style="margin-top: 0; margin-bottom: 16px;">
                Thank you for scheduling with <strong>247 HVAC of Long Island</strong>. We have received your service request for your preferred date: <strong>${safeDate}</strong> (${safeTime}).
              </p>

              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px 20px; margin: 20px 0;">
                <div style="font-size: 13px; font-weight: 700; color: #0066CC; margin-bottom: 4px;">
                  Important Appointment Notice
                </div>
                <div style="font-size: 14px; color: #1e3a8a;">
                  Submitting a request does not confirm an appointment. Our dispatch coordinator will contact you shortly to confirm technician arrival window and availability.
                </div>
              </div>

              <p style="margin-top: 0; margin-bottom: 16px;">
                For immediate 24/7 emergency service, please call our dispatch team directly at <a href="tel:5167177515" style="color: #D32F2F; font-weight: 800; text-decoration: underline;">(516) 717-7515</a>.
              </p>

              <p style="margin-top: 0; margin-bottom: 0; font-weight: 700; color: #061A40;">
                Best regards,<br/>
                247 HVAC of Long Island Team<br/>
                <a href="https://247hvaclongisland.com" style="color: #0066CC; text-decoration: none;">https://247hvaclongisland.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 12px; color: #64748b;">
              &copy; 247 HVAC of Long Island &bull; 700 Rockaway Turnpike #400 Lawrence, NY 11559 &bull; (516) 717-7515
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
