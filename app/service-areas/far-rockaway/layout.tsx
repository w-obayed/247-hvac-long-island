import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Far Rockaway HVAC Services | 24/7 Heating & Cooling Repair | 247 HVAC',
  description: 'Top-rated 24/7 emergency HVAC repair, AC installation, furnace service, and boiler repair in Far Rockaway, Queens NY. Call (516) 717-7515 for fast local dispatch.',
  openGraph: {
    title: 'Far Rockaway HVAC Services | 247 HVAC of Long Island',
    description: 'Expert 24/7 heating and cooling repair in Far Rockaway, Queens. Fast dispatch, licensed technicians, and upfront quotes.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
