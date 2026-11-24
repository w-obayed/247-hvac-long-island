import { z } from 'zod';

export const SERVICE_REQUEST_OPTIONS = [
  'Air Conditioner Repair',
  'Air Conditioner Installation',
  'Air Conditioner Replacement',
  'Furnace Repair',
  'Furnace Installation',
  'Furnace Replacement',
  'Boiler Repair',
  'Boiler Installation',
  'Boiler Replacement',
  'Water Heater Repair',
  'Water Heater Installation',
  'Water Heater Replacement',
  'Mini Split Repair',
  'Mini Split Installation',
  'Mini Split Replacement',
  'HVAC Maintenance / Tune-Up',
  'Emergency 24/7 No Heat / No AC Service',
  'Other',
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

export const TIME_WINDOW_OPTIONS = [
  'Morning (8 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 7 PM)',
  'Flexible',
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

export const INSTALLATION_TYPE_OPTIONS = [
  'New Installation',
  'Replacement',
] as const;

export const MAINTENANCE_TYPE_OPTIONS = [
  'Annual Heating Precision Tune-Up',
  'Spring AC Precision Tune-Up',
  'Complete Seasonal HVAC Inspection & Safety Check',
  'Comprehensive System Maintenance (Heating & Cooling)',
  'General Maintenance & Filter Check',
] as const;

// Helpers to identify service categories
export function isInstallationService(service?: string): boolean {
  if (!service) return false;
  return (
    service === 'Air Conditioner Installation' ||
    service === 'Furnace Installation' ||
    service === 'Boiler Installation' ||
    service === 'Water Heater Installation' ||
    service === 'Mini Split Installation'
  );
}

export function isReplacementService(service?: string): boolean {
  if (!service) return false;
  return (
    service === 'Air Conditioner Replacement' ||
    service === 'Furnace Replacement' ||
    service === 'Boiler Replacement' ||
    service === 'Water Heater Replacement' ||
    service === 'Mini Split Replacement'
  );
}

export function isRepairService(service?: string): boolean {
  if (!service) return false;
  return (
    service === 'Air Conditioner Repair' ||
    service === 'Furnace Repair' ||
    service === 'Boiler Repair' ||
    service === 'Water Heater Repair' ||
    service === 'Mini Split Repair'
  );
}

// Regex for phone validation (at least 10 digits)
const phoneRegex = /^(\+?[1-9]\d{0,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/;

// Regex for US ZIP Code: 5 digits or ZIP+4 (e.g., 11530 or 11530-1234)
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

export const serviceRequestSchema = z
  .object({
    formType: z.literal('service-request').optional(),

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
    serviceAddress: z
      .string()
      .trim()
      .min(5, { message: 'Full Service Address is required (street address, city, and state).' })
      .max(150, { message: 'Address cannot exceed 150 characters.' }),

    // Section 2: HVAC Service Details
    service: z.enum(SERVICE_REQUEST_OPTIONS, {
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
    workingStatus: z
      .enum(WORKING_STATUS_OPTIONS, {
        message: 'Please indicate whether your system is currently working.',
      })
      .optional(),

    // Section 3: Service Scheduling
    urgency: z.enum(URGENCY_OPTIONS, {
      message: 'Please select how soon you need service.',
    }),
    preferredDate: z
      .string()
      .trim()
      .min(1, { message: 'Preferred service date is required.' })
      .refine(
        (val) => {
          if (!val) return false;
          const selected = new Date(val + 'T00:00:00');
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return !isNaN(selected.getTime()) && selected >= today;
        },
        { message: 'Preferred service date cannot be in the past.' }
      ),
    preferredTime: z.enum(TIME_WINDOW_OPTIONS, {
      message: 'Please select what time works best for you.',
    }),

    // Section 4: Additional Information
    brand: z.string().trim().max(50).optional(),
    description: z
      .string()
      .trim()
      .max(2000, { message: 'Description cannot exceed 2000 characters.' })
      .optional(),
    preferredContactMethod: z.enum(CONTACT_METHOD_OPTIONS).optional(),

    // Specific Conditionals
    maintenanceType: z.string().trim().max(100).optional(),
    otherServiceDescription: z.string().trim().max(500).optional(),

    // Bot honeypot protection
    honeypot: z.string().max(100).optional(),
  })
  .superRefine((data, ctx) => {
    const isInstall = isInstallationService(data.service);

    // 1. Installation services require installationType
    if (isInstall && !data.installationType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['installationType'],
        message: 'Please select whether this is a new installation or a replacement.',
      });
    }

    // 2. Check if this is a brand new installation
    const isBrandNew =
      data.installationType === 'New Installation' ||
      data.systemAge === 'Brand New Installation';

    // 3. If NOT brand new, require systemAge and workingStatus
    if (!isBrandNew) {
      if (!data.systemAge) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['systemAge'],
          message: 'Please select your current HVAC system age.',
        });
      }

      if (!data.workingStatus) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['workingStatus'],
          message: 'Please indicate whether your system is currently working.',
        });
      }
    }

    // 4. If service is 'Other', description is required
    if (data.service === 'Other') {
      const otherDesc = data.otherServiceDescription || data.description;
      if (!otherDesc || otherDesc.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['otherServiceDescription'],
          message: 'Please describe the service you need so our team can assist you.',
        });
      }
    }
  });

export type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;
