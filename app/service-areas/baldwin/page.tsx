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
import { NassauSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_LOCATION } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const BALDWIN_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'Air Conditioners Installation & Replacement',
    category: 'cooling',
    image: '/image-website/ac-installation.jpg',
    icon: Snowflake,
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repairs & Maintenance',
    category: 'cooling',
    image: '/image-website/ac-installation-bd.jpg',
    icon: Wrench,
  },
  {
    id: 'air-duct',
    title: 'Air Duct and Ventilation Cleaning Service',
    category: 'cooling',
    image: '/image-website/air-con-installation.jpg',
    icon: Layers,
  },
  {
    id: 'mini-split',
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners',
    category: 'cooling',
    image: '/image-website/heat-pump-installation.jpg',
    icon: Snowflake,
  },
];

const BALDWIN_HEATING_SERVICES: LocationServiceCard[] = [
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
  },
  {
    id: 'chimney',
    title: 'Chimney Sweep',
    category: 'heating',
    image: '/images/furnace-unit.jpg',
    icon: Flame,
  },
];

const BALDWIN_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac.... read more',
    author: 'Willamina Hamnerio',
    location: 'Baldwin, NY Customer',
  },
  {
    id: '2',
    quote:
      'The experience I had was outstanding. My AC stopped working and Edgar was quick to respond and arrive at my home. He quickly diagnosed the problem and fixed it right...',
    author: 'John Simms',
    location: 'Baldwin, NY Customer',
  },
  {
    id: '3',
    quote:
      'I have used 24/7 HVAC of Long Island for the third time and they are true professionals with exceptional customer service. The installer was prompt, honest and left our...',
    author: 'Archie Brooks',
    location: 'Baldwin, NY Customer',
  },
];

export default function BaldwinLocationPage() {
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
          <Link href="/service-areas/nassau-county" className="hover:text-royal transition-colors">
            Nassau County
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Baldwin</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER / HERO SECTION (Identical design & layout to Homepage Hero) */}
      {/* ========================================================================= */}
      <section id="home" className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Background Hero Image - matching homepage overlay & positioning */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero-hvac.jpg"
            alt="Baldwin HVAC Heating and AC Repair - 247 HVAC of Long Island"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        {/* Subtle Gradient & Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Supporting Text, Highlights, Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Supporting text badge: #1 HVAC Services in Baldwin */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">#1 HVAC Services in Baldwin</span>
              </div>

              {/* Main Heading: Baldwin */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Baldwin
              </h1>

              {/* Supporting text: Our Professional & Reliable Technicians Service This Area */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Our Professional & Reliable Technicians Service This Area
              </p>

              {/* Supporting text: 24 Hours Emergency Service Available */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-brightYellow font-bold text-xs sm:text-sm mb-6 font-heading">
                <Clock className="w-4 h-4 text-brightYellow flex-shrink-0" />
                <span>24 Hours Emergency Service Available</span>
              </div>

              {/* Four Trust Highlights - matching homepage layout */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3.5 w-full max-w-xl mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Professional HVAC Contractor</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">24 Hours Emergency Service Available</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Heating Installation & Repairs</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10">
                  <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">AC Installation & Repairs</span>
                </div>
              </div>

              {/* Action Buttons: Call Us Now & Get A Free Quote */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
                {/* 1. Call Us Now */}
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>

                {/* 2. Get A Free Quote */}
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>
              </div>

              {/* Trust reassurance rating */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated HVAC Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Fast 30-45 Min Baldwin Dispatch</span>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card with Dispatch Status (homepage layout) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">Fast Dispatch</span>
                    <h3 className="text-[24px] font-bold text-white font-heading">Baldwin Mobile Units</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Direct local dispatch throughout Baldwin & Nassau County.</span>
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
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Baldwin Emergency Line</p>
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
      {/* 2. ABOUT SECTION (Two-column layout on desktop, stacked on mobile) */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left side: All heading and paragraph text */}
            <div className="flex flex-col items-start w-full">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 font-heading">
                About Our Baldwin HVAC Services
              </span>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5 sm:mb-6 font-heading">
                We Are Proud To Service Our Clients in Baldwin
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body">
                We are the top HVAC contractors in Baldwin and provide our 24/7 emergency service.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body">
                We have many happy homeowners and business owners in Baldwin with our outstanding fast and reliable services.
              </p>

              {/* Exact Paragraph 3 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8 font-body">
                Whether you need repair or installation of a cooling or heating system, we can quickly determine the right solution for your home or business.
              </p>

              {/* Call to action buttons */}
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

            {/* Right side: Relevant image representing Baldwin/HVAC service from public/image-website/ with area name 'Baldwin' label/overlay */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-72 xs:h-80 sm:h-96 md:h-[420px] lg:h-[460px] w-full">
                  <Image
                    src="/image-website/ac-installation-bd.jpg"
                    alt="HVAC service and air conditioning installation technician serving Baldwin, NY"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Visual Location Label / Overlay displaying the area name 'Baldwin' */}
                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">Baldwin</span>
                </div>

                {/* Floating Service Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      Baldwin HVAC Service Area
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Fast, local radio-dispatched service trucks across Baldwin, NY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HVAC SERVICES SECTION (Two clearly separated service groups) */}
      {/* ========================================================================= */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Main Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Complete Heating & Cooling Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In Baldwin
            </h2>
          </div>

          {/* GROUP 1: HVAC Cooling Services */}
          <div className="mb-14 sm:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 border-b border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                <Snowflake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading tracking-tight">
                  HVAC Cooling Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-body">
                  High-efficiency air conditioning, mini-splits, and duct cleaning for Baldwin properties.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BALDWIN_COOLING_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Baldwin, NY`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-md font-heading uppercase tracking-wider bg-royal">
                          <Icon className="w-3.5 h-3.5" />
                          <span>Cooling</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="mb-4">
                        {service.href ? (
                          <Link href={service.href}>
                            <h4 className="text-lg font-bold text-navy group-hover:text-royal transition-colors font-heading leading-snug cursor-pointer">
                              {service.title}
                            </h4>
                          </Link>
                        ) : (
                          <h4 className="text-lg font-bold text-navy group-hover:text-royal transition-colors font-heading leading-snug">
                            {service.title}
                          </h4>
                        )}
                      </div>

                      {/* Card Actions */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 font-heading">
                        {service.href ? (
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:text-royal-hover group/link uppercase tracking-wider"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => setIsQuoteOpen(true)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:text-royal-hover group/link uppercase tracking-wider"
                          >
                            <span>Free Quote</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </button>
                        )}

                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-hvacGreen text-white text-xs font-black shadow hover:bg-hvacGreen-hover active:scale-95 transition-all uppercase tracking-wider"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>Book Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GROUP 2: HVAC Heating Services */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 border-b border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-brightRed/10 text-brightRed flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading tracking-tight">
                  HVAC Heating Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-body">
                  Reliable furnace, boiler, water heater, and chimney services for Baldwin homes and businesses.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BALDWIN_HEATING_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Baldwin, NY`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-md font-heading uppercase tracking-wider bg-brightRed">
                          <Icon className="w-3.5 h-3.5" />
                          <span>Heating</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="mb-4">
                        {service.href ? (
                          <Link href={service.href}>
                            <h4 className="text-lg font-bold text-navy group-hover:text-royal transition-colors font-heading leading-snug cursor-pointer">
                              {service.title}
                            </h4>
                          </Link>
                        ) : (
                          <h4 className="text-lg font-bold text-navy group-hover:text-royal transition-colors font-heading leading-snug">
                            {service.title}
                          </h4>
                        )}
                      </div>

                      {/* Card Actions */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 font-heading">
                        {service.href ? (
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:text-royal-hover group/link uppercase tracking-wider"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => setIsQuoteOpen(true)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:text-royal-hover group/link uppercase tracking-wider"
                          >
                            <span>Free Quote</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </button>
                        )}

                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-hvacGreen text-white text-xs font-black shadow hover:bg-hvacGreen-hover active:scale-95 transition-all uppercase tracking-wider"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>Book Now</span>
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
      {/* 4. TESTIMONIALS SECTION (Exact client quotes & author names preserved) */}
      {/* ========================================================================= */}
      <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <span>Verified Customer Experiences</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Reviews From Baldwin Clients
            </h2>

            {/* 5.0 Star Rating Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-brightYellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-brightYellow" />
                ))}
              </div>
              <span className="font-extrabold text-navy text-base sm:text-lg font-heading">5.0 Star Rating</span>
              <span className="text-slate-400">•</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 font-heading">
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Verified Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Three Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BALDWIN_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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

                  {/* Exact Testimonial Quote */}
                  <p className="text-base text-slate-700 leading-relaxed font-body italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Name and Location */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-navy font-heading block">
                      — {t.author}
                    </span>
                    <span className="text-xs text-slate-500 font-body">{t.location}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-royal font-heading shadow-sm">
                    G
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LOCATION MAP SECTION (Centered on Baldwin, NY, fully responsive) */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Baldwin Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-2 font-body">
              Serving Baldwin, North Baldwin, and neighboring Nassau County communities with fast 24/7 mobile dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Map Embed Container - Centered on Baldwin, NY */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
              <iframe
                src="https://maps.google.com/maps?q=Baldwin,+NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baldwin, NY HVAC Service Area Map"
                className="w-full h-[360px] sm:h-[450px] rounded-xl"
              />
            </div>

            {/* Location Details Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <NassauSeal className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-navy font-heading">
                      Baldwin, NY Service Hub
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active 24/7 Dispatch
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 font-body mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-royal flex-shrink-0 mt-0.5" />
                    <span>Baldwin, Nassau County, New York 11510</span>
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
                    Nearby Nassau Communities
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {['Freeport', 'Oceanside', 'Rockville Centre', 'Hempstead', 'Roosevelt', 'Merrick'].map((c) => (
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

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response in Baldwin, NY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Ready to Schedule Your HVAC Service in Baldwin?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Contact our Baldwin HVAC technicians today for dependable heating, air conditioning, and boiler repairs, maintenance, and installations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Us Now</span>
            </a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Service</span>
            </button>
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
