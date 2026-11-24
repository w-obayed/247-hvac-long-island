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
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const ELMONT_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'Air Conditioners Installation & Replacement',
    category: 'cooling',
    image: '/image-website/ac-installation.jpg',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repairs & Maintenance',
    category: 'cooling',
    image: '/image-website/ac-installation-bd.jpg',
    icon: Wrench,
    href: '/air-conditioning-repair',
  },
  {
    id: 'air-duct',
    title: 'Air Duct and Ventilation Cleaning Service',
    category: 'cooling',
    image: '/image-website/air-con-installation.jpg',
    icon: Layers,
    href: '/air-duct-and-ventilation-cleaning-service',
  },
  {
    id: 'mini-split',
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners',
    category: 'cooling',
    image: '/image-website/heat-pump-installation.jpg',
    icon: Snowflake,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
  },
];

const ELMONT_HEATING_SERVICES: LocationServiceCard[] = [
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
    href: '/water-heater-installation-repair-replacement',
  },
  {
    id: 'chimney',
    title: 'Chimney Sweep',
    category: 'heating',
    image: '/images/furnace-unit.jpg',
    icon: Flame,
    href: '/chimney-sweep',
  },
];

const ELMONT_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I called them and spoke to David around 630pm as my AC stopped working. He was prompt and arrived at my house within 1 hour. Provided great service. Thanks',
    author: 'Lee Moreno',
    location: 'Elmont Client',
  },
  {
    id: '2',
    quote:
      'David and crew did a great job on getting the furnace running again. Thanks for the effort. Will use again this company.',
    author: 'Mark Sargeant',
    location: 'Elmont Client',
  },
  {
    id: '3',
    quote:
      'Luis replaced a heat pump. He was very professional, polite, and solved the problem. We would use Luis for other appliance needs..?',
    author: 'Thomas Morgan',
    location: 'Elmont Client',
  },
];

export default function ElmontLocationPage() {
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
          <span className="text-navy font-bold">Elmont</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center bg-gradient-to-br from-[#061A40] via-[#0E2452] to-[#004B99] text-white overflow-hidden py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25"
          style={{ backgroundImage: `url('/image-website/ac-installation.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40]/95 via-[#061A40]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 border border-white/15 font-heading">
              <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
              <span>Nassau County Border • Rapid Response Hub</span>
            </div>

            {/* Exact Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-heading">
              Elmont
            </h1>

            {/* Exact Bullet Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-white font-heading">
                  Our Professional & Reliable Technicians Service This Area
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-electric flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  24 Hours Emergency Service Available
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  #1 HVAC Services in Elmont
                </span>
              </div>
            </div>

            {/* Exact Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-heading">
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
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading">
                <NassauSeal className="w-4 h-4 flex-shrink-0" />
                <span>Local Nassau County Heating & Cooling Experts</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight font-heading">
                We Are Proud To Service Our Clients in Elmont
              </h2>

              {/* Exact Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                <p>
                  We are the top HVAC contractors in Elmont and provide our 24/7 emergency service.
                </p>
                <p>
                  We have many happy homeowners and business owners in Elmont with our outstanding fast and reliable services.
                </p>
                <p>
                  Whether you need repair or installation of a cooling or heating system, we can quickly determine the right solution for your home or business.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 font-heading">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-brightYellow flex-shrink-0" />
                  <div>
                    <span className="text-xl font-black text-navy block leading-none">24/7/365</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fast Dispatch</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-royal flex-shrink-0" />
                  <div>
                    <span className="text-xl font-black text-navy block leading-none">Licensed</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">& Insured</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <Star className="w-8 h-8 text-brightYellow fill-brightYellow flex-shrink-0" />
                  <div>
                    <span className="text-xl font-black text-navy block leading-none">Top Rated</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">5.0 Star Reviews</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 font-heading">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Service in Elmont</span>
                </button>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-royal" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/image-website/ac-installation-bd.jpg"
                  alt="247 HVAC of Long Island technician servicing AC in Elmont"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">Elmont</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      Elmont HVAC Service Hub
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Fast, local radio-dispatched service trucks across Elmont, NY 11003
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HVAC SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Professional Solutions
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In Elmont
            </h2>
          </div>

          {/* Group 1: HVAC Cooling Services */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-electric/15 text-royal flex items-center justify-center flex-shrink-0">
                <Snowflake className="w-5 h-5 text-royal" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy font-heading">HVAC Cooling Services</h3>
                <p className="text-xs text-slate-500 font-body">Reliable cooling repairs, installations, and duct maintenance for Elmont properties.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ELMONT_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Elmont`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 bg-navy/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm font-heading">
                        <IconComp className="w-3.5 h-3.5 text-brightYellow" />
                        <span>Cooling</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-lg font-bold text-navy group-hover:text-royal transition-colors font-heading leading-snug mb-4">
                        {service.title}
                      </h4>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-heading">
                        <Link
                          href={service.href || '/cooling-services'}
                          className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline uppercase tracking-wider"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="px-3 py-1.5 rounded-lg bg-hvacGreen text-white text-xs font-bold shadow hover:bg-hvacGreen-hover"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Group 2: HVAC Heating Services */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brightRed/15 text-brightRed flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-brightRed" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy font-heading">HVAC Heating Services</h3>
                <p className="text-xs text-slate-500 font-body">Complete furnace, boiler, water heater, and chimney care in Elmont.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ELMONT_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Elmont`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 bg-navy/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm font-heading">
                        <IconComp className="w-3.5 h-3.5 text-brightYellow" />
                        <span>Heating</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-lg font-bold text-navy group-hover:text-royal transition-colors font-heading leading-snug mb-4">
                        {service.title}
                      </h4>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-heading">
                        <Link
                          href={service.href || '/heating-services'}
                          className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline uppercase tracking-wider"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="px-3 py-1.5 rounded-lg bg-hvacGreen text-white text-xs font-bold shadow hover:bg-hvacGreen-hover"
                        >
                          Book Now
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
      {/* 4. TESTIMONIALS SECTION */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brightYellow/20 text-navy text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Star className="w-4 h-4 fill-brightYellow text-brightYellow" />
              <span>Verified Customer Reviews</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Reviews From Elmont Clients
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Read real feedback from Elmont homeowners who rely on our prompt 24/7 HVAC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ELMONT_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow relative"
              >
                <Quote className="w-10 h-10 text-royal/15 absolute top-6 right-6 pointer-events-none" />

                <div className="mb-6 relative z-10">
                  <div className="flex items-center gap-1 text-brightYellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brightYellow" />
                    ))}
                  </div>

                  {/* Exact Review Text */}
                  <p className="text-slate-700 italic font-body text-base leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    {/* Exact Reviewer Name */}
                    <h4 className="font-extrabold text-navy font-heading text-sm">
                      {review.author}
                    </h4>
                    <span className="text-xs text-slate-500 font-body">
                      {review.location}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-royal font-heading shadow-sm">
                    ★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LOCATION MAP SECTION */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Elmont Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-2 font-body">
              Serving Elmont, Belmont Park, Floral Park, Valley Stream, and the western Nassau border with 24/7 service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
              <iframe
                src="https://maps.google.com/maps?q=Elmont,+NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elmont, NY HVAC Service Area Map"
                className="w-full h-[360px] sm:h-[450px] rounded-xl"
              />
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <NassauSeal className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-navy font-heading">
                      Elmont, NY Service Hub
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active 24/7 Dispatch
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 font-body mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-royal flex-shrink-0 mt-0.5" />
                    <span>Elmont, Nassau County, New York 11003</span>
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
                    Nearby Communities
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {['Floral Park', 'Valley Stream', 'Franklin Square', 'Bellerose', 'Queens Village', 'North Valley Stream'].map((c) => (
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

      {/* ========================================================================= */}
      {/* 6. CTA SECTION */}
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
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Elmont technicians for prompt heating and air conditioning repair or a free quote.
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
