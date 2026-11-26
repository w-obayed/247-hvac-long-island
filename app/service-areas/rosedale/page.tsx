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
import TestimonialsSection from '@/components/TestimonialsSection';
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
import { QueensSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const ROSEDALE_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'Air Conditioners Installation & Replacement',
    category: 'cooling',
    image: '/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repairs & Maintenance',
    category: 'cooling',
    image: '/247 havc/heat-pump-repair/0534fe6f-9e80-4a28-b54a-52e0613d1633.jpg',
    icon: Wrench,
    href: '/air-conditioning-repair',
  },
  {
    id: 'air-duct',
    title: 'Air Duct and Ventilation Cleaning Service',
    category: 'cooling',
    image: '/247 havc/ac-installation/985ad274-26be-4bb1-82d3-8973d451568c.jpg',
    icon: Layers,
    href: '/air-duct-and-ventilation-cleaning-service',
  },
  {
    id: 'mini-split',
    title: 'Mini Splits – Ductless Heat Pumps and Air Conditioners',
    category: 'cooling',
    image: '/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg',
    icon: Snowflake,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
  },
];

const ROSEDALE_HEATING_SERVICES: LocationServiceCard[] = [
  {
    id: 'furnace',
    title: 'Furnace Installation, Repair & Replacement',
    category: 'heating',
    image: '/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg',
    icon: Flame,
    href: '/furnace-installation-repair-replacement',
  },
  {
    id: 'boiler',
    title: 'Boiler Installation & Repair',
    category: 'heating',
    image: '/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg',
    icon: Droplets,
    href: '/boiler-installation-repair',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation, Repair & Replacement',
    category: 'heating',
    image: '/247 havc/boiler-water-heater/278da669-a5fc-4950-8e6f-8bd0a60a9768.jpg',
    icon: Droplets,
    href: '/water-heater-installation-repair-replacement',
  },
  {
    id: 'chimney',
    title: 'Chimney Sweep',
    category: 'heating',
    image: '/247 havc/heating-and-controls/d1b426fa-9ec5-45af-9feb-ba543d98c780.jpg',
    icon: Flame,
    href: '/chimney-sweep',
  },
];

const ROSEDALE_TESTIMONIALS = [
  {
    "id": "1",
    "quote": "I would highly recommend this company; they're professional and reliable. The workers are really knowledgeable and didn't mind going above and beyond, which is why they were able to figure...",
    "author": "A Google User",
    "location": "Rosedale Client"
  },
  {
    "id": "2",
    "quote": "Fast and efficient friendly service. David was amazing. Repaired our AC. Highly recommended 24/7 HVAC of Long Island.",
    "author": "Jackson Lloyd",
    "location": "Rosedale Client"
  },
  {
    "id": "3",
    "quote": "Highly professional, friendly and affordable service. I had a cooling & heating system installed at my art school a couple of weeks ago and I am so pleased to have...",
    "author": "Dale Hall",
    "location": "Rosedale Client"
  }
];

export default function RosedaleLocationPage() {
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
          <Link href="/queens" className="hover:text-royal transition-colors">
            Queens
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Rosedale</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <PageBanner
        id="home"
        badgeText="#1 HVAC Services in Rosedale"
        title="Rosedale"
        bullets={[
          { text: "Our Professional & Reliable Technicians Service This Area", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "24 Hours Emergency Service Available", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "#1 HVAC Services in Rosedale", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left side: Exact Headings and Paragraphs */}
            <div className="flex flex-col items-start w-full">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 font-heading">
                About Our Rosedale Service
              </span>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5 sm:mb-6 font-heading">
                We Are Proud To Service Our Clients in Rosedale
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body">
                We are the top HVAC contractors in Rosedale and provide our 24/7 emergency service.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body">
                We have many happy homeowners and business owners in Rosedale with our outstanding fast and reliable services.
              </p>

              {/* Exact Paragraph 3 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8 font-body">
                Whether you need repair or installation of a cooling or heating system, we can quickly determine the right solution for your home or business.
              </p>

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

            {/* Right side: Image with town overlay */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-72 xs:h-80 sm:h-96 md:h-[420px] lg:h-[460px] w-full">
                  <Image
                    src="/247 havc/ac-installation/985ad274-26be-4bb1-82d3-8973d451568c.jpg"
                    alt="HVAC service and climate solutions in Rosedale, NY"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">Rosedale</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      Rosedale HVAC Service Hub
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Fast, local radio-dispatched service trucks across Rosedale, Queens NY
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
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hvacGreen/15 text-hvacGreen text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full-Spectrum Climate Care</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In Rosedale
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert heating, air conditioning, and ventilation solutions tailored for Rosedale residential and commercial properties.
            </p>
          </div>

          {/* HVAC Cooling Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                HVAC Cooling Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ROSEDALE_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 text-royal" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-lg font-extrabold text-navy font-heading mb-3 line-clamp-2">
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
                          className="px-3 py-1.5 rounded-lg bg-royal text-white text-xs font-bold shadow hover:bg-royal-hover"
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

          {/* HVAC Heating Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brightRed/10 text-brightRed flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                HVAC Heating Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ROSEDALE_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 text-brightRed" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-lg font-extrabold text-navy font-heading mb-3 line-clamp-2">
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
      <TestimonialsSection
        id="testimonials"
        badgeText="Verified Customer Feedback"
        heading="Reviews From Rosedale Clients"
        reviews={ROSEDALE_TESTIMONIALS.map((r: any) => ({
          id: r.id,
          name: r.author || r.name,
          location: r.location || 'Verified Customer',
          service: r.service,
          rating: r.rating ?? 5,
          comment: r.quote || r.comment,
        }))}
      />

      {/* ========================================================================= */}
      {/* 5. LOCATION MAP SECTION */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>Rosedale Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-2 font-body">
              Serving Rosedale and neighboring Queens communities with 24/7 radio-dispatched mobile repair units.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
              <iframe
                src="https://maps.google.com/maps?q=Rosedale%2C%20NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rosedale, NY HVAC Service Area Map"
                className="w-full h-[360px] sm:h-[450px] rounded-xl"
              />
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <QueensSeal className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-navy font-heading">
                      Rosedale, NY Service Hub
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active 24/7 Dispatch
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 font-body mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-royal flex-shrink-0 mt-0.5" />
                    <span>Rosedale, Queens, New York</span>
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
                    Nearby Queens Communities
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {["Arverne","Cambria Heights","Far Rockaway","Howard Beach","Laurelton"].map((c) => (
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
      {/* 6. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island &amp; Queens</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Rosedale technicians for prompt heating and air conditioning repair or a free quote.
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
