import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners | 247 HVAC of Long Island',
  description:
    'Enjoy cost-effective home comfort all year round with ductless mini-split heat pumps and air conditioning installation, repair, and replacement across Long Island, NY.',
  openGraph: {
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners | 247 HVAC of Long Island',
    description:
      'High-efficiency ductless heat pumps and multi-zone mini split installations and repairs across Nassau, Queens, and Suffolk counties.',
    url: 'https://www.247hvaclongisland.com/mini-splits-ductless-heat-pumps-air-conditioners',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function MiniSplitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
