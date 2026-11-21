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
  Navigation,
  Sparkles,
  Flame,
  Snowflake,
  Wrench,
  ChevronRight,
  Radio,
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
import { NASSAU_COUNTY_LOCATIONS, QUEENS_LOCATIONS } from '@/data/serviceAreasData';
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_LOCATION } from '@/lib/utils';

export default function ServiceAreasOverviewPage() {
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

      {/* HERO SECTION */}
      <section className="relative bg-[#061A40] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Subtle Background Glow & Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-royal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Radio className="w-3.5 h-3.5 text-brightYellow animate-pulse" />
            <span>24/7 Mobile Dispatch Network</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4 font-heading max-w-4xl mx-auto">
            HVAC Service Areas Across Long Island and Surrounding Areas
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Fast, dependable heating, cooling, and air conditioning solutions for homes and businesses across Nassau County, Queens, and Suffolk County, NY.
          </p>

          {/* Quick Jump Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8 font-heading text-xs sm:text-sm">
            <a
              href="#nassau"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all"
            >
              <MapPin className="w-4 h-4 text-brightYellow" />
              <span>Nassau County (27 Locations)</span>
            </a>
            <a
              href="#queens"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all"
            >
              <MapPin className="w-4 h-4 text-electric" />
              <span>Queens (8 Locations)</span>
            </a>
            <a
              href="#suffolk"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all"
            >
              <MapPin className="w-4 h-4 text-brightRed" />
              <span>Suffolk County, NY</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 font-heading">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-brightRed" />
              <span>Direct Hotline: {PHONE_NUMBER}</span>
            </a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-black text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Service</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: NASSAU COUNTY */}
      <section id="nassau" className="py-12 sm:py-16 md:py-20 bg-white text-slate-800 scroll-mt-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* County Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <NassauSeal className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading">
                  Primary Regional Coverage
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy font-heading">
                  Nassau County
                </h2>
                <p className="text-sm text-slate-600 mt-1 font-body">
                  Providing full residential and commercial heating, cooling, and boiler service across Long Island North & South Shores.
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>30-45 Min Rapid Dispatch</span>
            </span>
          </div>

          {/* Featured Location Banner: Baldwin */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-royal/10 via-electric/10 to-transparent border-2 border-royal/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-royal text-white flex items-center justify-center font-black text-xl font-heading shadow-md flex-shrink-0">
                ★
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-royal bg-white px-2 py-0.5 rounded border border-royal/20 font-heading">
                  Dedicated Location Landing Page
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy font-heading mt-1">
                  Baldwin, NY
                </h3>
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

          {/* Nassau County Location Directory Grid (27 Locations) */}
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 font-heading">
              Nassau County Communities Served ({NASSAU_COUNTY_LOCATIONS.length} Towns):
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {NASSAU_COUNTY_LOCATIONS.map((loc) =>
                loc.slug === 'baldwin' ? (
                  <Link
                    key={loc.name}
                    href="/service-areas/baldwin"
                    className="p-3 rounded-xl bg-royal text-white font-bold text-sm font-heading shadow-md hover:bg-royal-hover transition-all flex items-center justify-between group"
                  >
                    <span className="truncate">★ {loc.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                ) : (
                  <div
                    key={loc.name}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 truncate font-body" title={loc.name}>
                        {loc.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" title="Active Dispatch Zone" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUEENS */}
      <section id="queens" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80 scroll-mt-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* County Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <QueensSeal className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading">
                  NYC Borough Coverage
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy font-heading">
                  Queens
                </h2>
                <p className="text-sm text-slate-600 mt-1 font-body">
                  Rapid heating and cooling emergency repair, furnace heat exchanger testing, and ductless mini-split systems across Queens.
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>30-45 Min Rapid Dispatch</span>
            </span>
          </div>

          {/* Queens Location Directory Grid (8 Locations) */}
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 font-heading">
              Queens Communities Served ({QUEENS_LOCATIONS.length} Towns):
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {QUEENS_LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="p-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate font-body" title={loc.name}>
                      {loc.name}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" title="Active Dispatch Zone" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUFFOLK COUNTY, NY */}
      <section id="suffolk" className="py-12 sm:py-16 md:py-20 bg-white text-slate-800 border-t border-slate-200/80 scroll-mt-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* County Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <SuffolkSeal className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-widest font-black text-royal font-heading">
                  Eastern Long Island Coverage
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy font-heading">
                  Suffolk County, NY
                </h2>
                <p className="text-sm text-slate-600 mt-1 font-body">
                  Extensive heating and cooling repair services across Western and Central Suffolk County with fully stocked service trucks.
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-heading">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>35-50 Min Dispatch</span>
            </span>
          </div>

          {/* Suffolk County Highlight Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-navy font-heading mb-2">
                  Complete 24/7 HVAC Coverage Across Suffolk County, NY
                </h3>
                <p className="text-sm text-slate-600 font-body leading-relaxed mb-4">
                  Our licensed technicians provide comprehensive residential and commercial heating, air conditioning, and boiler services throughout Suffolk County, NY. Fully equipped mobile repair units are stationed for fast emergency response.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 font-body">
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen" /> Emergency Boiler Repair
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen" /> Central AC Replacement
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen" /> Oil-to-Gas Conversions
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen" /> Hydronic Heating
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-center md:border-l md:border-slate-200 md:pl-6 font-heading">
                <a
                  href={PHONE_TEL}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brightRed" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Suffolk Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE SERVICES AVAILABLE */}
      <section className="py-12 sm:py-16 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal font-heading">
              Available Across All Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy font-heading mt-1">
              Complete HVAC Services in Every Community
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HVAC_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-navy font-heading mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-body mb-4 line-clamp-3">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  {srv.href ? (
                    <Link
                      href={srv.href}
                      className="text-xs font-bold text-royal hover:underline font-heading flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Explore Service &rarr;</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setSelectedService(srv)}
                      className="text-xs font-bold text-royal hover:underline font-heading flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Learn More &rarr;</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded hover:bg-emerald-100 font-heading"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONTACT CTA BANNER */}
      <section className="py-14 md:py-18 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading mb-3">
            Need Fast HVAC Service in Your Community?
          </h2>
          <p className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-6 font-body">
            Our 24/7 radio-dispatched mobile repair units are ready across Nassau, Queens, and Suffolk County.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 font-heading">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm uppercase tracking-wider shadow-xl"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-black text-sm uppercase tracking-wider shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
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
