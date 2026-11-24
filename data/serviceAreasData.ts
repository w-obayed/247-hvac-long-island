export interface LocationItem {
  name: string;
  slug?: string;
  href?: string;
  isAvailable?: boolean;
}

export interface CountyServiceArea {
  id: string;
  name: string;
  shortName: string;
  dispatchTime: string;
  description: string;
  locations: LocationItem[];
}

export const NASSAU_COUNTY_LOCATIONS: LocationItem[] = [
  { name: 'Baldwin', slug: 'baldwin', href: '/service-areas/baldwin', isAvailable: true },
  { name: 'Cedarhurst', slug: 'cedarhurst', href: '/service-areas/cedarhurst', isAvailable: true },
  { name: 'East Meadow', slug: 'east-meadow', href: '/service-areas/east-meadow', isAvailable: true },
  { name: 'East Rockaway', slug: 'east-rockaway', href: '/service-areas/east-rockaway', isAvailable: true },
  { name: 'Elmont', slug: 'elmont', href: '/service-areas/elmont', isAvailable: true },
  { name: 'Farmingdale', slug: 'farmingdale', href: '/service-areas/farmingdale', isAvailable: true },
  { name: 'Floral Park', slug: 'floral-park', href: '/service-areas/floral-park', isAvailable: true },
  { name: 'Franklin Square', slug: 'franklin-square', href: '/service-areas/franklin-square', isAvailable: true },
  { name: 'Freeport', slug: 'freeport', href: '/service-areas/freeport', isAvailable: true },
  { name: 'Garden City', slug: 'garden-city', href: '/service-areas/garden-city', isAvailable: true },
  { name: 'Hempstead', slug: 'hempstead', href: '/service-areas/hempstead', isAvailable: true },
  { name: 'Hewlett', slug: 'hewlett', href: '/service-areas/hewlett', isAvailable: true },
  { name: 'Hewlett Harbor', slug: 'hewlett-harbor', href: '/service-areas/hewlett-harbor', isAvailable: true },
  { name: 'Inwood', slug: 'inwood', href: '/service-areas/inwood', isAvailable: true },
  { name: 'Lawrence', slug: 'lawrence', href: '/service-areas/lawrence', isAvailable: true },
  { name: 'Long Beach', slug: 'long-beach', href: '/service-areas/long-beach', isAvailable: true },
  { name: 'Lynbrook', slug: 'lynbrook', href: '/service-areas/lynbrook', isAvailable: true },
  { name: 'Malverne', slug: 'malverne', href: '/service-areas/malverne', isAvailable: true },
  { name: 'North New Hyde Park', slug: 'north-new-hyde-park', href: '/service-areas/north-new-hyde-park', isAvailable: true },
  { name: 'North Woodmere', slug: 'north-woodmere', href: '/service-areas/north-woodmere', isAvailable: true },
  { name: 'Oceanside', slug: 'oceanside', href: '/service-areas/oceanside', isAvailable: true },
  { name: 'Rockville Centre', slug: 'rockville-centre', href: '/service-areas/rockville-centre', isAvailable: true },
  { name: 'Valley Stream', slug: 'valley-stream', href: '/service-areas/valley-stream', isAvailable: true },
  { name: 'Wantagh', slug: 'wantagh', href: '/service-areas/wantagh', isAvailable: true },
  { name: 'West Hempstead', slug: 'west-hempstead', href: '/service-areas/west-hempstead', isAvailable: true },
  { name: 'Woodmere', slug: 'woodmere', href: '/service-areas/woodmere', isAvailable: true },
];

export const QUEENS_LOCATIONS: LocationItem[] = [
  { name: 'Arverne', slug: 'arverne', href: '/service-areas/arverne', isAvailable: true },
  { name: 'Cambria Heights', slug: 'cambria-heights', href: '/service-areas/cambria-heights', isAvailable: true },
  { name: 'Far Rockaway', slug: 'far-rockaway', href: '/service-areas/far-rockaway', isAvailable: true },
  { name: 'Howard Beach', slug: 'howard-beach', href: '/service-areas/howard-beach', isAvailable: true },
  { name: 'Laurelton', slug: 'laurelton', href: '/service-areas/laurelton', isAvailable: true },
  { name: 'Ozone Park', slug: 'ozone-park', href: '/service-areas/ozone-park', isAvailable: true },
  { name: 'Rosedale', slug: 'rosedale', href: '/service-areas/rosedale', isAvailable: true },
  { name: 'Springfield Gardens', slug: 'springfield-gardens', href: '/service-areas/springfield-gardens', isAvailable: true },
];

export const SUFFOLK_LOCATIONS: LocationItem[] = [
  { name: 'Babylon' },
  { name: 'Brookhaven' },
  { name: 'East Hampton' },
  { name: 'Huntington' },
  { name: 'Islip' },
  { name: 'Riverhead' },
  { name: 'Shelter Island' },
  { name: 'Smithtown' },
  { name: 'Southampton' },
  { name: 'Southold' },
];

export const BRONX_LOCATIONS: LocationItem[] = [
  { name: 'Bronx', slug: 'bronx', href: '/service-areas/bronx', isAvailable: true },
];

export const SERVICE_AREAS_CATEGORIES: CountyServiceArea[] = [
  {
    id: 'nassau',
    name: 'Nassau County',
    shortName: 'Nassau',
    dispatchTime: '30-45 Min Dispatch',
    description:
      'Full-service residential and commercial HVAC diagnostics, 24/7 heating and air conditioning repair, high-efficiency boiler installations, and emergency service across Nassau County.',
    locations: NASSAU_COUNTY_LOCATIONS,
  },
  {
    id: 'queens',
    name: 'Queens',
    shortName: 'Queens',
    dispatchTime: '30-45 Min Dispatch',
    description:
      'Fast, reliable emergency heating repairs, multi-zone ductless mini-split setups, central AC troubleshooting, and commercial rooftop HVAC solutions across Queens communities.',
    locations: QUEENS_LOCATIONS,
  },
  {
    id: 'suffolk',
    name: 'Suffolk County, NY',
    shortName: 'Suffolk',
    dispatchTime: '35-50 Min Dispatch',
    description:
      'Comprehensive 24/7 HVAC services, hydronic boiler and furnace repairs, oil-to-gas conversions, and seasonal system tune-ups throughout Suffolk County.',
    locations: SUFFOLK_LOCATIONS,
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    shortName: 'Brooklyn',
    dispatchTime: '35-50 Min Dispatch',
    description:
      'Full-service heating, ductless mini-split heat pumps, and air conditioning solutions for Brooklyn brownstones, multi-family residences, and commercial spaces.',
    locations: [],
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    shortName: 'Manhattan',
    dispatchTime: '45-60 Min Dispatch',
    description:
      'Licensed HVAC technicians providing expert heating, cooling, and water heater services for high-rise, brownstone, and residential properties across Manhattan.',
    locations: [],
  },
  {
    id: 'bronx',
    name: 'Bronx',
    shortName: 'Bronx',
    dispatchTime: '30-45 Min Dispatch',
    description:
      'Expert HVAC repair, central AC installation, commercial rooftop heating and cooling maintenance, and 24/7 emergency services across the Bronx, NY.',
    locations: BRONX_LOCATIONS,
  },
];
