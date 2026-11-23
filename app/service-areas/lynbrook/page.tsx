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

const LYNBROOK_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'Air Conditioner Installation & Replacement',
    category: 'cooling',
    image: '/image-website/ac-installation.jpg',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
  },
  {
    id: 'ac-repair',
    title: 'AC Repair & Preventive Maintenance',
    category: 'cooling',
    image: '/image-website/ac-installation-bd.jpg',
    icon: Wrench,
    href: '/air-conditioning-repair',
  },
  {
    id: 'air-duct',
    title: 'Ductwork and Ventilation Cleaning',
    category: 'cooling',
    image: '/image-website/air-con-installation.jpg',
    icon: Layers,
    href: '/air-duct-and-ventilation-cleaning-service',
  },
  {
    id: 'mini-split',
    title: 'Mini Split and Ductless System Services',
    category: 'cooling',
    image: '/image-website/heat-pump-installation.jpg',
    icon: Snowflake,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
  },
];

const LYNBROOK_HEATING_SERVICES: LocationServiceCard[] = [
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
    title: 'Chimney Sweep Service',
    category: 'heating',
    image: '/images/furnace-unit.jpg',
    icon: Flame,
    href: '/chimney-sweep',
  },
];

const LYNBROOK_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I was in need of a heating repair and I called 24/7 HVAC of Long Island when it started to get cold outside. They came out and had the problem fixed in about 30 minutes for me. Great job guys!',
    author: 'Terry Nelson',
  },
  {
    id: '2',
    quote:
      "Of course my furnace went kaput on our first day of snow! I called several companies for service but only 247 HVAC OF LONG ISLAND could schedule a visit so timely. Very pleased with the professionalism of David who installed a new blower. The total price was on par with online estimates that I'd researched. Office staff was pleasant and efficient. I was texted confirming my appointment, which was great. I would highly recommend this company for super service and affordability. I'd use them again if I have to. Fingers crossed, though.",
    author: 'Josephine Pires',
  },
  {
    id: '3',
    quote:
      'I called for service because my heat stopped working. Turns out I was out of oil! They said since we are here and already charging you for a service call let us service the system and make sure its cleaned out and running well. I loved that they did that! They could have just charged me and left but they did the right thing. Very honest guys.',
    author: 'khaing zaw',
  },
  {
    id: '4',
    quote:
      'Great service at 1:30 am!! Professional, reliable, responsive, and reasonable. Would recommend 100%!',
    author: 'Dara Addonizio',
  },
  {
    id: '5',
    quote:
      "I've been using 24/7 HVAC for years and I think they are the best AC repair Company around. I love that they are open 24 hours and that they provide great customer service. Their technicians are so knowledgeable and I love that they always fix the problem and don't try to sell you more than what you need. They are also affordable and their technicians are friendly.",
    author: 'Kenneth Parker',
  },
  {
    id: '6',
    quote:
      'I had no idea what I was doing when I called the HVAC company. They were very helpful and patient with me and I was able to get the problem fixed. I just wish that I had called them sooner. If I ever have a problem with my HVAC system again, I know exactly where I am going to go.',
    author: 'Erwin Williams',
  },
  {
    id: '7',
    quote:
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
    author: 'KokoMaumg ေဂဟာနယ္',
  },
  {
    id: '8',
    quote:
      "New furnace installed!! The installation crew arrived on time and were polite and very neat in their work. They explained the new system and it's features so I was comfortable with the new product.",
    author: 'Joey Williams',
  },
  {
    id: '9',
    quote:
      'Awesome customer service! My heat stopped working. They came on time fixed the issue and were very clean!',
    author: 'Sanjee Sanjee',
  },
  {
    id: '10',
    quote:
      'Dave and his crew were great to work with. Always took my calls or got back to me quickly. So easy to deal with and a pleasure to talk too. Thank you guys for getting me a new AC unit quickly.',
    author: 'Neelie Ryan',
  },
  {
    id: '11',
    quote: 'Great company, excellent service. Leonid',
    author: 'R T',
  },
  {
    id: '12',
    quote:
      "The technician David came and fixed our faltering furnace promptly and kept us informed throughout the process so that we knew what to expect. He calls when he says he'll call, comes when he says he'll come and fixes the problem after careful diagnosis. Very knowledgeable and competent.",
    author: 'Joel Medina',
  },
  {
    id: '13',
    quote:
      "I'm always looking for a new hvac installer and I believe I've found them. Recently my 25 year old furnace failed, The technician was quick to respond and repair the starter. I believe I will be using 24/7 HVAC of Long Island for future repairs and a new system if needed.",
    author: 'Jay Hopkins',
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
      'Luis did a great job fitting our new air conditioning unit. Kept us well informed with when the kit was going to be in stock and completed the job in a morning with no fuss or mess. Highly recommend them.',
    author: 'Thomas Leech',
  },
  {
    id: '16',
    quote:
      'The new Central Air install went well. Price was competitive. Got 5 estimates. They were right in the middle. David gave the estimate. The office is easy to deal with The technicians were super nice guys who cleaned everything up and worked hard. Edgar should have a cocktail as he was in the attic for the day. We decided on using Trane Equipment based on their recommendations as well as researching on our own, So far so good.',
    author: 'Ronald Joslin',
  },
  {
    id: '17',
    quote:
      "My furnace wasn't working and the technician came over and checked it out. He arrived at the time he said he would be and the work was done efficiently & effectively. Thank you!! You will be my go to person for furnaces and air from now on.",
    author: 'Brayden Mercer',
  },
  {
    id: '18',
    quote:
      "Excellent experience with David and his team! I called them on a Sunday, I got a call from David almost immediately, and they showed up within the hour of my call. They diagnosed the problem, kept me updated and tried their best to get the replacement part the same day, but were only able to get it the following day. David showed up the very next morning and had everything working again, all for a very reasonable price. I can't recommend them enough!",
    author: 'C curts',
  },
  {
    id: '19',
    quote:
      'Moved into a new house that needed the HVAC system updated. Great team! Clean, efficient, came with everything they needed and left the work area clean!',
    author: 'md jahid',
  },
  {
    id: '20',
    quote:
      'I called 24/7 HVAC and left a message with my phone number, to my surprise they called me right back!!! They were very friendly, reliable, professional and very clean. They did excellent quality work at a reasonable price. We recommend them 100%!!!! Their website page is also user friendly.',
    author: 'Ayelet Barr',
  },
];

export default function LynbrookLocationPage() {
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
          <span className="text-navy font-bold">Lynbrook</span>
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
              <span>Lynbrook, NY • 24/7 Mobile Service Hub</span>
            </div>

            {/* Exact Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-heading">
              Professional HVAC Company in Lynbrook, NY
            </h1>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-body">
              247 HVAC of Long Island provides dependable HVAC services in Lynbrook, NY, for repairs, maintenance, installations, and replacement guidance. As a trusted HVAC company in Lynbrook, NY, we focus on clear communication, reliable system care, and solutions that help keep your home or business comfortable year-round.
            </p>

            {/* Exact Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-white font-heading">
                  Emergency heating and cooling support when comfort cannot wait
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  Reliable repair, maintenance, installation, and replacement service
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                <span className="text-base sm:text-lg font-bold text-slate-100 font-heading">
                  Local help for residential and commercial HVAC needs in Lynbrook
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
                <span>Trusted Lynbrook HVAC Care</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                Smart Comfort Solutions From A Trusted Hvac Contractor In Lynbrook, Ny
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-5">
                Heating and cooling systems need the right care to match your property, comfort goals, and daily use. 247 HVAC of Long Island provides dependable support as a local HVAC company in Lynbrook, NY, helping homeowners and businesses with inspections, repairs, maintenance, replacements, and new system installations.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-8">
                Our team looks closely at your equipment, explains the issue clearly, and recommends the best solution for better comfort. From small performance problems to larger system upgrades, we deliver careful service that helps your HVAC system run efficiently and stay reliable through every season.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">24/7</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Emergency Support</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">100%</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Clear Explanations</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-royal font-heading">Fast</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Lynbrook Dispatch</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/image-website/ac-installation.jpg"
                  alt="HVAC Company in Lynbrook, NY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-navy/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-bold text-electric uppercase tracking-wider font-heading">
                    Lynbrook Service Area
                  </div>
                  <div className="text-base font-extrabold text-white font-heading mt-0.5">
                    Total Heating & Cooling Expertise
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
              <span>Full-Service Heating & Cooling</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Full-Service Heating and Cooling Support With HVAC Services in Lynbrook, NY
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              A comfortable indoor space depends on heating, cooling, ventilation, and air quality systems working together properly. Our HVAC services in Lynbrook, NY, cover complete system support for homes, offices, stores, and commercial properties that need reliable climate control throughout the year.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              From AC issues during summer to heating problems in colder months, our team provides service that helps improve comfort, system efficiency, and indoor air movement. Whether you need HVAC services in Long Island, NY, or HVAC support in Long Beach, NY, our team is ready to provide honest guidance and dependable results.
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
                  Cooling Services Designed to Keep Your Space Comfortable
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LYNBROOK_COOLING_SERVICES.map((service) => {
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
                  Heating Services Made for Steady Indoor Warmth
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LYNBROOK_HEATING_SERVICES.map((service) => {
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
              <span>Dedicated Quality</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Why Homeowners Choose Our HVAC Company in Lynbrook, NY
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              The HVAC team you choose can make a big difference in how well your system runs, how comfortable your space feels, and how much energy your property uses. Our team provides dependable service, detailed system checks, and clear recommendations so you know exactly what your heating and cooling system needs.
            </p>
          </div>

          {/* Exact 5 Bullets / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Experienced HVAC Service Team
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Expert certified technicians providing trusted system care.
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
                Quick arrival across Lynbrook for emergency and scheduled repairs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-hvacGreen/10 text-hvacGreen flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-hvacGreen" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Clear Recommendations
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Straightforward advice and honest pricing without sales pressure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-electric/15 text-royal flex items-center justify-center mb-4">
                <Layers className="w-7 h-7 text-royal" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Complete Heating and Cooling Support
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Full-spectrum service covering every HVAC brand and configuration.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brightRed/10 text-brightRed flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-brightRed" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading leading-tight mb-2">
                Work Focused on Long-Term Comfort
              </h3>
              <p className="text-xs text-slate-500 font-body">
                Optimized efficiency and durable repairs that keep your equipment reliable.
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
              Real Feedback From Local Heating and Cooling Customers
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Customers want an HVAC team that arrives prepared, communicates clearly, and treats the property with respect. 247 HVAC of Long Island works hard to make each service visit simple, professional, and helpful from the first call to the final system check.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Homeowners and businesses choose our HVAC company in Lynbrook, NY, because we listen to their concerns, explain the work clearly, and provide heating and cooling solutions that support better comfort and dependable performance. Whether you need HVAC services in North New Hyde Park, NY or HVAC services in North Woodmere, NY, our team is ready to help with reliable service and clear guidance.
            </p>
          </div>

          {/* Grid of 20 Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {LYNBROOK_TESTIMONIALS.map((review) => (
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
                Warning Signs You Need HVAC Services in Lynbrook, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                Heating and cooling issues often start with small changes before turning into bigger system problems. If your equipment is not working the way it should, scheduling professional HVAC services in Lynbrook, NY, can help prevent sudden breakdowns and unnecessary system strain.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common signs include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Uneven temperatures in different rooms',
                  'Weak airflow coming from vents',
                  'AC blowing warm air or heat not turning on properly',
                  'Strange noises, burning smells, or musty odors',
                  'System turning on and off too often',
                  'Higher energy bills without a clear reason',
                  'Older equipment needs frequent repairs',
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
              Our team can inspect your system, find the cause of the problem, and recommend the right repair or service option to help restore comfort.
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
            Bring Your Heating and Cooling System Back to Peak Performance
          </h2>

          {/* Exact Paragraph 1 & 2 */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-4">
            Do not let HVAC problems make your home or business uncomfortable. Our team provides dependable repairs, maintenance, installations, replacements, and emergency service for property owners who need trusted heating and cooling support.
          </p>
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8 font-semibold">
            For reliable HVAC in Lynbrook, NY, contact 247 HVAC of Long Island today and get service from a team focused on comfort, efficiency, and long-term system care.
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
            Local HVAC Contractor in Lynbrook, NY Available When You Need Help
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            247 HVAC of Long Island proudly serves homeowners and businesses throughout Lynbrook, NY, and nearby Long Island communities. From emergency repairs to planned equipment upgrades, we provide dependable support designed to keep your indoor space comfortable in every season.
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
            Speak directly with our Lynbrook technicians for prompt heating and air conditioning repair or a free quote.
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
