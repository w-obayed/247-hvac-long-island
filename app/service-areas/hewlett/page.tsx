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
  AlertTriangle,
  Award,
  DollarSign,
  Search,
  Zap,
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

const HEWLETT_COOLING_SERVICES: LocationServiceCard[] = [
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

const HEWLETT_HEATING_SERVICES: LocationServiceCard[] = [
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

const HEWLETT_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'This company is very reliable. I called at 6 am and they were here by 8am! They fixed the heat and were on their way in less than an hour! I am very happy with the service provided!',
    author: 'Richard Haas',
  },
  {
    id: '2',
    quote:
      'The team was knowledgeable and patient and arrived exactly when they said they would and gave ample notice of their arrival. They even helped me fill out the paperwork I needed to submit to get reimbursed by my insurance. 10/10 recommend! I will be using them again!',
    author: 'Jessica Kearney',
  },
  {
    id: '3',
    quote:
      'Dave and his crew were great to work with. Always took my calls or got back to me quickly. So easy to deal with and a pleasure to talk too. Thank you guys for getting me a new AC unit quickly.',
    author: 'Neelie Ryan',
  },
  {
    id: '4',
    quote:
      'I had no idea what I was doing when I called the HVAC company. They were very helpful and patient with me and I was able to get the problem fixed. I just wish that I had called them sooner. If I ever have a problem with my HVAC system again, I know exactly where I am going to go.',
    author: 'Erwin Williams',
  },
  {
    id: '5',
    quote:
      'I\'m a long time customer! 247 HVAC is always there for me when I need them for my rental properties!',
    author: 'Mg Moe Mg Moe',
  },
  {
    id: '6',
    quote:
      'Got a new furnace unit installed a few days ago. They did a great job by providing professional knowledge, prompt service and installation. I won\'t hesitate to refer to my friends or anyone interested.',
    author: 'Luke Palmer',
  },
  {
    id: '7',
    quote:
      'This is a very professional and reliable company. They worked with me to stay within my budget to replace my 70 year old heating furnace. The technicians arrived on time with no excuses and even stayed late to complete the job with no complaints to make sure there was heat in the house and all gas connections were safe (no leaks). I highly recommend their services and will continue to use their services.',
    author: 'Alexander Pineda',
  },
  {
    id: '8',
    quote:
      'Our 15 year old furnace stopped working it was not going to be worth fixing. They replaced it with a better unit and I feel like the price was fair! Thank you',
    author: 'Haryy Jason',
  },
  {
    id: '9',
    quote:
      'I called them and spoke to David around 630pm as my AC stopped working. He was prompt and arrived at my house within 1 hour. Provided great service. Thanks',
    author: 'Lee Moreno',
  },
  {
    id: '10',
    quote:
      'I can\'t say enough for David .....he was caring professional and smart and I will use them a 100 times over what a great job and his workers were wonderful thank you again.',
    author: 'Rosemary Bastiancic',
  },
  {
    id: '11',
    quote:
      'They installed a new heating and cooling system and the technicians were outstanding! They finished the whole thing in one day and the system works perfectly! Great team of hard working young men!',
    author: 'Helen Butler',
  },
  {
    id: '12',
    quote:
      'I would highly recommend 24/7 HVAC of Long Island for their Heating System Repair, HVAC System Maintenance, Heating System Installation and more. They are prompt and always on time with their work!',
    author: 'Roger Kirkland',
  },
  {
    id: '13',
    quote:
      'I have used 24/7 HVAC of Long Island for the third time and they are true professionals with exceptional customer service. The installer was prompt, honest and left our place spotless. I highly recommend them.',
    author: 'Archie Brooks',
  },
  {
    id: '14',
    quote:
      'Our stackable washer and dryer was making noise on the spin cycle of the wash. After looking at a few companies I called for service and was very pleased with the service provided by the tech. He was able to fix it on the spot with a part from his truck! Very reasonable price as well!',
    author: 'Walter Warren',
  },
  {
    id: '15',
    quote:
      'Turned out my emergency switch was off (thanks kids). Edgar was professional and get helpful and did a thorough check on my units. Very pleased!',
    author: 'John Bailey',
  },
  {
    id: '16',
    quote:
      'The old furnace was removed and new furnace was installed. Well done and the new furnace warms up the home quickly, thank you. I would recommend for any home installation job.',
    author: 'Connor Chambers',
  },
  {
    id: '17',
    quote:
      'Luis did a great job fitting our new air conditioning unit. Kept us well informed with when the kit was going to be in stock and completed the job in a morning with no fuss or mess. Highly recommend them.',
    author: 'Thomas Leech',
  },
  {
    id: '18',
    quote:
      'Great Company. They Are really helpful and polite. Thank you 247 HVAC OF LONG ISLAND.',
    author: 'Emmanuel Deterro',
  },
  {
    id: '19',
    quote:
      'We have been dealing with 24/7 HVAC of Long Island since 2016 for our furnace installation. Now, it\'s time to replace our Old 25 yrs ac. David was our sales consultant, and he explained to me from lower model to higher model. We booked installation for next day. We are very satisfied with their work and service.',
    author: 'Lewis Porter',
  },
  {
    id: '20',
    quote:
      'i called they responded within a a half hour excellent team very satified',
    author: 'Mark Appel',
  },
];

export default function HewlettLocationPage() {
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
          <span className="text-navy font-bold">Hewlett</span>
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
              <span>Five Towns Community • 24/7 Mobile Service Hub</span>
            </div>

            {/* Exact Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-heading">
              Professional HVAC Services in Hewlett, NY
            </h1>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-body">
              Your heating and cooling system plays an important role in maintaining comfort throughout every season. Our HVAC company in Hewlett, NY, provides dependable residential and commercial solutions designed to improve system performance, indoor comfort, and energy efficiency. Whether you need a new installation, a timely repair, or regular maintenance, our experienced team delivers practical solutions tailored to your property’s needs.
            </p>

            {/* Exact Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-white font-heading">
                  24/7 emergency HVAC availability
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  Heating and cooling services for homes and businesses
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  Prompt response across Hewlett and nearby communities
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
      {/* 2. INTRO SECTION */}
      {/* ========================================================================= */}
      <section id="intro" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading">
                <NassauSeal className="w-4 h-4 flex-shrink-0" />
                <span>Trusted Local Climate Specialists</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight font-heading">
                Your Trusted HVAC Company in Hewlett, NY
              </h2>

              {/* Exact Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                <p>
                  Every property has different heating and cooling requirements, which is why 247 HVAC of Long Island provides comprehensive HVAC Services in Hewlett designed around your system, comfort goals, and budget.
                </p>
                <p>
                  From new equipment installation to ongoing maintenance, our team focuses on solutions that support reliable performance throughout the year.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 font-heading">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-brightYellow flex-shrink-0" />
                  <div>
                    <span className="text-xl font-black text-navy block leading-none">24/7</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fast Response</span>
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
                    <span className="text-xl font-black text-navy block leading-none">5.0 Star</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/image-website/ac-installation-bd.jpg"
                  alt="HVAC service in Hewlett, NY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">Hewlett, NY</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      Hewlett HVAC Operations Hub
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Prompt mobile service across Hewlett, NY 11557 and Five Towns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-y border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
              Our Professional Solutions
            </span>
            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Expert HVAC Services in Hewlett for Residential & Commercial Properties
            </h2>
            {/* Exact Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Our HVAC services in Hewlett include complete heating, cooling, and indoor air quality solutions designed to keep your system operating efficiently in every season. Our team handles everything from system installation to ongoing service, ensuring your HVAC setup performs efficiently throughout the year.
            </p>
            <p className="text-sm sm:text-base text-slate-500 font-body">
              Whether you need HVAC services in Woodmere, NY, for a residential property or HVAC services in East Rockaway, NY, for a commercial building, our team provides professional support from the initial assessment through the final service.
            </p>
          </div>

          {/* Group 1: HVAC Cooling Services */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-electric/15 text-royal flex items-center justify-center flex-shrink-0">
                <Snowflake className="w-5 h-5 text-royal" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy font-heading">HVAC Cooling Services</h3>
                <p className="text-xs text-slate-500 font-body">Reliable cooling repairs, installations, and duct maintenance for Hewlett properties.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HEWLETT_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Hewlett`}
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
                <p className="text-xs text-slate-500 font-body">Complete furnace, boiler, water heater, and chimney care in Hewlett.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HEWLETT_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Hewlett`}
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
      {/* 4. WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Award className="w-4 h-4 text-royal" />
              <span>The 247 HVAC Difference</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              What Makes Our HVAC Contractor in Hewlett the Right Choice
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Choosing the right HVAC contractor impacts your system’s reliability, efficiency, and long-term performance. Our team is committed to providing quality workmanship and dependable service for every project.
            </p>
          </div>

          {/* Exact 5 Bullets / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Experienced HVAC Professionals
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Certified, background-checked specialists with deep local knowledge.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brightYellow/20 text-navy flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-brightYellow" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Fast response and dependable local service
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Rapid emergency dispatch and punctual appointment scheduling.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-hvacGreen/10 text-hvacGreen flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-hvacGreen" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Clear Pricing With No Surprises
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Upfront estimates and transparent quotes before any work begins.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-electric/15 text-royal flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Proper System Evaluation
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Comprehensive diagnostics identifying root causes, not just symptoms.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brightRed/10 text-brightRed flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-brightRed" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Long-Term Comfort Solutions
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Maximized energy efficiency, lower bills, and reliable year-round comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS SECTION (ALL 20 TESTIMONIALS) */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brightYellow/20 text-navy text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Star className="w-4 h-4 fill-brightYellow text-brightYellow" />
              <span>5.0 Average (Rated 5 out of 5)</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              See Why Property Owners Choose Our HVAC Company
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Our commitment to dependable workmanship, customer care, and professional service has helped us build lasting relationships with homeowners and businesses throughout Hewlett. As a trusted HVAC company in Hewlett, NY, we focus on delivering reliable solutions, clear communication, and quality service that keep heating and cooling systems operating at their best. Our dedication to customer satisfaction and long-term comfort is what continues to make us a preferred choice in the local community.
            </p>
          </div>

          {/* Grid of 20 Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {HEWLETT_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-royal/15 absolute top-5 right-5 pointer-events-none" />

                <div className="mb-4 relative z-10">
                  <div className="flex items-center gap-1 text-brightYellow mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brightYellow" />
                    ))}
                  </div>

                  {/* Exact Review Text */}
                  <p className="text-slate-700 italic font-body text-sm leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    {/* Exact Reviewer Name */}
                    <h4 className="font-extrabold text-navy font-heading text-sm">
                      {review.author}
                    </h4>
                    <span className="text-xs text-slate-400 font-body">Verified Review</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold text-royal font-heading shadow-sm">
                    ★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMMON ISSUES SECTION */}
      {/* ========================================================================= */}
      <section id="common-issues" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brightRed/10 text-brightRed text-xs font-black uppercase tracking-wider mb-3 font-heading">
                <AlertTriangle className="w-4 h-4 text-brightRed" />
                <span>Troubleshooting Guide</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
                Common HVAC Problems Found in Hewlett Homes
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                HVAC systems can develop issues over time due to regular use, aging components, or a lack of maintenance. Recognizing early warning signs can help prevent costly repairs and unexpected breakdowns.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common HVAC issues include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Uneven temperatures throughout your home',
                  'Weak airflow from vents',
                  'Unusual sounds during system operation',
                  'Increasing utility costs',
                  'Frequent cycling or system shutdowns',
                ].map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-5 h-5 text-brightRed flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 font-body">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exact Paragraph */}
            <p className="text-center text-slate-600 font-body text-base">
              Our HVAC services in Hewlett, NY, are designed to diagnose these problems accurately and provide effective solutions that restore comfort and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SCHEDULE SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-100 text-slate-800 border-y border-slate-200">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Calendar className="w-12 h-12 text-royal mx-auto mb-4" />

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight font-heading mb-4">
            Get Expert HVAC Services in Hewlett, NY Today
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            If your heating or cooling system is not performing as it should, contact our team today. We are ready to provide dependable solutions and professional service designed to restore comfort and efficiency to your property.
          </p>

          {/* Exact Button */}
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <FileText className="w-5 h-5" />
            <span>Get A Free Quote</span>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. VISIT SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <NassauSeal className="w-12 h-12 mx-auto mb-4" />

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight font-heading mb-4">
            Visit Your Local HVAC Company in Hewlett, NY
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            Our HVAC company proudly serves homeowners and businesses in Hewlett with complete heating and cooling services designed to improve comfort, efficiency, and system reliability.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CTA SECTION */}
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
            Speak directly with our Hewlett technicians for prompt heating and air conditioning repair or a free quote.
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
