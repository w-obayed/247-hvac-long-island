'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  FileText,
  Clock,
  ShieldCheck,
  Snowflake,
  Flame,
  Droplets,
  Wrench,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  ChevronRight,
  Headphones,
  DollarSign,
  AlertTriangle,
  HelpCircle,
  AlertCircle,
  Zap,
  Layers,
  Wind,
  Award,
  Sparkles,
  Check,
  Home,
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
import { NassauSeal, QueensSeal, SuffolkSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

// Exact brand list from Section 7 (preserving original order, repeated entries, and exact casing)
const RESIDENTIAL_BRANDS = [
  { name: 'Amana', image: '/image-website/amana_id8eon.png' },
  { name: 'Bryant', image: '/image-website/Bryant_poezku.png' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Rheem', image: '/image-website/Reem_n2obdg.png' },
  { name: 'Mitsubishi', image: '/image-website/Mitsubisi_gajjhf.png' },
  { name: 'Daikin', image: '/image-website/daikin_ykfzek.png' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'York' },
  { name: 'Bryant', image: '/image-website/Bryant_poezku.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'American Standard', image: '/image-website/American_tqzswh.png' },
  { name: 'Lennox', image: '/image-website/Lennox_jpbqmb.png' },
  { name: 'Bosch', image: '/image-website/bosch_j6arde.jpg' },
  { name: 'Buderus' },
  { name: 'Peerless' },
  { name: 'Slant/Fin' },
  { name: 'Triangle Tube' },
  { name: 'Westinghouse' },
  { name: 'Hurst Boiler' },
  { name: 'Indeck' },
  { name: 'SUSSMAN' },
  { name: 'Sigma Thermal' },
];

// Section 3: HVAC Services We Provide In Residential HVAC
const RESIDENTIAL_COOLING_SERVICES = [
  {
    id: 'ac-installation',
    title: 'Air Conditioners Installation & Replacement',
    description:
      'High-efficiency central AC systems, custom duct integration, and professional load calculations tailored for Long Island homes.',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
    image: '/image-website/ac-installation.jpg',
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repairs & Maintenance',
    description:
      'Fast troubleshooting, refrigerant leak detection, compressor repairs, tune-ups, and 24/7 emergency service.',
    icon: Wrench,
    href: '/air-conditioning-repair',
    image: '/images/ac-repair.jpg',
  },
  {
    id: 'air-duct-cleaning',
    title: 'Air Duct and Ventilation Cleaning Service',
    description:
      'Thorough ductwork sanitization, allergen reduction, and whole-house airflow optimization to keep indoor air clean and healthy.',
    icon: Wind,
    href: '/air-duct-and-ventilation-cleaning-service',
    image: '/images/technician-repair.jpg',
  },
  {
    id: 'mini-splits',
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners',
    description:
      'Multi-zone and single-room ductless comfort systems offering whisper-quiet cooling and heating without tear-out ductwork.',
    icon: Layers,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
    image: '/images/mini-split.jpg',
  },
];

const RESIDENTIAL_HEATING_SERVICES = [
  {
    id: 'furnace-installation',
    title: 'Furnace Installation, Repair & Replacement',
    description:
      'High-efficiency gas and oil furnace repairs, seasonal checkups, and brand-new installations that lower winter fuel costs.',
    icon: Flame,
    href: '/furnace-installation-repair-replacement',
    image: '/images/furnace.jpg',
  },
  {
    id: 'boiler-installation',
    title: 'Boiler Installation & Repair',
    description:
      'Residential steam and hot water boiler diagnostics, piping replacements, circulator pump service, and emergency repairs.',
    icon: Droplets,
    href: '/boiler-installation-repair',
    image: '/images/boiler.jpg',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation, Repair & Replacement',
    description:
      'Tank and tankless water heating systems installed and repaired with rapid response for reliable hot water year-round.',
    icon: Zap,
    href: '/water-heater-installation-repair-replacement',
    image: '/images/water-heater.jpg',
  },
  {
    id: 'chimney-sweep',
    title: 'Chimney Sweep',
    description:
      'Certified chimney inspection, flue cleaning, creosote removal, and draft checks ensuring safe exhaust ventilation for your home.',
    icon: ShieldCheck,
    href: '/chimney-sweep',
    image: '/images/technician-service.jpg',
  },
];

// Section 4: Why Choose Us
const WHY_CHOOSE_ITEMS = [
  {
    title: 'Unparalleled Customer Support',
    desc: 'Dedicated residential heating and cooling specialists walking you through system sizing, options, and aftercare with zero pressure.',
    icon: Headphones,
  },
  {
    title: '24/7 Service',
    desc: 'Round-the-clock emergency dispatch across Long Island so your family never suffers in freezing winters or scorching summers.',
    icon: Clock,
  },
  {
    title: 'Professional & Reliable',
    desc: 'EPA-certified, licensed, and factory-trained technicians arriving on time with fully stocked trucks and guaranteed workmanship.',
    icon: Award,
  },
];

// Section 5: Exact Testimonials
const TESTIMONIALS = [
  {
    id: '1',
    quote:
      'This is a very professional and reliable company. They worked with me to stay within my budget to replace my 70 year old heating furnace. The technicians arrived on time... read more',
    author: 'Alexander Pineda',
  },
  {
    id: '2',
    quote:
      "We have been dealing with 24/7 HVAC of Long Island since 2016 for our furnace installation. Now, it's time to replace our Old 25 yrs ac. David was our... read more",
    author: 'Lewis Porter',
  },
  {
    id: '3',
    quote:
      '24/7 HVAC is a very professional company. I was extremely happy with the service I received and how quick the service was. I also love that they do great work... read more',
    author: 'David McMillan',
  },
];

export default function ResidentialHvacPage() {
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
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-100 border-b border-slate-200/80 py-2.5 text-xs text-slate-600 font-body"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-royal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Residential HVAC</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <section
        id="banner"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Background Hero Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero-hvac.jpg"
            alt="Residential HVAC Long Island - Heating and Cooling Specialists"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        {/* Background Gradient & Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Bullets, Additional Text, CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">#1 Residential HVAC in Long Island</span>
              </div>

              {/* Exact Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-3 text-white font-heading">
                Residential HVAC
              </h1>

              {/* Exact Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 mb-5 font-heading tracking-tight leading-snug">
                The HVAC Experts in Residential Installation and Repair
              </p>

              {/* Exact Bullet Points */}
              <div className="space-y-2.5 sm:space-y-3 w-full max-w-xl mb-4 font-heading">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    Professional &amp; Reliable Technicians
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    24 Hours Emergency Service Available
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    #1 Residential HVAC in Long Island
                  </span>
                </div>
              </div>

              {/* Exact Additional text */}
              <p className="text-sm sm:text-base font-bold text-brightYellow mb-6 font-body">
                What are the best Residential HVAC Near Me? We are
              </p>

              {/* CTA Buttons */}
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

              {/* Quick Trust Reassurance */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated Residential Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Long Island 24/7 Emergency Dispatch</span>
              </div>
            </div>

            {/* Right Column: Dispatch Status Card */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-[#0E2452]/90 to-[#061A40]/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Residential Dispatch
                    </span>
                    <h3 className="text-[22px] font-bold text-white font-heading">Emergency Mobile Units</h3>
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
                      <strong className="font-heading font-bold text-white">30-45 Min Response:</strong> All Long
                      Island &amp; Queens neighborhoods.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Home Comfort Pros:</strong> Licensed, insured,
                      and EPA-certified master technicians.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Stocked Trucks:</strong> OEM replacement parts
                      ready for instant on-site repairs.
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Residential Line</p>
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
      {/* 2. INTRO SECTION */}
      {/* ========================================================================= */}
      <section id="intro" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading and Supplied Paragraphs */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3.5 font-heading">
                <Home className="w-4 h-4" />
                <span>Complete Residential Comfort</span>
              </div>

              {/* Exact Left-side Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                Trust Us With Residential HVAC
              </h2>

              {/* Exact Content — Kept Exactly As Provided */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                <p>
                  As a full-service heating and cooling company, you can turn to us whenever your climate-control unit isn’t working at peak efficiency or need replacement, but air conditioning and furnace repair and installation are just the beginning of our service options.
                </p>

                <p>
                  We also repair and install residential water heaters, heat pumps, mini splits and boilers.
                </p>

                <p>
                  Our experienced HVAC technicians are fully trained and qualified to perform work with any brand.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto font-heading mt-8">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-royal text-white font-extrabold text-sm shadow-md hover:bg-royal-hover active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 flex-shrink-0" />
                  <span>Get A Free Quote</span>
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

            {/* Right Column: Relevant Residential HVAC Images (Two-Image Showcase) */}
            <div className="lg:col-span-5 w-full flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-72 sm:h-80 md:h-[340px] lg:h-[380px] w-full">
                  <Image
                    src="/image-website/ac-installation.jpg"
                    alt="Professional technician servicing a residential air conditioning unit in Long Island"
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 font-heading">
                  <Award className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span className="font-bold text-xs uppercase tracking-wider">Certified Technicians</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-royal text-white flex items-center justify-center font-black text-sm flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-navy text-sm font-heading leading-tight">
                      All Makes, Models &amp; Brands
                    </h4>
                    <p className="text-xs text-slate-600 font-body leading-tight mt-0.5">
                      Prompt diagnostics and precision repairs for residential homeowners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Residential Image */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/mini-split.jpg"
                    alt="Residential ductless mini-split heat pump installation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 21vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white font-heading">
                    Heat Pumps &amp; Mini Splits
                  </span>
                </div>

                <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/furnace.jpg"
                    alt="Residential high-efficiency furnace and heating installation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 21vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white font-heading">
                    Furnaces &amp; Boilers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION (TWO CLEARLY SEPARATED SERVICE GROUPS) */}
      {/* ========================================================================= */}
      <section id="services" className="py-14 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Solutions</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In Residential HVAC
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Explore our comprehensive heating and cooling services engineered to maintain optimal year-round indoor climate for your home.
            </p>
          </div>

          {/* Group 1: HVAC Cooling Services */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-royal/20">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-royal flex items-center justify-center font-black">
                <Snowflake className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                HVAC Cooling Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESIDENTIAL_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/95 text-royal flex items-center justify-center shadow-md">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-bold text-navy font-heading mb-2 leading-snug">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading group/btn"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Group 2: HVAC Heating Services */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-brightRed/20">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-brightRed flex items-center justify-center font-black">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                HVAC Heating Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESIDENTIAL_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/95 text-brightRed flex items-center justify-center shadow-md">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-bold text-navy font-heading mb-2 leading-snug">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading group/btn"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-14 sm:py-20 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Homeowners Trust Us</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Why Choose 247 HVAC of Long Island For Residential HVAC
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Reliable heating and cooling solutions delivered with honest estimates, skilled technicians, and 24/7 care.
            </p>
          </div>

          {/* Three Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-navy font-heading mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-royal font-heading">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                    <span>Quality Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS SECTION */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-14 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Client Feedback
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Our Client Testimonials
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1 text-brightYellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brightYellow" />
                ))}
              </div>
              <span className="text-sm font-bold text-navy font-heading">
                Rating: 5.0 Average (Rated 5 out of 5)
              </span>
            </div>
          </div>

          {/* Testimonials Grid — Exact Content & Reviewer Names */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brightYellow" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-slate-300" />
                  </div>
                  {/* Exact Quote */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {/* Exact Author */}
                  <span className="font-bold text-navy text-sm font-heading">
                    {t.author}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-body">
                    Verified Customer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. AREAS SECTION */}
      {/* ========================================================================= */}
      <section id="areas" className="py-14 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Coverage &amp; Locations
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Long Island Areas We Do Residential HVAC
            </h2>
            <p className="text-base text-slate-600 font-body">
              Fast, radio-dispatched residential technicians serving homes throughout Long Island and Queens.
            </p>
          </div>

          {/* Three Area Links: Nassau Areas, Queens Areas, Suffolk Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 font-heading">
            <Link
              href="/service-areas/nassau-county"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <NassauSeal className="w-9 h-9 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Nassau Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/queens"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <QueensSeal className="w-9 h-9 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Queens Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/suffolk-county"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <SuffolkSeal className="w-9 h-9 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Suffolk Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BRANDS SECTION (POPULAR BRANDS WE DO RESIDENTIAL HVAC) */}
      {/* ========================================================================= */}
      <section id="brands" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Authorized System Care
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Popular Brands We Do Residential HVAC
            </h2>
            <p className="text-base text-slate-700 font-body leading-relaxed">
              Our certified technicians are trained and equipped to service, repair, and install all leading residential heating and air conditioning brands:
            </p>
          </div>

          {/* Exact Brand Grid (Preserving All 23 Supplied Brand Entries In Order) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8">
            {RESIDENTIAL_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-royal/40 transition-all min-h-[96px] group"
              >
                {brand.image ? (
                  <div className="relative w-20 sm:w-24 h-9 mb-1.5">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Residential HVAC Long Island`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-navy/5 text-navy flex items-center justify-center font-black text-xs font-heading mb-1.5">
                    {brand.name.substring(0, 2)}
                  </div>
                )}
                <span className="text-xs sm:text-sm font-bold text-navy font-heading group-hover:text-royal transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-blue-50/80 border border-blue-100 rounded-xl p-4 sm:p-5">
            <p className="text-sm sm:text-base text-slate-700 font-medium font-body">
              No matter what brand of residential heating or cooling system is in your home, our technicians provide guaranteed diagnostics and workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CTA SECTION */}
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
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Long Island residential technicians for prompt heating and air conditioning repair or a free estimate.
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

      {/* FOOTER */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />

      {/* FLOATING ACTION BAR FOR MOBILE */}
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* MODALS */}
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
