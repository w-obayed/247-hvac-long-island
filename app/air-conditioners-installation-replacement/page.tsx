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
  Layers,
  ThermometerSnowflake,
  Award,
  Sparkles,
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

const AC_INSTALL_BRANDS = [
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'Lennox', image: '/image-website/Lennox_jpbqmb.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'Rheem', image: '/image-website/Reem_n2obdg.png' },
  { name: 'Mitsubishi', image: '/image-website/Mitsubisi_gajjhf.png' },
  { name: 'York' },
  { name: 'Daikin', image: '/image-website/daikin_ykfzek.png' },
];

const INSTALLATION_SERVICES = [
  {
    id: 'central-ac-install',
    title: 'Central Air Conditioning Installation',
    description:
      'Precision Manual J load calculations, custom ductwork integration, and installation of modern high-efficiency central cooling systems engineered for Long Island summers.',
    icon: Snowflake,
    image: '/image-website/ac-installation.jpg',
    badge: 'Central Systems',
  },
  {
    id: 'ac-replacement',
    title: 'High-Efficiency AC Replacement & SEER2 Upgrades',
    description:
      'Replace aging, inefficient air conditioning units with state-of-the-art SEER2 rated systems that reduce monthly utility bills by up to 30-40% while delivering whisper-quiet cooling.',
    icon: Zap,
    image: '/image-website/air-con-installation.jpg',
    badge: 'Energy Savings',
  },
  {
    id: 'ductless-install',
    title: 'Ductless Multi-Zone AC Installation',
    description:
      'Perfect for homes without ductwork, home additions, and sunrooms. Independent room-by-room temperature zones with inverter-driven heat pump technology.',
    icon: Layers,
    image: '/images/mini-split.jpg',
    badge: 'Zoned Cooling',
  },
  {
    id: 'commercial-ac',
    title: 'Commercial Air Conditioning Installation',
    description:
      'Turnkey rooftop unit (RTU) installations, split systems, and commercial ventilation engineered for Long Island businesses, retail spaces, and offices.',
    icon: ShieldCheck,
    image: '/images/technician-service.jpg',
    badge: 'Commercial Grade',
  },
];

const COMMON_INSTALLATION_NEEDS = [
  'System is over 10-15 years old and loses cooling efficiency',
  'Frequent, expensive breakdowns and obsolete R-22 refrigerant',
  'Uneven room temperatures and excessive indoor humidity',
  'Substantial spikes in monthly electrical utility bills',
  'Home renovations, additions, or converting from window AC units',
];

const AC_INSTALL_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'The new Central Air install went well. Price was competitive. Got 5 estimates. They were right in the middle. David gave the estimate. The office is easy to deal with. The technicians were super nice guys who cleaned everything up and worked hard. Edgar should have a cocktail as he was in the attic for the day. We decided on using Trane Equipment based on their recommendations as well as researching on our own. So far so good.',
    author: 'Ronald Joslin',
    location: 'Verified Customer',
  },
  {
    id: '2',
    quote:
      'I called this business on 6/2 to inquire about central air installation and David gave me an appt the very same day. I had it installed today 6/4, and the technicians literally just completed the job, from start to finish it was about 12 hours, which was longer than I anticipated, because my set up was a bit complicated, but they got the job done. The 2 technicians was professional, knowledgeable, and their work was done neatly. Customer Service is really A1 which makes all the difference.',
    author: 'T R',
    location: 'Verified Customer',
  },
  {
    id: '3',
    quote:
      "Easy to schedule an appointment, arrive on time, clean, professional, friendly. Explained everything and got the humidifier to work again also. Installed AC in my living room. I love having a maintenance plan so I can catch things before the weather hits.",
    author: "Anthony P. O'Connor",
    location: 'Verified Customer',
  },
  {
    id: '4',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac. My wife was 9 months pregnant at the time and David showed up at 9 at night to make sure she had AC in the middle of the summer! Trustworthy, honest, and a huge help when you need a repair.',
    author: 'Willamina Hamnerio',
    location: 'Verified Customer',
  },
  {
    id: '5',
    quote:
      'Extremely happy with our new unit, although it may be a little time before using it to its full potential, it does look very high tech. The technicians Matthew and David were extremely professional, polite and caring the office team kept us totally up to date and informed. Great service thank you.',
    author: 'Ralph Stender',
    location: 'Verified Customer',
  },
  {
    id: '6',
    quote:
      'Great product installed. Gave the best advice of type of air con that was suitable. The team Matthew and David were always on time and polite. Great communication throughout. A very thorough, professional fit. I am thrilled with my new air con. Would highly recommend them.',
    author: 'Brian Gordon',
    location: 'Verified Customer',
  },
];

const MAINTENANCE_TIPS = [
  'Schedule professional annual pre-season AC checkups before hot summer days',
  'Clean or replace return air filters every 30 to 90 days for peak airflow',
  'Maintain 2 to 3 feet of clear space around the outdoor condenser unit',
  'Upgrade to a programmable or smart WiFi thermostat to optimize run times',
  'Ensure condensate drain lines remain clear to prevent water backup damage',
];

export default function AirConditionersInstallationReplacementPage() {
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
          <Link href="/#services" className="hover:text-royal transition-colors">
            Cooling Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">
            Air Conditioners Installation & Replacement
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
            src="/image-website/ac-installation.jpg"
            alt="Air Conditioners Installation & Replacement in Long Island, NY"
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
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">
                  #1 AC Installation & Replacement in Long Island
                </span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Air Conditioners Installation & Replacement
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Keep your home cool and energy costs down with professional air conditioner installation and replacement across Long Island. We install high-efficiency SEER2 central systems and ductless units backed by full manufacturer warranties.
              </p>

              {/* Supporting Points */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 mb-6 sm:mb-7 text-xs sm:text-sm font-semibold text-slate-100 font-body">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Licensed & Certified HVAC Installers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Free In-Home Replacement Estimates</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Zero-Down Financing Options Available</span>
                </div>
              </div>

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
                  <span>Request In-Home Estimate</span>
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
                <span>Hundreds of 5-Star Reviews Across Long Island</span>
              </div>
            </div>

            {/* Desktop Hero Right Card */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Fast Turnaround
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">
                      AC Replacement Center
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
                    <span><strong className="font-heading font-bold text-white">Installation Time:</strong> Fast same-week system turnaround.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Efficiency:</strong> Up to 22+ SEER2 energy-saving cooling.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Financing Available:</strong> Low-monthly & zero-down plans.</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Installation Line</p>
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
          2. INTRO SECTION (Your Trusted AC Installation Experts)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Certified Cooling Installation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-6 font-heading">
              Your Trusted AC Installation & Replacement Contractors in Long Island
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body text-left sm:text-justify">
              For over 30 years, our team has been helping Long Island homeowners and businesses stay comfortable during hot, humid summers with high-performance air conditioning installations and seamless system replacements. Upgrading to a modern, energy-efficient cooling unit improves indoor comfort, lowers monthly utility bills, and prevents the frustration of mid-summer system breakdowns.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body text-left sm:text-justify">
              Whether you need to replace an older air conditioning unit that relies on outdated refrigerant or want to install central AC in a home without existing ductwork, our certified technicians ensure precise Manual J heat-load calculations, flawless duct connections, and rigorous post-install quality testing.
            </p>
          </div>

          {/* Common AC Installation & Replacement Needs */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 max-w-5xl mx-auto shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                Common Signs It’s Time for AC Replacement:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-body">
              {COMMON_INSTALLATION_NEEDS.map((need, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-royal/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-brightRed flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{need}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600 font-body">
                Ready to find the right cooling system for your home? Contact us today for a free on-site replacement quote.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brightRed hover:bg-brightRed-hover text-white font-bold text-xs uppercase tracking-wider transition-all font-heading"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. SERVICES SECTION (Complete Air Conditioning Installation)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Tailored Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Complete Air Conditioning Installation & Replacement Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We provide full-scope air conditioning installation services tailored to your property’s square footage, architectural layout, and energy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {INSTALLATION_SERVICES.map((service) => {
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/90 text-white text-xs font-black uppercase tracking-wider font-heading shadow-md backdrop-blur-sm">
                        <IconComp className="w-3.5 h-3.5 text-brightYellow" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
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
                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading"
                      >
                        <span>Request Free Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={PHONE_TEL}
                        className="text-xs font-bold text-slate-600 hover:text-brightRed transition-colors font-heading"
                      >
                        Call 24/7
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. POPULAR BRANDS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Authorized Equipment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Popular AC Brands We Install & Replace
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We partner with America’s most trusted HVAC manufacturers to provide cutting-edge SEER2 efficiency, durable compressors, and comprehensive warranties.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {AC_INSTALL_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-royal/30 transition-all duration-300 min-h-[140px]"
              >
                {brand.image ? (
                  <div className="relative w-28 sm:w-36 h-14 sm:h-16 mb-2">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} AC Installation Long Island`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-navy/5 text-navy flex items-center justify-center font-black text-xl font-heading mb-2">
                    {brand.name.substring(0, 2)}
                  </div>
                )}
                <span className="text-sm sm:text-base font-bold text-navy font-heading">
                  {brand.name}
                </span>
                <span className="text-[11px] text-slate-500 font-body">Authorized Installer</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center bg-blue-50/60 border border-blue-100 rounded-xl p-5">
            <p className="text-sm sm:text-base text-slate-700 font-medium font-body">
              All new AC installations include full warranty registration, professional testing, and optional preventative maintenance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. WHY CHOOSE US SECTION (Homepage Master Theme: Clean Light Layout)
         ============================================================== */}
      <section className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Background Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-4 font-heading border border-royal/15">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
              <span>Our Professional Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Why Choose 247 HVAC of Long Island For AC Installation & Replacement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'You are in safe hands',
                desc: 'Over 40 years of local heating and cooling service experience. We prioritize precision, customer comfort, and honest recommendations.',
                icon: ShieldCheck,
              },
              {
                title: 'Expertise and Reliability',
                desc: 'Our certified technicians undergo rigorous ongoing training and use advanced digital testing instruments on every installation.',
                icon: Award,
              },
              {
                title: 'Always Available 24/7',
                desc: 'Round-the-clock emergency support and rapid scheduling when your home cooling cannot wait.',
                icon: Clock,
              },
              {
                title: 'Flexible Financing Options',
                desc: 'Manageable monthly payments, competitive interest rates, and zero-down options make upgrading your AC stress-free.',
                icon: DollarSign,
              },
              {
                title: 'Transparent Upfront Pricing',
                desc: 'Clear, comprehensive quotes detailing equipment, labor, permits, and warranties with zero hidden fees.',
                icon: CheckCircle2,
              },
              {
                title: 'Satisfaction Guaranteed',
                desc: 'We inspect every connection, calibrate your thermostat, and do not leave until your system runs perfectly.',
                icon: Sparkles,
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                        <IconComponent className="w-6 h-6 text-royal" />
                      </div>
                      <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Animated Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                      {feature.desc}
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
          6. TESTIMONIALS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Our Client Testimonials
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-4">
              Homeowners across Long Island trust 247 HVAC for prompt, professional, and neatly completed air conditioning installations.
            </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {AC_INSTALL_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brightYellow" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-body italic mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-navy text-sm font-heading">
                    — {t.author}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 font-body">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. SERVICE AREAS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Communities We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Serving All Communities Across Long Island, NY
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We provide full AC installation, replacement, and warranty services across Nassau, Queens, and Suffolk counties:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8 font-heading">
            <Link
              href="/service-areas/nassau-county"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <NassauSeal className="w-7 h-7 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Nassau Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas#queens"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <QueensSeal className="w-7 h-7 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Queens Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas#suffolk"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <SuffolkSeal className="w-7 h-7 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Suffolk Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-royal flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Brooklyn Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-royal flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Manhattan Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:text-royal-hover uppercase tracking-wider font-heading"
            >
              <span>Explore All Service Locations Across Long Island</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. MAINTENANCE & SYSTEM CARE TIPS
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Longevity & Efficiency
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Maintenance Tips to Maximize Your New AC&apos;s Lifespan
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Proper care ensures your new air conditioning system runs smoothly for 15+ years while keeping energy consumption low.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {MAINTENANCE_TIPS.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-royal/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-royal/10 text-royal flex items-center justify-center font-bold text-sm font-heading flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-base font-semibold text-slate-800 font-body">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          9. CTA SECTION (Homepage Master Style)
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Schedule a free consultation or in-home estimate today. Our cooling technicians will help you choose the best air conditioner for your budget and home size.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* 1. Book Now — Green */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
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
