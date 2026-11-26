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
  Wind,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  ChevronRight,
  Headphones,
  DollarSign,
  AlertCircle,
  Sparkles,
  Zap,
  Activity,
  HeartPulse,
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
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

const DUCT_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Very knowledgeable tech! They came 15 minutes early and even called to let me know they were on their way. They fixed my heat in no time and were... read more',
    author: 'Lois Higgins',
    location: 'Verified Customer',
  },
  {
    id: '2',
    quote:
      "New furnace installed!! The installation crew arrived on time and were polite and very neat in their work. They explained the new system and it's features so I was comfortable... read more",
    author: 'Joey Williams',
    location: 'Verified Customer',
  },
  {
    id: '3',
    quote:
      'Best plumbing and HVAC professionals in the area. Very prompt to respond and will answer your call or texts even after hours. Highly recommend!',
    author: 'Serge Salganik',
    location: 'Verified Customer',
  },
];

const WHY_CHOOSE_BENEFITS = [
  {
    title: 'Unparalleled Customer Support',
    desc: 'Knowledgeable ventilation experts who evaluate your ductwork, explain every step, and guarantee complete customer satisfaction.',
    icon: Headphones,
  },
  {
    title: '24/7 Service',
    desc: 'Flexible scheduling and 24/7 availability across Long Island to clean your air ducts with zero disruption to your daily routine.',
    icon: Clock,
  },
  {
    title: 'Great prices',
    desc: 'Fair, competitive pricing for comprehensive supply, return, trunk line, and blower cleaning without surprise add-on charges.',
    icon: DollarSign,
  },
];

const DUCT_SIGNS = [
  'You can see dust coming out of the registers when the furnace or air conditioning turns on.',
  'Your furnace is not getting the right amount of airflow, and your technician has determined there are no mechanical causes.',
  'You have experienced flooding or other water damage in your home and suspect a mold problem is developing in your ducts.',
  'There are insects, rodents or other vermin infesting the ducts.',
  'You have recently completed a major home renovation project that may require duct cleaning. Dust can often get in to air ducts – drywall dust and fine sawdust particles are usually a problem.',
  'You have pets that shed hair, feathers and/or dander to a large degree.',
  'You have just moved into a new home, and the previous owners have not had duct cleaning done in the past 3 to 5 years. A cleaning can be especially beneficial if the previous owners had pets or were smokers.',
  'Your home is newly constructed. Some contractors leave dust and other construction debris in the ductwork.',
  'You have severe allergies to mold, pollen or other similar substances. Clean ducts can’t guarantee good health, but when combined with a high-quality filtration system it can improve your comfort.',
];

const DUCT_BENEFITS = [
  {
    title: 'Improve air circulation in your home',
    desc: 'Removing accumulated dust, debris, and blockages restores unobstructed airflow throughout every room.',
    icon: Wind,
  },
  {
    title: 'Control Allergies & Illness',
    desc: 'Eliminating airborne pollen, pet dander, mold spores, and dust mites helps protect respiratory health.',
    icon: HeartPulse,
  },
  {
    title: 'Extend System Life',
    desc: 'Clean ductwork prevents dust and dirt buildup on critical furnace motors, blower fans, and cooling coils.',
    icon: ShieldCheck,
  },
  {
    title: 'Save Energy',
    desc: 'Unrestricted airflow lets your heating and cooling equipment operate at peak seasonal energy efficiency.',
    icon: Zap,
  },
];

export default function AirDuctCleaningPage() {
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
          <span className="text-navy font-bold">Air Duct and Ventilation Cleaning Service</span>
        </div>
      </div>

      {/* ==============================================================
          1. BANNER / HERO SECTION
         ============================================================== */}
      <section
        id="hero-banner"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/247 havc/heat-pump-repair/55f4dfda-dd29-4407-828c-4b37c1f22c20.jpg"
            alt="Air Duct and Ventilation Cleaning Service in Long Island"
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
              {/* Highlight Pill: #1 Air Duct and Ventilation Cleaning Service in Long Island */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl sm:rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="leading-snug">#1 Air Duct and Ventilation Cleaning Service in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Air Duct and Ventilation Cleaning Service
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-4 sm:mb-5 font-body">
                Keep your home’s air clean with duct cleaning services from the trusted professionals
              </p>

              {/* Highlights */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3.5 mb-4 text-xs sm:text-sm font-semibold text-slate-100 font-body">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Professional & Reliable Technicians</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <Clock className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>24 Hours Emergency Service Available</span>
                </div>
              </div>

              {/* Exact Supporting Text */}
              <p className="text-sm sm:text-base font-semibold text-brightYellow mb-5 sm:mb-6 font-body">
                What are the best Air Duct and Ventilation Cleaning Service Near Me? We are
              </p>

              {/* Action Buttons: Call Us Now & Get A Free Quote */}
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
              </div>

              {/* Review Summary */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-brightYellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brightYellow" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star Rated Duct Cleaning</span>
                <span className="text-slate-400">•</span>
                <span>Residential & Commercial Ventilation Systems</span>
              </div>
            </div>

            {/* Desktop Hero Right Card */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Clean Air Guarantee
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">
                      Air Duct Care
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>Certified</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Full System Cleaning:</strong> Supply, return, main trunk line & blowers.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Commercial Grade Vacs:</strong> HEPA-filtered negative pressure extraction.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Healthier Indoor Air:</strong> Eliminates dust, mold spores, and allergens.</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Scheduling Line</p>
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
          2. INTRO SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Thorough & Professional
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Trust Us With Air Duct and Ventilation Cleaning Service
            </h2>
            {/* Exact Description */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-4">
              If you think your home may require air duct and ventilation cleaning, we can provide a thorough and professional level of service.
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-4">
              Regularly cleaning the ducts throughout your home helps remove particles and contaminants circulating the air, such as dust, debris and even mould.
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We provide cleaning service to both residential and commercial duct ventilation systems.
            </p>
          </div>

          {/* Exact Subheading & Duct Cleaning Includes List */}
          <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md">
            <h3 className="text-2xl font-black text-navy mb-6 font-heading text-center sm:text-left">
              Our duct cleaning service includes:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                <span className="font-bold text-navy text-base font-heading">
                  Cleaning of all supply vents.
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                <span className="font-bold text-navy text-base font-heading">
                  Cleaning of all return vents.
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                <span className="font-bold text-navy text-base font-heading">
                  Cleaning of the main trunk line.
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0 mt-0.5" />
                <span className="font-bold text-navy text-base font-heading">
                  External cleaning of the furnace and blower.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. WHY CHOOSE US SECTION
         ============================================================== */}
      <section className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-4 font-heading border border-royal/15">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
              <span>Certified Clean Air Specialists</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Why Choose 247 HVAC of Long Island For Air Duct and Ventilation Cleaning Service
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Proper duct cleaning improves the health, comfort, and HVAC efficiency of your home or commercial building.
            </p>
          </div>

          {/* Exact 3 Points: Unparalleled Customer Support, 24/7 Service, Great prices */}
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

                    <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

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
          4. TESTIMONIALS SECTION
         ============================================================== */}
      <TestimonialsSection
        id="testimonials"
        badgeText="Client Feedback"
        heading="Our Client Testimonials"
        reviews={DUCT_TESTIMONIALS.map((r: any) => ({
          id: r.id,
          name: r.author || r.name,
          location: r.location || 'Verified Customer',
          service: r.service,
          rating: r.rating ?? 5,
          comment: r.quote || r.comment,
        }))}
      />

      {/* ==============================================================
          5. SIGNS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Diagnostic Indicators
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              How to Tell if You Need Duct Cleaning
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              If you observe any of the following warning signs in your home, professional duct and ventilation cleaning will restore your indoor air quality and system performance.
            </p>
          </div>

          {/* Exact 9 Supplied Points */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DUCT_SIGNS.map((sign, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-royal/10 text-royal font-black text-xs flex items-center justify-center flex-shrink-0 font-heading">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-700 font-body leading-relaxed">
                    {sign}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-royal font-heading">
                  <AlertCircle className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                  <span>Duct Inspection Recommended</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. SERVICE AREAS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Coverage & Locations
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Long Island Areas We Do Air Duct and Ventilation Cleaning Service
            </h2>
          </div>

          {/* Exact Links: Nassau, Queens, Suffolk */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 font-heading">
            <Link
              href="/service-areas/nassau-county"
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
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
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
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
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
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
          7. BENEFITS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Key Advantages
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Duct / Ventilation Cleaning Can
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Professional ventilation maintenance delivers tangible benefits for your family’s well-being and your heating and cooling equipment.
            </p>
          </div>

          {/* Exact 4 Supplied Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {DUCT_BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2 font-heading leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                    <span>Proven Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. CTA SECTION
         ============================================================== */}
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
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Long Island ventilation technicians to book your duct cleaning or request a free estimate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* Phone Button */}
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            {/* Button: Get A Free Quote */}
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

      {/* GLOBAL FOOTER & FLOATING ACTIONS */}
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
