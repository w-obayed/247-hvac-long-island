import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | 247 HVAC of Long Island',
  description:
    'Read the Privacy Policy for 247 HVAC of Long Island. Learn how we handle comments, media, cookies, and data retention.',
  openGraph: {
    title: 'Privacy Policy | 247 HVAC of Long Island',
    description:
      'Learn about 247 HVAC of Long Island data and privacy policies for visitors and customers.',
    url: 'https://www.247hvaclongisland.com/privacy-policy',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
