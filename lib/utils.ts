/**
 * Class name joining utility
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format phone number display
 */
export const PHONE_NUMBER = '(516) 717-7515';
export const PHONE_TEL = 'tel:5167177515';
export const PHONE_SMS = 'sms:5167177515?body=Hello%20247%20HVAC%2C%20I%20need%20service%20for%3A%20';
export const BUSINESS_EMAIL = 'info@247hvaclongisland.com';
export const BUSINESS_NAME = '247 HVAC of Long Island';
export const BUSINESS_TAGLINE = 'Heating • Cooling • Air Conditioners';
export const BUSINESS_LOCATION = 'Long Island, New York';
