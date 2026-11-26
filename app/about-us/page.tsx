'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  FileText,
  Clock,
  CheckCircle2,
  Star,
  Award,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
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
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

export default function AboutUsPage() {
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
          <span className="text-navy font-bold">About Us</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="#1 HVAC Emergency Services in Long Island"
        title="About Us"
        bullets={[
          { text: "Our Professional & Reliable Technicians Service This Area", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "24 Hours Emergency Service Available", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "#1 HVAC Services in Long Island", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
        ]}
        showCallButton
        callButtonLabel="Call Us Now"
        onOpenQuote={() => setIsQuoteOpen(true)}
        quoteButtonLabel="Get A Free Quote"
      />

      {/* ========================================================================= */}
      {/* 2. ABOUT SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: All Supplied Company Text */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3.5 font-heading">
                <HeartHandshake className="w-4 h-4" />
                <span>Family Owned &amp; Operated</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                About 247 HVAC of Long Island Contractor
              </h2>

              {/* Exact Content — Do Not Rewrite Or Modify */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                <p>
                  We have been servicing the Long Island for over 30 years.
                </p>

                <p>
                  We are family owned, obsessed with quality at every level and have the experience necessary to provide you with reliable air conditioning and heating installation and repair services.
                </p>

                <p>
                  We are committed to providing you and your family with the very best. We can provide you with a variety of cutting-edge solutions, ranging from gas heating systems, high-efficiency systems and more. You’ll save money and love the results.
                </p>

                <p>
                  Our quality service is second to none, and we only employ technicians who are tested, proven and reliable. In short, we want your experience to be an exceptional one. The fact that we enjoy so many referrals and repeat clients is a testament to how hard we work to understand our customers and their needs. We are happy to visit your home and give you an estimate designed around your exact requirements and specific budget.
                </p>

                <p>
                  We are here to meet all of your HVAC needs: from installing a new furnace, fixing your air conditioner, or regular air duct cleaning. Whatever you call us for, we guarantee we’ll get it just right.
                </p>
              </div>

              {/* Action Buttons */}
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

            {/* Right Column: Large, High-Quality HVAC Technician Image */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-80 sm:h-96 md:h-[460px] lg:h-[540px] w-full">
                  <Image
                    src="/247 havc/about-team/18e27d9e-abbd-42a6-871b-8790e7f26557.jpg"
                    alt="Two-person 247 HVAC of Long Island technician team portrait ready for residential and commercial HVAC service"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <Award className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">30+ Years Experience</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-royal text-white flex items-center justify-center font-black text-lg flex-shrink-0 font-heading shadow-md">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-base font-heading leading-tight">
                      Tested, Proven &amp; Reliable Techs
                    </h4>
                    <p className="text-xs text-slate-600 font-body leading-tight mt-1">
                      Licensed master HVAC specialists providing upfront estimates and guaranteed workmanship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Choose 247 HVAC</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Your Friendly, Neighbourhood HVAC Experts
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Long Island homeowners and commercial business owners trust our experienced team for reliable heating and air conditioning care.
            </p>
          </div>

          {/* Three Items in 3 Columns on Desktop and Responsive on Smaller Screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Item 1: Always Ready */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-navy font-heading mb-3">
                  Always Ready:
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-body">
                  We are constantly prepared to help you in any HVAC emergency, and never charge for after-hours calls.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                <span>Zero After-Hours Surcharges</span>
              </div>
            </div>

            {/* Item 2: Real Experience */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brightRed/10 text-brightRed flex items-center justify-center mb-6 group-hover:bg-brightRed group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-navy font-heading mb-3">
                  Real Experience:
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-body">
                  We’ve been at work in Long Island for over 30 years.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-navy font-heading">
                <ShieldCheck className="w-4 h-4 text-hvacGreen" />
                <span>Three Decades of Local Mastery</span>
              </div>
            </div>

            {/* Item 3: Exceptional Reviews */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brightYellow/20 text-navy flex items-center justify-center mb-6 group-hover:bg-brightYellow transition-colors duration-300 shadow-xs">
                  <Star className="w-7 h-7 fill-brightYellow text-brightYellow group-hover:text-navy" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-navy font-heading mb-3">
                  Exceptional Reviews:
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-body">
                  We have an average Google rating of 5.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-600 font-heading">
                <div className="flex items-center text-brightYellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>5.0 Star Rated on Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CTA SECTION */}
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
            Speak directly with our Long Island technicians for prompt heating and air conditioning repair or a free quote.
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

      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* Modals */}
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
