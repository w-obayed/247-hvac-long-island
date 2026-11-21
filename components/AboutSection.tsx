'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  UserCheck,
  Building2,
  BadgeCheck,
  FileCheck
} from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export default function AboutSection({ onOpenBooking, onOpenQuote }: AboutSectionProps) {
  const highlights = [
    'Residential & Commercial HVAC Services',
    'Installation, Repair & Replacement',
    'Upfront & Honest Pricing',
    'Reliable Local & Professional Team',
  ];

  const trustCards = [
    {
      title: 'Experienced HVAC Professionals',
      description: 'Over 30 years of hands-on heating, cooling, and ventilation expertise across Long Island.',
      icon: UserCheck,
      color: 'text-[#0066CC]',
      bg: 'bg-blue-50',
      border: 'border border-blue-100',
    },
    {
      title: 'Locally Owned & Operated',
      description: 'Proudly serving Nassau County, Suffolk County, and NYC boroughs with responsive local teams.',
      icon: Building2,
      color: 'text-[#E50914]',
      bg: 'bg-red-50',
      border: 'border border-red-100',
    },
    {
      title: 'Quality Workmanship',
      description: 'Precision diagnostic testing, OEM parts, and warranty-backed repairs on all major HVAC brands.',
      icon: BadgeCheck,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      border: 'border border-amber-100',
    },
    {
      title: 'Licensed & Insured Contractors',
      description: 'Fully credentialed, OSHA-compliant, and EPA-certified technicians for residential and commercial comfort.',
      icon: FileCheck,
      color: 'text-[#25843D]',
      bg: 'bg-emerald-50',
      border: 'border border-emerald-100',
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 lg:py-24 bg-white text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* SECTION 3: ABOUT THE COMPANY (Equal 50/50 Two-Column Layout on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center mb-10 sm:mb-14 md:mb-16">
          {/* Left Column (50% on Desktop): Heading, Description, Checklist, Buttons */}
          <div className="flex flex-col items-start w-full">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 font-heading">
              About 247 HVAC of Long Island
            </span>

            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-4 sm:mb-5 font-heading">
              Your Trusted HVAC Contractors in <span className="text-royal">Long Island</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-5 sm:mb-6 font-body">
              For over 30 years, our team has been serving homes and businesses in Long Island. We are committed to providing dependable heating and cooling solutions with a strong focus on customer service and quality workmanship.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full mb-6 sm:mb-8 font-heading">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-hvacGreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                  </div>
                  <span className="text-sm sm:text-sm font-bold text-navy leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons - Stacked on Mobile (<sm) & Horizontal on Tablet/Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 font-heading w-full sm:w-auto">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-royal text-white font-extrabold text-sm sm:text-sm shadow-md hover:bg-royal-hover active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
              >
                <span>Learn More & Get Free Quote</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>

              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg border-2 border-navy text-navy font-extrabold text-sm sm:text-sm hover:bg-slate-50 transition-colors uppercase tracking-wider min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-brightRed flex-shrink-0" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Right Column (50% on Desktop): High-Quality Photograph of Technician */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[450px] w-full">
                <Image
                  src="/images/technician-repair.jpg"
                  alt="Certified 247 HVAC Technician Servicing Outdoor Air Conditioning Unit"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal text-white flex items-center justify-center font-black text-base sm:text-lg flex-shrink-0 font-heading">
                  30+
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-extrabold text-navy text-sm sm:text-sm font-heading leading-tight truncate sm:overflow-visible">
                    Years Serving Long Island
                  </h4>
                  <p className="text-base text-slate-500 font-body leading-tight mt-0.5">
                    Fast, local radio-dispatched service trucks 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: BUSINESS TRUST HIGHLIGHTS (Unified Horizontal Row Card Container) */}
        <div className="w-full">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-100/80 p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-0 lg:divide-x divide-slate-200">
              {trustCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex flex-row items-start gap-3 sm:gap-3.5 text-left w-full ${
                      index !== 0 ? 'lg:pl-4 xl:pl-6' : 'lg:pl-1 xl:pl-2'
                    } ${index !== trustCards.length - 1 ? 'lg:pr-4 xl:pr-6' : 'lg:pr-1 xl:pr-2'}`}
                  >
                    {/* Left: Modern Colorful Icon */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-xl ${item.bg} ${item.border} flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5`}>
                      <Icon className={`w-5 h-5 sm:w-5 sm:h-5 xl:w-6 xl:h-6 ${item.color}`} />
                    </div>

                    {/* Right: Title & Description */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="text-[24px] font-bold text-navy font-heading mb-0.5 sm:mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
