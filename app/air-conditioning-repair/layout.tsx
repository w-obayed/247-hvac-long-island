import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Conditioning Repair Long Island, NY | 247 HVAC of Long Island',
  description:
    'Fast and dependable air conditioning repair in Long Island, NY for homes and businesses. 24/7 emergency service, same-day repairs for all AC systems and brands.',
  openGraph: {
    title: 'Air Conditioning Repair Long Island, NY | 247 HVAC of Long Island',
    description:
      'Fast and dependable air conditioning repair in Long Island, NY for homes and businesses. 24/7 emergency repairs and same-day service.',
    url: 'https://www.247hvaclongisland.com/air-conditioning-repair',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AcRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
