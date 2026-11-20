'use client';

import React from 'react';
import { Phone, AlertCircle, Clock, Wrench, ShieldAlert } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface EmergencySectionProps {
  onOpenBooking: () => void;
}

export default function EmergencySection({ onOpenBooking }: EmergencySectionProps) {
  return (
    <section id="emergency" className="py-14 md:py-20 bg-[#FFF1EB] text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F44816]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#0B82C3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#10243E] via-[#173254] to-[#10243E] border-2 border-[#F44816]/40 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Top Emergency Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F44816] text-white text-xs font-black uppercase tracking-wider mb-5 shadow-lg font-heading">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>24/7 Emergency Service</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-heading">
                Need a Reliable & Professional HVAC Service - <span className="text-[#F44816]">24/7 Emergency</span>
              </h2>

              <p className="text-base text-slate-200 leading-relaxed max-w-2xl mb-6 font-body">
                We’re there for you 24 hours 7 days a week, when you need us. Contact us for a consultation, estimate, or any questions you might have about your project or our work.
              </p>

              {/* Emergency Reassurance Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2 font-heading">
                <div className="flex items-center gap-2 text-sm sm:text-sm text-slate-200 font-semibold">
                  <Clock className="w-4 h-4 text-[#F44816]" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-sm text-slate-200 font-semibold">
                  <ShieldAlert className="w-4 h-4 text-[#0B82C3]" />
                  <span>Fast Response Times</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-sm text-slate-200 font-semibold">
                  <Wrench className="w-4 h-4 text-[#0B82C3]" />
                  <span>Dependable Solutions</span>
                </div>
              </div>
            </div>

            {/* Right Buttons: Call & Request Emergency Service */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 font-heading">
              {/* Call Button */}
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-[#F44816] hover:bg-[#d93d10] text-white font-black text-lg shadow-xl active:scale-95 transition-all duration-200 font-heading uppercase tracking-wide"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              {/* Request Emergency Service Button */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#0B82C3] hover:bg-[#086396] text-white font-extrabold text-sm sm:text-base shadow-lg border border-white/10 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wide"
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
