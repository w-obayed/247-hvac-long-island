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

const EAST_ROCKAWAY_COOLING_SERVICES: LocationServiceCard[] = [
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

const EAST_ROCKAWAY_HEATING_SERVICES: LocationServiceCard[] = [
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

const EAST_ROCKAWAY_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'One of the HVAC firms I hired to inspect my HVAC unit to see if it could be repaired and, if not, to provide an estimate for a new replacement was 24/7 hvac. The third business to arrive discovered that nothing required replacement or repair. They discovered that a disconnected wire was the cause of my problem! The first two HVAC technicians from two different shops couldn\'t have diagnosed what 24/7 accomplished in under five minutes, I can\'t believe it! I became a customer for life for all servicing, maintenance, and replacement needs when 24/7 had all the financial incentives to pitch me a new replacement but only free-of-charge reconnected the cable!',
    author: 'Jonson Charls',
  },
  {
    id: '2',
    quote:
      'I called 24/7 HVAC and left a message with my phone number, to my surprise they called me right back!!! They were very friendly, reliable, professional and very clean. They did excellent quality work at a reasonable price. We recommend them 100%!!!! Their website page is also user friendly.',
    author: 'Ayelet Barr',
  },
  {
    id: '3',
    quote:
      'David and his team were amazing from the very beginning to the very end where they even vacuumed up after themselves—great touch!! We had all new HVAC installed including an exhaust fan in the laundry room. What should have been probably one day took two days because we live in a townhome and things are very compact and challenging. They were very pleasant and still left us with a smile on their faces. Very thorough when David provided a summary and tour of the work completed. We would highly recommend them without a doubt!! Thank you David, Edgar, and Luis.',
    author: 'David James',
  },
  {
    id: '4',
    quote:
      'I came across 24/7 HVAC of Long Island when I was looking for a local AC repair company. This company has been in business for over 30 years and has a great reputation for their work. They are prompt and professional, and I always feel safe and satisfied when I call them for work. The technicians that come out are always friendly and knowledgeable. This is a company that I will continue to use in the future and one that I highly recommend.',
    author: 'Martin Marks',
  },
  {
    id: '5',
    quote:
      'David and his partner responded quickly to my emergency call. My ductless system was not running properly and he knew the exact issue just by me explaining what was going on. That’s being an expert for sure! My system was up and running in no time and David called me in the evening to ensure that it was still working. I recommend these guys to anyone!',
    author: 'April Harris',
  },
  {
    id: '6',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac. My wife was 9 months pregnant at the time and David showed up at 9 at night to make sure she had AC in the middle of the summer! Trustworthy, honest, and a huge help when you need a repair.',
    author: 'Willamina Hamnerio',
  },
  {
    id: '7',
    quote:
      'I had no idea what I was doing when I called the HVAC company. They were very helpful and patient with me and I was able to get the problem fixed. I just wish that I had called them sooner. If I ever have a problem with my HVAC system again, I know exactly where I am going to go.',
    author: 'Erwin Williams',
  },
  {
    id: '8',
    quote:
      'Furnace had stop working and with the recent temperature drop called David. He came on the same day and was able to fix the issue quickly. Professional, clean and very fair price.',
    author: 'Layne Rosario',
  },
  {
    id: '9',
    quote: 'Great company, excellent service. Leonid',
    author: 'R T',
  },
  {
    id: '10',
    quote:
      'Awesome customer service! My heat stopped working. They came on time fixed the issue and were very clean!',
    author: 'Sanjee Sanjee',
  },
  {
    id: '11',
    quote: 'We are very pleased with the service of this company!!! Five stars!!!',
    author: 'Andrew Eaves',
  },
  {
    id: '12',
    quote:
      'They installed a new heating and cooling system and the technicians were outstanding! They finished the whole thing in one day and the system works perfectly! Great team of hard working young men!',
    author: 'Helen Butler',
  },
  {
    id: '13',
    quote:
      'I was referred to 24/7 HVAC of Long Island by a friend. The crew was professional and courteous. They communicated well and did a thorough job of repairing my heating system. The price was fair as well!',
    author: 'Matthew Barreto',
  },
  {
    id: '14',
    quote:
      'The nicest people and best service! Fixed all our HVAC issues - great people and company and highly recommend!',
    author: 'Lindsey Owen',
  },
  {
    id: '15',
    quote:
      '247 HVAC OF LONG ISLAND was very professional and knowledgeable. They helped figure out a new system for my old house to make things more efficient and save me money. They set up a whole house heating and ac system and have helped me trouble shoot any problems I may have. I trust this company and we’ll continue doing business with them.',
    author: 'Yeow Thomas',
  },
  {
    id: '16',
    quote:
      'This company is very easy to work with! They were very responsive and our tech was very knowledgeable and got our system back up and running!',
    author: 'Gregory Schmaltz',
  },
  {
    id: '17',
    quote:
      'The technicians were friendly, professional, and took care of my broken AC unit in a timely manner. I highly recommend 24/7 HVAC of Long Island.',
    author: 'A Google User',
  },
  {
    id: '18',
    quote:
      'Of course my furnace went kaput on our first day of snow! I called several companies for service but only 247 HVAC OF LONG ISLAND could schedule a visit so timely. Very pleased with the professionalism of David who installed a new blower. The total price was on par with online estimates that I\'d researched. Office staff was pleasant and efficient. I was texted confirming my appointment, which was great. I would highly recommend them for super service and affordability. I\'d use them again if I have to. Fingers crossed, though.',
    author: 'Josephine Pires',
  },
  {
    id: '19',
    quote:
      'I\'ve been using 24/7 HVAC for years and I think they are the best AC repair Company around. I love that they are open 24 hours and that they provide great customer service. Their technicians are so knowledgeable and I love that they always fix the problem and don\'t try to sell you more than what you need. They are also affordable and their technicians are friendly.',
    author: 'Kenneth Parker',
  },
  {
    id: '20',
    quote:
      'It was a very cold Friday night in late November, my young child was sick, and my heat went out. Was calling around and got few responses, most unable to help or listen to the issue with the furnace. I came across this place and the person I spoke to (don’t remember name) was very helpful and honest. They prioritized me because of my young child. The guy came came diagnosed the problem and then drove about 20 minutes away to get the part and fix the problem. Price was reasonable and service professional and on point. Strongly recommend',
    author: 'Luke Fitzgibbon',
  },
];

export default function EastRockawayLocationPage() {
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
          <span className="text-navy font-bold">East Rockaway</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="Nassau County, NY • South Shore Service Hub"
        title="Expert HVAC Company in East Rockaway, NY"
        bullets={[
          { text: "Residential and commercial HVAC support", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
          { text: "Quick service throughout East Rockaway", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" /> },
          { text: "Emergency HVAC assistance available", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
        ]}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading">
                <NassauSeal className="w-4 h-4 flex-shrink-0" />
                <span>Trusted Local Climate Specialists</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight font-heading">
                Dedicated Service From a Local HVAC Company in East Rockaway, NY
              </h2>

              {/* Exact Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                <p>
                  Every property has unique comfort requirements, and our team provides HVAC solutions designed around your system and environment. As a trusted HVAC Company in East Rockaway, NY, we handle inspections, repairs, replacements, and installations with a focus on precision and long-term dependability.
                </p>
                <p>
                  Our goal is to maximize system efficiency, improve indoor comfort, and prevent recurring HVAC concerns. Whether your equipment needs routine care or a complete upgrade, 247 HVAC of Long Island provides solutions tailored to your property.
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
                  src="/247 havc/heat-pump-repair/0534fe6f-9e80-4a28-b54a-52e0613d1633.jpg"
                  alt="HVAC service in East Rockaway, NY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">East Rockaway, NY</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      East Rockaway HVAC Operations Hub
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Fast mobile diagnostic trucks throughout East Rockaway, NY 11518
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
              Comprehensive HVAC Services in East Rockaway, NY
            </h2>
            {/* Exact Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              A properly functioning HVAC system requires professional care, quality equipment, and attention to detail. Our HVAC Services in East Rockaway, NY, include complete heating, cooling, and air quality solutions designed to improve comfort and system reliability.
            </p>
            <p className="text-sm sm:text-base text-slate-500 font-body">
              Whether you need HVAC services in Long Beach, NY, or are searching for HVAC services in Long Island, our team provides thorough assessments, honest recommendations, and dependable service from start to finish.
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
                <p className="text-xs text-slate-500 font-body">Reliable cooling repairs, installations, and duct maintenance for East Rockaway properties.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EAST_ROCKAWAY_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in East Rockaway`}
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
                <p className="text-xs text-slate-500 font-body">Complete furnace, boiler, water heater, and chimney care in East Rockaway.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EAST_ROCKAWAY_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in East Rockaway`}
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
              Why Choose Our HVAC Contractor in East Rockaway
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Choosing a knowledgeable HVAC professional helps protect your investment and ensures consistent indoor comfort. Our team is committed to delivering dependable workmanship and personalized solutions for every heating and cooling project.
            </p>
          </div>

          {/* Exact 5 Bullets / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Skilled HVAC Technicians
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
                Prompt and Reliable Service
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
                Clear pricing with no hidden charges
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
                Detailed System Evaluation
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
                Performance-Focused Solutions
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
      <TestimonialsSection
        id="testimonials"
        badgeText="5.0 Average (Rated 5 out of 5)"
        heading="Why Customers Rely on Our HVAC Services"
        reviews={EAST_ROCKAWAY_TESTIMONIALS.map((r: any) => ({
          id: r.id,
          name: r.author || r.name,
          location: r.location || 'Verified Customer',
          service: r.service,
          rating: r.rating ?? 5,
          comment: r.quote || r.comment,
        }))}
      />

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
                HVAC Issues That Often Require HVAC Services in East Rockaway, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                HVAC systems experience wear over time, and addressing early warning signs can prevent larger repairs and unexpected breakdowns.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common problems include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Uneven airflow between rooms',
                  'Air conditioning systems are not cooling effectively',
                  'HVAC units cycling too frequently',
                  'Strange sounds or unusual odors',
                  'Increased monthly energy costs',
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
              Our team identifies the source of HVAC problems and provides the right solutions to restore efficient system operation.
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
            Schedule Reliable HVAC Services Today
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            Whether your HVAC system requires repairs, maintenance, or a complete replacement, our team is ready to provide dependable solutions designed around your comfort and property needs.
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
      {/* 8. CONNECT SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <NassauSeal className="w-12 h-12 mx-auto mb-4" />

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight font-heading mb-4">
            Connect With Our HVAC Company in East Rockaway, NY
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            247 HVAC of Long Island proudly serves homeowners and businesses throughout East Rockaway with dependable heating and cooling solutions. We are committed to helping our local community maintain comfortable and energy-efficient indoor spaces.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. LOCATION MAP SECTION */}
      {/* ========================================================================= */}
      <section id="location-map" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <MapPin className="w-3.5 h-3.5 text-royal" />
              <span>East Rockaway Service Area Map</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Location Map
            </h2>
            <p className="text-base text-slate-600 mt-2 font-body">
              Serving East Rockaway, Lynbrook, Oceanside, Rockville Centre, and South Shore Nassau County with 24/7 service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
              <iframe
                src="https://maps.google.com/maps?q=East+Rockaway,+NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="East Rockaway, NY HVAC Service Area Map"
                className="w-full h-[360px] sm:h-[450px] rounded-xl"
              />
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <NassauSeal className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-navy font-heading">
                      East Rockaway, NY Service Hub
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active 24/7 Dispatch
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 font-body mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-royal flex-shrink-0 mt-0.5" />
                    <span>East Rockaway, Nassau County, New York 11518</span>
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
                    Nearby South Shore Communities
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {['Lynbrook', 'Oceanside', 'Rockville Centre', 'Hewlett', 'Woodmere', 'Bay Park'].map((c) => (
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
      {/* 10. CTA SECTION */}
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
            Speak directly with our East Rockaway technicians for prompt heating and air conditioning repair or a free quote.
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
