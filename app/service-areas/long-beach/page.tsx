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

const LONG_BEACH_COOLING_SERVICES: LocationServiceCard[] = [
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

const LONG_BEACH_HEATING_SERVICES: LocationServiceCard[] = [
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

const LONG_BEACH_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I called for service because my heat stopped working. Turns out I was out of oil! They said since we are here and already charging you for a service call let us service the system and make sure its cleaned out and running well. I loved that they did that! They could have just charged me and left but they did the right thing. Very honest guys.',
    author: 'khaing zaw',
  },
  {
    id: '2',
    quote:
      'Very knowledgeable tech! They came 15 minutes early and even called to let me know they were on their way. They fixed my heat in no time and were so so nice!!!',
    author: 'Lois Higgins',
  },
  {
    id: '3',
    quote:
      'The nicest people and best service! Fixed all our HVAC issues - great people and company and highly recommend!',
    author: 'Lindsey Owen',
  },
  {
    id: '4',
    quote:
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
    author: 'မစီစီ မစီစီ',
  },
  {
    id: '5',
    quote:
      'Our 15 year old furnace stopped working it was not going to be worth fixing. They replaced it with a better unit and I feel like the price was fair! Thank you',
    author: 'Haryy Jason',
  },
  {
    id: '6',
    quote:
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
    author: 'KokoMaumg ေဂဟာနယ္',
  },
  {
    id: '7',
    quote:
      'Matthew who did the duct cleaning was super! He was on time, hardworking and above all, very caring and honest! His job is very neat and clean, and pricing was very clear. We highly recommend this company.',
    author: 'Christopher Newman',
  },
  {
    id: '8',
    quote:
      'Moved into a new house that needed the HVAC system updated. Great team! Clean, efficient, came with everything they needed and left the work area clean!',
    author: 'md jahid',
  },
  {
    id: '9',
    quote:
      'Technician was very pleasant and explained the process. He made sure that AC unit was working before he left. And said to be sure to call if there were any issues.',
    author: 'Victor Barrette',
  },
  {
    id: '10',
    quote:
      'Jonathan and the guys installed a garage furnace for us. They were very friendly, professional, and super clean. Great quality work for a great price. We would recommend their work all day long!',
    author: 'Cassandra Baker',
  },
  {
    id: '11',
    quote:
      'My AC stopped working in our server room. I called and explained the urgency and they sent someone right over! It was fixed in less than an hour and it works great!',
    author: 'Daniel Golden',
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
      '247 HVAC OF LONG ISLAND was very professional and knowledgeable. They helped figure out a new system for my old house to make things more efficient and save me money. They set up a whole house heating and ac system and have helped me trouble shoot any problems I may have. I trust this company and we’ll continue doing business with them.',
    author: 'Yeow Thomas',
  },
  {
    id: '14',
    quote:
      "I had a leaky furnace and contacted the 24/7 HVAC of Long Island to come in and fix it. They were very friendly, offered a complete solution, and got the job done. I was very happy with their service, so if you're looking for an HVAC contractor, I would definitely recommend them!",
    author: 'Alice Adams',
  },
  {
    id: '15',
    quote:
      "I love 24/7 HVAC of Long Island because they are fast, reliable, and affordable. They are always available to help me with any of my AC repair, maintenance, or installation needs. The customer service is some of the best I've ever experienced and the technicians are professional and knowledgeable. They're also very quick which is great for when I really need them.",
    author: 'Casey Stowell',
  },
  {
    id: '16',
    quote:
      'We were happy for the advice and questions answered by the team -David was helpful in advising us on the right furnace for our home. The installation was completed by David and his team, it was done promptly and properly. Would highly recommend.',
    author: 'Isabelle Collins',
  },
  {
    id: '17',
    quote:
      'Amazing service. David is a very nice guy. Edgar was also great , explain everything very simple so I can understand. Thank you guys for the great service ! Definitely recommend.',
    author: 'JNN Sisters',
  },
  {
    id: '18',
    quote:
      'I was in a real pickle and they really saved me and my pregnant wife when we had no heat! Got to keep that oven worm!',
    author: 'Stacy Gretto',
  },
  {
    id: '19',
    quote:
      "This was the best experience I've ever had with air conditioning. The technician was quick and courteous. He was also knowledgeable about the system he was installing. The price was fair and the entire service was completed within a half hour. I always have a great experience with 24/7 HVAC of Long Island.",
    author: 'Jon Burkholder',
  },
  {
    id: '20',
    quote:
      'Excellent service today from David and Edgar of 247 HVAC OF LONG ISLAND ! They arrived promptly and were friendly/comfortable to have in my home. Took care of maintenance issues with our boiler and radiators. So pleased with their service that we signed up for yearly maintenance plan. I highly recommend this company, and these 2 employees in particular.',
    author: 'Charlie Taylor',
  },
];

export default function LongBeachLocationPage() {
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
          <span className="text-navy font-bold">Long Beach</span>
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
              <span>Long Beach, NY • 24/7 Mobile Service Hub</span>
            </div>

            {/* Exact Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-heading">
              Premier HVAC in Long Beach, NY
            </h1>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-body">
              A dependable HVAC system is essential for maintaining a comfortable indoor space through changing temperatures. 247 HVAC of Long Island provides professional HVAC services in Long Beach, NY, designed to improve comfort, efficiency, and long-term system reliability for residential and commercial properties.
            </p>

            {/* Exact Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-white font-heading">
                  Residential & commercial HVAC solutions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  Rapid response throughout Long Beach
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  Emergency HVAC assistance available
                </span>
              </div>
            </div>

            {/* Exact CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-heading">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm sm:text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
              >
                <Phone className="w-5 h-5 text-brightRed" />
                <span>Call Us Now</span>
              </a>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-sm sm:text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
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
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-4 font-heading">
                <ShieldCheck className="w-4 h-4 text-royal" />
                <span>Experienced Long Beach HVAC Contractors</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                Personalized Solutions From Experienced HVAC Contractors in Long Beach, NY
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-5">
                Every building has different heating and cooling demands, which is why we provide solutions based on your system condition, usage, and comfort goals. As experienced HVAC contractors in Long Beach, NY, our team handles inspections, repairs, replacements, and new installations with a focus on quality workmanship.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-8">
                We work to improve energy efficiency, reduce unnecessary breakdowns, and keep your HVAC equipment operating properly throughout every season. Whether you need regular service or a complete upgrade, our team at 247 HVAC of Long Island provides dependable results.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">24/7</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Emergency Availability</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">100%</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Quality Workmanship</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-royal font-heading">Fast</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Long Beach Dispatch</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/image-website/air-con-installation.jpg"
                  alt="HVAC Contractors in Long Beach, NY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-navy/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-bold text-electric uppercase tracking-wider font-heading">
                    Long Beach Coastal Climate
                  </div>
                  <div className="text-base font-extrabold text-white font-heading mt-0.5">
                    Year-Round Heating & Cooling Reliability
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
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Wrench className="w-3.5 h-3.5 text-royal" />
              <span>Full HVAC Capabilities</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Complete HVAC Service in Long Beach, NY for Heating & Cooling Systems
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Your HVAC system requires proper care to maintain reliable performance and indoor comfort. Our HVAC service in Long Beach, NY, includes cooling, heating, and ventilation solutions designed to support homes and businesses of every size.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Whether you need HVAC services in Hewlett, NY, or are searching for HVAC services in Long Island, NY, our team provides professional guidance, detailed assessments, and reliable service from beginning to completion.
            </p>
          </div>

          {/* Cooling Category */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-electric/20 text-navy flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-royal" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy font-heading">
                  Cooling & Air Conditioning Services
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LONG_BEACH_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
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

          {/* Heating Category */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brightRed/10 text-brightRed flex items-center justify-center">
                <Flame className="w-6 h-6 text-brightRed" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy font-heading">
                  Heating & Indoor Comfort Services
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LONG_BEACH_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
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
      {/* 4. WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Award className="w-4 h-4 text-royal" />
              <span>Proven Service Standards</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              The Benefits of Choosing Our HVAC Contractors in Long Beach, NY
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Selecting the right HVAC team helps protect your equipment and ensures dependable performance throughout the year. We focus on delivering practical solutions, professional service, and long-term system reliability.
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
                Dedicated technicians certified to handle complex residential & commercial units.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brightYellow/20 text-navy flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-brightYellow" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Quick and Reliable Local Support
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Rapid emergency response across the Long Beach barrier island and nearby areas.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-hvacGreen/10 text-hvacGreen flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-hvacGreen" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Honest Communication and Fair Pricing
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Transparent quotes, honest assessments, and zero hidden fees.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-electric/15 text-royal flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Detailed System Checks
              </h3>
              <p className="text-xs text-slate-500 font-body">
                In-depth diagnostics to uncover the root cause of every climate problem.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brightRed/10 text-brightRed flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-brightRed" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Long-Lasting HVAC Solutions
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Durable repairs and energy-efficient installs built to withstand coastal environments.
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
              <span>Rating: 5.0 Average (Rated 5 out of 5)</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              What Customers Appreciate About Our HVAC Service
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Homeowners and businesses continue choosing 247 HVAC of Long Island because of our dedication to quality work, responsive service, and customer-focused solutions. From minor repairs to complete HVAC improvements, we make comfort and reliability our priority.
            </p>
          </div>

          {/* Grid of 20 Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {LONG_BEACH_TESTIMONIALS.map((review) => (
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
                Frequent Signs Your Property May Need HVAC in Long Beach, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                Small HVAC issues can become major concerns if they are not addressed early. Our team identifies common performance problems and provides the right solutions to restore efficient operation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common problems include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Uneven temperatures throughout your property',
                  'Poor airflow from vents',
                  'AC systems are struggling to maintain the desired temperatures',
                  'Strange sounds or unusual odors',
                  'Rising monthly energy costs',
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
              Our HVAC service in Long Beach, NY, focuses on accurate diagnostics and dependable repairs to keep your system running efficiently.
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
            Book Your Professional HVAC Services Today
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            No matter the size of your HVAC concern, we are prepared to provide professional service and practical solutions that support long-term system efficiency.
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
            Find Our HVAC Services in Long Beach, NY
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            247 HVAC of Long Island helps homeowners and businesses maintain comfortable indoor environments through reliable heating and cooling solutions tailored to their needs.
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
            Speak directly with our Long Beach technicians for prompt heating and air conditioning repair or a free quote.
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
