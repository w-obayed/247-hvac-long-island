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
  Droplets,
  Wrench,
  CheckCircle2,
  Star,
  Quote,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Sparkles,
  Gauge,
  Zap,
  Layers,
  ChevronRight,
  ShieldAlert,
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
import { PHONE_NUMBER, PHONE_TEL, PHONE_SMS, BUSINESS_EMAIL, BUSINESS_LOCATION } from '@/lib/utils';

// Brands for Section 5
const POPULAR_BOILER_BRANDS = [
  { name: 'Bosch', image: '/image-website/bosch_j6arde.jpg' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Lennox', image: '/image-website/Lennox_jpbqmb.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'Bryant', image: '/image-website/Bryant_poezku.png' },
  { name: 'Rheem', image: '/image-website/Reem_n2obdg.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'Daikin', image: '/image-website/daikin_ykfzek.png' },
  { name: 'Fujitsu', image: '/image-website/Fujitsu_qfwj4d.png' },
  { name: 'American Standard', image: '/image-website/American_tqzswh.png' },
  { name: 'Heil', image: '/image-website/Heil_isu4oj.png' },
  { name: 'Ruud', image: '/image-website/ruud_sr1jyf.png' },
];

export default function BoilerInstallationRepairPage() {
  // Modal states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);

  // Navigation handlers
  const handleSelectServiceByName = (name: string) => {
    const found = HVAC_SERVICES.find(
      (s) => s.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(s.id)
    );
    if (found) {
      setSelectedService(found);
    } else {
      setSelectedService(HVAC_SERVICES[1]); // Default to boiler
    }
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    if (found) {
      setSelectedArea(found);
    } else {
      setSelectedArea(SERVICE_AREAS[0]);
    }
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

      {/* ==============================================================
          SECTION 1: HERO / BANNER (Matches Homepage Hero Design)
         ============================================================== */}
      <section
        id="hero-banner"
        className="relative bg-[#0055E7] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Background Image with smooth gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          {/* Subtle edge blend into navy background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0055E7] via-[#0055E7]/60 sm:via-[#0055E7]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0055E7] sm:from-[#0055E7]/80 via-transparent to-transparent" />
        </div>

        {/* Ambient Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0055E7] via-[#0055E7]/90 sm:via-[#0055E7]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#006BFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Description, Trust Highlights, CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl sm:rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="leading-snug">#1 Boiler Services in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Boiler Installation & Repair
              </h1>

              {/* Exact Description */}
              <p className="text-base text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Our experienced HVAC technicians have been installing, repairing, and servicing boilers in homes across Long Island for over 40 years.
              </p>

              {/* Exact Supporting Text */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-electric text-xs sm:text-sm font-bold font-heading mb-6">
                <span>What are the best Boiler Installation & Repair Near Me? We are are 🙂</span>
              </div>

              {/* Four Trust Badges */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3.5 w-full max-w-xl mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">40+ Years of Boiler Expertise</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">24/7 Emergency Repairs</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">High-Efficiency Gas & Oil Boilers</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Hydronic Radiant & Steam Pros</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
                {/* 1. Call Now */}
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-white text-[#003399] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>

                {/* 2. Book Now */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Book Now</span>
                </button>

                {/* 3. Get Free Quote */}
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#006BFF] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0055E7] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get Free Quote</span>
                </button>
              </div>

              {/* Trust reassurance rating */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated Boiler Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Nassau & Suffolk County 24/7 Coverage</span>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card with Dispatch Status (Matches Homepage Hero) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">Fast Dispatch</span>
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
                    <span><strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Nassau, Queens & Western Suffolk.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Licensed & Certified:</strong> EPA universal, OSHA compliant master technicians.</span>
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
          SECTION 2: TRUST US WITH BOILER INSTALLATION & REPAIR
         ============================================================== */}
      <section
        id="trust-section"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Description & Trust Highlight Cards */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2.5 font-heading">
                Long Island Hydronic Heating Specialists
              </span>

              {/* Exact Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-4 font-heading">
                Trust Us With Boiler Installation & Repair
              </h2>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-body">
                We know what your home needs to keep comfortable and save you money. No matter what type of hydronic heating or boiler systems you may have, we are here to support you.
              </p>

              {/* Feature Grid inspired by homepage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy font-heading">Hydronic Heating Pros</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body">
                      Precision maintenance for baseboard, radiator, and radiant in-floor systems.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#25843D] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy font-heading">Licensed & Certified</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body">
                      Master technicians adhering to strict New York safety codes and standards.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-brightRed flex items-center justify-center flex-shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy font-heading">Energy Cost Savings</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body">
                      Modern AFUE rated boilers designed to lower fuel bills and temperature cycling.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF4FF] text-royal flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy font-heading">24/7 Rapid Response</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body">
                      Round-the-clock emergency support when your heat goes out on cold days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-Action row */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-sm sm:text-base font-heading uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Boiler Service</span>
                </button>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy font-bold text-sm sm:text-base font-heading uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-royal" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Professional Boiler Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg"
                  alt="Large mechanical room with commercial and residential boilers and extensive hydronic piping"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-royal text-white flex items-center justify-center font-black font-heading">
                      40+
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-navy font-heading">Decades of Local Trust</h4>
                      <p className="text-xs text-slate-600 font-body">Serving Nassau, Suffolk & Queens homes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 3: REPAIR AND INSTALLATION (Two Distinct Areas)
         ============================================================== */}
      <section
        id="repair-and-installation"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <span>Complete Boiler Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Repair and Installation
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert diagnostics, 24/7 emergency heat restoration, and precision heating system installations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* AREA 1: REPAIR */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Image Banner */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/247 havc/boiler-water-heater/8483fee8-b421-4e93-8caa-1ba9a4452e42.jpg"
                    alt="Boiler and precision copper piping diagnostics and 24/7 heating repair"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl sm:rounded-full bg-brightRed text-white text-xs font-black uppercase tracking-wider font-heading shadow-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24/7 Emergency Service</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-brightRed flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Repair
                    </h3>
                  </div>

                  {/* Exact Repair Text */}
                  <p className="text-base text-slate-600 leading-relaxed font-body">
                    We provide homeowners with reliable, round-the-clock residential repair services for central home heating systems. When it comes to keeping your home comfortable and warm with adequate heat, our furnace repair experts have your needs covered. No matter the issue, or brand of gas furnace, our pros are here 24/7 to troubleshoot and repair.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brightRed hover:bg-brightRed-hover text-white font-bold text-sm font-heading uppercase tracking-wider transition-all"
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

            {/* AREA 2: INSTALLATION */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Image Banner */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/247 havc/boiler-water-heater/f23c42ec-a040-404f-9e77-2b4778c6b5e6.jpg"
                    alt="High-efficiency boiler and clean copper piping installation in a Long Island mechanical room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal text-white text-xs font-black uppercase tracking-wider font-heading shadow-md">
                    <Flame className="w-3.5 h-3.5" />
                    <span>High-Efficiency Systems</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-royal flex items-center justify-center flex-shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Installation
                    </h3>
                  </div>

                  {/* Exact Installation Text */}
                  <div className="space-y-3 text-base text-slate-600 leading-relaxed font-body">
                    <p>
                      Each home’s boiler heating system is distinct. You can rely on us to install the boiler that works best with your home hydronic heating system. Our energy efficient gas boilers offer the very latest in heating technology. These boiler systems are designed to deliver more comfort and more control, minimizing temperature cycling and saves money on your hydro and energy bills.
                    </p>
                    <p className="font-semibold text-navy">
                      With a new boiler system you will notice a dramatic improvement in your home comfort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white font-bold text-sm font-heading uppercase tracking-wider transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Get Installation Estimate</span>
                  </button>
                  <button
                    onClick={() => setIsFinancingOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:underline font-heading"
                  >
                    <span>Financing Options Available »</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 4: BOILER REPAIR OR REPLACEMENT WARNING SIGNS
         ============================================================== */}
      <section
        id="warning-signs"
        className="py-12 sm:py-16 md:py-20 bg-white text-slate-800"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/40 border-2 border-amber-200/90 p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
            {/* Subtle Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Alert Icon Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider mb-2.5 font-heading">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Important Diagnostic Notice</span>
                </div>

                {/* Exact Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-3 font-heading">
                  How do you know if you need boiler repair/replacement?
                </h2>

                {/* Exact Text Preserved Word for Word */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-6">
                  Even the best-built boiler will need repair or replacement at some point. If yours is more than 15 years old or if you’re experiencing any of the issues below:
                </p>

                {/* Call to action & booking prompt */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy hover:bg-navy-light text-white font-bold text-sm sm:text-base font-heading uppercase tracking-wider transition-all shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-brightYellow" />
                    <span>Schedule Diagnostic Inspection</span>
                  </button>

                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brightRed hover:bg-brightRed-hover text-white font-bold text-sm sm:text-base font-heading uppercase tracking-wider transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Call 24/7 Hotline: {PHONE_NUMBER}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 5: POPULAR BRANDS
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
              Popular Brands We Do Boiler Installation & Repair
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Certified repairs, genuine OEM parts, and warranty-backed installations for all major heating equipment manufacturers.
            </p>
          </div>

          {/* Grid of Popular Brand Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {POPULAR_BOILER_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-royal/40 transition-all duration-200 flex flex-col items-center justify-center group h-28 sm:h-32"
              >
                <div className="relative w-full h-14 sm:h-16 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Boiler Installation & Repair`}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
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
          SECTION 6: WHY CHOOSE 247 HVAC
         ============================================================== */}
      <section
        id="why-choose-us"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading & Guarantee Box */}
            <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-4 font-heading border border-royal/15">
                <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
                <span>The 247 HVAC Difference</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-[1.15] mb-6 font-heading">
                Why Choose 247 HVAC of Long Island For Boiler Installation & Repair
              </h2>

              {/* Guarantee Card */}
              <div className="w-full rounded-2xl bg-gradient-to-br from-[#003399] via-[#0055E7] to-[#003399] text-white p-6 sm:p-7 shadow-xl border border-royal/20 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-royal text-white flex items-center justify-center font-black flex-shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                      100% Satisfaction Commitment
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-body mt-0.5">
                      Licensed, insured, and certified Long Island technicians
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-heading relative z-10">
                  <span className="flex items-center gap-1.5 text-brightYellow font-bold">
                    <Star className="w-3.5 h-3.5 fill-current text-brightYellow" />
                    <span>5.0 Star Rated Service</span>
                  </span>
                  <span className="text-electric font-bold tracking-wide">
                    Zero Overtime Fees
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Feature Cards (Reusing Verified Homepage Standards) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Feature 01 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-royal" />
                    </div>
                    <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                      01
                    </span>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 font-heading">
                    Professional Service
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                    Polite, uniformed, background-checked technicians who arrive promptly and treat your home with total respect.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="bg-gradient-to-br from-[#003399] via-[#0055E7] to-[#003399] text-white rounded-2xl p-6 sm:p-7 border border-royal/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 text-electric flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-6 h-6 text-electric" />
                    </div>
                    <span className="text-xs font-black font-heading tracking-widest text-electric bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                      02
                    </span>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-electric to-royal w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                    Expertise & Reliability
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-body">
                    Over 30 years troubleshooting and servicing complex heating, ventilation, and air conditioning systems.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-electric font-heading">
                  <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>

              {/* Feature 03 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-brightRed flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-brightRed" />
                    </div>
                    <span className="text-xs font-black font-heading tracking-widest text-brightRed bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      03
                    </span>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-brightRed to-amber-500 w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 font-heading">
                    24/7 Emergency Availability
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                    Round-the-clock emergency dispatch with no overtime charges for critical heating & AC outages.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>

              {/* Feature 04 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#25843D] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#25843D]" />
                    </div>
                    <span className="text-xs font-black font-heading tracking-widest text-[#25843D] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      04
                    </span>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-[#25843D] to-emerald-400 w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 font-heading">
                    Honest Upfront Pricing
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                    Transparent flat-rate estimates provided before any work starts. No surprise fees or hidden costs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 7: CLIENT TESTIMONIALS
         ============================================================== */}
      <TestimonialsSection
        id="testimonials"
        badgeText="Verified Customer Feedback"
        heading="Our Client Testimonials"
        reviews={[
          {
            id: '1',
            name: '— md jahid',
            location: 'Verified Customer',
            comment:
              'Moved into a new house that needed the HVAC system updated. Great team! Clean, efficient, came with everything they needed and left the work area clean!',
          },
          {
            id: '2',
            name: '— Dale Hall',
            location: 'Verified Customer',
            comment:
              'Highly professional, friendly and affordable service. I had a cooling & heating system installed at my art school a couple of weeks ago and I am so pleased to have... read more',
          },
          {
            id: '3',
            name: '— K Red',
            location: 'Verified Customer',
            comment:
              'Ridiculously great service! Really unparalleled. Our central air conditioner broke in the hottest week of July 2021. I googled "24 hour a/c repair service" and came up with this company---called... read more',
          },
        ]}
      />

      {/* ==============================================================
          SECTION 8: SERVICE AREAS
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
              Long Island Areas We Do Boiler Installation & Repair
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
                  Complete boiler installation, heating maintenance, and emergency repair throughout Nassau.
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
              <button
                onClick={() => {
                  setSelectedArea(SERVICE_AREAS[0]);
                }}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Nassau Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
                  Specialized boiler troubleshooting, gas line repairs, and hydronic heating systems in Queens.
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
              <button
                onClick={() => {
                  setSelectedArea(SERVICE_AREAS[2]);
                }}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Queens Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
                  Residential hydronic baseboard, radiant and steam boiler repair across Western & Central Suffolk.
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
              <button
                onClick={() => {
                  setSelectedArea(SERVICE_AREAS[1]);
                }}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Suffolk Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 9: THREE TYPES OF BOILERS
         ============================================================== */}
      <section
        id="types-of-boilers"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Section Header & Exact Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Droplets className="w-3.5 h-3.5 text-royal" />
              <span>System Comparison</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Three Types of Boilers
            </h2>

            {/* Exact Introduction Preserved Word for Word */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              Boilers can be either condensing or non-condensing. A non-condensing boiler draws air from inside the room where it’s installed. A condensing boiler is fully sealed and draws air directly from the outside air through a hose and vent.
            </p>
          </div>

          {/* Three Content Cards (3 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Conventional Boiler */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-navy mb-3 font-heading">
                  Conventional Boiler
                </h3>
                {/* Exact Text */}
                <p className="text-base text-slate-600 leading-relaxed font-body">
                  A conventional boiler provides heat on-demand directly to your central heating system and heats water that can be stored in a tank. This option is ideal for large homes that have more than one bathroom.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-royal font-heading uppercase tracking-wider">
                  Ideal for Multi-Bathroom Homes
                </span>
                <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
              </div>
            </div>

            {/* Card 2: High-efficiency System Boiler */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brightRed flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-navy mb-3 font-heading">
                  High-efficiency System Boiler
                </h3>
                {/* Exact Text */}
                <p className="text-base text-slate-600 leading-relaxed font-body">
                  A high-efficiency system boiler provides heat directly to your central heating system. It is more energy-efficient than a conventional boiler and can be installed in a smaller space.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-brightRed font-heading uppercase tracking-wider">
                  Compact & Energy Efficient
                </span>
                <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
              </div>
            </div>

            {/* Card 3: Combination (Combi) Boiler */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#25843D] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-navy mb-3 font-heading">
                  Combination (Combi) Boiler
                </h3>
                {/* Exact Text */}
                <p className="text-base text-slate-600 leading-relaxed font-body">
                  A combination boiler provides heat and hot water throughout your home without the need for a storage tank. These boilers have the highest efficiency ratings, can provide in-floor heating to multiple zones and can be installed in small spaces.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#25843D] font-heading uppercase tracking-wider">
                  Tankless Heat & Hot Water
                </span>
                <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION 10: CONTACT AND BOOKING
         ============================================================== */}
      <section
        id="contact-booking"
        className="py-16 md:py-20 bg-gradient-to-r from-[#003399] via-[#0055E7] to-[#006BFF] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Ready to Schedule Your Boiler Installation or Repair?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Contact our Long Island HVAC professionals today for dependable hydronic heating and boiler solutions, 24/7 emergency repairs, and free replacement estimates.
          </p>

          {/* 3 Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* 1. Book Now — Green */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Boiler Service</span>
            </button>

            {/* 2. Call Now — Yellow */}
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call {PHONE_NUMBER}</span>
            </a>

            {/* 3. Free Quote — Royal Blue */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get Free Estimate</span>
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
