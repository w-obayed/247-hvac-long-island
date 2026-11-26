import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manhattan HVAC Repair, Installation & 24/7 Service | 247 HVAC',
  description:
    'Trusted 24/7 residential and commercial HVAC repair, AC installation, furnace, boiler, and mini-split services across Uptown, Midtown, and Downtown Manhattan.',
};

export default function ManhattanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
