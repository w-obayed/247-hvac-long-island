import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | 247 HVAC of Long Island',
  description:
    'Review the Terms of Service for 247 HVAC of Long Island. Information on service requests, estimates, appointments, and website use.',
  openGraph: {
    title: 'Terms of Service | 247 HVAC of Long Island',
    description:
      'Terms of Service governing use of the 247 HVAC of Long Island website and service requests.',
    url: 'https://www.247hvaclongisland.com/terms-of-service',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
