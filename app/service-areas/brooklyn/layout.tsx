import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brooklyn HVAC Repair, Installation & 24/7 Service | 247 HVAC',
  description:
    'Trusted 24/7 residential and commercial HVAC repair, AC installation, furnace, boiler, and mini-split services across Central, Eastern, Northern, Northwestern, South, Southern, and Southwestern Brooklyn.',
};

export default function BrooklynLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
