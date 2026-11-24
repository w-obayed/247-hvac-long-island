import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | 247 HVAC of Long Island Contractor',
  description:
    'Learn about 247 HVAC of Long Island. Family owned with over 30 years of experience providing reliable heating and air conditioning repair and installation.',
  openGraph: {
    title: 'About Us | 247 HVAC of Long Island Contractor',
    description:
      'Family owned, obsessed with quality at every level, and over 30 years of experience servicing Long Island with reliable heating and cooling.',
    url: 'https://www.247hvaclongisland.com/about-us',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
