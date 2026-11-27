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

const LAWRENCE_COOLING_SERVICES: LocationServiceCard[] = [
  {
    id: 'ac-install',
    title: 'AC Installation & Replacement',
    category: 'cooling',
    image: '/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg',
    icon: Snowflake,
    href: '/air-conditioners-installation-replacement',
  },
  {
    id: 'ac-repair',
    title: 'AC Repair & Maintenance',
    category: 'cooling',
    image: '/247 havc/heat-pump-repair/0534fe6f-9e80-4a28-b54a-52e0613d1633.jpg',
    icon: Wrench,
    href: '/air-conditioning-repair',
  },
  {
    id: 'mini-split',
    title: 'Ductless HVAC System Services',
    category: 'cooling',
    image: '/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg',
    icon: Snowflake,
    href: '/mini-splits-ductless-heat-pumps-air-conditioners',
  },
  {
    id: 'air-duct',
    title: 'Ductwork & Ventilation Cleaning',
    category: 'cooling',
    image: '/247 havc/ac-installation/985ad274-26be-4bb1-82d3-8973d451568c.jpg',
    icon: Layers,
    href: '/air-duct-and-ventilation-cleaning-service',
  },
];

const LAWRENCE_HEATING_SERVICES: LocationServiceCard[] = [
  {
    id: 'furnace',
    title: 'Furnace Repair, Installation & Replacement',
    category: 'heating',
    image: '/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg',
    icon: Flame,
    href: '/furnace-installation-repair-replacement',
  },
  {
    id: 'boiler',
    title: 'Boiler Repair & Installation',
    category: 'heating',
    image: '/247 havc/boiler-water-heater/e4530e79-2715-4272-bc27-de76ee87e960.jpg',
    icon: Droplets,
    href: '/boiler-installation-repair',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Repair & Replacement',
    category: 'heating',
    image: '/247 havc/boiler-water-heater/278da669-a5fc-4950-8e6f-8bd0a60a9768.jpg',
    icon: Droplets,
    href: '/water-heater-installation-repair-replacement',
  },
  {
    id: 'chimney',
    title: 'Chimney Sweep Service',
    category: 'heating',
    image: '/247 havc/heating-and-controls/d1b426fa-9ec5-45af-9feb-ba543d98c780.jpg',
    icon: Flame,
    href: '/chimney-sweep',
  },
];

const LAWRENCE_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'They were very responsive and fixed my vent very quickly. They replaced my old heating system with a new one and did so at a great price.',
    author: 'A Google User',
  },
  {
    id: '2',
    quote:
      'The technician Matthew was outstanding. My Air Conditioner died and he came right out to fix it. He find out it was a cracked coil and had to order the part. He was able to get the unit to work just enough to cool off the house for a bit. Which I truly appreciated.',
    author: 'Dexter Hopkins',
  },
  {
    id: '3',
    quote:
      'We are new homeowners navigating an AC outage during the cold week yet. We only had to wait 24 hours for a technician to be on-site. Our technician, David, was great. He was kind, efficient, and most importantly took the time to explain what he was doing, what needed repair, and went above and beyond his service ask by educating us about our specific system. He provided his personal recommendations for filters and humidifier pads and helped me locate them via Amazon. He also helped me think about maintenance. He didn’t try to sell us on anything so much as educate and I’m leaving feeling confident I can tackle our HVAC needs rather than pushing them to my husbands plate. In the end our repair was as simple as a new piece of equipment from our smart home service, but David bypassed our broken thermostat in the interim to make sure we had AC while we are waiting for a replacement thermostat. We are grateful and will be repeat customers..',
    author: 'Brendon Carter',
  },
  {
    id: '4',
    quote:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac.... read more',
    author: 'Willamina Hamnerio',
  },
  {
    id: '5',
    quote:
      "I had a leaky furnace and contacted the 24/7 HVAC of Long Island to come in and fix it. They were very friendly, offered a complete solution, and got the job done. I was very happy with their service, so if you're looking for an HVAC contractor, I would definitely recommend them!",
    author: 'Alice Adams',
  },
  {
    id: '6',
    quote:
      "We have been dealing with 24/7 HVAC of Long Island since 2016 for our furnace installation. Now, it's time to replace our Old 25 yrs ac. David was our sales consultant, and he explained to me from lower model to higher model. We booked installation for next day. We are very satisfied with their work and service.",
    author: 'Lewis Porter',
  },
  {
    id: '7',
    quote:
      "Very Good! For all of my properties, I use 247. Luis is fantastic and extremely responsive. When my AC quit working on one of the hottest summer days, he helped me. He sent a window air conditioner for me to utilise. For years, they maintained my furnace and air conditioner. You won't be let down if you require them to install new or maintain existing equipment.",
    author: 'Lisandro Parez',
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
      'Luis replaced a heat pump. He was very professional, polite, and solved the problem. We would use Luis for other appliance needs..?',
    author: 'Thomas Morgan',
  },
  {
    id: '10',
    quote:
      'I want to thank edgar our tech! He was so nice and explained everything he was doing! Thank you for the great service!!',
    author: 'Louie Gentry',
  },
  {
    id: '11',
    quote:
      'This company is very easy to work with! They were very responsive and our tech was very knowledgeable and got our system back up and running!',
    author: 'Gregory Schmaltz',
  },
  {
    id: '12',
    quote:
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
    author: 'KokoMaumg ေဂဟာနယ္',
  },
  {
    id: '13',
    quote:
      'I got several quotes for my furnace, AC and Water Heater. I decided on 24/7 HVAC based on products offered and competitive pricing. They arrived to do the work and treated my home with a lot of care. I installed a Lennox Elite furnace, AC,water heater. So far, I am very satisfied.',
    author: 'Scott Jordan',
  },
  {
    id: '14',
    quote:
      'Fantastic crew! Everyone is so nice and it really looks like they enjoy what they do! They installed a new heating system for us and we are very pleased with the results!',
    author: 'Brandon Smart',
  },
  {
    id: '15',
    quote:
      'Furnace had stop working and with the recent temperature drop called David. He came on the same day and was able to fix the issue quickly. Professional, clean and very fair price.',
    author: 'Layne Rosario',
  },
  {
    id: '16',
    quote:
      'The technicians were punctual, friendly and professional. Comparable to other companies we enquired about a new ac unit, they gave us the best price and date to complete the job. We were very satisfied.',
    author: 'Callum Green',
  },
  {
    id: '17',
    quote:
      'Honest people, on time, reliable, easy to deal with. The salesperson Rita was very knowledgeable, honest, and on time. The AC was not working and a 90 year old gentleman is living in the apartment so David provided and set up a free standing AC for the weekend.Luis and Junior the technicians were on time, knowledgeable and went over and above to get the job done.',
    author: 'Orval Gunnell',
  },
  {
    id: '18',
    quote:
      'The tech Matthew came to fix a problem we had with our air conditioner. After spending two hours fixing it, he told us "no charge" since he "should have spotted the problem when he came to service the furnace earlier in the month". Great customer service, as always. We love this company!!',
    author: 'Timothy Turner',
  },
  {
    id: '19',
    quote:
      'Our stackable washer and dryer was making noise on the spin cycle of the wash. After looking at a few companies I called for service and was very pleased with the service provided by the tech. He was able to fix it on the spot with a part from his truck! Very reasonable price as well!',
    author: 'Walter Warren',
  },
  {
    id: '20',
    quote:
      '247 HVAC OF LONG ISLAND was very professional and knowledgeable. They helped figure out a new system for my old house to make things more efficient and save me money. They set up a whole house heating and ac system and have helped me trouble shoot any problems I may have. I trust this company and we’ll continue doing business with them.',
    author: 'Yeow Thomas',
  },
];

export default function LawrenceLocationPage() {
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
          <span className="text-navy font-bold">Lawrence</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="Lawrence, NY • 24/7 Mobile Service Hub"
        title="Trusted HVAC Contractor in Lawrence, NY"
        bullets={[
          { text: "Emergency HVAC help when comfort cannot wait", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
          { text: "Heating, cooling, repair, maintenance, and installation support", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" /> },
          { text: "Local service for homes and businesses in Lawrence and nearby areas", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
        ]}
        showCallButton
        callButtonLabel="Call Us Now"
        onOpenQuote={() => setIsQuoteOpen(true)}
        quoteButtonLabel="Get A Free Quote"
      />

      {/* ========================================================================= */}
      {/* 2. INTRO SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-4 font-heading">
                <ShieldCheck className="w-4 h-4 text-royal" />
                <span>Local HVAC Care in Lawrence</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                A Better Way to Work With an HVAC Contractor in Lawrence, NY
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-5">
                Your heating and cooling system should be handled by a team that understands your property, comfort needs, and equipment condition. As an experienced HVAC contractor in Lawrence, NY, we provide support for system inspections, HVAC repairs, maintenance, replacements, and installation projects.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-8">
                Our team looks beyond the surface problem to find what is affecting performance, airflow, or comfort. Whether you need a small repair, a seasonal tune-up, ductless HVAC service, or a complete system replacement, we provide clear recommendations and dependable work designed to keep your system running smoothly.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">24/7</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Emergency Support</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">100%</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Clear Recommendations</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-royal font-heading">Fast</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Local Response</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/247 havc/heat-pump-repair/76ecb7ff-c205-4870-89c2-1a635b45a88c.jpg"
                  alt="Two 247 HVAC technicians servicing an outdoor side-discharge heat pump unit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-navy/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-bold text-electric uppercase tracking-wider font-heading">
                    Lawrence Service Area
                  </div>
                  <div className="text-base font-extrabold text-white font-heading mt-0.5">
                    Fast, Reliable Heating & Cooling
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
              <span>Full-Scope Solutions</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Heating, Cooling, and Indoor Air HVAC Services in Lawrence, NY
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Comfort depends on more than just heating or cooling. Your system needs proper airflow, clean ventilation, reliable equipment, and regular service to perform well. Our HVAC services in Lawrence, NY, include complete support for residential and commercial properties, from urgent HVAC repair in Lawrence, NY, to planned maintenance and new system installation.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Whether you need HVAC services in Long Island, NY or are searching for HVAC services in Inwood, NY, our team provides dependable service, honest guidance, and solutions that fit your property’s heating and cooling needs.
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
                  Cooling Care That Keeps Your Space Ready
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LAWRENCE_COOLING_SERVICES.map((service) => {
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
                  Heating Help for Cold-Weather Comfort
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LAWRENCE_HEATING_SERVICES.map((service) => {
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
              <span>The 247 HVAC Difference</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Why Our HVAC Company in Lawrence, NY Stands Out
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              The HVAC contractor in Lawrence, NY, you hire can shape how comfortable your space feels, how efficiently your system runs, and how well your equipment holds up over time. Our HVAC company brings careful service, thorough system checks, and straightforward advice to every visit. For dependable HVAC services in Lawrence, NY, we help you choose the right solution for your heating and cooling needs.
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
                Honest Pricing and Clear Recommendations
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
                Detailed System Inspections
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
                Service Focused on Long-Term Comfort
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
        badgeText="Rating: 5.0 Average (Rated 5 out of 5)"
        heading="Comfort Stories From Local HVAC Customers"
        reviews={LAWRENCE_TESTIMONIALS.map((r: any) => ({
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
                Problems That Call for HVAC Repair in Lawrence, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                HVAC problems often start small before turning into larger system issues. If your heating or cooling equipment is not performing the way it should, scheduling professional HVAC repair in Lawrence, NY, can help prevent breakdowns, comfort issues, and unnecessary system strain.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common issues include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Uneven temperatures between rooms',
                  'Weak airflow from vents',
                  'AC blowing warm air or heat not turning on',
                  'Strange noises, odors, or frequent cycling',
                  'Higher energy bills without a clear reason',
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
              Our team can inspect your system, find the cause of the problem, and recommend the right repair or service option to restore comfort.
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
            Get Your HVAC System Back in Shape
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            When your HVAC system starts struggling, quick help can protect your comfort and prevent bigger problems. 247 HVAC of Long Island offers reliable HVAC repair, maintenance, installation, and replacement services in Lawrence, NY, for homeowners and businesses that need dependable heating and cooling support.
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
            Dependable HVAC Services in Lawrence, NY, Close to Home
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            When comfort problems happen, local support makes the process easier. Contact us at 247 HVAC of Long Island, a trusted HVAC company in Lawrence, NY, serving local homes and businesses with HVAC repair, maintenance, installation, and system upgrade solutions designed to improve comfort, efficiency, and long-term performance.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CTA SECTION */}
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
            Need a Reliable & Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Lawrence technicians for prompt heating and air conditioning repair or a free quote.
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
