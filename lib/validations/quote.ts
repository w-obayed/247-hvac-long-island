import { z } from 'zod';

export const QUOTE_SERVICES = [
  'Air Conditioners – Installation & Replacement',
  'AC Repair – Repair & Maintenance',
  'Furnace – Installation, Repair & Replacement',
  'Boiler – Installation, Repair & Replacement',
  'Water Heater – Installation, Repair & Replacement',
  'Mini Splits – Installation, Repair & Replacement',
  'Emergency 24/7 No Heat / No AC Service',
] as const;

export const INSTALLATION_TYPE_OPTIONS = [
  'New Installation',
  'Replacement',
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  'Single Family Home',
  'Multi-Family / Duplex',
  'Condo / Co-Op',
  'Commercial Property',
] as const;

export const SYSTEM_AGE_OPTIONS = [
  'Under 5 Years',
  '5–10 Years',
  '10+ Years',
  'Brand New Installation',
  'Not Sure',
] as const;

export const WORKING_STATUS_OPTIONS = [
  'Yes, working normally',
  'Working, but having problems',
  'Not working at all',
  'Not applicable – New Installation',
] as const;

export const URGENCY_OPTIONS = [
  'Emergency – Within 2 Hours',
  'Urgent – Within 24 Hours',
  'Standard – Next 1–2 Days',
  'Flexible – Schedule at My Convenience',
] as const;

export const BRAND_OPTIONS = [
  'Carrier',
  'Lennox',
  'Trane',
  'Rheem',
  'Goodman',
  'Bryant',
  'York',
  'Mitsubishi',
  'Fujitsu',
  'Other',
  'Not Sure',
] as const;

export const CONTACT_METHOD_OPTIONS = [
  'Phone Call',
  'Text Message',
  'Email',
] as const;

export const PREFERRED_TIME_OPTIONS = [
  'As Soon As Possible',
  'Morning',
  'Afternoon',
  'Evening',
  'Flexible',
] as const;

// Helper to check if a service is an installation / replacement service
export function isInstallationService(service?: string): boolean {
  if (!service) return false;
  return (
    service === 'Air Conditioners – Installation & Replacement' ||
    service === 'Furnace – Installation, Repair & Replacement' ||
    service === 'Boiler – Installation, Repair & Replacement' ||
    service === 'Water Heater – Installation, Repair & Replacement' ||
    service === 'Mini Splits – Installation, Repair & Replacement'
  );
}

// Regex for phone validation (at least 10 digits)
const phoneRegex = /^(\+?[1-9]\d{0,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/;

// Regex for US ZIP Code: 5 digits or ZIP+4 (e.g., 11530 or 11530-1234)
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

export const quoteFormSchema = z
  .object({
    formType: z.literal('quote').optional(),
    // Section 1: Contact Information
    fullName: z
      .string()
      .trim()
      .min(1, { message: 'Full Name is required.' })
      .max(80, { message: 'Full Name cannot exceed 80 characters.' }),
    phone: z
      .string()
      .trim()
      .min(1, { message: 'Phone Number is required.' })
      .max(25, { message: 'Phone number is too long.' })
      .refine(
        (val) => {
          const digitsOnly = val.replace(/\D/g, '');
          return digitsOnly.length >= 10 && digitsOnly.length <= 15 && phoneRegex.test(val);
        },
        { message: 'Please enter a valid phone number (at least 10 digits).' }
      ),
    email: z
      .string()
      .trim()
      .max(100, { message: 'Email address cannot exceed 100 characters.' })
      .optional()
      .refine(
        (val) => {
          if (!val || val.length === 0) return true;
          return z.string().email().safeParse(val).success;
        },
        { message: 'Please enter a valid email address.' }
      ),
    zipCode: z
      .string()
      .trim()
      .min(1, { message: 'ZIP Code is required.' })
      .refine((val) => zipCodeRegex.test(val), {
        message: 'Please enter a valid 5-digit US ZIP code (e.g. 11530 or 11530-1234).',
      }),

    // Section 2: HVAC Service Details
    service: z.enum(QUOTE_SERVICES, {
      message: 'Please select an HVAC service.',
    }),
    installationType: z
      .enum(INSTALLATION_TYPE_OPTIONS, {
        message: 'Please select whether this is a new installation or replacement.',
      })
      .optional(),
    propertyType: z.enum(PROPERTY_TYPE_OPTIONS, {
      message: 'Please select a property type.',
    }),
    systemAge: z
      .enum(SYSTEM_AGE_OPTIONS, {
        message: 'Please select your current HVAC system age.',
      })
      .optional(),

    // Section 3: Service Requirements
    workingStatus: z
      .enum(WORKING_STATUS_OPTIONS, {
        message: 'Please indicate whether your system is currently working.',
      })
      .optional(),
    urgency: z.enum(URGENCY_OPTIONS, {
      message: 'Please select how soon you need service.',
    }),
    brand: z.string().trim().max(50).optional(),
    description: z
      .string()
      .trim()
      .max(2000, { message: 'Description cannot exceed 2000 characters.' })
      .optional(),

    // Section 4: Additional Information
    preferredContactMethod: z.enum(CONTACT_METHOD_OPTIONS).optional(),
    preferredServiceTime: z.enum(PREFERRED_TIME_OPTIONS).optional(),

    // Bot honeypot protection
    honeypot: z.string().max(100).optional(),
  })
  .superRefine((data, ctx) => {
    const isInstall = isInstallationService(data.service);

    // If an installation/replacement service is selected, installationType is required
    if (isInstall && !data.installationType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['installationType'],
        message: 'Please select whether this is a new installation or a replacement.',
      });
    }

    // Determine if this is a brand new installation
    const isBrandNew =
      data.installationType === 'New Installation' ||
      data.systemAge === 'Brand New Installation';

    // If not a brand-new installation, systemAge is required
    if (!isBrandNew) {
      if (!data.systemAge) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['systemAge'],
          message: 'Please select your current HVAC system age.',
        });
      }

      // Working status is required for existing systems
      if (!data.workingStatus) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['workingStatus'],
          message: 'Please indicate if your system is currently working.',
        });
      }
    }
  });

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
