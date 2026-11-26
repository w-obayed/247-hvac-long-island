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

const WOODMERE_COOLING_SERVICES: LocationServiceCard[] = [
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

const WOODMERE_HEATING_SERVICES: LocationServiceCard[] = [
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

const WOODMERE_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Very happy with our new furnace and will definitely recommend them to our friends and family!!',
    author: 'Liam Simpson',
  },
  {
    id: '2',
    quote:
      'We had a wonderful experience with 24/7 HVAC of Long Island! They were friendly, knowledgeable, and made sure we understood exactly what was wrong with our AC unit. We will definitely be calling them in the future!',
    author: 'Maurice Hart',
  },
  {
    id: '3',
    quote:
      'Luis did a great job fitting our new air conditioning unit. Kept us well informed with when the kit was going to be in stock and completed the job in a morning with no fuss or mess. Highly recommend them.',
    author: 'Thomas Leech',
  },
  {
    id: '4',
    quote:
      'I called 24/7 HVAC of Long Island in the evening and Matthew came 15-20 mins after. He was able to diagnose the issue within 15 mins and provide a fix for us. Thanks to him for a great service.',
    author: 'Lyric Lamb',
  },
  {
    id: '5',
    quote:
      'I called for service because my heat stopped working. Turns out I was out of oil! They said since we are here and already charging you for a service call let us service the system and make sure its cleaned out and running well. I loved that they did that! They could have just charged me and left but they did the right thing. Very honest guys.',
    author: 'Hein Htet Ko',
  },
  {
    id: '6',
    quote:
      'I have used 24/7 HVAC of Long Island for the third time and they are true professionals with exceptional customer service. The installer was prompt, honest and left our place spotless. I highly recommend them.',
    author: 'Archie Brooks',
  },
  {
    id: '7',
    quote:
      'i called they responded within a a half hour excellent team very satified',
    author: 'Mark Appel',
  },
  {
    id: '8',
    quote:
      'We were happy for the advice and questions answered by the team -David was helpful in advising us on the right furnace for our home. The installation was completed by David and his team, it was done promptly and properly. Would highly recommend.',
    author: 'Isabelle Collins',
  },
  {
    id: '9',
    quote:
      'Our 15 year old furnace stopped working it was not going to be worth fixing. They replaced it with a better unit and I feel like the price was fair! Thank you',
    author: 'Haryy Jason',
  },
  {
    id: '10',
    quote:
      'The tech Matthew came to fix a problem we had with our air conditioner. After spending two hours fixing it, he told us "no charge" since he "should have spotted the problem when he came to service the furnace earlier in the month". Great customer service, as always. We love this company!!',
    author: 'Timothy Turner',
  },
  {
    id: '11',
    quote:
      'This was the best service I have ever had for my annual Mini split check -first time using 24/7 HVAC of Long Island and have had service from a few different companies for the past 27 years. David was the technician and he was very thorough and efficient. He explained lots of things to me that nobody else over the years has ever taken the time to do - very polite and attentive. I was very impressed and am now sure of which company I will deal with from now on. Thank you 24/7 HVAC of Long Island.',
    author: 'Mark II',
  },
  {
    id: '12',
    quote:
      'We are very pleased with the service of this company!!! Five stars!!!',
    author: 'Andrew Eaves',
  },
  {
    id: '13',
    quote:
      'I would highly recommend 24/7 HVAC of Long Island for their Heating System Repair, HVAC System Maintenance, Heating System Installation and more. They are prompt and always on time with their work!',
    author: 'Roger Kirkland',
  },
  {
    id: '14',
    quote:
      'Got a new furnace unit installed a few days ago. They did a great job by providing professional knowledge, prompt service and installation. I won\'t hesitate to refer to my friends or anyone interested.',
    author: 'Luke Palmer',
  },
  {
    id: '15',
    quote:
      'The team was knowledgeable and patient and arrived exactly when they said they would and gave ample notice of their arrival. They even helped me fill out the paperwork I needed to submit to get reimbursed by my insurance. 10/10 recommend! I will be using them again!',
    author: 'Jessica Kearney',
  },
  {
    id: '16',
    quote:
      'I have hired 24/7 HVAC several times over the last few years for both A/C and furnace servicing and repair in two homes that I own. They are always responsive, reliable, perform high quality work and are fairly priced. I highly recommend them!',
    author: 'Leon Burton',
  },
  {
    id: '17',
    quote:
      'We have been dealing with 24/7 HVAC of Long Island since 2016 for our furnace installation. Now, it\'s time to replace our Old 25 yrs ac. David was our sales consultant, and he explained to me from lower model to higher model. We booked installation for next day. We are very satisfied with their work and service.',
    author: 'Lewis Porter',
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
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
    author: 'KokoMaumg ေဂဟာနယ္',
  },
  {
    id: '20',
    quote:
      'The experience I had was outstanding. My AC stopped working and Edgar was quick to respond and arrive at my home. He quickly diagnosed the problem and fixed it right away. Pricing was fair despite it being an after hours job. I will definitely call this company again.',
    author: 'John Simms',
  },
];

export default function WoodmereLocationPage() {
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
          <span className="text-navy font-bold">Woodmere</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="Five Towns Community • 24/7 Mobile Service Hub"
        title="Trusted HVAC Company in Woodmere, NY"
        bullets={[
          { text: "Emergency HVAC help when you need it", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
          { text: "Reliable heating and cooling solutions", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" /> },
          { text: "Prompt service throughout Woodmere and nearby areas", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
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
                Reliable Care From an Experienced HVAC Contractor in Woodmere, NY
              </h2>

              {/* Exact Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                <p>
                  Every property has unique heating and cooling demands, which is why our team provides personalized solutions designed around your equipment and comfort goals. As a trusted HVAC company in Woodmere, NY, 247 HVAC of Long Island handles everything from system inspections to complex installations with attention to detail and quality workmanship.
                </p>
                <p>
                  Our approach focuses on preventing future issues, improving efficiency, and helping your HVAC system perform consistently throughout the year. Whether your system requires a small repair or a major replacement, we deliver practical solutions designed for long-term performance.
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
                  alt="HVAC service in Woodmere, NY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#061A40]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 z-10 font-heading">
                  <MapPin className="w-4 h-4 text-brightRed flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-wider">Woodmere, NY</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-full bg-royal text-white flex items-center justify-center font-black text-base flex-shrink-0 font-heading">
                    24/7
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-navy text-sm font-heading leading-tight">
                      Woodmere HVAC Operations Hub
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-tight mt-0.5">
                      Prompt mobile service across Woodmere, NY 11598 and Five Towns
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
              Heating, Cooling & Air Quality HVAC Services in Woodmere, NY
            </h2>
            {/* Exact Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Maintaining a comfortable indoor environment requires the right combination of heating, cooling, and air quality solutions. Our HVAC services in Woodmere, NY, cover complete system care, from new installations to repairs and ongoing maintenance for residential and commercial properties.
            </p>
            <p className="text-sm sm:text-base text-slate-500 font-body">
              Whether you need HVAC services in Long Island or are searching for HVAC services in East Rockaway, NY, our experienced team provides dependable service, accurate recommendations, and solutions built around your property’s specific requirements.
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
                <p className="text-xs text-slate-500 font-body">Reliable cooling repairs, installations, and duct maintenance for Woodmere properties.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WOODMERE_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Woodmere`}
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
                <p className="text-xs text-slate-500 font-body">Complete furnace, boiler, water heater, and chimney care in Woodmere.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WOODMERE_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Woodmere`}
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
              The Difference Our HVAC Services in Woodmere Brings to Every Project
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Choosing the right HVAC professional can impact your system’s efficiency, lifespan, and overall comfort. Our team focuses on dependable service and detailed workmanship to ensure every job is completed to the highest standards.
            </p>
          </div>

          {/* Exact 5 Bullets / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Experienced HVAC Specialists
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
                Fast Local Response
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
                Honest Pricing and Recommendations
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
                Thorough System Assessments
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
                Long-Term Performance Focus
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
        heading="What Customers Appreciate About Our HVAC Company"
        reviews={WOODMERE_TESTIMONIALS.map((r: any) => ({
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
                Signs Your Property May Need HVAC Services in Woodmere, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                Small HVAC concerns can quickly develop into larger problems if they are ignored. Recognizing these warning signs early can help prevent unexpected breakdowns and expensive repairs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common issues include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Uneven temperatures between rooms',
                  'Weak airflow from vents',
                  'Heating or cooling systems are not working properly',
                  'Strange noises or unusual odors',
                  'Higher than normal energy bills',
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
              Our team identifies the source of HVAC issues and provides reliable solutions to restore your system’s performance.
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
            Restore Your Comfort With Professional HVAC Services
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            When your heating or cooling system is no longer performing efficiently, our team is ready to provide the professional support and dependable solutions your property needs.
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
            Your Nearby HVAC Company in Woodmere, NY
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            247 HVAC of Long Island proudly provides reliable heating and cooling solutions for homeowners and businesses throughout Woodmere. We are dedicated to delivering quality service that helps maintain a comfortable and efficient indoor environment.
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
            Speak directly with our Woodmere technicians for prompt heating and air conditioning repair or a free quote.
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
