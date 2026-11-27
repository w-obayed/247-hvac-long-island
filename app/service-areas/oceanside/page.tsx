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

const OCEANSIDE_COOLING_SERVICES: LocationServiceCard[] = [
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

const OCEANSIDE_HEATING_SERVICES: LocationServiceCard[] = [
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

const OCEANSIDE_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Jonathan and the guys installed a garage furnace for us. They were very friendly, professional, and super clean. Great quality work for a great price. We would recommend their work all day long!',
    author: 'Cassandra Baker',
  },
  {
    id: '2',
    quote:
      "New furnace installed!! The installation crew arrived on time and were polite and very neat in their work. They explained the new system and it's features so I was comfortable with the new product.",
    author: 'Joey Williams',
  },
  {
    id: '3',
    quote:
      'Top notch customer care and excellent service. Wonderful, professional and highly skilled staff. It is a joy to be a customer of 247 HVAC OF LONG ISLAND over the last 4 years! Office managers Rita, Jess and technicians Edgar and David offer impeccable service and really care about their customers. Thanks so much 247 HVAC OF LONG ISLAND.',
    author: 'Jak Tony',
  },
  {
    id: '4',
    quote:
      'Great experience! They were responsive and helped get my furnace installed quickly and at a reasonable price. I used them after having a very bad experience with another company so their professionalism and efficiency was really appreciated. Would recommend!',
    author: 'Roman Pichardo',
  },
  {
    id: '5',
    quote:
      'The experience I had was outstanding. My AC stopped working and Edgar was quick to respond and arrive at my home. He quickly diagnosed the problem and fixed it right away. Pricing was fair despite it being an after hours job. I will definitely call this company again.',
    author: 'John Simms',
  },
  {
    id: '6',
    quote:
      'I am 100% satisfied with the work that 247 HVAC OF LONG ISLAND has done for me. The technicians were polite and efficient, they took care of all my air conditioner repair needs in a timely manner. The AC is running smoothly and my home is cool and comfortable. I would recommend them to anyone who needs heating and cooling services..',
    author: 'Jonathan Smith',
  },
  {
    id: '7',
    quote:
      'One of my tenants called and said the heater is working, but the air conditioner is not. The package unit is on top of the roof and almost 20 years old. I was afraid it would cost a lot to repair or need to be replaced. I called 247 HVAC OF LONG ISLAND and told them I would tell my tenant to call in and schedule the repair. My tenant called and the following morning the air was working. Yaaa... 247 HVAC OF LONG ISLAND could have charged a lot, but only charged to repair the broken wire that causing the problem. The housecall and repair only cost me $275. From now on I am going to call 247 HVAC OF LONG ISLAND for all 5 of my houses.',
    author: 'James Cook',
  },
  {
    id: '8',
    quote:
      'Dave and his crew were great to work with. Always took my calls or got back to me quickly. So easy to deal with and a pleasure to talk too. Thank you guys for getting me a new AC unit quickly.',
    author: 'Neelie Ryan',
  },
  {
    id: '9',
    quote:
      '24/7 HVAC of Long Island is fantastic! I called them in a desperate situation, and they showed up to my house the same day. They got me back on the air within minutes, and I was able to sleep peacefully. They are such a professional crew. If you need anything heating or air conditioning related, 24/7 HVAC of Long Island',
    author: 'A Google User',
  },
  {
    id: '10',
    quote:
      'The nicest people and best service! Fixed all our HVAC issues - great people and company and highly recommend!',
    author: 'Lindsey Owen',
  },
  {
    id: '11',
    quote:
      'Matthew who did the duct cleaning was super! He was on time, hardworking and above all, very caring and honest! His job is very neat and clean, and pricing was very clear. We highly recommend this company.',
    author: 'Christopher Newman',
  },
  {
    id: '12',
    quote:
      "David and his assistant Edgar were of awesome! If you are looking for a company who is reliable, on time, fairly priced, honest, and genuinely cares about their customers, this is the place to call. I don't usually write reviews, but these guys did an outstanding job! They diagnosed the problem very quickly, explained the options while keeping my best interests in mind, and got the issues fixed quickly at a fair price. I will definitely call these guys again! David is a veteran and it shows in his discipline and professionalism to get the job done, and done right! Thanks again guys!!!",
    author: 'Cilim Done',
  },
  {
    id: '13',
    quote:
      'Prior to choosing 247 HVAC OF LONG ISLAND to do my repairs I didn’t have a company to go to for my plumbing needs. I will never call anyone else except for 247 HVAC OF LONG ISLAND. They are very responsive and their employees are courteous, professional and friendly. I had Luis and Junior and they both were very helpful. They even put covers on over their boots prior to entering my house so that they wouldn’t dirty the floors. Within minutes they were both able to diagnose the problem and explained in full to me what needed to be done. They had everything on their truck to complete the repair on the spot. I was beyond satisfied with their service and I will be recommending and using 247 HVAC OF LONG ISLAND for anything I need in the future because of how good Luis and Junior are. You will not be disappointed with 247 HVAC OF LONG ISLAND service.',
    author: 'Jkson G',
  },
  {
    id: '14',
    quote:
      'David was recommended to me by my realtor and I am a 110% satisfied customer. As a new home owner, I knew I needed professionals I can trust and Engel and the team have been great. Thorough, professional, and good communication. Will be using them for all my HVAC needs and recommending them to all my friends.',
    author: 'Jsmi G',
  },
  {
    id: '15',
    quote:
      'Matthew and his team did a great job. We were in a jam when our furnace died on us. We appreciated Matthew sitting down with us and he had his team in the next day to install our new furnace. His installers were equally great and curteous. And we love our new furnace.',
    author: 'Lekha Singh',
  },
  {
    id: '16',
    quote:
      'Our Air Conditioner is 25 years old, and we called 24/7 HVAC of Long Island to get an estimate for the replacement. They sent David to our house for the pricing. We have been dealing with them since 2012 for our furnace replacement. I highly recommend this company!!',
    author: 'Bradley Alvis',
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
      'This was the best service I have ever had for my annual Mini split check -first time using 24/7 HVAC of Long Island and have had service from a few different companies for the past 27 years. David was the technician and he was very thorough and efficient. He explained lots of things to me that nobody else over the years has ever taken the time to do - very polite and attentive. I was very impressed and am now sure of which company I will deal with from now on. Thank you 24/7 HVAC of Long Island.',
    author: 'Mark II',
  },
  {
    id: '19',
    quote:
      '24/7 HVAC is a very professional company. I was extremely happy with the service I received and how quick the service was. I also love that they do great work and are also very affordable. The website is easy to use and the customer service is great. I would recommend this company to anyone who needs affordable and quality HVAC service.',
    author: 'David McMillan',
  },
  {
    id: '20',
    quote:
      'I want to thank edgar our tech! He was so nice and explained everything he was doing! Thank you for the great service!!',
    author: 'Louie Gentry',
  },
];

export default function OceansideLocationPage() {
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
          <span className="text-navy font-bold">Oceanside</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="Oceanside, NY • 24/7 Mobile Service Hub"
        title="Expert HVAC Contractor in Oceanside, NY for Reliable Comfort"
        bullets={[
          { text: "Emergency heating and cooling help when comfort cannot wait", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
          { text: "Reliable HVAC repair in Oceanside, NY for homes and businesses", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" /> },
          { text: "Quick local support for maintenance, installation, and replacement needs", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
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
                <span>Local Oceanside HVAC Care</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                Practical Care From A Reliable HVAC Contractor In Oceanside, NY
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-5">
                Heating and cooling systems work differently in every property, which is why the right service starts with understanding your space, equipment, and comfort concerns. 247 HVAC of Long Island supports homeowners and businesses as a reliable HVAC company in Oceanside, NY, offering inspections, repairs, maintenance, replacements, and system upgrade solutions.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-8">
                Our team takes a careful look at how your system is performing before recommending the best next step. Whether you need complete HVAC repair in North Woodmere, NY, or are looking for reliable HVAC services in Long Island, NY, we provide dependable service designed to improve comfort and keep your system running properly.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">24/7</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Emergency Support</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">100%</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Practical Solutions</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-royal font-heading">Fast</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Oceanside Dispatch</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/247 havc/ac-installation/d15da339-7a3d-483e-97b4-ddcf34115191.jpg"
                  alt="Bosch outdoor air conditioning condenser unit installed on a raised composite pad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-navy/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-bold text-electric uppercase tracking-wider font-heading">
                    Oceanside Service Hub
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
              <span>Full-Service Heating & Cooling</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Full-Service HVAC Services in Oceanside, NY for Every Season
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Comfort depends on heating, cooling, ventilation, and air quality systems working together properly. Our HVAC services in Oceanside, NY, cover complete support for residential and commercial properties, including repairs, tune-ups, maintenance, replacements, and new system setup.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Whether you need HVAC services in Rockville Centre, NY, or are searching for HVAC services in Oceanside, NY, our team provides dependable service, clear recommendations, and solutions built around your property’s needs.
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
                  Cooling Help Built for Better Daily Comfort
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OCEANSIDE_COOLING_SERVICES.map((service) => {
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
                  Heating Support for Steady Indoor Warmth
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OCEANSIDE_HEATING_SERVICES.map((service) => {
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
              What Sets Our HVAC Contractor in Oceanside Apart
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              A dependable HVAC contractor in Oceanside, NY can make a noticeable difference in how your system performs, how comfortable your space feels, and how efficiently your equipment runs. Our team takes time to inspect the system, explain the issue clearly, and provide reliable service that helps you choose the best solution for your heating and cooling needs.
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
        badgeText="Rating: 5.0 Average (Rated 5 out of 5)"
        heading="What Oceanside Customers Value About Our HVAC Company"
        reviews={OCEANSIDE_TESTIMONIALS.map((r: any) => ({
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
                When to Schedule HVAC Repair in Oceanside, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                Small HVAC problems can turn into larger repairs when they are ignored. If your system is not heating, cooling, or moving air properly, scheduling professional HVAC repair in Oceanside, NY can help prevent breakdowns and restore comfort.
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
              Our team can inspect your system, find the cause of the issue, and recommend the right repair or service option.
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
            Fast HVAC Service in Oceanside, NY When Comfort Drops
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            A struggling HVAC system can affect comfort, airflow, and energy use throughout your property. 247 HVAC of Long Island offers dependable HVAC service in Oceanside, NY, for repair, maintenance, installation, replacement, and tune-up support that helps your equipment work more efficiently.
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
            Restore Comfort With Trusted HVAC Service in Oceanside, NY
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            When your heating or cooling system starts affecting comfort, quick attention can help prevent larger repair needs. Contact 247 HVAC of Long Island for reliable HVAC repairs, tune-ups, maintenance, installations, HVAC service in Oceanside, NY, and replacements that help your system run smoothly again.
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
            Speak directly with our Oceanside technicians for prompt heating and air conditioning repair or a free quote.
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
