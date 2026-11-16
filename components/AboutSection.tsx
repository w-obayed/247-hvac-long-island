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
    <section id="about" className="py-16 md:py-24 bg-white text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* SECTION 3: ABOUT THE COMPANY (Equal 50/50 Two-Column Layout on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14 md:mb-16">
          {/* Left Column (50% on Desktop): Heading, Description, Checklist, Buttons */}
          <div className="flex flex-col items-start w-full">
            <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 font-heading">
              About 247 HVAC of Long Island
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5 font-heading">
              Your Trusted HVAC Contractors in <span className="text-royal">Long Island</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-body">
              For over 30 years, our team has been serving homes and businesses in Long Island. We are committed to providing dependable heating and cooling solutions with a strong focus on customer service and quality workmanship.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8 font-heading">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-hvacGreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                  </div>
                  <span className="text-sm font-bold text-navy">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 font-heading">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-royal text-white font-extrabold text-sm shadow-md hover:bg-royal-hover active:scale-95 transition-all uppercase tracking-wider"
              >
                <span>Learn More & Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-navy text-navy font-extrabold text-sm hover:bg-slate-50 transition-colors uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-brightRed" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Right Column (50% on Desktop): High-Quality Photograph of Technician */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <div className="relative h-80 sm:h-96 lg:h-[450px] w-full">
                <Image
                  src="/images/technician-repair.jpg"
                  alt="Certified 247 HVAC Technician Servicing Outdoor Air Conditioning Unit"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-royal text-white flex items-center justify-center font-black text-lg flex-shrink-0 font-heading">
                  30+
                </div>
                <div>
                  <h4 className="font-extrabold text-navy text-sm font-heading">Years Serving Long Island</h4>
                  <p className="text-xs text-slate-500 font-body">Fast, local radio-dispatched service trucks 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: BUSINESS TRUST HIGHLIGHTS (Unified Horizontal Row Card Container) */}
        <div className="w-full">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-100/80 p-6 sm:p-7 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-0 lg:divide-x divide-slate-200">
              {trustCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex flex-row items-start gap-3.5 sm:gap-4 text-left ${
                      index !== 0 ? 'lg:pl-6' : 'lg:pl-2'
                    } ${index !== trustCards.length - 1 ? 'lg:pr-6' : 'lg:pr-2'}`}
                  >
                    {/* Left: Modern Colorful Icon */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.bg} ${item.border} flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                    </div>

                    {/* Right: Title & Description */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-navy font-heading mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-body">
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
