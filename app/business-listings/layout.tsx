import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find 24/7 HVAC Local of Long Island Online | Business Listings',
  description:
    'Find 24/7 HVAC Local of Long Island across business directories and online platforms. Explore our business profiles and connect with us through these platforms.',
};

export default function BusinessListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
