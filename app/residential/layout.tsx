import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential HVAC | The HVAC Experts in Residential Installation and Repair',
  description:
    'Top-rated residential heating, cooling, heat pumps, boilers, and air conditioner repair in Long Island, NY. Professional & reliable technicians, 24 hours emergency service.',
  openGraph: {
    title: 'Residential HVAC | 247 HVAC of Long Island',
    description:
      'The HVAC Experts in Residential Installation and Repair across Long Island. 24/7 emergency service, free quotes, and multi-brand certified technicians.',
    url: 'https://www.247hvaclongisland.com/residential',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
