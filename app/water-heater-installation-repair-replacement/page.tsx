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
  Flame,
  HelpCircle,
  AlertCircle,
  Zap,
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

const WATER_HEATER_BRANDS = [
  { name: 'General Electric (GE)' },
  { name: 'Whirlpool' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'State Industries' },
  { name: 'Bradford White' },
  { name: 'American Water Heaters' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'EcoSmart US' },
];

const WATER_HEATER_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I called this business on 6/2 to inquire about central air installation and David gave me an appt the very same day. I had it installed today 6/4, and...',
    author: 'T R',
    location: 'Verified Long Island Customer',
  },
  {
    id: '2',
    quote:
      'Matthew who did the duct cleaning was super! He was on time, hardworking and above all, very caring and honest! His job is very neat and clean, and pricing was...',
    author: 'Christopher Newman',
    location: 'Verified Long Island Customer',
  },
  {
    id: '3',
    quote:
      'They installed a new heating and cooling system and the technicians were outstanding! They finished the whole thing in one day and the system works perfectly! Great team of hard...',
    author: 'Helen Butler',
    location: 'Verified Long Island Customer',
  },
];

const WATER_HEATER_TIPS = [
  {
    title: 'No Hot Water',
    description:
      'If you have a gas water heater, you might have a faulty thermostat, gas valve, or thermocouple. If you have a power vent, tankless or electric water heater, make sure your unit is plugged in. Also, check to make sure the related circuit breaker in your electrical panel hasn’t been tripped',
  },
  {
    title: 'Water Heater is Leaking',
    description:
      'Contact us immediately and ensure any drains in the vicinity are available and open.',
  },
  {
    title: 'When Should I Replace My Water Heater',
    description:
      'Rusty tank, noisy operation, water collecting under the tank, rust in your hot water',
  },
  {
    title: 'Safety Warning',
    description:
      'Do not attempt to work on your water heater yourself',
  },
];

export default function WaterHeaterInstallationRepairReplacementPage() {
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
    setSelectedService(found || HVAC_SERVICES[2]);
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
            Heating Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Water Heater Installation, Repair & Replacement</span>
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
            src="/image-website/water-heater-installation.jpg"
            alt="Water Heater Installation, Repair & Replacement in Long Island, NY"
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
                <span className="truncate sm:overflow-visible">#1 Water Heater Installation, Repair & Replacement in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Water Heater Installation, Repair & Replacement
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                We install and repair all brands of water heaters in Long Island.
              </p>

              {/* Exact Additional Text */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-electric text-xs sm:text-sm font-bold font-heading mb-6">
                <span>What are the best Water Heater Installation, Repair & Replacement Near Me? We are</span>
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
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Tankless & Tank Water Heaters</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Fast Same-Day Leak & Element Repairs</span>
                </div>
              </div>

              {/* Action Buttons: Call Us Now & Get A Free Quote */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
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

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated Water Heater Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Fast 30-45 Min Long Island Dispatch</span>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">Fast Dispatch</span>
                    <h3 className="text-[24px] font-bold text-white font-heading">Emergency Plumber Units</h3>
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
                    <span><strong className="font-heading font-bold text-white">Licensed & Certified:</strong> Master plumbers and factory certified technicians.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Stocked Vehicles:</strong> Anodes, elements, valves, and emergency replacement tanks.</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Emergency Water Heater Line</p>
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
          2. INTRO SECTION (Trust Us With Water Heater Installation...)
         ============================================================== */}
      <section
        id="intro-section"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2.5 font-heading">
                Long Island Water Heating Experts
              </span>

              {/* Exact Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-4 font-heading">
                Trust Us With Water Heater Installation, Repair & Replacement
              </h2>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-body">
                With well over 30 years of service experience, our experts can help with your water heater repair and installation.
              </p>

              {/* Supporting points */}
              <div className="space-y-3 w-full mb-8 font-body">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-800 font-bold">24/7 Hot Water Tank Repair</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-800 font-bold">New Water Heater Installation</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-800 font-bold">Water Heater Maintenance</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-heading">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Water Heater Service</span>
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

            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/water-heater.jpg"
                  alt="Professional Water Heater Installation & Emergency Repair in Long Island"
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
                      <h4 className="text-sm font-black text-navy font-heading">Years of Reliable Service</h4>
                      <p className="text-xs text-slate-600 font-body">Nassau, Suffolk & Queens plumbing pros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subsections: Repairs & Replacement & Installations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Subsection 1: Repairs */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/images/technician-repair.jpg"
                    alt="Fast Emergency Water Heater Repairs in Long Island"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brightRed text-white text-xs font-black uppercase tracking-wider font-heading shadow-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24/7 Hot Water Repair</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-brightRed flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    {/* Exact Subheading */}
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Repairs
                    </h3>
                  </div>

                  {/* Exact Paragraphs */}
                  <div className="space-y-3 text-base text-slate-600 leading-relaxed font-body">
                    <p>
                      Our team understands just how important a functioning water heater is. From taking a shower to running the washing machine to washing your dishes, you rely on your water heater every single day. So, when something is wrong with your system, you need fast, reliable service.
                    </p>
                    <p>
                      Our team of highly trained and fully qualified technicians is here to get your system back up and running in no time. No matter the time of day or night, give us a call and we will be there right away to diagnose the problem and implement the best possible solution.
                    </p>
                  </div>
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

            {/* Subsection 2: Replacement & Installations */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/image-website/water-heater-installation.jpg"
                    alt="Energy-Efficient Water Heater Replacement and Installation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal text-white text-xs font-black uppercase tracking-wider font-heading shadow-md">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Energy-Efficient Upgrades</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-royal flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    {/* Exact Subheading */}
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Replacement & Installations
                    </h3>
                  </div>

                  {/* Exact Paragraphs */}
                  <div className="space-y-3 text-base text-slate-600 leading-relaxed font-body">
                    <p>
                      When the time comes to replace your old, inefficient water heater, you need a team of plumbers on your side who can find the perfect new system for your home.
                    </p>
                    <p>
                      As the leading HVAC contractor in Long Island, we have access to the top-performing, most energy-efficient water heater equipment on the market. From conventional tank water heaters to heat pump water heaters to tankless water heaters, our team can select and install the perfect water heater system for your home and family. Turn to us for water heater replacement in Seattle, and we guarantee exceptional service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 font-heading">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white font-bold text-sm uppercase tracking-wider transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Get Replacement Estimate</span>
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
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. POPULAR BRANDS SECTION (Exact Brands)
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
              Popular Brands We Do Water Heater Installation, Repair & Replacement
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Certified repairs, genuine OEM parts, and warranty-backed installations for all major water heating brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {WATER_HEATER_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-royal/40 transition-all duration-200 flex flex-col items-center justify-center group h-28 sm:h-32 text-center"
              >
                {brand.image ? (
                  <div className="relative w-full h-14 sm:h-16 flex items-center justify-center">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Water Heater Services`}
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-1">
                    <Droplets className="w-5 h-5" />
                  </div>
                )}
                <span className="text-xs sm:text-sm font-bold text-slate-800 font-heading mt-2 group-hover:text-royal transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. WHY CHOOSE US SECTION (Exact 3 Points)
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
              Why Choose 247 HVAC of Long Island For Water Heater Installation, Repair & Replacement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* 1: Unparalleled Customer Support */}
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
                  Dedicated, friendly plumbing and heating specialists ready to answer questions, guide equipment choices, and assist at every step.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Dedicated Care & Attention</span>
              </div>
            </div>

            {/* 2: 24/7 Service */}
            <div className="bg-gradient-to-br from-[#061A40] via-[#0A2E6E] to-[#061A40] text-white rounded-2xl p-6 sm:p-8 border border-royal/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
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
                  Round-the-clock emergency water heater service and mobile dispatch. When your hot water goes out, we respond quickly with no overtime surprises.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-electric font-heading">
                <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                <span>Zero Overtime Fees</span>
              </div>
            </div>

            {/* 3: Great prices */}
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
                  Transparent flat-rate pricing with upfront quotes before work begins. Exceptional craftsmanship and high-efficiency savings at fair rates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Upfront & Honest Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. TESTIMONIALS SECTION (Exact 3 Testimonials)
         ============================================================== */}
      <section
        id="testimonials"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <span>Verified Customer Feedback</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Our Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {WATER_HEATER_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-brightYellow" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed font-body italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-navy font-heading block">
                      — {t.author}
                    </span>
                    <span className="text-xs text-slate-500 font-body">{t.location}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-royal font-heading">
                    G
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Long Island Areas We Do Water Heater Installation, Repair & Replacement
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Rapid dispatched service vehicles ready across Nassau, Queens, and Suffolk counties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Nassau Areas */}
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
                  Complete water heater repair, replacement, and tankless conversions in Nassau County.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Hempstead', 'Garden City', 'Oyster Bay', 'North Hempstead', 'Long Beach', 'Glen Cove', 'Mineola', 'Great Neck'].map((t) => (
                    <span key={t} className="text-xs bg-white px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/service-areas/nassau-county"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Nassau Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Queens Areas */}
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
                  Emergency hot water tank troubleshooting, gas leaks, and replacements in Queens.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Flushing', 'Astoria', 'Bayside', 'Forest Hills', 'Long Island City', 'Whitestone', 'Howard Beach'].map((t) => (
                    <span key={t} className="text-xs bg-white px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/service-areas#queens"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-royal text-royal hover:bg-royal hover:text-white font-bold text-sm sm:text-base font-heading transition-all shadow-sm group"
              >
                <span>Queens Areas »</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Suffolk Areas */}
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
                  Tankless and conventional residential water heating services throughout Suffolk County.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Huntington', 'Babylon', 'Islip', 'Smithtown', 'Brookhaven', 'Riverhead', 'Melville', 'Commack'].map((t) => (
                    <span key={t} className="text-xs bg-white px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
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
          7. TIPS SECTION (Water Heater Tips)
         ============================================================== */}
      <section
        id="tips"
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
              Water Heater Tips
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert advice for maintaining reliable hot water and knowing when professional service is required.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 lg:p-10">
            <div className="space-y-4 font-body">
              {WATER_HEATER_TIPS.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-royal/30 hover:bg-blue-50/30 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx === 3 ? (
                      <AlertTriangle className="w-4 h-4 text-brightRed" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-navy font-heading mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-500 font-body text-center sm:text-left">
                Experiencing a leak or lack of hot water? Our certified plumbers respond 24/7.
              </p>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brightRed hover:bg-brightRed-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-heading shadow-md transition-all flex-shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Line: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. CTA SECTION (Exact Heading, Phone, Button)
         ============================================================== */}
      <section
        id="cta-section"
        className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden"
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
            Contact our Long Island HVAC and water heating professionals today for dependable repairs, high-efficiency replacements, and 24/7 emergency support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* Phone */}
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

      {/* FOOTER & FLOATING BAR */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />
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
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} onOpenBooking={() => setIsBookingOpen(true)} />
      <ServiceAreaModal area={selectedArea} onClose={() => setSelectedArea(null)} onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
