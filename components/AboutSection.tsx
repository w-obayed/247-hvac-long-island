'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  ArrowRight,
  Phone
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
      icon: Clock,
      color: 'text-royal',
      bg: 'bg-royal/10',
    },
    {
      title: 'Locally Owned & Operated',
      description: 'Proudly serving Nassau County, Suffolk County, and NYC boroughs with responsive local teams.',
      icon: MapPin,
      color: 'text-brightRed',
      bg: 'bg-brightRed/10',
    },
    {
      title: 'Quality Workmanship',
      description: 'Precision diagnostic testing, OEM parts, and warranty-backed repairs on all major HVAC brands.',
      icon: Award,
      color: 'text-brightYellow',
      bg: 'bg-amber-100',
    },
    {
      title: 'Licensed & Insured Contractors',
      description: 'Fully credentialed, OSHA-compliant, and EPA-certified technicians for residential and commercial comfort.',
      icon: ShieldCheck,
      color: 'text-hvacGreen',
      bg: 'bg-hvacGreen/10',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* SECTION 3: ABOUT THE COMPANY (Two-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
          {/* Left Column: Heading, Description, Checklist, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
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

          {/* Right Column: High-Quality Photograph of Technician */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <div className="relative h-80 sm:h-96 lg:h-[430px] w-full">
                <Image
                  src="/images/technician-repair.jpg"
                  alt="Certified 247 HVAC Technician Servicing Outdoor Air Conditioning Unit"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
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

        {/* SECTION 4: BUSINESS TRUST HIGHLIGHTS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-navy font-heading">Built on Trust, Reliability & Quality</h3>
            <p className="text-sm text-slate-500 mt-1 font-body">
              Providing dependable residential and commercial heating and air conditioning solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-slate-50 hover:bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-start"
                >
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h4 className="font-bold text-navy text-base mb-2 font-heading">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
