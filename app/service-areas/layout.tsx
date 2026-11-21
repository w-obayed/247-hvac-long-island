import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Service Areas Across Long Island and Surrounding Areas | 247 HVAC',
  description:
    'Explore 247 HVAC of Long Island service areas across Nassau County, Queens, and Suffolk County, NY. Fast 24/7 radio-dispatched emergency heating and air conditioning services.',
  openGraph: {
    title: 'HVAC Service Areas Across Long Island and Surrounding Areas',
    description:
      'Professional heating, cooling, and air conditioning services across Nassau County, Queens, and Suffolk County, NY. 24/7 emergency repair and installations.',
    url: 'https://www.247hvaclongisland.com/service-areas',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
