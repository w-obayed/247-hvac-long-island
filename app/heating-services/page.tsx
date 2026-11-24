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
  Flame,
  Droplets,
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
  HelpCircle,
  AlertCircle,
  Zap,
  Layers,
  ThermometerSnowflake,
  Award,
  Sparkles,
  Check,
  Activity,
  Sliders,
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
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_LOCATION } from '@/lib/utils';

const HEATING_BRANDS = [
  { name: 'Lennox', image: '/image-website/Lennox_jpbqmb.png' },
  { name: 'Trane', image: '/image-website/Trane_puir6y.png' },
  { name: 'Goodman', image: '/image-website/goodman_wpvlfi.png' },
  { name: 'American Standard', image: '/image-website/American_tqzswh.png' },
  { name: 'Amana', image: '/image-website/amana_id8eon.png' },
  { name: 'Bryant', image: '/image-website/Bryant_poezku.png' },
  { name: 'Carrier', image: '/image-website/Carrier_wbzxx3.png' },
  { name: 'Rheem', image: '/image-website/Reem_n2obdg.png' },
];

const COMMON_HEATING_ISSUES = [
  'No heat or weak heating performance',
  'Uneven temperature across rooms',
  'Boiler or water heater malfunctions',
  'Unusual sounds or odors',
  'Systems frequently turn on and off',
];

const HEATING_SERVICES_LIST = [
  {
    id: 'heating-repair',
    title: 'Heating Repair Services Long Island',
    description:
      'We offer professional heating repair services in Long Island, fixing all types of heating system issues quickly and efficiently to restore comfort.',
    icon: Wrench,
    badge: '24/7 Rapid Diagnostics',
    href: '/furnace-installation-repair-replacement',
    image: '/images/technician-repair.jpg',
  },
  {
    id: 'heating-installation',
    title: 'Heating Installation Services Long Island',
    description:
      'Our team provides reliable heating installation services in Long Island, ensuring your system is installed properly for long-term performance and efficiency.',
    icon: Flame,
    badge: 'High-Efficiency Upgrades',
    href: '/boiler-installation-repair',
    image: '/images/boiler.jpg',
  },
  {
    id: 'furnace-services',
    title: 'Furnace Services Long Island',
    description:
      'We deliver complete furnace services in Long Island, including installation, repair, and replacement.',
    icon: Flame,
    badge: 'AFUE Up to 98%',
    href: '/furnace-installation-repair-replacement',
    image: '/images/furnace.jpg',
  },
  {
    id: 'boiler-water-heater',
    title: 'Boiler & Water Heater Services Long Island',
    description:
      'We handle boiler and water heater installation, repair, and maintenance as part of our complete heating services in Long Island NY.',
    icon: Droplets,
    badge: 'Hydronic & Domestic Hot Water',
    href: '/water-heater-installation-repair-replacement',
    image: '/image-website/water-heater-installation.jpg',
  },
];

const WHY_CHOOSE_BENEFITS = [
  {
    title: 'Emergency heating repair services available 24/7',
    desc: 'Rapid radio-dispatched mobile repair units ready to restore heat day or night.',
    icon: Clock,
  },
  {
    title: 'Quick service across Long Island',
    desc: 'Local technicians staged throughout Nassau, Queens, and Suffolk counties.',
    icon: Zap,
  },
  {
    title: 'Honest and transparent pricing',
    desc: 'Upfront, clear estimates before any work starts with zero hidden fees.',
    icon: DollarSign,
  },
  {
    title: 'Skilled technicians with hands-on experience',
    desc: 'Licensed, insured, and master-certified experts with over 30 years of field knowledge.',
    icon: ShieldCheck,
  },
  {
    title: 'Reliable heating installation services on Long Island',
    desc: 'Precision Manual J heat calculations and flawless installations backed by warranties.',
    icon: Award,
  },
];

const HEATING_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I want to thank edgar our tech! He was so nice and explained everything he was doing! Thank you for the great service!!',
    author: 'Louie Gentry',
  },
  {
    id: '2',
    quote:
      'I was referred to 24/7 HVAC of Long Island when my AC went out and they responded quickly. They came out and fixed my AC quickly and efficiently. They were easy to work with and very friendly. I would definitely recommend this company to anyone who needs AC or heating system repairs or installation.',
    author: 'Aron Davis',
  },
  {
    id: '3',
    quote:
      "I would highly recommend this company; they're professional and reliable. The workers are really knowledgeable and didn't mind going above and beyond, which is why they were able to figure out the source of my heating issues.",
    author: 'A Google User',
  },
  {
    id: '4',
    quote:
      'I would like to thank 247 HVAC OF LONG ISLAND for a job well done. I had a late night problem with my heating system the day before our recent deep freeze. I called for service and received a call back within 5mins. They arrived on time the next morning and within 1 hr. my heat was up and running. I especially would like to thank David who fixed the problem. He was professional and caring and in these times that is rare. I would highly recommend 247 HVAC OF LONG ISLAND for any HVAC work you need',
    author: 'Ebrahim Moazzen',
  },
  {
    id: '5',
    quote:
      'I got several quotes for my furnace, AC and Water Heater. I decided on 24/7 HVAC based on products offered and competitive pricing. They arrived to do the work and treated my home with a lot of care. I installed a Lennox Elite furnace, AC,water heater. So far, I am very satisfied.',
    author: 'Scott Jordan',
  },
  {
    id: '6',
    quote:
      "They installed a new furnace at a competitive price within 24 hours of my first call to them, and their staff was responsive to my questions. I'm very happy with their service.",
    author: 'Carson Noel',
  },
  {
    id: '7',
    quote:
      'Excellent service today from David and Edgar of 247 HVAC OF LONG ISLAND ! They arrived promptly and were friendly/comfortable to have in my home. Took care of maintenance issues with our boiler and radiators. So pleased with their service that we signed up for yearly maintenance plan. I highly recommend this company, and these 2 employees in particular.',
    author: 'Charlie Taylor',
  },
  {
    id: '8',
    quote:
      'The tech was on time and very professional. I just purchased a home and did not know anything about the unit except it looked old. He was able to validate the age of the unit and determined it was running pretty efficiently but needed maintenance. I appreciate the honesty and will use this company again.',
    author: 'Nicholas Bradley',
  },
  {
    id: '9',
    quote:
      'The technicians were punctual, friendly and professional. Comparable to other companies we enquired about a new ac unit, they gave us the best price and date to complete the job. We were very satisfied.',
    author: 'Callum Green',
  },
  {
    id: '10',
    quote:
      'Top of the line work! They installed a mini split in my sons room and we are very happy with the work and service provided by this company!',
    author: 'Vincent Watkins',
  },
  {
    id: '11',
    quote:
      'Prior to choosing 247 HVAC OF LONG ISLAND to do my repairs I didn’t have a company to go to for my plumbing needs. I will never call anyone else except for 247 HVAC OF LONG ISLAND. They are very responsive and their employees are courteous, professional and friendly. I had Luis and Junior and they both were very helpful. They even put covers on over their boots prior to entering my house so that they wouldn’t dirty the floors. Within minutes they were both able to diagnose the problem and explained in full to me what needed to be done. They had everything on their truck to complete the repair on the spot. I was beyond satisfied with their service and I will be recommending and using 247 HVAC OF LONG ISLAND for anything I need in the future because of how good Luis and Junior are. You will not be disappointed with 247 HVAC OF LONG ISLAND service.',
    author: 'Jkson G',
  },
  {
    id: '12',
    quote:
      'Best plumbing and HVAC professionals in the area. Very prompt to respond and will answer your call or texts even after hours. Highly recommend!',
    author: 'Serge Salganik',
  },
  {
    id: '13',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac. My wife was 9 months pregnant at the time and David showed up at 9 at night to make sure she had AC in the middle of the summer! Trustworthy, honest, and a huge help when you need a repair.',
    author: 'Willamina Hamnerio',
  },
  {
    id: '14',
    quote:
      'My furnace was super dirty so before the cold I just wanted to mKe sure it was all good. A friend recommended 247 hvac. They came on time did a thorough cleaning of the furnace, replaced a few filters in the house and made sure everything was running properly. Very clean work. Thank you for the service!',
    author: 'Htet Lin .A',
  },
  {
    id: '15',
    quote:
      'Matthew who did the duct cleaning was super! He was on time, hardworking and above all, very caring and honest! His job is very neat and clean, and pricing was very clear. We highly recommend this company.',
    author: 'Christopher Newman',
  },
  {
    id: '16',
    quote:
      'Technician was very professional, arrived on time, very polite. I was happy with the price of the service fee and I felt the technician was knowledgeable. This will definitely be my go to place for all my heating and AC needs.',
    author: 'Jonny Layton',
  },
  {
    id: '17',
    quote:
      'Highly professional, friendly and affordable service. I had a cooling & heating system installed at my art school a couple of weeks ago and I am so pleased to have chosen Air Options. Amazing service from first contact to install. Very knowledgeable staff where always fast to respond, incredibly helpful and went out of their way to meet my needs. Fairly priced & provided a smart, very quiet and effective system which perfectly fitted what I was after. The system is energy efficient, has inbuilt nano technology air cleaning system which is reassuring in these times & came with an easy to operate control panel. Delightful company, thanks Edgar & David !',
    author: 'Dale Hall',
  },
  {
    id: '18',
    quote:
      'i called they responded within a a half hour excellent team very satified',
    author: 'Mark Appel',
  },
  {
    id: '19',
    quote:
      'My Furnace fan broke and I was provided a choice to repair and replace. David came right away and diagnosed the problem.',
    author: 'Sebastian Bradley',
  },
  {
    id: '20',
    quote:
      'The tech Matthew came to fix a problem we had with our air conditioner. After spending two hours fixing it, he told us "no charge" since he "should have spotted the problem when he came to service the furnace earlier in the month". Great customer service, as always. We love this company!!',
    author: 'Timothy Turner',
  },
];

const MAINTENANCE_TIPS = [
  'Clean or replace air filters regularly',
  'Keep heating units free from dust and debris',
  'Schedule routine inspections',
  'Monitor thermostat performance',
  'Address small issues early',
];

export default function HeatingServicesPage() {
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
    setSelectedService(found || HVAC_SERVICES[0]);
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    setSelectedArea(found || SERVICE_AREAS[0]);
  };

  const testimonialsPerPage = 6;
  const totalPages = Math.ceil(HEATING_TESTIMONIALS.length / testimonialsPerPage);
  const displayedTestimonials = HEATING_TESTIMONIALS.slice(
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
          <span className="text-navy font-bold">Trusted HVAC Heating Services in Long Island, NY</span>
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
            src="/images/furnace.jpg"
            alt="Trusted HVAC Heating Services in Long Island, NY"
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
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">#1 Heating Company in Long Island, NY</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
                Trusted HVAC Heating Services in Long Island, NY
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-3 sm:mb-4 font-body">
                Dependable heating services in Long Island, NY, designed to keep your home or business warm when it matters most. If your system is underperforming, making noise, or has completely stopped working, our team provides fast and practical solutions.
              </p>

              {/* Exact Supporting Points */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 mb-6 sm:mb-7 text-xs sm:text-sm font-semibold text-slate-100 font-body">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>24/7 heating repair services Long Island</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Professional heating installation services Long Island</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Furnace, boiler & water heater solutions</span>
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
                  <span>Book Service Now</span>
                </button>
              </div>

              {/* Review Summary */}
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
                      Rapid Heat Dispatch
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
                    <span><strong className="font-heading font-bold text-white">24/7 Response:</strong> Nassau, Queens & Western Suffolk.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Certified Heating Techs:</strong> Furnaces, Boilers & Water Heaters.</span>
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
          2. INTRO SECTION (Balanced Two-Column Layout)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Paragraphs & Common Issues List */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
                Trusted Heating Contractors
              </span>
              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-6 font-heading">
                Your Go-To Heating Company in Long Island
              </h2>

              {/* Exact Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-8">
                <p>
                  As a trusted heating company in Long Island, we deliver complete heating solutions for residential and commercial properties. Our team works as an experienced heating contractor on Long Island, handling everything from system diagnostics to full upgrades.
                </p>
                <p>
                  We provide both heating repair services in Long Island and professional installation work, ensuring your system runs efficiently throughout the colder months. Every job begins with a detailed inspection so we can identify the exact issue and fix it correctly the first time.
                </p>
                <p>
                  Whether you need HVAC Repair in Long Island, NY, or are looking for HVAC services in Woodmere, NY, our team is ready to deliver reliable and efficient solutions tailored to your needs.
                </p>
                <p>
                  From handling issues with a furnace in Long Island, NY, to resolving boiler and water heater problems, we focus on dependable service that helps prevent repeat breakdowns.
                </p>
              </div>

              {/* Common Issues Box */}
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-brightRed/10 text-brightRed flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  {/* Exact Subheading */}
                  <h3 className="text-lg sm:text-xl font-black text-navy font-heading">
                    Common issues we handle:
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body">
                  {COMMON_HEATING_ISSUES.map((issue, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-royal/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Relevant Heating System Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/image-website/furnace-installation.jpg"
                  alt="Heating Company in Long Island, NY - Diagnostic and Installation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-royal block font-heading">
                        Over 30 Years Experience
                      </span>
                      <p className="text-sm font-black text-navy font-heading">
                        Precision Heating Diagnostics & Repairs
                      </p>
                    </div>
                    <a
                      href={PHONE_TEL}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brightRed text-white hover:bg-brightRed-hover transition-colors shadow-md flex-shrink-0"
                      aria-label="Call Now"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. HEATING SERVICES SECTION (4 Distinct Service Cards with Links)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Comprehensive Heating Solutions
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Complete Heating Services Long Island
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              At 247 HVAC of Long Island, we provide a full range of heating services in Long Island to keep your property warm and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {HEATING_SERVICES_LIST.map((service) => {
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
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-brightRed flex items-center justify-center flex-shrink-0">
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
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-xs font-black text-royal hover:text-royal-hover uppercase tracking-wider font-heading group/btn"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="text-xs font-bold text-slate-600 hover:text-brightRed transition-colors font-heading"
                      >
                        Schedule Service
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. HEATING BRANDS SECTION (Balanced Two-Column Layout)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Relevant Heating Equipment / Technician Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/boiler.jpg"
                  alt="Heating Systems We Service in Long Island - Major Brand Servicing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy/90 text-white backdrop-blur-md border border-white/10 shadow-lg">
                  <span className="text-[11px] font-black uppercase tracking-wider text-brightYellow block font-heading">
                    Multi-Brand Expertise
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-body">
                    Certified technicians carrying genuine OEM replacement parts for all major manufacturers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Introduction, Brand List & Closing Paragraph */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
                Authorized Brand Care
              </span>
              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
                Heating Systems We Service in Long Island
              </h2>
              {/* Exact Introduction */}
              <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed mb-4">
                As a leading heating company in Long Island, we work with a wide range of trusted heating brands across different systems.
              </p>
              {/* Exact Subheading */}
              <h3 className="text-lg sm:text-xl font-bold text-navy font-heading mb-6">
                Brands we commonly service:
              </h3>

              {/* Brands Grid with Real Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full mb-6">
                {HEATING_BRANDS.map((brand, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-sm hover:border-royal/30 transition-all min-h-[110px]"
                  >
                    <div className="relative w-24 sm:w-28 h-10 mb-1.5">
                      <Image
                        src={brand.image}
                        alt={`${brand.name} Heating Systems Long Island`}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-navy font-heading">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Exact Closing Paragraph */}
              <div className="w-full bg-blue-50/70 border border-blue-100 rounded-xl p-4 sm:p-5">
                <p className="text-sm sm:text-base text-slate-700 font-medium font-body leading-relaxed">
                  No matter the brand or system type, we provide reliable heating repair services in Long Island with attention to detail.
                </p>
              </div>
            </div>
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
              <span>Why Customers Rely On Us</span>
            </div>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Why Choose 247 HVAC of Long Island for Heating Services
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Working with the right heating contractor in Long Island ensures better system performance and fewer unexpected issues.
            </p>
          </div>

          {/* Benefits Grid (Matching Homepage Master Tokens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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

                    {/* Animated Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                    {/* Exact Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading">
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
          6. TESTIMONIALS SECTION (Our Client Testimonials - All 20 Reviews)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Client Feedback
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Our Client Testimonials
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-4">
              Homeowners and businesses trust us as a reliable HVAC heating company in Long Island, NY, for both repair and installation services. Our consistent service quality and clear communication have earned long-term customer trust.
            </p>
            {/* Exact Rating Information */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1 text-brightYellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brightYellow" />
                ))}
              </div>
              <span className="text-sm font-bold text-navy font-heading">
                Rating: 5.0 Average (Rated 5 out of 5)
              </span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brightYellow" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>
                  {/* Exact Quote */}
                  <p className="text-sm text-slate-700 leading-relaxed font-body italic mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {/* Exact Author */}
                  <span className="font-bold text-navy text-sm font-heading">
                    - {t.author}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 font-body">
                    Verified Customer
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 font-heading">
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => setActiveTestimonialPage(pageIdx)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTestimonialPage === pageIdx
                      ? 'bg-royal text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Page {pageIdx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==============================================================
          7. SERVICE AREAS SECTION
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Regional Coverage
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
              Serving Long Island, NY with Complete Heating Services
            </h2>
            {/* Exact Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              We provide complete heating services in Long Island, NY, covering all major areas:
            </p>
          </div>

          {/* Exact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 font-heading">
            <Link
              href="/service-areas/nassau-county"
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
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
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
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
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal hover:bg-royal/5 transition-all group"
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

          {/* Exact Concluding Paragraphs */}
          <div className="max-w-3xl mx-auto text-center space-y-4 text-slate-700 font-body text-base sm:text-lg">
            <p>
              Whether you need quick repairs or a full system upgrade, our team is ready to handle it with reliable and timely service.
            </p>
            <p>
              No matter where you are located, we deliver fast and efficient heating repair services in Long Island, ensuring your system is restored without delay.
            </p>
            <p className="font-bold text-navy pt-2">
              Contact us today to schedule your service or get expert assistance with your heating system.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. HEATING MAINTENANCE TIPS (Balanced Two-Column Layout)
         ============================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Relevant Heating System Maintenance Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/technician-service.jpg"
                  alt="Easy Ways to Maintain Your Heating System - Certified Heating Tuneup"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="text-[11px] font-black uppercase tracking-wider text-royal block font-heading">
                    Preventative Care
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-navy font-heading">
                    Annual Precision Tune-Up & Safety Inspection
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Introduction, 5 Tips & Concluding Paragraph */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
                Proactive System Care
              </span>
              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
                Easy Ways to Maintain Your Heating System
              </h2>
              {/* Exact Introduction */}
              <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed mb-6">
                Regular care can help reduce the need for frequent heating repair services in Long Island and keep your system running efficiently.
              </p>

              {/* Exact 5 Tips */}
              <div className="w-full space-y-3.5 mb-6 font-body">
                {MAINTENANCE_TIPS.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-royal/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-royal/10 text-royal flex items-center justify-center font-bold text-xs font-heading flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800">
                      {tip}
                    </span>
                  </div>
                ))}
              </div>

              {/* Exact Concluding Paragraph */}
              <p className="text-base text-slate-700 font-medium font-body leading-relaxed">
                These simple steps can improve efficiency and extend the life of your heating system.
              </p>
            </div>
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
            Speak directly with our Long Island heating specialists for immediate repair dispatch or to schedule your free heating installation estimate.
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
