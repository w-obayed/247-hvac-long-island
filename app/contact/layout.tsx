import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | 247 HVAC of Long Island',
  description:
    'Contact 247 HVAC of Long Island for 24/7 emergency heating and cooling services. Call (516) 717-7515 or submit a request online.',
  openGraph: {
    title: 'Contact Us | 247 HVAC of Long Island',
    description:
      'Contact our Long Island HVAC dispatch team for 24/7 heating and AC repair, replacement, and free quotes.',
    url: 'https://www.247hvaclongisland.com/contact',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
