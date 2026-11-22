import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Heater Installation, Repair & Replacement | 247 HVAC of Long Island',
  description:
    'We install and repair all brands of water heaters in Long Island. 24/7 emergency hot water tank repair, replacement, and maintenance services.',
  openGraph: {
    title: 'Water Heater Installation, Repair & Replacement | 247 HVAC of Long Island',
    description:
      'We install and repair all brands of water heaters in Long Island. 24/7 emergency service available.',
    url: 'https://www.247hvaclongisland.com/water-heater-installation-repair-replacement',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function WaterHeaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
