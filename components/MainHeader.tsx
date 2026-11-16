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
    <header className="w-full bg-white border-b border-slate-100 py-3 md:py-4">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Brand Identity Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#home" className="hover:opacity-95 transition-opacity" aria-label="247 HVAC of Long Island Home">
              <BrandLogo size="md" />
            </a>

            {/* Mobile quick call icon */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-brightRed text-white shadow-md active:scale-95 transition-transform"
                title="Call 24/7 HVAC Emergency"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Center/Right: 24/7 Emergency HVAC Service & Phone Info & CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 lg:gap-6 w-full md:w-auto">
            {/* 24/7 Emergency HVAC Service + Phone */}
            <div className="flex items-center gap-3 pr-2 border-r-0 sm:border-r sm:border-slate-200">
              <div className="w-11 h-11 rounded-full bg-royal/10 text-royal flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brightRed uppercase tracking-wider font-heading">
                  <span className="w-2 h-2 rounded-full bg-brightRed animate-ping" />
                  <span>24/7 Emergency HVAC Service</span>
                </div>
                <a
                  href={PHONE_TEL}
                  className="text-xl sm:text-2xl font-black text-navy hover:text-royal transition-colors tracking-tight leading-none my-0.5 font-heading"
                >
                  {PHONE_NUMBER}
                </a>
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 font-body">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>24 Hours - 7 Days • Fast Long Island Dispatch</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Get a Free Quote & Request Service */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Get a Free Quote */}
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-royal text-white font-bold text-xs sm:text-sm shadow-md hover:bg-royal-hover active:scale-95 transition-all duration-200 font-heading tracking-wide uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Free Quote</span>
              </button>

              {/* Request Service */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy text-white font-bold text-xs sm:text-sm shadow-md hover:bg-navy-light active:scale-95 border border-royal/30 transition-all duration-200 font-heading tracking-wide uppercase"
              >
                <Wrench className="w-4 h-4 text-electric" />
                <span>Request Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
