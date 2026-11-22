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
  Droplets,
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
  HelpCircle,
  AlertCircle,
  Zap,
  Layers,
  ThermometerSnowflake,
  Award,
  Sparkles,
  Check,
  Wind,
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

const COOLING_BRANDS = [
  { name: 'Mitsubishi', image: '/image-website/Mitsubisi_gajjhf.png' },
  { name: 'Daikin', image: '/image-website/daikin_ykfzek.png' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'York' },
  { name: 'Bryant', image: '/image-website/Bryant_poezku.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'American Standard', image: '/image-website/American_tqzswh.png' },
];

const COOLING_SERVICES_LIST = [
  {
    id: 'ac-installation',
    title: 'Air Conditioners Installation & Replacement',
    description:
      'Professional central air conditioner installations, replacements, and high-efficiency cooling upgrades engineered for Long Island summers.',
    icon: Snowflake,
    badge: 'High-Efficiency SEER2',
    href: '/air-conditioners-installation-replacement',
    image: '/image-website/ac-installation.jpg',
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repair & Maintenance',
    description:
      'Fast diagnostics and repairs for all cooling issues, frozen coils, refrigerant leaks, electrical faults, and emergency breakdowns.',
    icon: Wrench,
    badge: '24/7 Rapid Diagnostics',
    href: '/air-conditioning-repair',
    image: '/images/ac-repair.jpg',
  },
  {
    id: 'mini-splits',
    title: 'Mini Splits Installation, Repair & Replacement',
    description:
      'Versatile multi-zone and single-room ductless heat pumps delivering whisper-quiet cooling and heating without ductwork.',
    icon: Layers,
    badge: 'Ductless Multi-Zone',
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
    image: '/images/mini-split.jpg',
  },
];

const WHY_CHOOSE_BENEFITS = [
  {
    title: 'Unparalleled Customer Support',
    desc: 'Dedicated cooling specialists guiding you from system sizing and diagnostics to prompt post-service assistance.',
    icon: Headphones,
  },
  {
    title: '24/7 Service',
    desc: 'Round-the-clock emergency repair dispatch across Nassau, Queens, and Suffolk when high heat strikes.',
    icon: Clock,
  },
  {
    title: 'Great prices',
    desc: 'Clear upfront pricing, transparent quotes with zero hidden fees, and flexible financing with utility rebate assistance.',
    icon: DollarSign,
  },
];

const COOLING_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac.... read more',
    author: 'Willamina Hamnerio',
    location: 'Verified Customer',
  },
  {
    id: '2',
    quote:
      'I was in need of a heating repair and I called 24/7 HVAC of Long Island when it started to get cold outside. They came out and had the problem... read more',
    author: 'Terry Nelson',
    location: 'Verified Customer',
  },
  {
    id: '3',
    quote:
      'Awesome customer service! My heat stopped working. They came on time fixed the issue and were very clean!',
    author: 'Sanjee Sanjee',
    location: 'Verified Customer',
  },
];

export default function CoolingServicesPage() {
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
    setSelectedService(found || HVAC_SERVICES[3]);
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
          <span className="text-navy font-bold">HVAC Cooling Services</span>
        </div>
      </div>

      {/* ==============================================================
          1. BANNER / HERO SECTION (Homepage & Heating Hero Design)
         ============================================================== */}
      <section
        id="hero-banner"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/images/air-conditioner.jpg"
            alt="HVAC Cooling Services in Long Island, NY"
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
                <span className="truncate sm:overflow-visible">#1 HVAC Cooling Services in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                HVAC Cooling Services
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Looking for the best way to stay cool through the summer? Whether you need to repair your a/c equipment or replace an older unit that can’t be fixed, we offer a wide range of high-efficiency air conditioner solutions.
              </p>

              {/* Exact Supporting Points */}
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
                What are the best HVAC Cooling Services Near Me? We are
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
                  <span>Book Service Now</span>
                </button>
              </div>

              {/* Review Summary */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-brightYellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brightYellow" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star Rating</span>
                <span className="text-slate-400">•</span>
                <span>Hundreds of 5-Star Reviews Across Long Island</span>
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
                      Rapid AC Dispatch
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
                    <span><strong className="font-heading font-bold text-white">24/7 Response:</strong> Nassau, Queens & Western Suffolk.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Certified AC Techs:</strong> Central AC, Mini-Splits & Heat Pumps.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Fully Stocked Vehicles:</strong> Over 1,000 OEM replacement parts on hand.</span>
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
          2. SERVICES SECTION (Trust Us With HVAC Cooling Services)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Comprehensive Cooling Solutions
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Trust Us With HVAC Cooling Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              At 247 HVAC of Long Island, we deliver top-rated air conditioning and ductless cooling services to ensure peak energy efficiency and reliable indoor comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {COOLING_SERVICES_LIST.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/90 text-white text-xs font-black uppercase tracking-wider font-heading shadow-md backdrop-blur-sm">
                        <IconComp className="w-3.5 h-3.5 text-brightYellow" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-royal flex items-center justify-center flex-shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading group/btn"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="text-xs font-bold text-slate-600 hover:text-brightRed transition-colors font-heading"
                      >
                        Schedule Service
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. BRANDS SECTION (Popular Brands We Do HVAC Cooling Services)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Relevant Cooling System Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/image-website/ac-installation.jpg"
                  alt="Popular Brands We Do HVAC Cooling Services - High Efficiency AC Installation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy/90 text-white backdrop-blur-md border border-white/10 shadow-lg">
                  <span className="text-[11px] font-black uppercase tracking-wider text-brightYellow block font-heading">
                    Multi-Brand Cooling Mastery
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-body">
                    Certified technicians carrying genuine OEM replacement parts for all major air-conditioning manufacturers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Introduction, Brand List & Closing Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
                Authorized Manufacturer Care
              </span>
              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
                Popular Brands We Do HVAC Cooling Services
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed mb-6">
                As a leading cooling company in Long Island, we install, service, and maintain all industry-leading air conditioner and ductless heat pump brands:
              </p>

              {/* Brands Grid with Real Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full mb-6">
                {COOLING_BRANDS.map((brand, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-sm hover:border-royal/30 transition-all min-h-[110px]"
                  >
                    {brand.image ? (
                      <div className="relative w-24 sm:w-28 h-10 mb-1.5">
                        <Image
                          src={brand.image}
                          alt={`${brand.name} HVAC Cooling Services Long Island`}
                          fill
                          className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-navy/5 text-navy flex items-center justify-center font-black text-sm font-heading mb-1.5">
                        {brand.name.substring(0, 2)}
                      </div>
                    )}
                    <span className="text-xs sm:text-sm font-bold text-navy font-heading">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Closing Paragraph */}
              <div className="w-full bg-blue-50/70 border border-blue-100 rounded-xl p-4 sm:p-5">
                <p className="text-sm sm:text-base text-slate-700 font-medium font-body leading-relaxed">
                  No matter the brand or system type, we provide reliable cooling and air conditioning repair services in Long Island with precision and attention to detail.
                </p>
              </div>
            </div>
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
              Why Choose 247 HVAC of Long Island For HVAC Cooling Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Working with the right cooling contractor in Long Island ensures uninterrupted comfort and peak SEER2 energy efficiency.
            </p>
          </div>

          {/* Exact 3 Benefits (Matching Homepage Master Tokens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {WHY_CHOOSE_BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                        <IconComp className="w-6 h-6 text-royal" />
                      </div>
                      <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Animated Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                    {/* Exact Title */}
                    <h3 className="text-xl font-bold text-navy mb-2 font-heading">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Guaranteed Standards</span>
                  </div>
                </div>
              );
            })}
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

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {COOLING_TESTIMONIALS.map((t) => (
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
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. SERVICE AREAS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Coverage & Locations
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Long Island Areas We Do HVAC Cooling Services
            </h2>
          </div>

          {/* Exact Links: Nassau, Queens, Suffolk */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 font-heading">
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
              <span>Explore All Towns & Neighborhoods Across Long Island</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. FINAL CTA SECTION (Homepage Master Style)
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
            Speak directly with our Long Island cooling technicians for fast air conditioning diagnostics, repairs, or a free installation estimate.
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
