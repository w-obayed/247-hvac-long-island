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

const MALVERNE_COOLING_SERVICES: LocationServiceCard[] = [
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

const MALVERNE_HEATING_SERVICES: LocationServiceCard[] = [
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

const MALVERNE_TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Great experience! They were responsive and helped get my furnace installed quickly and at a reasonable price. I used them after having a very bad experience with another company so their professionalism and efficiency was really appreciated. Would recommend!',
    author: 'Roman Pichardo',
  },
  {
    id: '2',
    quote:
      'The tech was on time and very professional. I just purchased a home and did not know anything about the unit except it looked old. He was able to validate the age of the unit and determined it was running pretty efficiently but needed maintenance. I appreciate the honesty and will use this company again.',
    author: 'Nicholas Bradley',
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
      'We had our maintenance done on our furnace and AC today. David was our service technician and he was very thorough and spent the time explaining what was done to assure us our furnace and AC would work when we needed them to. We were very pleased with his work.',
    author: 'Matthew Marks',
  },
  {
    id: '5',
    quote: 'i called they responded within a a half hour excellent team very satified',
    author: 'Mark Appel',
  },
  {
    id: '6',
    quote:
      "The technician David came and fixed our faltering furnace promptly and kept us informed throughout the process so that we knew what to expect. He calls when he says he'll call, comes when he says he'll come and fixes the problem after careful diagnosis. Very knowledgeable and competent.",
    author: 'Joel Medina',
  },
  {
    id: '7',
    quote:
      'Luis did a great job fitting our new air conditioning unit. Kept us well informed with when the kit was going to be in stock and completed the job in a morning with no fuss or mess. Highly recommend them.',
    author: 'Thomas Leech',
  },
  {
    id: '8',
    quote:
      "My furnace wasn't working and the technician came over and checked it out. He arrived at the time he said he would be and the work was done efficiently & effectively. Thank you!! You will be my go to person for furnaces and air from now on.",
    author: 'Brayden Mercer',
  },
  {
    id: '9',
    quote:
      'Furnace had stop working and with the recent temperature drop called David. He came on the same day and was able to fix the issue quickly. Professional, clean and very fair price.',
    author: 'Layne Rosario',
  },
  {
    id: '10',
    quote:
      'Technician was very pleasant and explained the process. He made sure that AC unit was working before he left. And said to be sure to call if there were any issues.',
    author: 'Victor Barrette',
  },
  {
    id: '11',
    quote:
      'Highly professional, friendly and affordable service. I had a cooling & heating system installed at my art school a couple of weeks ago and I am so pleased to have chosen Air Options. Amazing service from first contact to install. Very knowledgeable staff where always fast to respond, incredibly helpful and went out of their way to meet my needs. Fairly priced & provided a smart, very quiet and effective system which perfectly fitted what I was after. The system is energy efficient, has inbuilt nano technology air cleaning system which is reassuring in these times & came with an easy to operate control panel. Delightful company, thanks Edgar & David !',
    author: 'Dale Hall',
  },
  {
    id: '12',
    quote:
      "I called 247 HVAC to come check out my heating system. They came and made sure everything was working and recommended I change the seals on my doors because air was coming through the old seals. Let's see if I save on my heat this winter! Great service and very nice people!",
    author: 'Upul Mendis',
  },
  {
    id: '13',
    quote:
      'We are new homeowners navigating an AC outage during the cold week yet. We only had to wait 24 hours for a technician to be on-site. Our technician, David, was great. He was kind, efficient, and most importantly took the time to explain what he was doing, what needed repair, and went above and beyond his service ask by educating us about our specific system. He provided his personal recommendations for filters and humidifier pads and helped me locate them via Amazon. He also helped me think about maintenance. He didn’t try to sell us on anything so much as educate and I’m leaving feeling confident I can tackle our HVAC needs rather than pushing them to my husbands plate. In the end our repair was as simple as a new piece of equipment from our smart home service, but David bypassed our broken thermostat in the interim to make sure we had AC while we are waiting for a replacement thermostat. We are grateful and will be repeat customers..',
    author: 'Brendon Carter',
  },
  {
    id: '14',
    quote:
      'We recently updated our basement, and had 24/7 HVAC come in to install mini splits. They were very professional, efficient and cleaned up after they finished. They did great work. Would definitely use their service again.',
    author: 'Efrat Partouche',
  },
  {
    id: '15',
    quote:
      'Our Air Conditioner is 25 years old, and we called 24/7 HVAC of Long Island to get an estimate for the replacement. They sent David to our house for the pricing. We have been dealing with them since 2012 for our furnace replacement. I highly recommend this company!!',
    author: 'Bradley Alvis',
  },
  {
    id: '16',
    quote:
      'David did a fantastic job! He cleaned and serviced our air conditioner and installed something that made it run more efficiently (I can’t remember what he called it but it worked!). Also, he took the time to fix the installation of the thermostat that wasn’t quite correct. So professional. We are extremely pleased with today’s service. Thank you 247 HVAC OF LONG ISLAND we signed up for another year maintenance plan.',
    author: 'Daniela2 Kleinre',
  },
  {
    id: '17',
    quote:
      'The experience I had was outstanding. My AC stopped working and Edgar was quick to respond and arrive at my home. He quickly diagnosed the problem and fixed it right away. Pricing was fair despite it being an after hours job. I will definitely call this company again.',
    author: 'John Simms',
  },
  {
    id: '18',
    quote:
      'I called HVAC and David called me right away. Not even two minutes after. Their website page is user friendly. I already have a service appointment. He was clear and honest about HVAC business and services. They will get a post service review as soon as they complete their service',
    author: 'Dean Quinteros',
  },
  {
    id: '19',
    quote:
      "David and his assistant Edgar were of awesome! If you are looking for a company who is reliable, on time, fairly priced, honest, and genuinely cares about their customers, this is the place to call. I don't usually write reviews, but these guys did an outstanding job! They diagnosed the problem very quickly, explained the options while keeping my best interests in mind, and got the issues fixed quickly at a fair price. I will definitely call these guys again! David is a veteran and it shows in his discipline and professionalism to get the job done, and done right! Thanks again guys!!!",
    author: 'Cilim Done',
  },
  {
    id: '20',
    quote:
      'I was referred to 24/7 HVAC of Long Island when my AC went out and they responded quickly. They came out and fixed my AC quickly and efficiently. They were easy to work with and very friendly. I would definitely recommend this company to anyone who needs AC or heating system repairs or installation.',
    author: 'Aron Davis',
  },
];

export default function MalverneLocationPage() {
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
          <span className="text-navy font-bold">Malverne</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="Malverne, NY • 24/7 Mobile Service Hub"
        title="Premier HVAC Services in Malverne, NY"
        bullets={[
          { text: "Emergency HVAC support when comfort cannot wait", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
          { text: "Heating and cooling solutions for homes and businesses", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" /> },
          { text: "Local service throughout Malverne and nearby areas", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brightYellow flex-shrink-0" /> },
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
                <span>Comfort-Focused Malverne HVAC</span>
              </div>

              {/* Exact Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-6 font-heading">
                Comfort-Focused Support From an HVAC Contractor in Malverne, NY
              </h2>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body mb-5">
                Heating and cooling problems are not always caused by the same issue, so a one-size-fits-all approach does not work. 247 HVAC of Long Island provides careful service from a trusted HVAC contractor in Malverne, NY, helping you choose the right solution for your system condition, property setup, comfort needs, and energy performance goals.
              </p>

              {/* Exact Paragraph 2 */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-8">
                Our team checks the system carefully, explains what is causing the issue, and helps you choose the most practical fix. From minor HVAC repairs to complete system upgrades, we focus on better airflow, steady comfort, and reliable performance for your home or business.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">24/7</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Emergency Support</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-black text-royal font-heading">100%</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Personalized Care</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-royal font-heading">Fast</div>
                  <div className="text-xs text-slate-500 font-body font-semibold">Malverne Dispatch</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/247 havc/heating-and-controls/9c5c6fb1-1cf9-428f-b13b-40cdb76bc5fe.jpg"
                  alt="HVAC Contractor in Malverne, NY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-navy/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-bold text-electric uppercase tracking-wider font-heading">
                    Malverne Service Area
                  </div>
                  <div className="text-base font-extrabold text-white font-heading mt-0.5">
                    Careful Diagnostics & Quality Work
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
              <span>Residential & Commercial Care</span>
            </div>

            {/* Exact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-heading mb-4">
              Residential HVAC Services in Malverne, NY for Heating, Cooling, and Airflow
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 font-body mb-3">
              Your HVAC system does more than heat and cool your home. It helps control airflow, indoor comfort, and energy use throughout the year. Our residential HVAC services in Malverne, NY, cover the essential heating and cooling needs of local homeowners.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              Whether you need HVAC in Long Island, NY, for a repair, seasonal tune-up, or new installation, our team provides dependable service and practical solutions that fit your property.
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
                  HVAC Cooling Services
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MALVERNE_COOLING_SERVICES.map((service) => {
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
                  HVAC Heating Services
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MALVERNE_HEATING_SERVICES.map((service) => {
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
              Why Our HVAC Company in Malverne, NY Stands Out
            </h2>

            {/* Exact Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-body">
              The team you choose for HVAC work can affect how well your system runs, how comfortable your space feels, and how much energy your property uses. Whether you need HVAC services in West Hempstead, NY, or are searching for HVAC services in Baldwin, NY, our HVAC company in Malverne, NY, delivers careful service, honest guidance, and practical solutions that help your heating and cooling equipment work more efficiently.
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
                Trained specialists providing expert heating & cooling solutions.
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
                Prompt dispatch across Malverne for both emergencies and appointments.
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
                Transparent upfront pricing with straightforward guidance.
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
                Precise diagnostics addressing underlying issues, not just surface symptoms.
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
                Maximized system efficiency and durable repairs for year-round comfort.
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
        heading="Customer-Focused HVAC Services in Malverne, NY"
        reviews={MALVERNE_TESTIMONIALS.map((r: any) => ({
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
                Warning Signs You Need HVAC Services in Malverne, NY
              </h2>

              {/* Exact Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-body">
                Your heating and cooling system often shows small signs before a bigger issue develops. Scheduling HVAC services in Malverne, NY early can help prevent sudden breakdowns, improve comfort, and keep your system from working harder than it should.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-navy font-heading mb-4">Common issues include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Rooms that feel too warm or too cold',
                  'Low airflow coming from vents',
                  'AC or heating equipment turning on and off too often',
                  'Unusual sounds, odors, or system delays',
                  'Energy bills are rising without a clear reason',
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
              Our team checks the full system, finds the cause of the problem, and provides dependable solutions to help your heating and cooling equipment run properly again.
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
            Get Your Heating and Cooling System Back on Track
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8">
            When your HVAC system is not working the way it should, getting professional help quickly can make a major difference. Our team is ready to provide dependable repairs, maintenance, and installation support for your home or business.
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
            Malverne, NY HVAC Support Built Around Your Comfort
          </h2>

          {/* Exact Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 font-body">
            When your heating or cooling system needs attention, 247 HVAC of Long Island is ready to help with dependable HVAC services in Malverne, NY. As a trusted HVAC company in Malverne, NY, we support homes and businesses with repairs, maintenance, installations, and system care designed to keep indoor comfort steady through every season.
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
            Speak directly with our Malverne technicians for prompt heating and air conditioning repair or a free quote.
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
