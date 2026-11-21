import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baldwin HVAC Services | Heating & AC Repair in Baldwin, NY',
  description:
    'We are the top HVAC contractors in Baldwin and provide our 24/7 emergency service. Outstanding fast and reliable heating, air conditioning, and boiler repairs in Baldwin, NY.',
  openGraph: {
    title: 'Baldwin HVAC Services | 247 HVAC of Long Island',
    description:
      'We are the top HVAC contractors in Baldwin and provide our 24/7 emergency service. Outstanding fast and reliable heating and cooling in Baldwin, NY.',
    url: 'https://www.247hvaclongisland.com/service-areas/baldwin',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BaldwinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
