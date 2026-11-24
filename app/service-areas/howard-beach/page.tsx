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
import { QueensSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const HOWARD_BEACH_COOLING_SERVICES: LocationServiceCard[] = [
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

const HOWARD_BEACH_HEATING_SERVICES: LocationServiceCard[] = [
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

const HOWARD_BEACH_TESTIMONIALS = [
  {
    "id": "1",
    "quote": "i called they responded within a a half hour excellent team very satified",
    "author": "Mark Appel",
    "location": "Howard Beach Client"
  },
  {
    "id": "2",
    "quote": "Very knowledgeable tech! They came 15 minutes early and even called to let me know they were on their way. They fixed my heat in no time and were... read more",
    "author": "Lois Higgins",
    "location": "Howard Beach Client"
  },
  {
    "id": "3",
    "quote": "Turned out my emergency switch was off (thanks kids). Edgar was professional and get helpful and did a thorough check on my units. Very pleased!",
    "author": "John Bailey",
    "location": "Howard Beach Client"
  }
];

export default function HowardBeachLocationPage() {
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
    <main className="min-h-screen flex flex-col bg-white">
      {/* GLOBAL HEADER & NAVIGATION */}
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

      {/* BREADCRUMB */}
      <div className="bg-slate-100 border-b border-slate-200/80 py-2.5 text-xs text-slate-600 font-body">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-royal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/service-areas" className="hover:text-royal transition-colors">
            Service Areas
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/queens" className="hover:text-royal transition-colors">
            Queens
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Howard Beach</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero-hvac.jpg"
            alt="Howard Beach HVAC Services and Heating Cooling Repair"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">#1 HVAC Services in Howard Beach</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-4 text-white font-heading">
                Howard Beach
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
                    #1 HVAC Services in Howard Beach
                  </span>
                </div>
              </div>

              {/* Action Buttons: Call Us Now & Get A Free Quote */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading mb-6">
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated HVAC Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Howard Beach 24/7 Coverage</span>
              </div>
            </div>

            {/* Right Column: Emergency Mobile Units Card */}
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
                    <span><strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Direct local dispatch throughout Howard Beach.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Heating &amp; Cooling:</strong> Complete repair, maintenance, and replacement.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Residential &amp; Commercial:</strong> Dedicated Queens local HVAC team.</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Howard Beach Direct Line</p>
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
      {/* 2. ABOUT SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left side: Exact Headings and Paragraphs */}
            <div className="flex flex-col items-start w-full">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 font-heading">
                About Our Howard Beach Service
              </span>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5 sm:mb-6 font-heading">
                We Are Proud To Service Our Clients in Howard Beach
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body">
                We are the top HVAC contractors in Howard Beach and provide our 24/7 emergency service.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body">
                We have many happy homeowners and business owners in Howard Beach with our outstanding fast and reliable services.
              </p>

              {/* Exact Paragraph 3 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8 font-body">
                Whether you need repair or installation of a cooling or heating system, we can quickly determine the right solution for your home or business.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto font-heading">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-royal text-white font-extrabold text-sm shadow-md hover:bg-royal-hover active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
                >
                  <span>Get A Free Quote</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>

                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-navy text-navy font-extrabold text-sm hover:bg-slate-50 transition-colors uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>

            {/* Right side: Image with town overlay */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-72 xs:h-80 sm:h-96 md:h-[420px] lg:h-[460px] w-full">
                  <Image
                    src="/image-website/ac-installation-bd.jpg"
                    alt="HVAC service and climate solutions in Howard Beach, NY"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">Howard Beach</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      Howard Beach HVAC Service Hub
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Fast, local radio-dispatched service trucks across Howard Beach, Queens NY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HVAC SERVICES SECTION */}
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
              HVAC Services We Provide In Howard Beach
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert heating, air conditioning, and ventilation solutions tailored for Howard Beach residential and commercial properties.
            </p>
          </div>

          {/* HVAC Cooling Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                HVAC Cooling Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOWARD_BEACH_COOLING_SERVICES.map((service) => {
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                HVAC Heating Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOWARD_BEACH_HEATING_SERVICES.map((service) => {
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
      {/* 4. TESTIMONIALS SECTION */}
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
              Reviews From Howard Beach Clients
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Read real feedback from Howard Beach homeowners and businesses who rely on our prompt 24/7 HVAC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOWARD_BEACH_TESTIMONIALS.map((review) => (
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
      {/* 5. LOCATION MAP SECTION */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Howard Beach Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-2 font-body">
              Serving Howard Beach and neighboring Queens communities with 24/7 radio-dispatched mobile repair units.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
              <iframe
                src="https://maps.google.com/maps?q=Howard%20Beach%2C%20NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Howard Beach, NY HVAC Service Area Map"
                className="w-full h-[360px] sm:h-[450px] rounded-xl"
              />
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <QueensSeal className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-navy font-heading">
                      Howard Beach, NY Service Hub
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active 24/7 Dispatch
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 font-body mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-royal flex-shrink-0 mt-0.5" />
                    <span>Howard Beach, Queens, New York</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-brightYellow flex-shrink-0 mt-0.5" />
                    <span>Average Dispatch Time: 30-45 Minutes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-brightRed flex-shrink-0 mt-0.5" />
                    <span>Emergency Hotline: {PHONE_NUMBER}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 font-body">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 font-heading">
                    Nearby Queens Communities
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {["Arverne","Cambria Heights","Far Rockaway","Laurelton","Ozone Park"].map((c) => (
                      <span key={c} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 font-heading">
                <a
                  href={PHONE_TEL}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brightRed" />
                  <span>Call Us Now</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Service Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island &amp; Queens</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Howard Beach technicians for prompt heating and air conditioning repair or a free quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
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
    </main>
  );
}
