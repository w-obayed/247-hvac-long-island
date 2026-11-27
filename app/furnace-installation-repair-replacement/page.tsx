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
  Flame,
  Wrench,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  MapPin,
  ChevronRight,
  Headphones,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Sliders,
  Battery,
  Power,
  Zap,
  DoorClosed,
  Filter,
  Wind,
} from 'lucide-react';

// Reuse existing global header & footer components
import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';

// Reuse existing modals
import QuoteModal from '@/components/Modals/QuoteModal';
import BookingModal from '@/components/Modals/BookingModal';
import CouponModal from '@/components/Modals/CouponModal';
import FinancingModal from '@/components/Modals/FinancingModal';
import MaintenanceModal from '@/components/Modals/MaintenanceModal';
import ServiceDetailModal from '@/components/Modals/ServiceDetailModal';
import ServiceAreaModal from '@/components/Modals/ServiceAreaModal';

// Reuse existing datasets and county emblems
import { HVAC_SERVICES, ServiceItem } from '@/components/ServicesSection';
import { SERVICE_AREAS, ServiceAreaItem } from '@/components/ServiceAreasSection';
import { NassauSeal, QueensSeal, SuffolkSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_LOCATION } from '@/lib/utils';

// Exact 8 Popular Brands requested
const POPULAR_FURNACE_BRANDS = [
  { name: 'Lennox', image: '/image-website/Lennox_jpbqmb.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'American Standard', image: '/image-website/American_tqzswh.png' },
  { name: 'Amana', image: '/image-website/amana_id8eon.png' },
  { name: 'Bryant', image: '/image-website/Bryant_poezku.png' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Rheem', image: '/image-website/Reem_n2obdg.png' },
];

// Exact 3 Testimonials requested
const FURNACE_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'They repaired our heater. All the staff members were excellent. Easy to book an appointment. Matthew arrived on time, diagnosed, and repaired our water heater very quickly. He had parts... read more',
    author: 'Judson Chambers',
    location: 'Verified Long Island Customer',
  },
  {
    id: '2',
    quote:
      'I got several quotes for my furnace, AC and Water Heater. I decided on 24/7 HVAC based on products offered and competitive pricing. They arrived to do the work... read more',
    author: 'Scott Jordan',
    location: 'Verified Long Island Customer',
  },
  {
    id: '3',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac.... read more',
    author: 'Willamina Hamnerio',
    location: 'Verified Long Island Customer',
  },
];

// Exact Troubleshooting Checklist requested
const TROUBLESHOOTING_STEPS = [
  {
    icon: Sliders,
    text: 'Double-check that your thermostat is set to “Heat”.',
  },
  {
    icon: Battery,
    text: 'Replace the batteries in your thermostat.',
  },
  {
    icon: Power,
    text: 'Make sure your furnace switch works and is in the “On” position. It should be located on the wall near your furnace and is usually labelled.',
  },
  {
    icon: Zap,
    text: 'Check that your electric breaker is not tripped.',
  },
  {
    icon: DoorClosed,
    text: 'Secure the front panel door.',
  },
  {
    icon: Filter,
    text: 'Replace or clean the air filter.',
  },
  {
    icon: Wind,
    text: 'Open all air duct vents.',
  },
  {
    icon: AlertCircle,
    text: 'Double-check that nothing is blocking your furnace’s outside fresh air intake (e.g., snow or leaves).',
  },
];

export default function FurnaceInstallationRepairReplacementPage() {
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
      {/* ==============================================================
          GLOBAL HEADER & NAVIGATION (Unmodified & Reused)
         ============================================================== */}
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
          <Link href="/#services" className="hover:text-royal transition-colors">
            Heating Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Furnace Installation, Repair & Replacement</span>
        </div>
      </div>

      {/* ==============================================================
          1. BANNER / HERO SECTION (Homepage Hero Design & Structure)
         ============================================================== */}
      <section
        id="hero-banner"
        className="relative bg-[#0055E7] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Background Hero Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0055E7] via-[#0055E7]/60 sm:via-[#0055E7]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0055E7] sm:from-[#0055E7]/80 via-transparent to-transparent" />
        </div>

        {/* Subtle Gradient & Ambient Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0055E7] via-[#0055E7]/90 sm:via-[#0055E7]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#006BFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Description, Supporting Points, Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Supporting Point 3 as Top Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl sm:rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="leading-snug">#1 Furnace Installation, Repair & Replacement in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Furnace Installation, Repair & Replacement
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                We provide the best in furnace expertise in Long Island. With fast furnace repair services, new furnace installations, and maintenance services.
              </p>

              {/* Exact Additional Supporting Text */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-electric text-xs sm:text-sm font-bold font-heading mb-6">
                <span>What are the best Furnace Installation, Repair & Replacement Near Me? We are</span>
              </div>

              {/* Supporting Points / Trust Highlights */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3.5 w-full max-w-xl mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Professional & Reliable Technicians</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">24 Hours Emergency Service Available</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">High-Efficiency Heating Replacements</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">All Major Gas & Oil Brands Serviced</span>
                </div>
              </div>

              {/* Action Buttons: Call Us Now & Get A Free Quote */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
                {/* 1. Call Us Now */}
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white text-[#003399] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>

                {/* 2. Get A Free Quote */}
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#006BFF] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0055E7] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>

                {/* 3. Book Service Now */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Book Service Now</span>
                </button>
              </div>

              {/* Trust reassurance rating */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated Furnace Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Fast 30-45 Min Long Island Dispatch</span>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card with Dispatch Status */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">Fast Dispatch</span>
                    <h3 className="text-[24px] font-bold text-white font-heading">Emergency Furnace Units</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Direct local dispatch in Nassau, Queens & Western Suffolk.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Licensed & Certified:</strong> EPA universal & OSHA compliant master technicians.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Stocked Vehicles:</strong> Over 1,000 OEM replacement parts on every service truck.</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Emergency Line</p>
                    <a href={PHONE_TEL} className="text-2xl xl:text-3xl font-black text-brightYellow hover:underline font-heading leading-tight whitespace-nowrap">
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

      {/* ==============================================================
          2. INTRO SECTION (Trust Us With Furnace Installation, Repair & Replacement)
         ============================================================== */}
      <section
        id="intro-section"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Left Column: Heading, Description & Subsections */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2.5 font-heading">
                Long Island Heating Specialists
              </span>

              {/* Exact Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-4 font-heading">
                Trust Us With Furnace Installation, Repair & Replacement
              </h2>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 font-body">
                Whether it’s helping you decide on the right furnace for the unique needs of your home and budget, or repair and maintain your furnace, our top priority is your happiness.
              </p>

              <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed mb-8 font-body">
                We have made a commitment never to pressure you into sales, and we are always upfront about our pricing.
              </p>

              {/* Supporting Points / Checklist */}
              <div className="space-y-3.5 w-full mb-8 font-body">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    Full-service furnace installation & replacement from a team of friendly, certified technicians
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    24 hour repairs available all year long
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    Energy Efficient – Your new installation will be up-to-date when it comes to energy saving technology.
                  </span>
                </div>
              </div>

              {/* Call-to-Action row */}
              <div className="flex flex-wrap items-center gap-3 font-heading">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Furnace Service</span>
                </button>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-royal" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Professional Furnace Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg"
                  alt="Wall-mounted condensing heating unit with copper hydronic piping and zone controls"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-royal text-white flex items-center justify-center font-black font-heading">
                      30+
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-navy font-heading">Decades of Furnace Expertise</h4>
                      <p className="text-xs text-slate-600 font-body">Serving Nassau, Suffolk & Queens homes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subsections: New Furnace Installation & Fast Furnace Repair, 24/7 (Two Distinct Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Subsection 1: New Furnace Installation */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg"
                    alt="Wall-mounted condensing heating unit with copper hydronic piping and zone controls"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal text-white text-xs font-black uppercase tracking-wider font-heading shadow-md">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Top Brand Installations</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-royal flex items-center justify-center flex-shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    {/* Exact Subsection Heading */}
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      New Furnace Installation
                    </h3>
                  </div>

                  {/* Exact Subsection Description */}
                  <p className="text-base text-slate-600 leading-relaxed font-body">
                    We install furnaces from top brands and have the expertise to make sure your furnace gets the right installation so that it can perform at its best. Our technicians will make sure that the job is done right.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 font-heading">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white font-bold text-sm uppercase tracking-wider transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Get Installation Estimate</span>
                  </button>
                  <button
                    onClick={() => setIsFinancingOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:underline font-heading"
                  >
                    <span>Financing Available »</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Subsection 2: Fast Furnace Repair, 24/7 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/247 havc/heat-pump-repair/6085ddc1-72b5-4260-8550-5e08e749e7cc.jpg"
                    alt="Two 247 HVAC technicians inspecting an outdoor heat pump unit"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl sm:rounded-full bg-brightRed text-white text-xs font-black uppercase tracking-wider font-heading shadow-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24/7 Emergency Repairs</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-brightRed flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    {/* Exact Subsection Heading */}
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Fast Furnace Repair, 24/7
                    </h3>
                  </div>

                  {/* Exact Subsection Description */}
                  <p className="text-base text-slate-600 leading-relaxed font-body">
                    We provide homeowners with reliable, round-the-clock residential repair services for central home heating systems. When it comes to keeping your home comfortable and warm with adequate heat, our furnace repair experts have your needs covered. No matter the issue, or brand of furnace, our pros are here 24/7 to troubleshoot and repair.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 font-heading">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brightRed hover:bg-brightRed-hover text-white font-bold text-sm uppercase tracking-wider transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Repair</span>
                  </button>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-royal font-heading"
                  >
                    <Phone className="w-4 h-4 text-brightRed" />
                    <span>Call 24/7: {PHONE_NUMBER}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. POPULAR BRANDS SECTION (Exact 8 Brands requested)
         ============================================================== */}
      <section
        id="popular-brands"
        className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-y border-slate-200/80"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <span>Trusted Manufacturers</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Popular Brands We Do Furnace Installation, Repair & Replacement
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Certified repairs, genuine OEM parts, and warranty-backed installations for all major heating equipment manufacturers.
            </p>
          </div>

          {/* Grid of the 8 Popular Brands */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {POPULAR_FURNACE_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-royal/40 transition-all duration-200 flex flex-col items-center justify-center group h-28 sm:h-32"
              >
                <div className="relative w-full h-14 sm:h-16 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Furnace Installation, Repair & Replacement`}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <span className="text-xs font-bold text-slate-700 font-heading mt-2 group-hover:text-royal transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. WHY CHOOSE US SECTION (Exact 3 points requested)
         ============================================================== */}
      <section
        id="why-choose-us"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-3 font-heading border border-royal/15">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
              <span>The 247 HVAC Difference</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-[1.15] font-heading">
              Why Choose 247 HVAC of Long Island For Furnace Installation, Repair & Replacement
            </h2>
          </div>

          {/* 3 Points Layout (Reusing Boiler page feature card design) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Point 1: Unparalleled Customer Support */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-7 h-7 text-royal" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-3 py-1 rounded-full border border-royal/20">
                    01
                  </span>
                </div>
                <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 font-heading">
                  Unparalleled Customer Support
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                  Dedicated, friendly heating professionals available to answer your questions, assist with scheduling, and provide guidance every step of the way.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Dedicated Care & Attention</span>
              </div>
            </div>

            {/* Point 2: 24/7 Service */}
            <div className="bg-gradient-to-br from-[#003399] via-[#0055E7] to-[#003399] text-white rounded-2xl p-6 sm:p-8 border border-royal/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 text-electric flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-electric" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-electric bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    02
                  </span>
                </div>
                <div className="h-1 bg-gradient-to-r from-electric to-royal w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">
                  24/7 Service
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-body">
                  Round-the-clock emergency heating service and rapid mobile dispatch. When your furnace breaks down in freezing weather, our technicians respond immediately.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-electric font-heading">
                <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                <span>Zero Overtime Fees</span>
              </div>
            </div>

            {/* Point 3: Great prices */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#25843D] flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-7 h-7 text-[#25843D]" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-[#25843D] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    03
                  </span>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#25843D] to-emerald-400 w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 font-heading">
                  Great prices
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                  Competitive, upfront flat-rate pricing with zero hidden fees. We provide honest estimates before any work starts so you get the highest value for your investment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Upfront & Honest Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. TESTIMONIALS SECTION (Exact 3 client testimonials preserved)
         ============================================================== */}
      <TestimonialsSection
        id="testimonials"
        badgeText="Verified Customer Feedback"
        heading="Our Client Testimonials"
        reviews={FURNACE_TESTIMONIALS.map((r: any) => ({
          id: r.id,
          name: r.author || r.name,
          location: r.location || 'Verified Customer',
          service: r.service,
          rating: r.rating ?? 5,
          comment: r.quote || r.comment,
        }))}
      />

      {/* ==============================================================
          6. SERVICE AREAS SECTION (Nassau, Queens, Suffolk Area Links)
         ============================================================== */}
      <section
        id="service-areas"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Local Service Coverage</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Long Island Areas We Do Furnace Installation, Repair & Replacement
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Rapid dispatched service vehicles ready across Nassau, Queens, and Suffolk counties.
            </p>
          </div>

          {/* Three Location Groups: Nassau, Queens, Suffolk */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Group 1: Nassau Areas */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <NassauSeal className="w-14 h-14 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                      Nassau County
                    </h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      30-45 Min Dispatch
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 font-body">
                  Complete furnace installation, heating maintenance, and emergency repair throughout Nassau.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Hempstead', 'Garden City', 'Oyster Bay', 'North Hempstead', 'Long Beach', 'Glen Cove', 'Mineola', 'Great Neck'].map((t) => (
                    <span key={t} className="text-xs bg-white px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exact Location Link */}
              <Link
                href="/service-areas/nassau-county"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Nassau Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Group 2: Queens Areas */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <QueensSeal className="w-14 h-14 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                      Queens Borough
                    </h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      30-45 Min Dispatch
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 font-body">
                  Specialized furnace troubleshooting, gas heating repairs, and central systems in Queens.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Flushing', 'Astoria', 'Bayside', 'Forest Hills', 'Long Island City', 'Whitestone', 'Howard Beach'].map((t) => (
                    <span key={t} className="text-xs bg-white px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exact Location Link */}
              <Link
                href="/service-areas#queens"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Queens Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Group 3: Suffolk Areas */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <SuffolkSeal className="w-14 h-14 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                      Suffolk County
                    </h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      35-50 Min Dispatch
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 font-body">
                  Residential and commercial furnace repairs and energy-saving replacements across Suffolk.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Huntington', 'Babylon', 'Islip', 'Smithtown', 'Brookhaven', 'Riverhead', 'Melville', 'Commack'].map((t) => (
                    <span key={t} className="text-xs bg-white px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exact Location Link */}
              <Link
                href="/service-areas#suffolk"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Suffolk Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. TROUBLESHOOTING SECTION (Checklist format with exact instructions)
         ============================================================== */}
      <section
        id="troubleshooting"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <HelpCircle className="w-3.5 h-3.5 text-royal" />
              <span>Helpful Diagnostics</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Troubleshooting Your Furnace
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Before calling for emergency service, check these quick troubleshooting steps to see if your system can be easily restored.
            </p>
          </div>

          {/* Checklist Layout */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 lg:p-10">
            <div className="space-y-4 font-body">
              {TROUBLESHOOTING_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-royal/30 hover:bg-[#EAF4FF]/30 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note & Emergency Prompt */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-500 font-body text-center sm:text-left">
                Still experiencing heating issues? Our furnace experts are available 24/7.
              </p>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brightRed hover:bg-brightRed-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-heading shadow-md transition-all flex-shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Tech: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. CTA SECTION (Exact Heading, Phone, and Get A Free Quote)
         ============================================================== */}
      <section
        id="cta-section"
        className="py-16 md:py-20 bg-gradient-to-r from-[#003399] via-[#0055E7] to-[#006BFF] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-6 font-body">
            Contact our Long Island HVAC professionals today for dependable furnace repair, high-efficiency replacements, and 24/7 emergency heating support.
          </p>

          {/* Exact Phone & Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* Phone Display */}
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            {/* Button: Get A Free Quote */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>
          </div>

          {/* Guarantee Details & Business Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs sm:text-sm text-slate-300 font-heading">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-electric" /> Upfront Honest Pricing
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brightYellow" /> 24/7 Emergency Dispatch
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-electric" /> {BUSINESS_LOCATION}
            </span>
          </div>
        </div>
      </section>

      {/* ==============================================================
          GLOBAL FOOTER & MOBILE STICKY BAR (Unmodified & Reused)
         ============================================================== */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* ==============================================================
          REUSED MODALS (Full Interaction Preserved)
         ============================================================== */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
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
