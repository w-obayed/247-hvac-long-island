'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Calendar,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  Flame,
  Snowflake,
  Droplets,
  Wrench,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';

import QuoteModal from '@/components/Modals/QuoteModal';
import BookingModal from '@/components/Modals/BookingModal';
import CouponModal from '@/components/Modals/CouponModal';
import FinancingModal from '@/components/Modals/FinancingModal';
import MaintenanceModal from '@/components/Modals/MaintenanceModal';
import ServiceDetailModal from '@/components/Modals/ServiceDetailModal';
import ServiceAreaModal from '@/components/Modals/ServiceAreaModal';

import { HVAC_SERVICES, ServiceItem } from '@/components/ServicesSection';
import { SERVICE_AREAS, ServiceAreaItem } from '@/components/ServiceAreasSection';
import { NassauSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

interface TownCoverageItem {
  name: string;
  href?: string;
}

// All 37 locations specified for Nassau County About Section
const NASSAU_COUNTY_TOWNS: TownCoverageItem[] = [
  { name: 'Baldwin', href: '/service-areas/baldwin' },
  { name: 'Cedarhurst', href: '/service-areas/cedarhurst' },
  { name: 'East Meadow', href: '/service-areas/east-meadow' },
  { name: 'East Rockaway', href: '/service-areas/east-rockaway' },
  { name: 'Elmont', href: '/service-areas/elmont' },
  { name: 'Farmingdale', href: '/service-areas/farmingdale' },
  { name: 'Floral Park', href: '/service-areas/floral-park' },
  { name: 'Franklin Square', href: '/service-areas/franklin-square' },
  { name: 'Freeport', href: '/service-areas/freeport' },
  { name: 'Garden City', href: '/service-areas/garden-city' },
  { name: 'Hempstead', href: '/service-areas/hempstead' },
  { name: 'Hewlett', href: '/service-areas/hewlett' },
  { name: 'Hewlett Harbor', href: '/service-areas/hewlett-harbor' },
  { name: 'Inwood', href: '/service-areas/inwood' },
  { name: 'Long Beach', href: '/service-areas/long-beach' },
  { name: 'Woodmere', href: '/service-areas/woodmere' },
  { name: 'North New Hyde Park', href: '/service-areas/north-new-hyde-park' },
  { name: 'North Woodmere', href: '/service-areas/north-woodmere' },
  { name: 'Rockville Centre', href: '/service-areas/rockville-centre' },
  { name: 'Valley Stream', href: '/service-areas/valley-stream' },
  { name: 'Wantagh', href: '/service-areas/wantagh' },
  { name: 'West Hempstead', href: '/service-areas/west-hempstead' },
  { name: 'Kissena Park' },
  { name: 'Whitestone' },
  { name: 'College Point' },
  { name: 'Glen Oaks' },
  { name: 'Jamaica Hills' },
  { name: 'Cambria Heights' },
  { name: 'Westbury' },
  { name: 'Jericho' },
  { name: 'Mineola' },
  { name: 'Merrick' },
  { name: 'Bellmore' },
  { name: 'Massapequa' },
  { name: 'Seaford' },
  { name: 'Roosevelt' },
  { name: 'Union Dale' },
];

const NASSAU_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'Air Conditioners Installation & Replacement',
    category: 'cooling',
    image: '/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repairs & Maintenance',
    category: 'cooling',
    image: '/247 havc/heat-pump-repair/0534fe6f-9e80-4a28-b54a-52e0613d1633.jpg',
    icon: Wrench,
    href: '/air-conditioning-repair',
  },
  {
    id: 'air-duct',
    title: 'Air Duct and Ventilation Cleaning Service',
    category: 'cooling',
    image: '/247 havc/ac-installation/985ad274-26be-4bb1-82d3-8973d451568c.jpg',
    icon: Layers,
    href: '/air-duct-and-ventilation-cleaning-service',
  },
  {
    id: 'mini-split',
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners',
    category: 'cooling',
    image: '/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg',
    icon: Snowflake,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
  },
];

const NASSAU_HEATING_SERVICES: LocationServiceCard[] = [
  {
    id: 'furnace',
    title: 'Furnace Installation, Repair & Replacement',
    category: 'heating',
    image: '/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg',
    icon: Flame,
    href: '/furnace-installation-repair-replacement',
  },
  {
    id: 'boiler',
    title: 'Boiler Installation & Repair',
    category: 'heating',
    image: '/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg',
    icon: Droplets,
    href: '/boiler-installation-repair',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation, Repair & Replacement',
    category: 'heating',
    image: '/247 havc/boiler-water-heater/278da669-a5fc-4950-8e6f-8bd0a60a9768.jpg',
    icon: Droplets,
    href: '/water-heater-installation-repair-replacement',
  },
  {
    id: 'chimney',
    title: 'Chimney Sweep',
    category: 'heating',
    image: '/247 havc/heating-and-controls/d1b426fa-9ec5-45af-9feb-ba543d98c780.jpg',
    icon: Flame,
    href: '/chimney-sweep',
  },
];

const NASSAU_TESTIMONIALS = [
  {
    id: '1',
    quote:
      "247 HVAC OF LONG ISLAND is a fantastic company. We've been using them for about four years. Over that time they've installed a swamp cooler for us, handled seasonal changeovers... read more",
    author: 'Jonny Bricklane-Market',
    location: 'Nassau County, NY',
  },
  {
    id: '2',
    quote:
      'Technician was very pleasant and explained the process. He made sure that AC unit was working before he left. And said to be sure to call if there were any... read more',
    author: 'Victor Barrette',
    location: 'Nassau County, NY',
  },
  {
    id: '3',
    quote:
      'Furnace had stop working and with the recent temperature drop called David. He came on the same day and was able to fix the issue quickly. Professional, clean and very...',
    author: 'Layne Rosario',
    location: 'Nassau County, NY',
  },
];

export default function NassauCountyServiceAreaPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);

  const handleSelectServiceByName = (name: string) => {
    const found = HVAC_SERVICES.find(
      (s) => s.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(s.id)
    );
    setSelectedService(found || HVAC_SERVICES[0]);
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    setSelectedArea(found || SERVICE_AREAS[0]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <ManufacturerStrip />
      <MainHeader
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <Navbar
        onSelectService={handleSelectServiceByName}
        onOpenCoupon={() => setIsCouponOpen(true)}
        onOpenFinancing={() => setIsFinancingOpen(true)}
        onOpenMaintenance={() => setIsMaintenanceOpen(true)}
        onOpenArea={handleSelectAreaByName}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotos={() => setIsQuoteOpen(true)}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-slate-200 py-3 text-xs sm:text-sm font-medium text-slate-500 font-heading"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-royal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/service-areas" className="hover:text-royal transition-colors">
            Service Areas
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-semibold">Nassau County</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <section id="banner" className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Background Hero Image - Same layout and opacity blending as homepage banner */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/247 havc/heat-pump-repair/23788f14-5d4f-4c4f-852b-2023d1705c81.jpg"
            alt="Nassau County HVAC Heating and Cooling Service"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          {/* Soft edge blend for smooth transition into brand navy background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        {/* Background Subtle Gradient & Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Bullets, CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl sm:rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="leading-snug">#1 HVAC Emergency Services in Long Island</span>
              </div>

              {/* Exact Location Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Nassau County
              </h1>

              {/* Exact 3 Bullet Points */}
              <div className="space-y-2.5 sm:space-y-3 w-full max-w-xl mb-6 sm:mb-8 font-heading">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    Our Professional &amp; Reliable Technicians Service This Area
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    24 Hours Emergency Service Available
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    #1 HVAC Services in Nassau County
                  </span>
                </div>
              </div>

              {/* CTA Buttons — Exact Homepage Banner Button Styles & Functionality */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
                {/* 1. Call Us Now */}
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>

                {/* 2. Get A Free Quote */}
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>
              </div>

              {/* Quick Trust Reassurance */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated HVAC Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Nassau County 24/7 Coverage</span>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card with Dispatch Status (Homepage Banner Mirror) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-[#0E2452]/90 to-[#061A40]/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Fast Dispatch
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">Emergency Mobile Units</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Nassau
                      County Communities.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Licensed &amp; Certified:</strong> EPA
                      universal, OSHA compliant master technicians.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Stocked Vehicles:</strong> Over 1,000 OEM
                      replacement parts on every service truck.
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Emergency Line</p>
                    <a href={PHONE_TEL} className="text-xl font-black text-brightYellow hover:underline font-heading">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                  <a
                    href={PHONE_TEL}
                    className="px-3.5 py-2 rounded-lg bg-brightRed text-white font-bold text-xs uppercase tracking-wider hover:bg-brightRed-hover shadow font-heading"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT SECTION (ALL 37 LOCATIONS + SERVICE AREAS DETAIL LINK) */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Header & Description */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3.5 font-heading">
              <NassauSeal className="w-4 h-4 text-royal" />
              <span>Nassau County Service Territory</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              We Are Proud To Service Our Clients in Nassau County
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-body">
              247 HVAC of Long Island delivers round-the-clock heating, ventilation, and air conditioning services across
              every neighborhood, village, and town in Nassau County.
            </p>
          </div>

          {/* Subheading: Areas We Serve: */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                  Areas We Serve:
                </h3>
                <p className="text-sm text-slate-600 mt-1 font-body">
                  Select your town to explore local heating and cooling coverage, or contact us directly for immediate dispatch.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold font-heading text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-royal" />
                <span>37 Nassau &amp; Neighboring Communities</span>
              </div>
            </div>

            {/* Grid of All 37 Locations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {NASSAU_COUNTY_TOWNS.map((town) =>
                town.href ? (
                  <Link
                    key={town.name}
                    href={town.href}
                    className="p-3.5 rounded-xl bg-white hover:bg-royal text-navy hover:text-white border border-slate-200 font-bold text-xs sm:text-sm font-heading shadow-2xs hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <span className="truncate">★ {town.name}</span>
                    <ArrowRight className="w-4 h-4 text-royal group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                ) : (
                  <div
                    key={town.name}
                    className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate font-body">
                        {town.name}
                      </span>
                    </div>
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"
                      title="24/7 Mobile Dispatch Available"
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading">
              <span className="text-slate-500">
                Need service in an unlisted Nassau neighborhood? We provide 24/7 countywide dispatch.
              </span>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-1.5 font-bold text-royal hover:underline uppercase tracking-wider"
              >
                <span>Call 24/7: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hvacGreen/15 text-hvacGreen text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full-Spectrum Climate Care</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In Nassau County
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert heating, air conditioning, and ventilation solutions tailored for Nassau County residential and commercial properties.
            </p>
          </div>

          {/* HVAC Cooling Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              {/* Exact Subheading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                HVAC Cooling Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {NASSAU_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 text-royal" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-lg font-extrabold text-navy font-heading mb-3 line-clamp-2">
                        {service.title}
                      </h4>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-heading">
                        <Link
                          href={service.href || '/cooling-services'}
                          className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline uppercase tracking-wider"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="px-3 py-1.5 rounded-lg bg-royal text-white text-xs font-bold shadow hover:bg-royal-hover"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HVAC Heating Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brightRed/10 text-brightRed flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              {/* Exact Subheading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                HVAC Heating Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {NASSAU_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 text-brightRed" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-lg font-extrabold text-navy font-heading mb-3 line-clamp-2">
                        {service.title}
                      </h4>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-heading">
                        <Link
                          href={service.href || '/heating-services'}
                          className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline uppercase tracking-wider"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="px-3 py-1.5 rounded-lg bg-hvacGreen text-white text-xs font-bold shadow hover:bg-hvacGreen-hover"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS SECTION */}
      {/* ========================================================================= */}
      <TestimonialsSection
        id="testimonials"
        badgeText="Verified Customer Feedback"
        heading="Reviews From Nassau County Clients"
        reviews={NASSAU_TESTIMONIALS.map((r: any) => ({
          id: r.id,
          name: r.author || r.name,
          location: r.location || 'Verified Customer',
          service: r.service,
          rating: r.rating ?? 5,
          comment: r.quote || r.comment,
        }))}
      />

      {/* ========================================================================= */}
      {/* 6. LOCATION MAP SECTION */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Nassau County Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Proudly delivering 24/7 heating, cooling, and air quality services across all of Nassau County, Long Island.
            </p>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200 relative">
            <iframe
              title="Nassau County, NY Service Area Map"
              src="https://maps.google.com/maps?q=Nassau+County,+NY&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 font-body">
            Get instant support from licensed HVAC specialists in Nassau County, NY. We are available round-the-clock for repairs, maintenance, and new installations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Phone CTA */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brightRed hover:bg-brightRed-hover text-white text-lg font-bold shadow-xl shadow-brightRed/30 transition-all font-heading"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            {/* Button */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy text-lg font-black shadow-xl shadow-brightYellow/20 transition-all font-heading"
            >
              <Calendar className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>
          </div>
        </div>
      </section>

      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* Modals */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <CouponModal
        isOpen={isCouponOpen}
        onClose={() => setIsCouponOpen(false)}
        onBookWithCoupon={() => setIsBookingOpen(true)}
      />
      <FinancingModal
        isOpen={isFinancingOpen}
        onClose={() => setIsFinancingOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <MaintenanceModal
        isOpen={isMaintenanceOpen}
        onClose={() => setIsMaintenanceOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <ServiceAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}
