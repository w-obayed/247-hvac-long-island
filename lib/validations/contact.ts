import { z } from 'zod';

export const SERVICE_OPTIONS = [
  'Cooling Services',
  'Heating Services',
  'Air Conditioners Installation & Replacement',
  'Air Conditioners Repairs & Maintenance',
  'Air Duct and Ventilation Cleaning Service',
  'Mini Splits – Ductless Heat Pumps and Air Conditioners',
  'Furnace Installation, Repair & Replacement',
  'Boiler Installation & Repair',
  'Water Heater Installation, Repair & Replacement',
  'Chimney Sweep',
  'Commercial',
] as const;

// Phone number regex supporting US standard and valid international formats
const phoneRegex = /^(\+?[1-9]\d{0,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/;

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First Name is required.' })
    .max(60, { message: 'First Name cannot exceed 60 characters.' }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last Name is required.' })
    .max(60, { message: 'Last Name cannot exceed 60 characters.' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Phone number is required.' })
    .max(25, { message: 'Phone number is too long.' })
    .refine((val) => {
      const digitsOnly = val.replace(/\D/g, '');
      return digitsOnly.length >= 10 && digitsOnly.length <= 15 && phoneRegex.test(val);
    }, {
      message: 'Please enter a valid phone number (at least 10 digits).',
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required.' })
    .max(100, { message: 'Email address cannot exceed 100 characters.' })
    .email({ message: 'Please enter a valid email address.' }),
  serviceRequired: z
    .enum(SERVICE_OPTIONS, {
      message: 'Please select a valid service option.',
    }),
  message: z
    .string()
    .trim()
    .min(5, { message: 'Message must be at least 5 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
  // Honeypot field for bot spam protection
  honeypot: z.string().max(100).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
