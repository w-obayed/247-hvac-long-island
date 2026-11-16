'use client';

import React from 'react';
import { Phone, AlertCircle, Clock, Wrench, ShieldAlert } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface EmergencySectionProps {
  onOpenBooking: () => void;
}

export default function EmergencySection({ onOpenBooking }: EmergencySectionProps) {
  return (
    <section id="emergency" className="py-14 md:py-20 bg-[#061A40] text-white relative overflow-hidden">
      {/* Red Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brightRed/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-royal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#061A40] border-2 border-brightRed/40 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Top Emergency Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brightRed text-white text-xs font-black uppercase tracking-wider mb-5 shadow-lg font-heading">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>Emergency Dispatch Active</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-heading">
                24/7 Emergency HVAC Service in <span className="text-brightRed">Long Island</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-6 font-body">
                Heating or cooling emergency? Our team is available around the clock to help restore comfort to your home or business. Fast response times across Nassau County, Suffolk County, and NYC boroughs.
              </p>

              {/* Emergency Reassurance Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2 font-heading">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                  <Clock className="w-4 h-4 text-brightYellow" />
                  <span>30-45 Min Dispatch</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                  <ShieldAlert className="w-4 h-4 text-brightRed" />
                  <span>No Heat / AC Outage</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                  <Wrench className="w-4 h-4 text-electric" />
                  <span>Fully Stocked Trucks</span>
                </div>
              </div>
            </div>

            {/* Right Buttons: Call & Request Emergency Service (Roboto Condensed) */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 font-heading">
              {/* Call Button */}
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-lg shadow-xl active:scale-95 transition-all duration-200 font-heading uppercase tracking-wide"
              >
                <Phone className="w-5 h-5 text-brightRed animate-bounce" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              {/* Request Emergency Service Button */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-brightRed hover:bg-brightRed-hover text-white font-extrabold text-sm sm:text-base shadow-lg border border-red-400 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wide"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Request Emergency Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
