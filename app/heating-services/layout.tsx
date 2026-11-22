import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trusted HVAC Heating Services in Long Island, NY | 247 HVAC of Long Island',
  description:
    'Dependable heating services in Long Island, NY, designed to keep your home or business warm when it matters most. 24/7 heating repair, professional installation, furnace, boiler & water heater solutions.',
  openGraph: {
    title: 'Trusted HVAC Heating Services in Long Island, NY | 247 HVAC of Long Island',
    description:
      'Dependable heating repair and installation services across Nassau, Queens, and Suffolk counties. 24/7 emergency heating response.',
    url: 'https://www.247hvaclongisland.com/heating-services',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HeatingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
