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
  Layers,
  Wrench,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  MapPin,
  ChevronRight,
  Headphones,
  DollarSign,
  AlertTriangle,
  Flame,
  HelpCircle,
  AlertCircle,
  Zap,
  Snowflake,
  Wind,
  Check,
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
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_LOCATION } from '@/lib/utils';

const MINI_SPLIT_BRANDS = [
  { name: 'Mitsubishi', image: '/image-website/Mitsubisi_gajjhf.png' },
  { name: 'Daikin', image: '/image-website/daikin_ykfzek.png' },
  { name: 'Fujitsu', image: '/image-website/Fujitsu_qfwj4d.png' },
  { name: 'LG' },
  { name: 'Panasonic' },
  { name: 'Mirage' },
];

const MINI_SPLIT_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Moved into a new house that needed the HVAC system updated. Great team! Clean, efficient, came with everything they needed and left the work area clean!',
    author: 'md jahid',
    location: 'Verified Long Island Customer',
  },
  {
    id: '2',
    quote:
      'Very Good! For all of my properties, I use 247. Luis is fantastic and extremely responsive. When my AC quit working on one of the hottest summer days, he helped... read more',
    author: 'Lisandro Parez',
    location: 'Verified Long Island Customer',
  },
  {
    id: '3',
    quote:
      'I have hired 24/7 HVAC several times over the last few years for both A/C and furnace servicing and repair in two homes that I own. They are always responsive,...',
    author: 'Leon Burton',
    location: 'Verified Long Island Customer',
  },
];

const RIGHT_FIT_REASONS = [
  'Live in a home with no ductwork',
  'Are looking for multiple zone control because some of your rooms get hotter than others, or your family has different cooling preferences.',
  'Want a system that is energy efficient (some are more efficient than central systems if zoning is used).',
  'Want a system that blends into your home’s decor. The indoor units come in a variety of looks and can be installed on a wall or on the ceiling',
  'Want minimal installation construction.',
];

export default function MiniSplitsPage() {
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
    setSelectedService(found || HVAC_SERVICES[5]);
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
          <Link href="/#services" className="hover:text-royal transition-colors">
            Cooling Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">
            Mini Splits – Ductless Heat Pumps and Air Conditioners
          </span>
        </div>
      </div>

      {/* ==============================================================
          1. BANNER / HERO SECTION (Homepage Hero Design & Structure)
         ============================================================== */}
      <section
        id="hero-banner"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/image-website/heat-pump-installation.jpg"
            alt="Mini Splits – Ductless Heat Pumps and Air Conditioners in Long Island"
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
              {/* Supporting Point 3 as Top Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">
                  #1 Mini Splits – Ductless Heat Pumps and Air Conditioners in Long Island
                </span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Mini Splits – Ductless Heat Pumps and Air Conditioners
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Enjoy cost-effective home comfort all year round with heat pump system service.
              </p>

              {/* Supporting Points 1 & 2 */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-slate-100 font-body">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Professional & Reliable Technicians</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>24 Hours Emergency Service Available</span>
                </div>
              </div>

              {/* Exact Additional text */}
              <p className="text-sm sm:text-base font-semibold text-brightYellow mb-5 sm:mb-6 font-body">
                What are the best Mini Splits – Ductless Heat Pumps and Air Conditioners Near Me? We are
              </p>

              {/* Action Buttons: Call Us Now & Get A Free Quote (Homepage Master Style) */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-6 sm:mb-8 font-heading">
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Book Free Consultation</span>
                </button>
              </div>

              {/* Review Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-brightYellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brightYellow" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star Rating</span>
                <span className="text-slate-400">•</span>
                <span>Top Ductless Heat Pump Installers in Long Island</span>
              </div>
            </div>

            {/* Desktop Hero Right Card (Matches Homepage Master Style) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Fast Dispatch
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">
                      Ductless Solutions
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Efficiency:</strong> Up to 33+ SEER2 / 2-in-1 Year-Round Comfort.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Smart Zoning:</strong> Independent single & multi-room control.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Rebate Support:</strong> NY Clean Heat rebate certified installers.</span>
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

      {/* ==============================================================
          2. INTRO SECTION (Exact Heading, Paragraphs & Supporting Points)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Energy-Saving Ductless Comfort
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-6 font-heading">
              Trust Us With Mini Splits – Ductless Heat Pumps and Air Conditioners
            </h2>
            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body text-left sm:text-justify">
              Ductless air conditioners (also called “mini split” systems) and heat pumps can be a great solution for older homes that have no existing ductwork. They’re also perfect for attics or home additions that aren’t connected to the ductwork in the rest of the house.
            </p>
            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body text-left sm:text-justify">
              Convenient, cost-effective & efficient, heat pumps offer a 2-in-1 home comfort solution, helping you stay cool through the summer and warm through the winter – all while saving big on energy costs.
            </p>
            {/* Exact Paragraph 3 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body text-left sm:text-justify">
              If you’re looking to switch from a propane, oil or gas-based system, heat pumps provide a perfect 2-in-1 combo.
            </p>
          </div>

          {/* Exact Supporting points as Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-royal/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center mb-5">
                  <Snowflake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-navy mb-3 font-heading">
                  Ductless Air Conditioner
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
                  Incredible cooling efficiency for single rooms.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-royal uppercase tracking-wider font-heading">
                  Single-Zone Precision
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-royal/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brightRed flex items-center justify-center mb-5">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-navy mb-3 font-heading">
                  Heat Pump
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
                  Quiet, efficient cooling and heating for an individual room.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-brightRed uppercase tracking-wider font-heading">
                  Year-Round 2-in-1 Comfort
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-royal/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-navy mb-3 font-heading">
                  Multi-Zone Heat Pump
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
                  Precise cooling and heating control for multiple rooms.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-heading">
                  Whole-Home Flexibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. POPULAR BRANDS SECTION (Popular Brands We Do Mini Splits...)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Premium Manufacturers
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Popular Brands We Do Mini Splits – Ductless Heat Pumps and Air Conditioners
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We install, service, and maintain all industry-leading ductless mini-split and heat pump manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {MINI_SPLIT_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-royal/30 transition-all duration-300 min-h-[140px]"
              >
                {brand.image ? (
                  <div className="relative w-28 sm:w-32 h-14 mb-2">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Mini Split Ductless Heat Pumps`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-navy/5 text-navy flex items-center justify-center font-black text-lg font-heading mb-2">
                    {brand.name.substring(0, 2)}
                  </div>
                )}
                <span className="text-sm font-bold text-navy font-heading">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-500 font-body">Authorized Service</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. WHY CHOOSE US SECTION (Homepage Master Theme: Clean Light Layout)
         ============================================================== */}
      <section className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Background Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-4 font-heading border border-royal/15">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
              <span>Why Customers Rely On Us</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Why Choose 247 HVAC of Long Island For Mini Splits – Ductless Heat Pumps and Air Conditioners
            </h2>
          </div>

          {/* Exact Features (Matching Homepage Master Tokens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Headphones className="w-6 h-6 text-royal" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                    01
                  </span>
                </div>

                <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-xl font-bold text-navy mb-2 font-heading">
                  Unparalleled Customer Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Dedicated system consultants guide you from home sizing and equipment selection to post-installation support.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Clock className="w-6 h-6 text-royal" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                    02
                  </span>
                </div>

                <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-xl font-bold text-navy mb-2 font-heading">
                  24/7 Service
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Round-the-clock emergency assistance and rapid repair response throughout the entire Long Island region.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <DollarSign className="w-6 h-6 text-royal" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                    03
                  </span>
                </div>

                <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-xl font-bold text-navy mb-2 font-heading">
                  Great prices
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Transparent, competitive upfront estimates, utility rebate assistance, and flexible zero-down financing options.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. TESTIMONIALS SECTION (Our Client Testimonials)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Real Client Stories
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
                Rated 5.0 / 5 Across Long Island
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {MINI_SPLIT_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brightYellow" />
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
                    — {t.author}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-body">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. SERVICE AREAS SECTION (Long Island Areas We Do Mini Splits...)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Coverage
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Long Island Areas We Do Mini Splits – Ductless Heat Pumps and Air Conditioners
            </h2>
          </div>

          {/* Exact Links: Nassau Areas », Queens Areas », Suffolk Areas » */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 font-heading">
            <Link
              href="/service-areas#nassau"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <NassauSeal className="w-8 h-8 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Nassau Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas#queens"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <QueensSeal className="w-8 h-8 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Queens Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas#suffolk"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <SuffolkSeal className="w-8 h-8 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Suffolk Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:text-royal-hover uppercase tracking-wider font-heading"
            >
              <span>View All Neighborhoods & Dispatch Zones Across Long Island</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. INFO SECTION (A Ductless/Heat Pump System May Be Right If You)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
                System Compatibility
              </span>
              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
                A Ductless/Heat Pump System May Be Right If You
              </h2>
            </div>

            {/* Exact List */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-4 font-body">
              {RIGHT_FIT_REASONS.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-royal/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 font-heading">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="text-base text-slate-800 font-medium leading-relaxed">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. CTA SECTION (Homepage Master Style)
         ============================================================== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Mini Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Long Island ductless mini-split specialists to discuss zoned heating and cooling solutions for your home.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* 1. Book Now — Green */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>

            {/* 2. Call Now — Yellow */}
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            {/* 3. Get A Free Quote — Royal Blue */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>
          </div>

          {/* Guarantee text */}
          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-300 font-heading">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-electric" /> Upfront Honest Pricing
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brightYellow" /> 24/7 Emergency Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />

      {/* FLOATING ACTION BAR */}
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* MODALS */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <CouponModal isOpen={isCouponOpen} onClose={() => setIsCouponOpen(false)} onBookWithCoupon={() => setIsBookingOpen(true)} />
      <FinancingModal isOpen={isFinancingOpen} onClose={() => setIsFinancingOpen(false)} onOpenBooking={() => setIsBookingOpen(true)} />
      <MaintenanceModal isOpen={isMaintenanceOpen} onClose={() => setIsMaintenanceOpen(false)} onOpenBooking={() => setIsBookingOpen(true)} />
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
