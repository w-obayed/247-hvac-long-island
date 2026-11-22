import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Cooling Services | 247 HVAC of Long Island',
  description:
    'Looking for the best way to stay cool through the summer? Expert air conditioner repair, installation, and ductless mini-split solutions across Long Island, NY. 24/7 emergency service.',
  openGraph: {
    title: 'HVAC Cooling Services | 247 HVAC of Long Island',
    description:
      'High-efficiency central AC, mini-split heat pumps, and 24/7 emergency air conditioning repair across Nassau, Queens, and Suffolk counties.',
    url: 'https://www.247hvaclongisland.com/cooling-services',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CoolingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
