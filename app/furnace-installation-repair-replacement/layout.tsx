import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furnace Installation, Repair & Replacement | 247 HVAC of Long Island',
  description:
    'We provide the best in furnace expertise in Long Island. With fast furnace repair services, new furnace installations, and maintenance services. 24/7 emergency support.',
  openGraph: {
    title: 'Furnace Installation, Repair & Replacement | 247 HVAC of Long Island',
    description:
      'We provide the best in furnace expertise in Long Island. With fast furnace repair services, new furnace installations, and maintenance services.',
    url: 'https://www.247hvaclongisland.com/furnace-installation-repair-replacement',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function FurnaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
