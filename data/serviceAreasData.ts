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
  { name: 'Cedarhurst' },
  { name: 'East Meadow' },
  { name: 'East Rockaway' },
  { name: 'Elmont' },
  { name: 'Farmingdale' },
  { name: 'Floral Park' },
  { name: 'Franklin Square' },
  { name: 'Freeport' },
  { name: 'Garden City' },
  { name: 'Hempstead' },
  { name: 'Hewlett' },
  { name: 'Woodmere' },
  { name: 'Hewlett Harbor' },
  { name: 'Inwood' },
  { name: 'Lawrence' },
  { name: 'Long Beach' },
  { name: 'Lynbrook' },
  { name: 'Malverne' },
  { name: 'North New Hyde Park' },
  { name: 'North Woodmere' },
  { name: 'Oceanside' },
  { name: 'Rockville Centre' },
  { name: 'Valley Stream' },
  { name: 'Wantagh' },
  { name: 'Bronx, NY' },
  { name: 'West Hempstead' },
];

export const QUEENS_LOCATIONS: LocationItem[] = [
  { name: 'Arverne' },
  { name: 'Cambria Heights' },
  { name: 'Far Rockaway' },
  { name: 'Howard Beach' },
  { name: 'Laurelton' },
  { name: 'Ozone Park' },
  { name: 'Rosedale' },
  { name: 'Springfield Gardens' },
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
    shortName: 'Suffolk County, NY',
    dispatchTime: '35-50 Min Dispatch',
    description:
      'Comprehensive 24/7 HVAC services, hydronic boiler and furnace repairs, oil-to-gas conversions, and seasonal system tune-ups throughout Suffolk County, NY.',
    locations: [],
  },
];
