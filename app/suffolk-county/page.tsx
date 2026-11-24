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
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
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
import { SuffolkSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

interface SuffolkLocationItem {
  name: string;
  href?: string;
}

// Exactly the 10 Towns specified for Suffolk County, NY
const SUFFOLK_TOWNS: SuffolkLocationItem[] = [
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

// Exactly the 32 Villages specified for Suffolk County, NY
const SUFFOLK_VILLAGES: SuffolkLocationItem[] = [
  { name: 'Amityville' },
  { name: 'Asharoken' },
  { name: 'Babylon' },
  { name: 'Belle Terre' },
  { name: 'Bellport' },
  { name: 'Brightwaters' },
  { name: 'Dering Harbor' },
  { name: 'East Hampton' },
  { name: 'Greenport' },
  { name: 'Head of the Harbor' },
  { name: 'Huntington Bay' },
  { name: 'Islandia' },
  { name: 'Lake Grove' },
  { name: 'Lindenhurst' },
  { name: 'Lloyd Harbor' },
  { name: 'Nissequogue' },
  { name: 'North Haven' },
  { name: 'Northport' },
  { name: 'Ocean Beach' },
  { name: 'Old Field' },
  { name: 'Patchogue' },
  { name: 'Poquot' },
  { name: 'Port Jefferson' },
  { name: 'Quogue' },
  { name: 'Sag Harbor' },
  { name: 'Sagaponack' },
  { name: 'Saltaire' },
  { name: 'Shoreham' },
  { name: 'Southampton' },
  { name: 'Village of the Branch' },
  { name: 'Westhampton Beach' },
  { name: 'West Hampton Dunes' },
];

const SUFFOLK_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'Air Conditioners Installation & Replacement',
    category: 'cooling',
    image: '/image-website/ac-installation.jpg',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repairs & Maintenance',
    category: 'cooling',
    image: '/image-website/ac-installation-bd.jpg',
    icon: Wrench,
    href: '/air-conditioning-repair',
  },
  {
    id: 'air-duct',
    title: 'Air Duct and Ventilation Cleaning Service',
    category: 'cooling',
    image: '/image-website/air-con-installation.jpg',
    icon: Layers,
    href: '/air-duct-and-ventilation-cleaning-service',
  },
  {
    id: 'mini-split',
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners',
    category: 'cooling',
    image: '/image-website/heat-pump-installation.jpg',
    icon: Snowflake,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
  },
];

const SUFFOLK_HEATING_SERVICES: LocationServiceCard[] = [
  {
    id: 'furnace',
    title: 'Furnace Installation, Repair & Replacement',
    category: 'heating',
    image: '/image-website/furnace-installation.jpg',
    icon: Flame,
    href: '/furnace-installation-repair-replacement',
  },
  {
    id: 'boiler',
    title: 'Boiler Installation & Repair',
    category: 'heating',
    image: '/image-website/boiller-installation-repair-e1661179456943.jpg',
    icon: Droplets,
    href: '/boiler-installation-repair',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation, Repair & Replacement',
    category: 'heating',
    image: '/image-website/water-heater-installation.jpg',
    icon: Droplets,
    href: '/water-heater-installation-repair-replacement',
  },
  {
    id: 'chimney',
    title: 'Chimney Sweep',
    category: 'heating',
    image: '/images/furnace-unit.jpg',
    icon: Flame,
    href: '/chimney-sweep',
  },
];

// Preserved verbatim from specification
const SUFFOLK_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Great service from 247 HVAC of Long Island. Their prices were very competitive with other local installers. We received a quote with 3 options for a single air conditioning unit... read more',
    author: 'Linda Dodson',
    location: 'Suffolk County, NY',
  },
  {
    id: '2',
    quote:
      'The technicians were punctual, friendly and professional. Comparable to other companies we enquired about a new ac unit, they gave us the best price and date to complete the job.... read more',
    author: 'Callum Green',
    location: 'Suffolk County, NY',
  },
  {
    id: '3',
    quote:
      'Easy to schedule an appointment, arrive on time, clean, proffessional, friendly. Explained everything and got the humidifier to work again also. Installed AC in my living room. I love having...',
    author: "Anthony P. O'Connor",
    location: 'Suffolk County, NY',
  },
];

export default function SuffolkCountyServiceAreaPage() {
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
          <span className="text-navy font-semibold">Suffolk County, NY</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <section id="banner" className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Background Hero Image - Same layout and opacity blending as homepage banner */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero-hvac.jpg"
            alt="Suffolk County, NY HVAC Heating and Cooling Service"
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
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">#1 HVAC Emergency Services in Long Island</span>
              </div>

              {/* Exact Location Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Suffolk County, NY
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
                    #1 HVAC Services in Suffolk County, NY
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
                <span className="w-full sm:w-auto text-slate-300">Suffolk County 24/7 Coverage</span>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card with Dispatch Status */}
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
                      <strong className="font-heading font-bold text-white">35-50 Minute Response:</strong> Suffolk
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
      {/* 3. ABOUT SECTION (TOWNS & VILLAGES AS SEPARATE GROUPS) */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Header & Description */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3.5 font-heading">
              <SuffolkSeal className="w-4 h-4 text-royal" />
              <span>Suffolk County Service Territory</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              We Are Proud To Service Our Clients in Suffolk County, NY
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-body">
              247 HVAC of Long Island delivers round-the-clock heating, ventilation, and air conditioning services across
              every town, village, and community in Suffolk County.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-10">
            {/* GROUP 1: TOWNS */}
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                    Towns:
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">
                    Major townships served with 24/7 radio-dispatched mobile HVAC repair units.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold font-heading text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-royal" />
                  <span>10 Suffolk County Towns</span>
                </div>
              </div>

              {/* Grid of 10 Towns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {SUFFOLK_TOWNS.map((town) =>
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
            </div>

            {/* GROUP 2: VILLAGES */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                    Villages:
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">
                    Incorporated villages and historic communities across Suffolk County.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold font-heading text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-royal" />
                  <span>32 Suffolk County Villages</span>
                </div>
              </div>

              {/* Grid of 32 Villages */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {SUFFOLK_VILLAGES.map((village, idx) =>
                  village.href ? (
                    <Link
                      key={`${village.name}-${idx}`}
                      href={village.href}
                      className="p-3.5 rounded-xl bg-white hover:bg-royal text-navy hover:text-white border border-slate-200 font-bold text-xs sm:text-sm font-heading shadow-2xs hover:shadow-md transition-all flex items-center justify-between group"
                    >
                      <span className="truncate">★ {village.name}</span>
                      <ArrowRight className="w-4 h-4 text-royal group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  ) : (
                    <div
                      key={`${village.name}-${idx}`}
                      className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 flex items-center justify-between shadow-2xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate font-body">
                          {village.name}
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
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading">
              <span className="text-slate-500">
                Need service in an unlisted Suffolk County neighborhood? We provide 24/7 countywide dispatch.
              </span>
              <a
                href={PHONE_TEL}
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
              HVAC Services We Provide In Suffolk County, NY
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert heating, air conditioning, and ventilation solutions tailored for Suffolk County residential and commercial properties.
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
              {SUFFOLK_COOLING_SERVICES.map((service) => {
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
              {SUFFOLK_HEATING_SERVICES.map((service) => {
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
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brightYellow/20 text-navy text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Star className="w-4 h-4 fill-brightYellow text-brightYellow" />
              <span>Verified Customer Feedback</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Reviews From Suffolk County, NY Clients
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Read real feedback from Suffolk County homeowners and businesses who rely on our prompt 24/7 HVAC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUFFOLK_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow relative"
              >
                <Quote className="w-10 h-10 text-royal/15 absolute top-6 right-6 pointer-events-none" />

                <div className="mb-6 relative z-10">
                  <div className="flex items-center gap-1 text-brightYellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed font-body">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-navy text-base font-heading">
                      {review.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-heading">{review.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-hvacGreen bg-hvacGreen/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LOCATION MAP SECTION */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Suffolk County Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Proudly delivering 24/7 heating, cooling, and air quality services across all of Suffolk County, Long Island.
            </p>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200 relative">
            <iframe
              title="Suffolk County, NY Service Area Map"
              src="https://maps.google.com/maps?q=Suffolk+County,+NY&t=&z=10&ie=UTF8&iwloc=&output=embed"
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
            <span>24/7 Fast Response Across Suffolk County &amp; Long Island</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 font-body">
            Get instant support from licensed HVAC specialists in Suffolk County, NY. We are available round-the-clock for repairs, maintenance, and new installations.
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
