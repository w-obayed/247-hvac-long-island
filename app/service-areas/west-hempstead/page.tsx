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

const WEST_HEMPSTEAD_COOLING_SERVICES: LocationServiceCard[] = [
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

const WEST_HEMPSTEAD_HEATING_SERVICES: LocationServiceCard[] = [
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

const WEST_HEMPSTEAD_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'We had a wonderful experience with 24/7 HVAC of Long Island! They were friendly, knowledgeable, and made sure we understood exactly what was wrong with our AC unit. We will... read more',
    author: 'Maurice Hart',
    location: 'West Hempstead, NY',
  },
  {
    id: '2',
    quote:
      'David and his assistant Edgar were of awesome! If you are looking for a company who is reliable, on time, fairly priced, honest, and genuinely cares about their customers,... read more',
    author: 'Cilim Done',
    location: 'West Hempstead, NY',
  },
  {
    id: '3',
    quote:
      'The nicest people and best service! Fixed all our HVAC issues - great people and company and highly recommend!',
    author: 'Lindsey Owen',
    location: 'West Hempstead, NY',
  },
];

export default function WestHempsteadLocationPage() {
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
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

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-slate-200 py-3 text-xs sm:text-sm font-medium text-slate-500 font-heading"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-royal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/service-areas" className="hover:text-royal transition-colors">
            Service Areas
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-semibold">West Hempstead</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. HERO BANNER SECTION */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="Nassau County Licensed & Insured HVAC Team"
        title="West Hempstead"
        bullets={[
          { text: 'Our Professional & Reliable Technicians Service This Area', icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: '24 Hours Emergency Service Available', icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: '#1 HVAC Services in West Hempstead', icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visuals */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/247 havc/heating-and-controls/b6b2e363-be7c-4237-826d-42fa15ed795d.jpg"
                    alt="HVAC Technicians Serving West Hempstead"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-navy text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-xs border border-white/10">
                  <p className="text-3xl font-black text-brightYellow font-heading">24/7</p>
                  <p className="text-xs text-slate-200 font-medium">
                    Emergency Heating &amp; AC Repairs Throughout West Hempstead
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local HVAC Specialist</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
                We Are Proud To Service Our Clients in West Hempstead
              </h2>

              {/* Exact Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
                <p>
                  We are the top HVAC contractors in West Hempstead and provide our 24/7 emergency service.
                </p>
                <p>
                  We have many happy homeowners and business owners in West Hempstead with our outstanding fast and reliable services.
                </p>
                <p>
                  Whether you need repair or installation of a cooling or heating system, we can quickly determine the right solution for your home or business.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-3 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold shadow-md transition-all font-heading text-sm"
                >
                  Schedule Service Online
                </button>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy font-bold transition-all font-heading text-sm inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-royal" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hvacGreen/15 text-hvacGreen text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Comprehensive Climate Solutions</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              HVAC Services We Provide In West Hempstead
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Expert heating, air conditioning, and ventilation solutions tailored for West Hempstead residential and commercial properties.
            </p>
          </div>

          {/* Cooling Services */}
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
              {WEST_HEMPSTEAD_COOLING_SERVICES.map((service) => {
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

          {/* Heating Services */}
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
              {WEST_HEMPSTEAD_HEATING_SERVICES.map((service) => {
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
        badgeText="Verified Customer Reviews"
        heading="Reviews From West Hempstead Clients"
        reviews={WEST_HEMPSTEAD_TESTIMONIALS.map((r: any) => ({
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
              <span>West Hempstead Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Proudly delivering 24/7 heating, cooling, and air quality services across West Hempstead, NY and neighboring Nassau County communities.
            </p>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200 relative">
            <iframe
              title="West Hempstead, NY Service Area Map"
              src="https://maps.google.com/maps?q=West+Hempstead,+NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
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
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 font-body">
            Get instant support from licensed HVAC specialists in West Hempstead, NY. We are available round-the-clock for repairs, maintenance, and new installations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brightRed hover:bg-brightRed-hover text-white text-lg font-bold shadow-xl shadow-brightRed/30 transition-all font-heading"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {PHONE_NUMBER}</span>
            </a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy text-lg font-black shadow-xl shadow-brightYellow/20 transition-all font-heading"
            >
              <Calendar className="w-5 h-5" />
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
    </div>
  );
}
