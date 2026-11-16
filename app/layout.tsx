import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '247 HVAC of Long Island | Heating • Cooling • Air Conditioners Repair',
  description:
    'Trusted HVAC repair, replacement, and installation in Long Island, NY. Serving Nassau County, Queens, Suffolk County, Brooklyn & Manhattan 24/7. Call (516) 717-7515 for emergency service & free quotes.',
  keywords: [
    'HVAC Long Island',
    'AC repair Long Island',
    'Heating repair Nassau County',
    'Suffolk County HVAC contractors',
    'Emergency HVAC 24/7 Long Island',
    'Furnace replacement Long Island',
    'Boiler installation Long Island',
    'Ductless mini split Long Island',
  ],
  authors: [{ name: '247 HVAC of Long Island' }],
  openGraph: {
    title: '247 HVAC of Long Island | Trusted HVAC Repair & Installation',
    description:
      'Fast, dependable heating and cooling services for residential and commercial properties across Long Island. Call (516) 717-7515.',
    url: 'https://www.247hvaclongisland.com',
    siteName: '247 HVAC of Long Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: '247 HVAC of Long Island',
    image: 'https://www.247hvaclongisland.com/images/hero-hvac.jpg',
    telephone: '+1-516-717-7515',
    email: 'info@247hvaclongisland.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Long Island',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7891',
      longitude: '-73.1350',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
    areaServed: [
      'Nassau County',
      'Suffolk County',
      'Queens',
      'Brooklyn',
      'Manhattan',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${robotoCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-800 font-body">
        {children}
      </body>
    </html>
  );
}
