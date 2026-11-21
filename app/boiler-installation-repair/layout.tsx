import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boiler Installation & Repair | 247 HVAC of Long Island',
  description:
    'Our experienced HVAC technicians have been installing, repairing, and servicing boilers in homes across Long Island for over 40 years. Call (516) 717-7515 for 24/7 emergency service.',
  openGraph: {
    title: 'Boiler Installation & Repair | 247 HVAC of Long Island',
    description:
      'Our experienced HVAC technicians have been installing, repairing, and servicing boilers in homes across Long Island for over 40 years. Call (516) 717-7515.',
    url: 'https://www.247hvaclongisland.com/boiler-installation-repair',
    siteName: '247 HVAC of Long Island',
    images: [
      {
        url: '/image-website/boiller-installation-repair-e1661179456943.jpg',
        width: 1200,
        height: 630,
        alt: 'Boiler Installation & Repair in Long Island NY',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BoilerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
