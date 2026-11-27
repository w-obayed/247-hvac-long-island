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
  Flame,
  Droplets,
  Wrench,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  ChevronRight,
  Headphones,
  DollarSign,
  AlertTriangle,
  HelpCircle,
  AlertCircle,
  Zap,
  Layers,
  Wind,
  Award,
  Sparkles,
  Check,
  Building2,
  Building,
  ThermometerSnowflake,
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
import { NassauSeal, QueensSeal, SuffolkSeal } from '@/components/CountyEmblems';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

// Section 3: Our Commercial & Industrial installation and repair services (All ten services)
const COMMERCIAL_SERVICES = [
  {
    id: 'vrf-vrv',
    title: 'VRF/VRV Cooling and Heating Systems',
    description:
      'Variable Refrigerant Flow (VRF/VRV) systems offering individualized multi-zone temperature control and superior commercial energy efficiency.',
    icon: Layers,
    image: '/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg',
  },
  {
    id: 'rtu',
    title: 'Roof Top Packaged Units',
    description:
      'Heavy-duty rooftop packaged HVAC units (RTUs) engineered for commercial facilities, offices, retail spaces, and industrial complexes.',
    icon: Building2,
    image: '/247 havc/heat-pump-repair/abe36bb2-3e21-4ef9-b6dd-bbc497dc71e3.jpg',
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps',
    description:
      'Commercial-grade heat pump installations and emergency repairs delivering year-round heating and cooling with low operating costs.',
    icon: ThermometerSnowflake,
    image: '/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg',
  },
  {
    id: 'wshp',
    title: 'Water Source Heat Pumps',
    description:
      'High-performance water source heat pump (WSHP) loops providing dependable climate control for high-rise buildings and commercial suites.',
    icon: Droplets,
    image: '/247 havc/ac-installation/985ad274-26be-4bb1-82d3-8973d451568c.jpg',
  },
  {
    id: 'ptac',
    title: 'PTAC Units',
    description:
      'Packaged Terminal Air Conditioners (PTAC) installed, serviced, and replaced for hotels, healthcare facilities, and multi-tenant properties.',
    icon: Wind,
    image: '/247 havc/heat-pump-repair/0534fe6f-9e80-4a28-b54a-52e0613d1633.jpg',
  },
  {
    id: 'commercial-boilers',
    title: 'Boilers',
    description:
      'Commercial steam and hot water boiler maintenance, burner diagnostics, ASME code compliance, and high-capacity system replacements.',
    icon: Flame,
    image: '/247 havc/boiler-water-heater/ec2663e6-2ab5-443f-a29e-ccf132cad99c.jpg',
  },
  {
    id: 'hydronic',
    title: 'Hydronic Heating Systems',
    description:
      'Industrial and commercial hydronic piping, radiant heating, circulator pumps, and zone manifolds engineered for maximum heat distribution.',
    icon: Zap,
    image: '/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg',
  },
  {
    id: 'commercial-water-heaters',
    title: 'Water Heaters',
    description:
      'High-capacity commercial tank and continuous tankless water heaters engineered to meet demanding industrial and commercial hot water needs.',
    icon: Zap,
    image: '/247 havc/boiler-water-heater/f821fd8d-d675-46d6-9ef7-629fc836a5cd.jpg',
  },
  {
    id: 'storage-tanks',
    title: 'Storage Tanks',
    description:
      'ASME-certified commercial hot water storage tanks, expansion vessels, and buffer tanks properly piped and insulated for system resilience.',
    icon: ShieldCheck,
    image: '/247 havc/boiler-water-heater/278da669-a5fc-4950-8e6f-8bd0a60a9768.jpg',
  },
  {
    id: 'air-cooled-condensers',
    title: 'Air Cooled Condensers',
    description:
      'Heavy-capacity air cooled condensing units, fan coil integration, and refrigerant line installations for high-demand commercial refrigeration and cooling.',
    icon: Wrench,
    image: '/247 havc/heat-pump-repair/c98c57cd-add0-413a-8189-83b193f35eff.jpg',
  },
];

// Section 4: Popular Brands We Do Commercial HVAC (Exact supplied names, spelling, capitalization, and order preserved)
const COMMERCIAL_BRANDS = [
  { name: 'Mitsubishi', image: '/image-website/Mitsubisi_gajjhf.png' },
  { name: 'Daikin', image: '/image-website/daikin_ykfzek.png' },
  { name: 'Johnson Controls International' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'York' },
  { name: 'AAON Heating and Cooling Products' },
  { name: 'Bosh', image: '/image-website/bosch_j6arde.jpg' },
  { name: 'Carrier Heating and Cooling', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Edpac International' },
  { name: 'Siemens' },
  { name: 'Addison HVAC' },
  { name: 'Allied Commercial' },
  { name: 'Amana Heating & Air Conditioning', image: '/image-website/amana_id8eon.png' },
  { name: 'American Standard Heating and Air Conditioning', image: '/image-website/American_tqzswh.png' },
];

// Section 5: Why Choose Us
const WHY_CHOOSE_ITEMS = [
  {
    title: 'Unparalleled Customer Support',
    desc: 'Dedicated commercial account managers and senior engineers guiding you through engineering specs, preventive plans, and prompt dispatch.',
    icon: Headphones,
  },
  {
    title: '24/7 Service',
    desc: 'Round-the-clock commercial emergency dispatch across Long Island ensuring zero production downtime and swift restoration.',
    icon: Clock,
  },
  {
    title: 'Professional & Reliable',
    desc: 'OSHA-compliant, EPA-certified master commercial technicians with fully equipped mobile units delivering guaranteed workmanship.',
    icon: Award,
  },
];

// Section 6: Exact Testimonials
const TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I had a leaky furnace and contacted the 24/7 HVAC of Long Island to come in and fix it. They were very friendly, offered a complete solution, and got the... read more',
    author: 'Alice Adams',
  },
  {
    id: '2',
    quote:
      'I called HVAC and David called me right away. Not even two minutes after. Their website page is user friendly. I already have a service appointment. He was clear and... read more',
    author: 'Dean Quinteros',
  },
  {
    id: '3',
    quote:
      'I would like to thank 247 HVAC OF LONG ISLAND for a job well done. I had a late night problem with my heating system the day before...',
    author: 'Ebrahim Moazzen',
  },
];

export default function CommercialHvacPage() {
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
          <span className="text-navy font-bold">Commercial HVAC</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="#1 Commercial HVAC in Long Island"
        title="Commercial HVAC"
        subtitle="The HVAC Experts in Commercial & Industrial Installation and Repair"
        bullets={[
          { text: "Professional & Reliable Technicians", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "24 Hours Emergency Service Available", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "#1 Commercial HVAC in Long Island", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
        ]}
        additionalText="What are the best Commercial HVAC Near Me? We are"
        showCallButton
        callButtonLabel="Call Us Now"
        onOpenQuote={() => setIsQuoteOpen(true)}
        quoteButtonLabel="Get A Free Quote"
      />

      {/* ========================================================================= */}
      {/* 2. INTRO SECTION */}
      {/* ========================================================================= */}
      <section id="intro" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading and Supplied Paragraphs (Preserved Exactly) */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3.5 font-heading">
                <Building className="w-4 h-4" />
                <span>Commercial &amp; Industrial Specialists</span>
              </div>

              {/* Exact Left-side Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                Trust Us With Commercial HVAC
              </h2>

              {/* Exact Content — Preserve Every Word Exactly As Provided */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                <p>
                  Heating and cooling equipment not only control the comfort of the work environment, but they also affect the productivity of your business.
                </p>

                <p>
                  Job performance, safety, the manufacturing process, and even customer satisfaction are all influenced by the caliber of your HVAC Systems installation. By delivering a comfortable, clean and reliable atmosphere, your customers and employees will be able to enjoy their surroundings.
                </p>

                <p>
                  From commercial complexes to office spaces, we understand how to create and efficiently maintain the ideal environment for your workspace and constructed to operate efficiently. Your business will spend less time on emergency fixes, less money on utilities and contribute to a cleaner world.
                </p>

                <p>
                  That’s why we have become an industry-leading commercial HVAC contractor in Long Island.
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

            {/* Right Column: Relevant Commercial HVAC Images */}
            <div className="lg:col-span-5 w-full flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-72 sm:h-80 md:h-[340px] lg:h-[380px] w-full">
                  <Image
                    src="/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg"
                    alt="Two 247 HVAC technicians servicing an outdoor side-discharge heat pump unit"
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#003399]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 font-heading">
                  <Award className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span className="font-bold text-xs uppercase tracking-wider">Industrial Certified</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-royal text-white flex items-center justify-center font-black text-sm flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-navy text-sm font-heading leading-tight">
                      Engineered for Maximum Uptime
                    </h4>
                    <p className="text-xs text-slate-600 font-body leading-tight mt-0.5">
                      Fast diagnostics, scheduled maintenance, and turn-key commercial installations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Commercial HVAC Image Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg"
                    alt="Commercial and industrial boiler installation and hydronic heating"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 21vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white font-heading">
                    Boilers &amp; Hydronics
                  </span>
                </div>

                <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg"
                    alt="Bosch outdoor air conditioning condenser unit installed on a raised composite pad"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 21vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white font-heading">
                    RTUs &amp; Condensers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION (ALL TEN COMMERCIAL & INDUSTRIAL SERVICES) */}
      {/* ========================================================================= */}
      <section id="services" className="py-14 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Capabilities</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Our Commercial &amp; Industrial installation and repair services:
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Turnkey HVAC engineering, planned preventive care, and rapid emergency restoration for commercial facilities across Long Island.
            </p>
          </div>

          {/* Ten Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
            {COMMERCIAL_SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/95 text-royal flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-bold text-navy font-heading mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      onClick={() => setIsQuoteOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading group/btn"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BRANDS SECTION (EXACT SUPPLIED BRANDS, PRESERVING SPELLING & ORDER) */}
      {/* ========================================================================= */}
      <section id="brands" className="py-14 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Commercial Equipment Care
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Popular Brands We Do Commercial HVAC
            </h2>
            <p className="text-base text-slate-700 font-body leading-relaxed">
              Our factory-trained technicians install, maintain, and repair all major commercial and industrial HVAC brands:
            </p>
          </div>

          {/* Exact Brand Grid (14 Brands in Exact Order with Exact Casing/Spelling) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8">
            {COMMERCIAL_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-royal/40 transition-all min-h-[105px] group"
              >
                {brand.image ? (
                  <div className="relative w-20 sm:w-24 h-9 mb-1.5">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Commercial HVAC Long Island`}
                      fill
                      className="object-contain object-center transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-navy/5 text-navy flex items-center justify-center font-black text-xs font-heading mb-1.5">
                    {brand.name.substring(0, 2)}
                  </div>
                )}
                <span className="text-xs font-bold text-navy font-heading group-hover:text-royal transition-colors leading-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-[#EAF4FF]/80 border border-blue-100 rounded-xl p-4 sm:p-5">
            <p className="text-sm sm:text-base text-slate-700 font-medium font-body">
              Regardless of the system manufacturer or tonnage, our technicians provide complete diagnostics, parts replacement, and ongoing commercial maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Businesses Trust Us</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Why Choose 247 HVAC of Long Island For Commercial HVAC
            </h2>
            <p className="text-base text-slate-600 mt-3 font-body">
              Long Island businesses and property managers rely on our prompt response, upfront commercial proposals, and dependable technicians.
            </p>
          </div>

          {/* Three Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-navy font-heading mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-royal font-heading">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                    <span>Commercial Quality Standards</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TESTIMONIALS SECTION (EXACT CONTENT & REVIEWER NAMES PRESERVED) */}
      {/* ========================================================================= */}
      <TestimonialsSection
        id="testimonials"
        badgeText="Client Feedback"
        heading="Our Client Testimonials"
        reviews={TESTIMONIALS.map((r: any) => ({
          id: r.id,
          name: r.author || r.name,
          location: r.location || 'Verified Customer',
          service: r.service,
          rating: r.rating ?? 5,
          comment: r.quote || r.comment,
        }))}
      />

      {/* ========================================================================= */}
      {/* 7. AREAS SECTION */}
      {/* ========================================================================= */}
      <section id="areas" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Coverage &amp; Locations
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Long Island Areas We Do Commercial HVAC
            </h2>
            <p className="text-base text-slate-600 font-body">
              Fast, radio-dispatched commercial technicians serving businesses throughout Long Island and Queens.
            </p>
          </div>

          {/* Three Area Links: Nassau Areas, Queens Areas, Suffolk Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 font-heading">
            <Link
              href="/service-areas/nassau-county"
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <NassauSeal className="w-9 h-9 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Nassau Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/queens"
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <QueensSeal className="w-9 h-9 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Queens Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/suffolk-county"
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <SuffolkSeal className="w-9 h-9 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-base">
                  Suffolk Areas »
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#003399] via-[#0055E7] to-[#006BFF] text-white relative overflow-hidden">
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
            Speak directly with our Long Island commercial HVAC technicians for prompt heating and air conditioning repair or a free commercial proposal.
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

      {/* FOOTER */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />

      {/* FLOATING ACTION BAR FOR MOBILE */}
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
