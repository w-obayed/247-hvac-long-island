'use client';

import React from 'react';
import BrandLogo from './BrandLogo';
import { Phone, Clock, FileText, Wrench } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface MainHeaderProps {
  onOpenQuote: () => void;
  onOpenBooking: () => void;
}

export default function MainHeader({ onOpenQuote, onOpenBooking }: MainHeaderProps) {
  return (
    <header className="w-full bg-white border-b border-slate-100 py-3.5 md:py-4 shadow-sm relative z-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Side: Brand Identity (Logo, Company Name, Tagline) */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <a href="#home" className="hover:opacity-95 transition-opacity" aria-label="247 HVAC of Long Island Home">
              <BrandLogo size="md" />
            </a>

            {/* Mobile quick call icon */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-brightRed text-white shadow-md active:scale-95 transition-transform"
                title="Call 24/7 HVAC Emergency"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Information & Both CTA Buttons in a Vertical Column */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-end gap-4 sm:gap-6 w-full lg:w-auto">
            {/* Contact Details: Call Us Now, (516) 717-7515, 24 Hours - 7 Days */}
            <div className="flex items-center gap-3 pr-2 sm:pr-4 sm:border-r sm:border-slate-200">
              <div className="w-11 h-11 rounded-full bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-heading">
                  Call Us Now
                </span>
                <a
                  href={PHONE_TEL}
                  className="text-xl sm:text-2xl font-black text-navy hover:text-royal transition-colors tracking-tight leading-none my-0.5 font-heading"
                >
                  {PHONE_NUMBER}
                </a>
                <div className="flex items-center gap-1.5 text-xs font-bold text-brightRed font-heading">
                  <span className="inline-block w-2 h-2 rounded-full bg-brightRed animate-ping" />
                  <span>24 Hours – 7 Days</span>
                </div>
              </div>
            </div>

            {/* Two Action CTA Buttons - Displayed vertically in a column */}
            <div className="flex flex-col items-stretch justify-center gap-2 flex-shrink-0 w-full sm:w-auto">
              {/* 1. Get a Free Quote (Primary CTA: Royal Blue) */}
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-royal text-white font-bold text-sm sm:text-sm shadow-sm hover:bg-royal-hover active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider whitespace-nowrap w-full sm:w-44"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Get a Free Quote</span>
              </button>

              {/* 2. Request Service (Secondary CTA: Green) */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-hvacGreen text-white font-bold text-sm sm:text-sm shadow-sm hover:bg-hvacGreen-hover active:scale-95 border border-hvacGreen/30 transition-all duration-200 font-heading uppercase tracking-wider whitespace-nowrap w-full sm:w-44"
              >
                <Wrench className="w-4 h-4 flex-shrink-0" />
                <span>Request Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
