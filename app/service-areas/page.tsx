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
  ArrowRight,
  Sparkles,
  Flame,
  Snowflake,
  Wrench,
  Radio,
  Star,
  ExternalLink,
  Wind,
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
import {
  NassauSeal,
  QueensSeal,
  SuffolkSeal,
  BrooklynSeal,
  ManhattanSeal,
  BronxSeal,
} from '@/components/CountyEmblems';
import {
  NASSAU_COUNTY_LOCATIONS,
  QUEENS_LOCATIONS,
} from '@/data/serviceAreasData';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

export default function ServiceAreasPage() {
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

  // Curated work gallery
  const GALLERY_IMAGES = [
    {
      src: '/247 havc/heat-pump-repair/23788f14-5d4f-4c4f-852b-2023d1705c81.jpg',
      alt: 'Outdoor HVAC Condenser and Heat Pump System in Long Island',
      title: 'High-Efficiency Dual AC & Heat Pump',
      category: 'Cooling Installation',
      location: 'Nassau County, NY',
    },
    {
      src: '/247 havc/heat-pump-repair/55f4dfda-dd29-4407-828c-4b37c1f22c20.jpg',
      alt: 'Licensed HVAC technician inspecting electrical and control circuits',
      title: 'Precision Diagnostics & Electrical Testing',
      category: 'Diagnostic Service',
      location: 'Queens, NY',
    },
    {
      src: '/247 havc/boiler-water-heater/ec2663e6-2ab5-443f-a29e-ccf132cad99c.jpg',
      alt: 'Boiler and mechanical piping installation in a Suffolk County mechanical room',
      title: 'High-Efficiency Hydronic Boiler System',
      category: 'Heating Installation',
      location: 'Suffolk County, NY',
    },
    {
      src: '/247 havc/heat-pump-repair/6085ddc1-72b5-4260-8550-5e08e749e7cc.jpg',
      alt: '247 HVAC technicians servicing outdoor heat-pump and condenser equipment',
      title: 'Emergency Condenser Motor Repair',
      category: 'Emergency Repair',
      location: 'Brooklyn, NY',
    },
    {
      src: '/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg',
      alt: 'Multi-zone ductless mini split heat pump indoor unit mounted neatly on wall',
      title: 'Multi-Zone Ductless Mini-Split System',
      category: 'Ductless Heat Pumps',
      location: 'Baldwin, NY',
    },
    {
      src: '/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg',
      alt: 'High-efficiency gas furnace and mechanical room piping installation in Manhattan',
      title: 'Modulating Gas Furnace Replacement',
      category: 'Furnace Services',
      location: 'Manhattan, NY',
    },
    {
      src: '/247 havc/ac-installation/985ad274-26be-4bb1-82d3-8973d451568c.jpg',
      alt: 'Outdoor central air conditioner condenser unit installed in Garden City, NY',
      title: 'Central Air Conditioner Dual Condenser Unit',
      category: 'Central Air Conditioning',
      location: 'Garden City, NY',
    },
    {
      src: '/247 havc/boiler-water-heater/caeec357-8b06-4b52-bc29-4e69484c3882.jpg',
      alt: 'Boiler and water-heating equipment with copper piping in a Rockville Centre mechanical room',
      title: 'Rapid-Recovery Commercial & Home Water Heater',
      category: 'Water Heating',
      location: 'Rockville Centre, NY',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. GLOBAL HEADER & NAVIGATION */}
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
          2. HERO / BANNER SECTION (Exact Homepage Hero Structure & Styling)
         ============================================================== */}
      <section
        id="home"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Background Hero Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/247 havc/heat-pump-repair/23788f14-5d4f-4c4f-852b-2023d1705c81.jpg"
            alt="247 HVAC of Long Island Service Areas and Mobile Dispatch Network"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          {/* Soft edge blend into brand navy background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        {/* Background Gradient & Radial Dot Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headings, Description, Trust Highlights, CTAs */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-4 shadow-lg font-heading">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span>Serving Long Island Area For Over 30 Years</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Service <span className="text-[#00BFFF] drop-shadow-sm">Areas</span>
              </h1>

              {/* Supporting Subheading */}
              <p className="text-xl sm:text-2xl font-bold text-brightYellow font-heading mb-3">
                Serving Long Island Area For Over 30 Years
              </p>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-6 font-body">
                247 HVAC of Long Island provides heating, cooling and water heater services to all of the Nassau County, Suffolk County, Queens, Brooklyn and Manhattan.
              </p>

              {/* Trust Highlights */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full max-w-xl mb-6 sm:mb-8 font-heading">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">Licensed & Insured Across NY</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">24/7 Emergency Dispatch</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">Heating & Boiler Specialists</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">AC & Mini-Split Experts</span>
                </div>
              </div>

              {/* Action Buttons: Call Us Now, Get A Free Quote, Book An Appointment */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto font-heading">
                {/* 1. Call Us Now */}
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now: {PHONE_NUMBER}</span>
                </a>

                {/* 2. Get A Free Quote */}
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>

                {/* 3. Book An Appointment */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Book An Appointment</span>
                </button>
              </div>

              {/* Area Quick Anchors Bar */}
              <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-white/10 text-xs font-bold font-heading">
                <span className="text-slate-300 uppercase tracking-wider text-[11px]">Jump to County:</span>
                <a
                  href="#nassau"
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  Nassau County ({NASSAU_COUNTY_LOCATIONS.length} Towns)
                </a>
                <a
                  href="#queens"
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  Queens (8 Towns)
                </a>
                <a
                  href="#suffolk"
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  Suffolk County
                </a>
                <a
                  href="#brooklyn"
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  Brooklyn
                </a>
                <a
                  href="#manhattan"
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  Manhattan
                </a>
                <a
                  href="#bronx"
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  Bronx
                </a>
              </div>
            </div>

            {/* Right Column: High-Impact Glassmorphic Dispatch Card */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-[#0E2452]/90 to-[#061A40]/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Coverage Network
                    </span>
                    <h3 className="text-[22px] font-bold text-white font-heading">
                      Mobile Fleet On Patrol
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>24/7 Active</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Nassau & Queens:</strong>{' '}
                      30-45 Minute rapid emergency dispatch.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Suffolk, Brooklyn & Manhattan:</strong>{' '}
                      Full residential & commercial heating, cooling & water heater coverage.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Fully Stocked Vans:</strong>{' '}
                      OEM replacement motors, valves, thermostats, capacitors & igniters.
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">
                      24/7 Direct Hotline
                    </p>
                    <a
                      href={PHONE_TEL}
                      className="text-xl font-black text-brightYellow hover:underline font-heading"
                    >
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
          3. AREAS WE SERVE SECTION (Nassau, Queens, Suffolk, Brooklyn, Manhattan)
         ============================================================== */}
      <section id="areas" className="py-14 sm:py-18 md:py-22 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Section Main Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Service Territory
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Areas We Serve
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              247 HVAC of Long Island delivers responsive, 24/7 heating, cooling, and water heater expertise across Long Island, Queens, Brooklyn, and Manhattan. Discover our dedicated regional coverage below.
            </p>
          </div>

          {/* --------------------------------------------------------
              A. NASSAU COUNTY (All 22 Locations Verbatim + Baldwin Featured)
             -------------------------------------------------------- */}
          <div id="nassau" className="mb-14 sm:mb-18 scroll-mt-24">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
              {/* County Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
                <div className="flex items-center gap-4">
                  <NassauSeal className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-widest font-black text-royal font-heading">
                      Primary Long Island Service Area
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Nassau County
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 font-body">
                      Complete residential and commercial HVAC diagnostics, boiler repairs, heat pump installations, and 24/7 emergency service.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2.5">
                      <Link
                        href="/service-areas/nassau-county"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-royal hover:underline uppercase tracking-wider font-heading"
                      >
                        <span>★ Explore Nassau County Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading whitespace-nowrap">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>30-45 Min Rapid Dispatch</span>
                </span>
              </div>

              {/* Featured Location Banner: Baldwin (Direct Route Available) */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-royal/10 via-electric/10 to-transparent border-2 border-royal/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-royal text-white flex items-center justify-center font-black text-xl font-heading shadow-md flex-shrink-0">
                    ★
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-royal bg-white px-2.5 py-0.5 rounded border border-royal/20 font-heading">
                      Dedicated Town Page
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-navy font-heading mt-1">
                      Baldwin, NY
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-body">
                      Top-rated 24/7 HVAC contractors for homeowners and business owners in Baldwin.
                    </p>
                  </div>
                </div>

                <Link
                  href="/service-areas/baldwin"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm font-heading uppercase tracking-wider transition-all shadow-md whitespace-nowrap"
                >
                  <span>Visit Baldwin Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Nassau County Location Grid (22 Towns) */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-heading">
                    Nassau County Towns & Communities ({NASSAU_COUNTY_LOCATIONS.length} Towns):
                  </h4>
                  <span className="text-xs text-slate-500 font-body hidden sm:inline">
                    24/7 Service Available In Every Neighborhood
                  </span>
                </div>

                <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {NASSAU_COUNTY_LOCATIONS.map((loc) =>
                    loc.isAvailable && loc.href ? (
                      <Link
                        key={loc.name}
                        href={loc.href}
                        className="p-3 rounded-xl bg-royal text-white font-bold text-sm font-heading shadow-md hover:bg-royal-hover transition-all flex items-center justify-between gap-2 group"
                      >
                        <span className="leading-snug">★ {loc.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </Link>
                    ) : (
                      <div
                        key={loc.name}
                        className="p-3 rounded-xl bg-white hover:bg-slate-100/80 border border-slate-200 transition-colors flex items-center justify-between shadow-2xs"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                          <span
                            className="text-xs sm:text-sm font-semibold text-slate-800 truncate font-body"
                            title={loc.name}
                          >
                            {loc.name}
                          </span>
                        </div>
                        <span
                          className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"
                          title="Active 24/7 Dispatch Zone"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------
              B. QUEENS (All 8 Locations Verbatim)
             -------------------------------------------------------- */}
          <div id="queens" className="mb-14 sm:mb-18 scroll-mt-24">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
              {/* County Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
                <div className="flex items-center gap-4">
                  <QueensSeal className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-widest font-black text-royal font-heading">
                      NYC Borough Coverage
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                      Queens
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 font-body">
                      Rapid heating and cooling emergency repair, furnace heat exchanger testing, boiler tuning, and ductless mini-split systems across Queens.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2.5">
                      <Link
                        href="/queens"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-royal hover:underline uppercase tracking-wider font-heading"
                      >
                        <span>★ Explore Queens Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading whitespace-nowrap">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>30-45 Min Rapid Dispatch</span>
                </span>
              </div>

              {/* Queens Location Grid (8 Towns) */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-heading">
                    Queens Neighborhoods Served ({QUEENS_LOCATIONS.length} Towns):
                  </h4>
                  <span className="text-xs text-slate-500 font-body hidden sm:inline">
                    24/7 Mobile Heating & AC Dispatch
                  </span>
                </div>

                <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {QUEENS_LOCATIONS.map((loc) =>
                    loc.isAvailable && loc.href ? (
                      <Link
                        key={loc.name}
                        href={loc.href}
                        className="p-3 rounded-xl bg-royal text-white font-bold text-sm font-heading shadow-md hover:bg-royal-hover transition-all flex items-center justify-between gap-2 group"
                      >
                        <span className="leading-snug">★ {loc.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </Link>
                    ) : (
                      <div
                        key={loc.name}
                        className="p-3.5 rounded-xl bg-white hover:bg-slate-100/80 border border-slate-200 shadow-2xs transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                          <span
                            className="text-xs sm:text-sm font-semibold text-slate-800 truncate font-body"
                            title={loc.name}
                          >
                            {loc.name}
                          </span>
                        </div>
                        <span
                          className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"
                          title="Active 24/7 Dispatch Zone"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------
              C. SUFFOLK COUNTY, BROOKLYN, MANHATTAN, BRONX (4 Dedicated Cards)
             -------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. SUFFOLK COUNTY DEDICATED CARD */}
            <div
              id="suffolk"
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-royal/50 transition-all scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <SuffolkSeal className="w-16 h-16 flex-shrink-0" />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>35-50 Min Dispatch</span>
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading block">
                  Eastern Long Island
                </span>
                <h3 className="text-2xl font-black text-navy font-heading mb-2">
                  Suffolk County, NY
                </h3>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Link
                    href="/suffolk-county"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-royal hover:underline uppercase tracking-wider font-heading"
                  >
                    <span>★ Explore Suffolk County Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                  247 HVAC of Long Island provides full HVAC services across Suffolk County. Our radio-dispatched mobile repair units handle emergency furnace and boiler repairs, central air conditioning replacement, ductless heat pump installations, and seasonal maintenance for homes and businesses throughout Suffolk County.
                </p>

                <div className="space-y-2 mb-6 font-body text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Full Residential & Commercial HVAC Services</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Hydronic & Steam Boiler Repairs & Replacements</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>High-Efficiency Central AC & Heat Pump Systems</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>24/7 Emergency Repairs with No Overtime Charges</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5 font-heading w-full">
                <a
                  href={PHONE_TEL}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brightRed" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Suffolk Service</span>
                </button>
              </div>
            </div>

            {/* 2. BROOKLYN DEDICATED CARD */}
            <div
              id="brooklyn"
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-royal/50 transition-all scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <BrooklynSeal className="w-16 h-16 flex-shrink-0" />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>35-50 Min Dispatch</span>
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading block">
                  NYC Borough Coverage
                </span>
                <h3 className="text-2xl font-black text-navy font-heading mb-3">
                  Brooklyn
                </h3>

                <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                  247 HVAC of Long Island proudly provides comprehensive heating, cooling, and water heater services across Brooklyn. From brownstones and multi-family residences to commercial retail spaces, our licensed technicians install, repair, and maintain high-efficiency heating and air conditioning systems throughout Brooklyn.
                </p>

                <div className="space-y-2 mb-6 font-body text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Complete Heating, Cooling & Water Heater Services</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Brownstone Hydronic & Steam Heating Specialists</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Multi-Zone Ductless Mini-Split Heat Pumps</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>24/7 Emergency Service Across All of Brooklyn</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5 font-heading w-full">
                <a
                  href={PHONE_TEL}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brightRed" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Brooklyn Service</span>
                </button>
              </div>
            </div>

            {/* 3. MANHATTAN DEDICATED CARD */}
            <div
              id="manhattan"
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-royal/50 transition-all scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <ManhattanSeal className="w-16 h-16 flex-shrink-0" />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>45-60 Min Dispatch</span>
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading block">
                  NYC Borough Coverage
                </span>
                <h3 className="text-2xl font-black text-navy font-heading mb-3">
                  Manhattan
                </h3>

                <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                  247 HVAC of Long Island provides expert heating, cooling, and water heater services throughout Manhattan. Our certified technicians specialize in luxury apartments, brownstones, condos, and commercial buildings, delivering fast emergency diagnostics, boiler repairs, and high-efficiency HVAC installations.
                </p>

                <div className="space-y-2 mb-6 font-body text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Complete Heating, Cooling & Water Heater Services</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>High-Rise & Residential Condo HVAC Experts</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Compact & Ductless AC Solutions for City Spaces</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Licensed, Insured & Fully Compliant with NYC Codes</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5 font-heading w-full">
                <a
                  href={PHONE_TEL}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brightRed" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Manhattan Service</span>
                </button>
              </div>
            </div>

            {/* 4. BRONX DEDICATED CARD */}
            <div
              id="bronx"
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-royal/50 transition-all scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <BronxSeal className="w-16 h-16 flex-shrink-0" />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>30-45 Min Dispatch</span>
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading block">
                  NYC Borough Coverage
                </span>
                <h3 className="text-2xl font-black text-navy font-heading mb-1">
                  Bronx
                </h3>

                <Link
                  href="/service-areas/bronx"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-royal hover:underline uppercase tracking-wider font-heading mb-3"
                >
                  <span>★ View Bronx Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                  247 HVAC of Long Island provides reliable residential and commercial HVAC services in Bronx, NY. From apartments and single-family homes to restaurants and commercial facilities, our licensed technicians provide repair, installation, maintenance, and emergency response.
                </p>

                <div className="space-y-2 mb-6 font-body text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Residential &amp; Commercial HVAC Solutions</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Air Conditioning &amp; Heating Repair &amp; Replacement</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Ductless Mini Splits &amp; Ventilation Systems</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>24/7 Emergency HVAC Service in the Bronx</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5 font-heading w-full">
                <Link
                  href="/service-areas/bronx"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-black text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>Explore Bronx Page &rarr;</span>
                </Link>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Bronx Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. HVAC SERVICES WE PROVIDE IN THESE SERVICE AREAS SECTION
             (Two Distinct Panels: Cooling Services & Heating Services)
         ============================================================== */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Complete HVAC Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              HVAC Services We Provide In These Service Areas
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Whether you need fast emergency repairs, scheduled seasonal maintenance, or high-efficiency system replacement, our certified technicians are equipped to serve every community.
            </p>
          </div>

          {/* Two Distinct Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* PANEL 1: HVAC COOLING SERVICES */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                {/* Panel Image & Banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg"
                    alt="Outdoor air conditioning condenser unit installed for residential Long Island cooling"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-royal text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading flex items-center gap-1.5 shadow-md">
                    <Snowflake className="w-3.5 h-3.5 text-electric" />
                    <span>Cooling Solutions</span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-black font-heading mb-1">
                      HVAC Cooling Services
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-body">
                      Precision air conditioning repair, high-efficiency installations & ductless heat pumps.
                    </p>
                  </div>
                </div>

                {/* 4 Required Cooling Services List */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Item 1 */}
                  <Link
                    href="/air-conditioners-installation-replacement"
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 block"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Air Conditioners Installation & Replacement
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        High-SEER central air conditioning systems engineered for maximum efficiency and whole-home comfort.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </Link>

                  {/* Item 2 */}
                  <Link
                    href="/air-conditioning-repair"
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 block"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Air Conditioners Repairs & Maintenance
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        24/7 fast diagnostics, refrigerant leak checks, compressor fixes, fan motor replacements, and seasonal tune-ups.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </Link>

                  {/* Item 3 */}
                  <div
                    onClick={() => handleSelectServiceByName('Air Duct and Ventilation Cleaning')}
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Air Duct and Ventilation Cleaning Service
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        Professional duct sanitization, allergen removal, and airflow optimization to enhance indoor air quality.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </div>

                  {/* Item 4 */}
                  <Link
                    href="/mini-splits-ductless-heat-pumps-air-conditioners"
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 block"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Mini Splits – Ductless Heat Pumps and Air Conditioners
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        Flexible multi-zone heating and cooling for homes without ductwork, historic brownstones, and room additions.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </Link>
                </div>
              </div>

              {/* Panel Footer CTAs */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3 font-heading">
                <Link
                  href="/cooling-services"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-md"
                >
                  Explore All Cooling Services &rarr;
                </Link>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
                >
                  Book Cooling Service
                </button>
              </div>
            </div>

            {/* PANEL 2: HVAC HEATING SERVICES */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                {/* Panel Image & Banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/247 havc/heating-and-controls/d1b426fa-9ec5-45af-9feb-ba543d98c780.jpg"
                    alt="Heating system piping installation and hydronic mechanical room in Long Island"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-brightRed text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading flex items-center gap-1.5 shadow-md">
                    <Flame className="w-3.5 h-3.5 text-brightYellow" />
                    <span>Heating Solutions</span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-black font-heading mb-1">
                      HVAC Heating Services
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-body">
                      Reliable furnace repairs, boiler installations, water heaters, and chimney inspections.
                    </p>
                  </div>
                </div>

                {/* 4 Required Heating Services List */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Item 1 */}
                  <Link
                    href="/furnace-installation-repair-replacement"
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 block"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Furnace Installation, Repair & Replacement
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        High-efficiency gas and electric furnaces, burner diagnostics, safety inspections, and seamless replacements.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </Link>

                  {/* Item 2 */}
                  <Link
                    href="/boiler-installation-repair"
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 block"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Boiler Installation & Repair
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        Hydronic and steam heating solutions, circulator pumps, zone valves, expansion tanks, and combi-boiler installations.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </Link>

                  {/* Item 3 */}
                  <Link
                    href="/water-heater-installation-repair-replacement"
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 block"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Water Heater Installation, Repair & Replacement
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        Tank and tankless water heater maintenance, leak repairs, anode rod replacement, and rapid high-recovery installs.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </Link>

                  {/* Item 4 */}
                  <div
                    onClick={() => handleSelectServiceByName('Chimney Sweep')}
                    className="group p-4 rounded-2xl bg-slate-50 hover:bg-royal/5 border border-slate-200 hover:border-royal/30 transition-all flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-navy group-hover:text-royal font-heading transition-colors">
                        Chimney Sweep
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-body mt-1">
                        Flue inspections, creosote removal, boiler chimney draft verification, and carbon monoxide exhaust safety checks.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-royal group-hover:translate-x-1.5 transition-transform flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>

              {/* Panel Footer CTAs */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3 font-heading">
                <Link
                  href="/heating-services"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-md"
                >
                  Explore All Heating Services &rarr;
                </Link>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
                >
                  Book Heating Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. IMAGE GALLERY SECTION (Showcasing 247 HVAC Work & Systems)
         ============================================================== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Our Recent HVAC Work & Service Gallery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Explore recent air conditioning installations, precision heating repairs, boiler setups, and technician service calls across Long Island, Queens, Brooklyn, and Manhattan.
            </p>
          </div>

          {/* Responsive Modern Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col bg-slate-50"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3 bg-[#061A40]/80 backdrop-blur-md text-electric text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 font-heading">
                    {item.category}
                  </div>

                  {/* Bottom Info inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-brightYellow font-heading font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-brightRed flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold font-heading line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Sub-Card Footer details */}
                <div className="p-3.5 flex items-center justify-between bg-white border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-body flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen" /> 100% Certified Install
                  </span>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="text-xs font-bold text-royal hover:underline font-heading uppercase tracking-wide"
                  >
                    Request Quote &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Reassurance Under Gallery */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-royal text-white flex items-center justify-center font-black flex-shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-navy font-heading">
                  All Work Backed by Our 100% Satisfaction Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-body">
                  EPA certified technicians, upfront quotes, and clean job sites on every residential & commercial project.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 font-heading">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-brightRed" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Service</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. FINAL CALL TO ACTION SECTION (Approved Homepage Colors & Layout)
         ============================================================== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        {/* Subtle dot overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/20 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island & NYC</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading max-w-4xl mx-auto">
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our local HVAC specialists for immediate emergency repair dispatch or to schedule your free consultation across Nassau County, Suffolk County, Queens, Brooklyn, and Manhattan.
          </p>

          {/* 3 Buttons: Call Now, Get A Free Quote, Book Appointment */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* 1. Call Now — Yellow */}
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            {/* 2. Get A Free Quote — Royal Blue */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>

            {/* 3. Book Appointment — Green */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
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
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-brightYellow fill-current" /> 100% Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL FOOTER */}
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
