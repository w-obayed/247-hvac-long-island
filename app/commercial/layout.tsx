import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial HVAC | The HVAC Experts in Commercial & Industrial Installation and Repair',
  description:
    'Commercial and industrial heating, cooling, RTU, VRF/VRV, boiler, and air-cooled condenser installation and repair across Long Island, NY. 24/7 emergency dispatch.',
  openGraph: {
    title: 'Commercial HVAC | 247 HVAC of Long Island',
    description:
      'The HVAC Experts in Commercial & Industrial Installation and Repair across Long Island. 24/7 emergency service, free quotes, and multi-brand certified technicians.',
    url: 'https://www.247hvaclongisland.com/commercial',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
