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
  AlertTriangle,
  ArrowRight,
  Flame,
  Snowflake,
  Droplets,
  Wrench,
  Layers,
  ChevronRight,
  Building2,
  Sparkles,
  Award,
  Lightbulb,
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
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface LocationServiceCard {
  id: string;
  title: string;
  category: 'cooling' | 'heating';
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const BRONX_COOLING_SERVICES: LocationServiceCard[] = [
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

const BRONX_HEATING_SERVICES: LocationServiceCard[] = [
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

const BRONX_TROUBLE_SPOTS = [
  {
    title: 'Rooms That Never Feel Comfortable',
    description:
      'If one room feels warm while another stays cold, your system may be dealing with airflow restrictions, duct issues, thermostat problems, or equipment that is not balanced correctly.',
  },
  {
    title: 'Busy Commercial Areas',
    description:
      'Offices, stores, restaurants, and service businesses depend on steady indoor comfort. A commercial HVAC issue can quickly affect staff, customers, and daily operations.',
  },
  {
    title: 'Mechanical Rooms and Equipment Areas',
    description:
      'HVAC equipment often works out of sight, which means worn parts, leaks, dust buildup, and performance issues may go unnoticed until the system starts struggling.',
  },
  {
    title: 'Vents, Returns, and Airflow Paths',
    description:
      'Blocked vents, dirty returns, or poor airflow can force your HVAC system to work harder, making comfort less consistent and energy bills higher.',
  },
  {
    title: 'Rooftop and Outdoor HVAC Units',
    description:
      'Outdoor units and rooftop systems can collect dirt, debris, and wear from weather exposure. Regular care helps prevent avoidable breakdowns.',
  },
  {
    title: 'Older Bronx Buildings',
    description:
      'Many Bronx properties have unique layouts, older equipment, or high daily system use, so choosing experienced HVAC contractors in Bronx, NY can make a real difference.',
  },
];

const BRONX_WHY_CHOOSE_POINTS = [
  'Complete Heating and Cooling Support',
  'Clear Explanations Before the Work',
  'Repair Options When They Make Sense',
  'Installation Help for Aging Systems',
  'Residential and Commercial Experience',
];

const BRONX_PROCESS_STEPS = [
  {
    step: '1',
    title: 'Check the System and Symptoms',
    description:
      'We review your HVAC equipment, thermostat, airflow, visible components, and the heating or cooling problems you are experiencing.',
  },
  {
    step: '2',
    title: 'Find the Real Cause',
    description:
      'Instead of only treating the surface issue, we look for what is causing the problem, so the service recommendation is more accurate.',
  },
  {
    step: '3',
    title: 'Complete the Right HVAC Solution',
    description:
      'Depending on the system condition, we handle HVAC repair in Bronx, NY, maintenance, installation, emergency support, or commercial HVAC repair.',
  },
  {
    step: '4',
    title: 'Help You Plan Future Care',
    description:
      'After the service, we share simple maintenance guidance that can help support better performance and reduce future HVAC problems.',
  },
];

const BRONX_BENEFITS = [
  {
    title: 'More Balanced Indoor Temperatures',
    description:
      'Professional HVAC service helps improve airflow and comfort so your rooms feel more consistent.',
  },
  {
    title: 'Lower System Strain',
    description:
      'Clean components, proper maintenance, and timely repairs can help your system run more smoothly.',
  },
  {
    title: 'Fewer Surprise Breakdowns',
    description:
      'Regular service can help catch small problems before they turn into major repairs.',
  },
  {
    title: 'Stronger Support for Businesses',
    description:
      'Reliable commercial HVAC in Bronx, NY, helps keep employees, customers, tenants, and daily operations more comfortable.',
  },
  {
    title: 'Better Long-Term System Value',
    description:
      'Working with experienced Bronx, NY HVAC experts can help extend system life and improve performance over time.',
  },
];

const BRONX_TIPS = [
  {
    title: 'Change Filters on Time',
    description: 'Keep your indoor air fresh and reduce strain on system components by replacing filters on schedule.',
  },
  {
    title: 'Protect Airflow',
    description: 'Keep furniture, boxes, curtains, and other items away from vents and returns.',
  },
  {
    title: 'Watch Early Warning Signs',
    description: 'Do not ignore strange noises, weak airflow, burning smells, or sudden comfort changes.',
  },
  {
    title: 'Plan Seasonal Maintenance',
    description: 'Schedule service before heavy summer cooling or winter heating use begins.',
  },
  {
    title: 'Outdoor & Rooftop Care',
    description: 'Keep outdoor and rooftop equipment clear of dirt, leaves, trash, and debris.',
  },
];

export default function BronxLocationPage() {
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
          <span className="text-navy font-semibold">Bronx</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#061A40] via-[#0E2452] to-[#0066CC] text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-royal/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-semibold tracking-wide">
                <Building2 className="w-5 h-5 text-brightYellow" />
                <span>Commercial &amp; Residential HVAC Specialists in Bronx, NY</span>
              </div>

              {/* Exact Banner Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
                Expert HVAC Contractor in Bronx, NY
              </h1>

              {/* Exact Banner Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
                <p>
                  Comfort matters in every type of Bronx property, from apartments and single-family homes to offices, retail spaces, restaurants, and commercial buildings. When heating or cooling systems stop working the way they should, local customers need a team that can respond quickly, explain the issue clearly, and provide the right solution without confusion.
                </p>
                <p>
                  247 HVAC of Long Island is one of the trusted HVAC companies in Bronx, NY, for customers who need repair, installation, maintenance, emergency support, and commercial HVAC service. Whether you are dealing with weak airflow, uneven temperatures, a noisy system, rising energy bills, or a complete breakdown, our team provides dependable HVAC service in Bronx, NY, with a focus on long-term comfort and system performance.
                </p>
              </div>

              {/* Exact CTAs */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brightRed hover:bg-brightRed-hover text-white text-base sm:text-lg font-bold shadow-lg shadow-brightRed/30 hover:shadow-brightRed/50 transition-all font-heading"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy text-base sm:text-lg font-black shadow-lg shadow-brightYellow/20 hover:shadow-brightYellow/40 transition-all font-heading"
                >
                  <FileText className="w-5 h-5" />
                  <span>Get A Free Quote</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-electric" />
                  <span>24/7 Rapid Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hvacGreen" />
                  <span>Licensed &amp; Insured</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/image-website/ac-installation.jpg"
                    alt="HVAC Contractor in Bronx NY"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-wider text-brightYellow font-bold font-heading">
                      Service Coverage Area
                    </p>
                    <p className="text-xl font-bold text-white font-heading">Bronx, NY</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2 text-sm">
                  <div className="flex items-center justify-between text-slate-200">
                    <span>Emergency Service:</span>
                    <span className="font-bold text-hvacGreen">24/7 Available</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-200">
                    <span>Phone:</span>
                    <a href={`tel:${PHONE_TEL}`} className="font-bold text-white hover:underline">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-slate-200">
                    <span>Service Scope:</span>
                    <span className="font-bold text-white">Residential &amp; Commercial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TROUBLE SPOTS SECTION */}
      {/* ========================================================================= */}
      <section id="trouble-spots" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brightRed/10 text-brightRed text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <AlertTriangle className="w-4 h-4 text-brightRed" />
              <span>Diagnostic Inspection</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Common Trouble Spots Checked by HVAC Contractors in Bronx, NY
            </h2>

            {/* Exact Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 mt-4 font-body leading-relaxed">
              Heating and cooling problems do not always begin with a full system failure. In many cases, small signs show up first through airflow changes, unusual sounds, inconsistent room temperatures, or equipment that keeps cycling on and off. These issues can affect comfort, energy use, and the life of your HVAC system if they are not handled properly.
            </p>
          </div>

          {/* 6 Trouble Spot Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BRONX_TROUBLE_SPOTS.map((spot, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-royal/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brightRed/10 text-brightRed flex items-center justify-center font-bold text-sm mb-4 font-heading">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading mb-3">
                    {spot.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                    {spot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTRO SECTION */}
      {/* ========================================================================= */}
      <section id="intro" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/image-website/commercial-hvac-maintenance.jpg"
                    alt="Dependable HVAC Service in Bronx NY"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-navy text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-xs border border-white/10">
                  <p className="text-3xl font-black text-brightYellow font-heading">100%</p>
                  <p className="text-xs text-slate-200 font-medium">
                    Dedicated to Long-Term Comfort and System Performance
                  </p>
                </div>
              </div>
            </div>

            {/* Exact Intro Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading">
                <MapPin className="w-3.5 h-3.5" />
                <span>Tailored Climate Solutions</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
                Dependable HVAC Service in Bronx, NY Built Around Your Property
              </h2>

              {/* Exact 3 Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
                <p>
                  Every HVAC issue needs the right approach. A system that is blowing warm air may need a repair, while an older unit that keeps breaking down may need a replacement plan. A commercial building may require a larger service strategy, while a home may need better airflow, seasonal maintenance, or thermostat support.
                </p>
                <p>
                  247 HVAC of Long Island provides detailed HVAC service in Bronx, NY, for customers who want honest answers and practical solutions. Whether the property needs service in the Bronx, HVAC service in Woodmere, NY, or HVAC service in East Rockaway, NY, our team checks the system condition, listens to the concerns you are noticing, and helps you understand what needs to be done next.
                </p>
                <p>
                  As a local HVAC contractor in Bronx, NY, we handle repair, installation, maintenance, emergency calls, and commercial HVAC needs with careful attention to the system and the property. The goal is simple: restore comfort, improve performance, and help reduce the chance of repeat problems.
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
                  className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-navy font-bold transition-all font-heading text-sm inline-flex items-center gap-2"
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
      {/* 4. WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-hvacGreen/15 text-hvacGreen text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Award className="w-4 h-4 text-hvacGreen" />
              <span>Proven Industry Standards</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Why Customers Compare Us With the Best HVAC Companies in Bronx, NY
            </h2>

            {/* Exact Intro */}
            <p className="text-base sm:text-lg text-slate-600 mt-4 font-body leading-relaxed">
              Choosing an HVAC company is about more than finding someone who can show up. You need a team that understands heating and cooling systems, respects your time, and gives you clear recommendations based on what your property actually needs.
            </p>
          </div>

          {/* 5 Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {BRONX_WHY_CHOOSE_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 hover:border-hvacGreen/50 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-hvacGreen/15 text-hvacGreen flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-navy text-lg font-heading">
                  {point}
                </h3>
              </div>
            ))}
          </div>

          {/* Exact Outro Paragraph */}
          <div className="max-w-3xl mx-auto text-center bg-royal/5 border border-royal/20 rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg font-semibold text-royal font-heading">
              Our team helps with HVAC repair, system installation, seasonal maintenance, emergency HVAC service, ductless options, and commercial HVAC in Bronx, NY.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROCESS SECTION */}
      {/* ========================================================================= */}
      <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Sparkles className="w-4 h-4 text-royal" />
              <span>Step-By-Step Excellence</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              A Smarter Service Process From Start to Finish
            </h2>

            {/* Exact Intro */}
            <p className="text-base sm:text-lg text-slate-600 mt-4 font-body leading-relaxed">
              A smooth service visit starts with a careful inspection and clear communication. We do not rush to conclusions. Our team looks at the system, checks visible performance concerns, and helps you understand the best path forward.
            </p>
          </div>

          {/* 4 Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRONX_PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-royal text-white flex items-center justify-center font-black text-lg mb-6 shadow-md shadow-royal/20 font-heading">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BENEFITS SECTION */}
      {/* ========================================================================= */}
      <section id="benefits" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-hvacGreen/15 text-hvacGreen text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <ShieldCheck className="w-4 h-4 text-hvacGreen" />
              <span>Value &amp; Comfort</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Better Comfort Starts With Reliable HVAC Service in Bronx, NY
            </h2>

            {/* Exact Intro */}
            <p className="text-base sm:text-lg text-slate-600 mt-4 font-body leading-relaxed">
              A well-serviced HVAC system can make your property more comfortable, more efficient, and easier to manage throughout the year. Professional HVAC service in Bronx, NY, helps reduce system strain and gives you more confidence when heating or cooling matters most.
            </p>
          </div>

          {/* 5 Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {BRONX_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-hvacGreen/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-hvacGreen/15 text-hvacGreen flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TIPS SECTION */}
      {/* ========================================================================= */}
      <section id="tips" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brightYellow/20 text-navy text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Lightbulb className="w-4 h-4 text-brightYellow fill-brightYellow" />
              <span>Owner Tips &amp; Guidance</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Simple Ways to Avoid HVAC Problems
            </h2>

            {/* Exact Intro */}
            <p className="text-base sm:text-lg text-slate-600 mt-4 font-body leading-relaxed">
              A few basic habits can help protect your system between professional service visits. These steps do not replace maintenance, but they can reduce avoidable strain and help your HVAC system work more efficiently.
            </p>
          </div>

          {/* 5 Tips List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {BRONX_TIPS.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-royal/40 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-royal/10 text-royal flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm font-heading">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-extrabold text-navy text-lg font-heading mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full Service Scope</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading">
              Residential and Commercial HVAC Services in Bronx, NY
            </h2>
          </div>

          {/* Exact 4 Paragraphs from Source */}
          <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-16">
            <p>
              Every property needs HVAC service for a different reason. A homeowner may need quick AC repair before a hot day, while a business may need commercial system support to keep customers and employees comfortable. A property manager may need dependable service for multiple units, while a restaurant may need fast help when equipment failure affects daily operations.
            </p>
            <p>
              For residential customers, 247 HVAC of Long Island handles heating and cooling repair, system replacement, seasonal tune-ups, thermostat issues, airflow concerns, ductless HVAC installation in the Bronx, NY, and emergency HVAC services in the Bronx. Whether your system is short-cycling, you need HVAC repair in Long Island, NY, or you are looking for HVAC services in Hewlett, NY, our team can inspect the issue and recommend the right service.
            </p>
            <p>
              For commercial customers, we provide commercial HVAC service in Bronx, NY, for offices, restaurants, retail stores, apartment buildings, and other local facilities. Commercial HVAC systems often work harder than residential systems, so proper repair, maintenance, and installation are important for comfort, energy use, and business continuity.
            </p>
            <p>
              If you are comparing Bronx, NY HVAC companies, looking for a local Bronx, NY HVAC company, or need an experienced Bronx, NY HVAC specialist, our team is ready to help with clear service and dependable support.
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
              {BRONX_COOLING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
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

                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-heading">
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
              {BRONX_HEATING_SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
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

                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-heading">
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
      {/* 9. SCHEDULE SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-100 text-slate-800 border-y border-slate-200">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading">
            <Calendar className="w-4 h-4" />
            <span>Fast Consultation &amp; Booking</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight font-heading">
            Get the Right Heating and Cooling Support Today
          </h2>

          {/* Exact Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            <p>
              Heating and cooling problems can get worse when they are ignored. If your system is not keeping up, your energy bills are rising, or your business needs reliable HVAC support, 247 HVAC of Long Island can help with repair, installation, maintenance, emergency service, and commercial HVAC in Bronx, NY.
            </p>
            <p>
              Contact us today to schedule service with a trusted HVAC contractor in Bronx, NY, and get the support your home or business needs.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy text-base sm:text-lg font-black shadow-lg shadow-brightYellow/20 hover:shadow-brightYellow/40 transition-all font-heading"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>
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
            <span>24/7 Fast Response in Bronx, NY &amp; Beyond</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 font-body">
            Get instant support from licensed HVAC specialists in Bronx, NY. We are available round-the-clock for residential repairs, commercial HVAC maintenance, and new system installations.
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
