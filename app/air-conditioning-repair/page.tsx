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
  Wrench,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  MapPin,
  ChevronRight,
  Headphones,
  DollarSign,
  AlertTriangle,
  Flame,
  HelpCircle,
  AlertCircle,
  Zap,
  Layers,
  ThermometerSnowflake,
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

const AC_BRANDS = [
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'Lennox', image: '/image-website/Lennox_jpbqmb.png' },
  { name: 'Mitsubishi', image: '/image-website/Mitsubisi_gajjhf.png' },
  { name: 'Rheem', image: '/image-website/Reem_n2obdg.png' },
  { name: 'York' },
];

const AC_SERVICES = [
  {
    id: 'central-ac',
    title: 'Central Air Conditioning Repair in Long Island',
    description:
      'Central systems can develop issues over time due to wear and tear. We handle central air conditioning repair in Long Island, including thermostat issues, airflow problems, and system failures.',
    icon: Snowflake,
    image: '/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg',
    badge: 'Central Cooling',
  },
  {
    id: 'mini-split-ac',
    title: 'Mini-Split Air Conditioning Repair on Long Island',
    description:
      'Mini-split systems require proper handling to maintain efficiency. Our team at 247 HVAC of Long Island provides mini-split air conditioning repair on Long Island for issues like poor cooling, sensor faults, and leaks.',
    icon: Layers,
    image: '/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg',
    badge: 'Ductless Multi-Zone',
  },
  {
    id: 'emergency-ac',
    title: 'Emergency Air Conditioning Repair in Long Island',
    description:
      'When your AC stops working unexpectedly, we offer emergency air conditioning repair in Long Island with fast response and 24/7 availability to restore comfort quickly.',
    icon: Clock,
    image: '/247 havc/heat-pump-repair/6085ddc1-72b5-4260-8550-5e08e749e7cc.jpg',
    badge: '24/7 Dispatch',
  },
  {
    id: 'hvac-ac',
    title: 'HVAC Air Conditioning Repair in Long Island',
    description:
      'We also handle complete HVAC air conditioning repair in Long Island. We make sure every part of your system is working properly for better performance and reliability.',
    icon: Wrench,
    image: '/247 havc/heat-pump-repair/55f4dfda-dd29-4407-828c-4b37c1f22c20.jpg',
    badge: 'Comprehensive Care',
  },
];

const AC_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'The experience I had was outstanding. My AC stopped working and Edgar was quick to respond and arrive at my home. He quickly diagnosed the problem and fixed it right away. Pricing was fair despite it being an after hours job. I will definitely call this company again.',
    author: 'John Simms',
  },
  {
    id: '2',
    quote:
      "They installed a new furnace at a competitive price within 24 hours of my first call to them, and their staff was responsive to my questions. I'm very happy with their service.",
    author: 'Carson Noel',
  },
  {
    id: '3',
    quote:
      '24/7 HVAC of Long Island was very efficient in their coming and replacing the non-working capacitor on my air conditioning unit their service man Matthew was very good at getting my unit up and running again. I will definitely recommend this company to anyone I know looking to replace or have their units repaired.',
    author: 'Eleanor Sandusky',
  },
  {
    id: '4',
    quote:
      'This company is very easy to work with! They were very responsive and our tech was very knowledgeable and got our system back up and running!',
    author: 'Gregory Schmaltz',
  },
  {
    id: '5',
    quote:
      'David and crew did a great job on getting the furnace running again. Thanks for the effort. Will use again this company.',
    author: 'Mark Sargeant',
  },
  {
    id: '6',
    quote:
      "I called 247 HVAC to come check out my heating system. They came and made sure everything was working and recommended I change the seals on my doors because air was coming through the old seals. Let's see if I save on my heat this winter! Great service and very nice people!",
    author: 'Upul Mendis',
  },
  {
    id: '7',
    quote:
      'Fantastic crew! Everyone is so nice and it really looks like they enjoy what they do! They installed a new heating system for us and we are very pleased with the results!',
    author: 'Brandon Smart',
  },
  {
    id: '8',
    quote:
      'I called them and spoke to David around 630pm as my AC stopped working. He was prompt and arrived at my house within 1 hour. Provided great service. Thanks',
    author: 'Lee Moreno',
  },
  {
    id: '9',
    quote:
      'The technician Matthew was outstanding. My Air Conditioner died and he came right out to fix it. He find out it was a cracked coil and had to order the part. He was able to get the unit to work just enough to cool off the house for a bit. Which I truly appreciated.',
    author: 'Dexter Hopkins',
  },
  {
    id: '10',
    quote:
      'Technician was very professional, arrived on time, very polite. I was happy with the price of the service fee and I felt the technician was knowledgeable. This will definitely be my go to place for all my heating and AC needs.',
    author: 'Jonny Layton',
  },
  {
    id: '11',
    quote:
      'Turned out my emergency switch was off (thanks kids). Edgar was professional and get helpful and did a thorough check on my units. Very pleased!',
    author: 'John Bailey',
  },
  {
    id: '12',
    quote:
      "This was the best experience I've ever had with air conditioning. The technician was quick and courteous. He was also knowledgeable about the system he was installing. The price was fair and the entire service was completed within a half hour. I always have a great experience with 24/7 HVAC of Long Island.",
    author: 'Jon Burkholder',
  },
  {
    id: '13',
    quote:
      'Matthew who did the duct cleaning was super! He was on time, hardworking and above all, very caring and honest! His job is very neat and clean, and pricing was very clear. We highly recommend this company.',
    author: 'Christopher Newman',
  },
  {
    id: '14',
    quote:
      'Extremely happy with our new unit, although it may be a little time before using it to its full potential, it does look very high tech. The technicians Matthew and David were extremely professional, polite and caring the office team kept us totally up to date and informed. Great service thank you.',
    author: 'Ralph Stender',
  },
  {
    id: '15',
    quote:
      'Our stackable washer and dryer was making noise on the spin cycle of the wash. After looking at a few companies I called for service and was very pleased with the service provided by the tech. He was able to fix it on the spot with a part from his truck! Very reasonable price as well!',
    author: 'Walter Warren',
  },
  {
    id: '16',
    quote:
      'Dave and his crew were great to work with. Always took my calls or got back to me quickly. So easy to deal with and a pleasure to talk too. Thank you guys for getting me a new AC unit quickly.',
    author: 'Neelie Ryan',
  },
  {
    id: '17',
    quote:
      'Great product installed. Gave the best advice of type of air con that was suitable. The team Matthew and David were always on time and polite. Great communication throughout. A very thorough, professional fit. I am thrilled with my new air con. Would highly recommend them.',
    author: 'Brian Gordon',
  },
  {
    id: '18',
    quote:
      'The technicians were friendly, professional, and took care of my broken AC unit in a timely manner. I highly recommend 24/7 HVAC of Long Island.',
    author: 'A Google User',
  },
  {
    id: '19',
    quote:
      'Best plumbing and HVAC professionals in the area. Very prompt to respond and will answer your call or texts even after hours. Highly recommend!',
    author: 'Serge Salganik',
  },
  {
    id: '20',
    quote:
      'They were very responsive and fixed my vent very quickly. They replaced my old heating system with a new one and did so at a great price.',
    author: 'A Google User',
  },
];

const AC_TIPS = [
  'Replace or clean air filters regularly',
  'Keep the outdoor unit free from dirt and debris',
  'Schedule yearly inspections',
  'Check thermostat settings',
  'Fix minor issues before they turn into major repairs',
];

const COMMON_AC_PROBLEMS = [
  'AC not cooling properly',
  'System not turning on',
  'Weak airflow or uneven cooling',
  'Unusual noises or smells',
  'Water leakage or frozen coils',
];

export default function AirConditioningRepairPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);

  const handleSelectServiceByName = (name: string) => {
    const found = HVAC_SERVICES.find(
      (s) => s.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(s.id)
    );
    setSelectedService(found || HVAC_SERVICES[4]);
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    setSelectedArea(found || SERVICE_AREAS[0]);
  };

  const testimonialsPerPage = 6;
  const totalPages = Math.ceil(AC_TESTIMONIALS.length / testimonialsPerPage);
  const displayedTestimonials = AC_TESTIMONIALS.slice(
    activeTestimonialPage * testimonialsPerPage,
    (activeTestimonialPage + 1) * testimonialsPerPage
  );

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
          <Link href="/#services" className="hover:text-royal transition-colors">
            Cooling Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Air Conditioning Repair Long Island, NY</span>
        </div>
      </div>

      {/* ==============================================================
          1. BANNER / HERO SECTION (Homepage Hero Design & Structure)
         ============================================================== */}
      <section
        id="hero-banner"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/247 havc/heat-pump-repair/0534fe6f-9e80-4a28-b54a-52e0613d1633.jpg"
            alt="Air Conditioning Repair Long Island, NY"
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
              {/* Emergency Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl sm:rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="leading-snug">Emergency air conditioning repair in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Air Conditioning Repair Long Island, NY
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Fast and dependable air conditioning repair in Long Island, NY for homes and businesses. Whether your system is not cooling, making noise, or has stopped working, we provide quick solutions to restore comfort without delay.
              </p>

              {/* Exact Supporting Points */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 mb-6 sm:mb-7 text-xs sm:text-sm font-semibold text-slate-100 font-body">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Emergency air conditioning repair in Long Island</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Same-day service available</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>All AC systems and brands</span>
                </div>
              </div>

              {/* Action Buttons: Call Us Now & Get A Free Quote (Homepage Master Style) */}
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

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Book Diagnostic Appointment</span>
                </button>
              </div>

              {/* Review Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-brightYellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brightYellow" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star Rating</span>
                <span className="text-slate-400">•</span>
                <span>Hundreds of 5-Star Reviews Across Long Island</span>
              </div>
            </div>

            {/* Desktop Hero Right Card (Matches Homepage Master Style) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Fast Dispatch
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">
                      Rapid AC Dispatch
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Same-Day Dispatch:</strong> Nassau, Queens & Western Suffolk.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Certified AC Techs:</strong> Carrier, Trane, Lennox & All Major Brands.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Fully Stocked Vehicles:</strong> Over 1,000 OEM replacement parts on hand.</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Emergency Line</p>
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
          2. INTRO SECTION (Exact Heading, Paragraphs & Common AC Problems)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Trusted Air Conditioning Experts
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-6 font-heading">
              Your Local Experts for Air Conditioning Repair in Long Island
            </h2>
            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-body text-left sm:text-justify">
              We provide dependable air conditioning repair in Long Island for both homes and businesses, backed by local experience and a clear understanding of common AC issues in the area. Whether your system is not cooling properly or has stopped working, our team responds quickly with practical solutions that restore comfort.
            </p>
            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body text-left sm:text-justify">
              From small repairs to major system problems, we handle all types of air conditioning repair on Long Island. Our technicians take the time to inspect your system, find the root cause, and fix it in a way that helps prevent future breakdowns. Whether you need HVAC Repair in Long Island, NY, or HVAC repair services in Hewlett, many customers rely on us for heating and air conditioning repair services in Long Island because we focus on long-term performance, not just temporary fixes.
            </p>
          </div>

          {/* Subheading: Common AC problems we fix: */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 max-w-5xl mx-auto shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                Common AC problems we fix:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-body">
              {COMMON_AC_PROBLEMS.map((problem, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-royal/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-brightRed flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{problem}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600 font-body">
                Experiencing one of these problems? Our technicians carry universal replacement parts for same-day repairs.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brightRed hover:bg-brightRed-hover text-white font-bold text-xs uppercase tracking-wider transition-all font-heading"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. SERVICES SECTION (Complete Air Conditioning Repair in Long Island)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our AC Repair Capabilities
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Complete Air Conditioning Repair in Long Island
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              At 247 HVAC of Long Island, we provide a full range of services to cover every type of air conditioning system, ensuring reliable performance and long-term comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {AC_SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/90 text-white text-xs font-black uppercase tracking-wider font-heading shadow-md backdrop-blur-sm">
                        <IconComp className="w-3.5 h-3.5 text-brightYellow" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading"
                      >
                        <span>Schedule Inspection</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={PHONE_TEL}
                        className="text-xs font-bold text-slate-600 hover:text-brightRed transition-colors font-heading"
                      >
                        Call 24/7
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. BRANDS SECTION (AC Brands We Repair in Long Island)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Manufacturer Expertise
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              AC Brands We Repair in Long Island
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-6">
              Our technicians work with all major air conditioning brands, so you can expect reliable service no matter what system you have. We provide expert air-conditioning repair in Long Island using the right tools and proven methods to ensure your system runs smoothly.
            </p>
            {/* Exact Subheading */}
            <h3 className="text-lg sm:text-xl font-bold text-navy font-heading">
              Popular brands we service:
            </h3>
          </div>

          {/* Brand Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {AC_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-royal/30 transition-all duration-300 min-h-[140px]"
              >
                {brand.image ? (
                  <div className="relative w-28 sm:w-36 h-14 sm:h-16 mb-2">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Air Conditioning Repair Long Island`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-navy/5 text-navy flex items-center justify-center font-black text-xl font-heading mb-2">
                    {brand.name.substring(0, 2)}
                  </div>
                )}
                <span className="text-sm sm:text-base font-bold text-navy font-heading">
                  {brand.name}
                </span>
                <span className="text-[11px] text-slate-500 font-body">Certified Repair</span>
              </div>
            ))}
          </div>

          {/* Exact Closing text */}
          <div className="max-w-2xl mx-auto text-center bg-blue-50/60 border border-blue-100 rounded-xl p-5">
            <p className="text-sm sm:text-base text-slate-700 font-medium font-body">
              No matter the brand or model, our team has the experience to diagnose issues quickly and deliver repairs that last.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. WHY CHOOSE US SECTION (Homepage Master Theme: Clean Light Layout)
         ============================================================== */}
      <section className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Background Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-4 font-heading border border-royal/15">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
              <span>Our Customer Commitment</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Why Choose 247 HVAC of Long Island For Air Conditioner Repair & Maintenance
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Choosing the right company for air conditioning repair in Long Island can make a big difference in how long your system lasts.
            </p>
          </div>

          {/* Exact Features (Matching Homepage Master Tokens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: '24/7 emergency service available',
                desc: 'Round-the-clock emergency support when your AC unit shuts down in high heat.',
                icon: Clock,
              },
              {
                title: 'Fast response across all areas in Long Island',
                desc: 'Mobile repair vehicles strategically staged across Nassau, Queens, and Suffolk.',
                icon: Zap,
              },
              {
                title: 'Clear and affordable pricing',
                desc: 'Upfront, honest estimates with zero hidden fees or unexpected surcharges.',
                icon: DollarSign,
              },
              {
                title: 'Experienced and trained technicians',
                desc: 'Fully licensed, EPA-certified technicians equipped with specialized testing tools.',
                icon: ShieldCheck,
              },
              {
                title: 'Repairs for all makes and models',
                desc: 'Universal part inventory to handle central AC, mini-splits, and heat pumps.',
                icon: Wrench,
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                        <IconComponent className="w-6 h-6 text-royal" />
                      </div>
                      <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Animated Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                    {/* Exact Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                      {feature.desc}
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
          6. TESTIMONIALS SECTION (Our Client Testimonials - All 20 Reviews)
         ============================================================== */}
      <TestimonialsSection
        id="testimonials"
        badgeText="Verified Feedback"
        heading="Our Client Testimonials"
        reviews={AC_TESTIMONIALS.map((t) => ({
          id: t.id,
          name: `— ${t.author}`,
          location: 'Verified Customer',
          comment: t.quote,
        }))}
      />

      {/* ==============================================================
          7. SERVICE AREAS SECTION (Proudly Serving Long Island, NY...)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Coverage & Locations
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Proudly Serving Long Island, NY with AC Repair Services
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We provide air conditioning repair in Long Island, NY, across all major areas, including:
            </p>
          </div>

          {/* Exact Service Area Links: Nassau, Queens, Suffolk, Brooklyn, Manhattan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8 font-heading">
            <Link
              href="/service-areas/nassau-county"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <NassauSeal className="w-7 h-7 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Nassau Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas#queens"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <QueensSeal className="w-7 h-7 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Queens Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas#suffolk"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <SuffolkSeal className="w-7 h-7 flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Suffolk Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-royal flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Brooklyn Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
            </Link>

            <Link
              href="/service-areas"
              className="flex items-center justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-royal flex-shrink-0" />
                <span className="font-bold text-navy group-hover:text-royal transition-colors text-sm">
                  Manhattan Areas »
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-royal transition-colors" />
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
          8. TIPS SECTION (Simple Maintenance Tips to Keep Your AC...)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Preventative Guidance
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Simple Maintenance Tips to Keep Your AC Running Efficiently
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Regular maintenance can help reduce the need for air conditioning repair in Long Island and keep your system working efficiently.
            </p>
          </div>

          {/* Exact Tips */}
          <div className="max-w-4xl mx-auto space-y-4">
            {AC_TIPS.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-royal/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-royal/10 text-royal flex items-center justify-center font-bold text-sm font-heading flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-base font-semibold text-slate-800 font-body">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          9. FINAL CTA SECTION (Homepage Master Style)
         ============================================================== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Mini Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Contact our certified cooling specialists today for prompt air conditioning diagnostics, emergency repairs, and preventative tune-ups.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            {/* 1. Book Now — Green */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>

            {/* 2. Call Now — Yellow */}
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            {/* 3. Get A Free Quote — Royal Blue */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
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
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
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
