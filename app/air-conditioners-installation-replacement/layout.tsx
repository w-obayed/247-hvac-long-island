import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Conditioners Installation & Replacement | 247 HVAC of Long Island',
  description:
    'Top-tier central air conditioner and ductless cooling installation & replacement across Long Island, NY. High-efficiency SEER2 systems, expert sizing, and 24/7 emergency service.',
  openGraph: {
    title: 'Air Conditioners Installation & Replacement | 247 HVAC of Long Island',
    description:
      'High-efficiency central AC installations and replacements across Nassau, Queens, and Suffolk counties. Upfront pricing and manufacturer warranties.',
    url: 'https://www.247hvaclongisland.com/air-conditioners-installation-replacement',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AcInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
