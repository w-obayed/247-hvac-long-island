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
          <Link href="/service-areas#nassau" className="hover:text-royal transition-colors">
            Nassau County
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Baldwin</span>
        </div>
      </div>

      {/* HERO SECTION: BALDWIN */}
      <section className="relative bg-[#061A40] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full z-0 opacity-50 sm:opacity-70 overflow-hidden pointer-events-none">
          <Image
            src="/images/technician-repair.jpg"
            alt="247 HVAC of Long Island Certified Technician in Baldwin NY"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/80 lg:via-[#061A40]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brightRed text-white text-xs font-black uppercase tracking-wider mb-3 shadow-lg font-heading">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span>24/7 HVAC Service in Baldwin, NY</span>
              </div>

              {/* Exact H1: Baldwin */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-heading">
                Baldwin
              </h1>

              {/* Exact H2: We Are Proud To Service Our Clients in Baldwin */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-electric tracking-tight leading-snug mb-4 font-heading">
                We Are Proud To Service Our Clients in Baldwin
              </h2>

              {/* Exact Paragraphs Preserved Word-for-Word */}
              <div className="space-y-3 max-w-2xl text-slate-100 text-base sm:text-lg leading-relaxed font-body mb-6">
                <p>
                  We are the top HVAC contractors in Baldwin and provide our 24/7 emergency service.
                </p>
                <p>
                  We have many happy homeowners and business owners in Baldwin with our outstanding fast and reliable services.
                </p>
                <p>
                  Whether you need repair or installation of a cooling or heating system, we can quickly determine the right solution for your home or business.
                </p>
              </div>

              {/* Four Trust Badges */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-7">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">30-45 Min Baldwin Dispatch</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Licensed & Insured Master Techs</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Emergency Heating & Boilers</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading">Central AC & Mini-Splits</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto font-heading">
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm sm:text-base shadow-xl active:scale-95 transition-all uppercase tracking-wider min-h-[46px]"
                >
                  <Phone className="w-5 h-5 text-brightRed animate-pulse flex-shrink-0" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-[#25843D] hover:bg-[#1D6B31] text-white font-black text-sm sm:text-base shadow-xl active:scale-95 transition-all uppercase tracking-wider min-h-[46px]"
                >
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <span>Book Service Now</span>
                </button>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-royal hover:bg-royal-hover text-white font-black text-sm sm:text-base shadow-xl border border-white/20 active:scale-95 transition-all uppercase tracking-wider min-h-[46px]"
                >
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span>Get Free Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HVAC SERVICES WE PROVIDE IN BALDWIN */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Baldwin Climate Solutions
            </span>
            {/* Exact H2: HVAC Services We Provide In Baldwin */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In Baldwin
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Delivering full-service residential and commercial heating and cooling services across Baldwin, NY.
            </p>
          </div>

          {/* 6 Reused HVAC Service Cards with Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {HVAC_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Baldwin, NY`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md font-heading uppercase tracking-wider ${
                          service.category === 'heating' ? 'bg-brightRed' : 'bg-royal'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="capitalize">{service.category} Service</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {service.href ? (
                        <Link href={service.href}>
                          <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 group-hover:text-royal transition-colors font-heading cursor-pointer">
                            {service.title}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 group-hover:text-royal transition-colors font-heading">
                          {service.title}
                        </h3>
                      )}

                      <p className="text-sm text-slate-600 leading-relaxed mb-4 font-body">
                        {service.description}
                      </p>

                      <ul className="space-y-1.5 mb-6 font-body">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 font-heading">
                      {service.href ? (
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:text-royal-hover group/link uppercase tracking-wider"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => setSelectedService(service)}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:text-royal-hover group/link uppercase tracking-wider"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </button>
                      )}

                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-hvacGreen text-white text-xs font-black shadow hover:bg-hvacGreen-hover active:scale-95 transition-all uppercase tracking-wider"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: REVIEWS FROM BALDWIN CLIENTS */}
      <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <span>Verified Local Experiences</span>
            </div>
            {/* Exact H2: Reviews From Baldwin Clients */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Reviews From Baldwin Clients
            </h2>
          </div>

          {/* Three Testimonial Cards Exact Wording */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Review 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
                  &ldquo;Our Air Conditioner is 25 years old, and we called 24/7 HVAC of Long Island to get an estimate for the replacement. They sent David to our house for the... read more&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-base font-bold text-navy font-heading block">
                  — Bradley Alvis
                </span>
                <span className="text-xs text-slate-500 font-body">Baldwin, NY Customer</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
                  &ldquo;Great product installed. Gave the best advice of type of air con that was suitable. The team Matthew and David were always on time and polite. Great communication throughout. A... read more&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-base font-bold text-navy font-heading block">
                  — Brian Gordon
                </span>
                <span className="text-xs text-slate-500 font-body">Baldwin, NY Customer</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
                  &ldquo;I can&apos;t say enough for David .....he was caring professional and smart and I will use them a 100 times over what a great job and his workers were...&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-base font-bold text-navy font-heading block">
                  — Rosemary Bastiancic
                </span>
                <span className="text-xs text-slate-500 font-body">Baldwin, NY Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION MAP */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Baldwin Service Area Map</span>
            </div>
            {/* Exact H2: Location Map */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-2 font-body">
              Serving Baldwin, North Baldwin, and all neighboring Nassau County communities with fast 24/7 mobile dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Map Embed Container */}
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
                className="w-full h-[380px] sm:h-[450px] rounded-xl"
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
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25843D] hover:bg-[#1D6B31] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Baldwin Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT & BOOKING CTA */}
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
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>

            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call {PHONE_NUMBER}</span>
            </a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get a Free Quote</span>
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
