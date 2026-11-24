import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Suffolk County, NY HVAC Services | 24/7 Heating & Cooling Repair | 247 HVAC',
  description: 'Top-rated 24/7 emergency HVAC services in Suffolk County, NY. Licensed heating and cooling repair, AC installations, boiler service, and furnace repair across Suffolk County townships and villages. Call (516) 717-7515.',
  openGraph: {
    title: 'Suffolk County, NY HVAC Services | 247 HVAC of Long Island',
    description: 'Expert 24/7 heating and cooling repair in Suffolk County, NY. Fast dispatch, licensed technicians, and upfront quotes.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
