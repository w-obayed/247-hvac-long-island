'use client';

import React from 'react';
import { Tag, Sparkles, ArrowRight, Wrench, Flame, Snowflake, RefreshCw } from 'lucide-react';

interface PromoOfferBarProps {
  onOpenCoupon: () => void;
  onOpenQuote: () => void;
}

export default function PromoOfferBar({ onOpenCoupon, onOpenQuote }: PromoOfferBarProps) {
  return (
    <section className="w-full bg-[#061A40] border-y border-royal/30 text-white py-3 shadow-md relative z-10">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Left: Free Estimates & $100 Off Coupon Badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4">
            {/* Free Estimates */}
            <div className="flex items-center gap-1.5 font-extrabold text-white font-heading">
              <Sparkles className="w-4 h-4 text-brightYellow" />
              <span className="text-sm tracking-wide uppercase">Free Estimates!</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-300 font-normal hidden sm:inline font-body">No Obligation Upfront Pricing</span>
            </div>

            {/* $100 Off Coupon */}
            <button
              onClick={onOpenCoupon}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-brightYellow to-amber-300 text-navy font-black hover:brightness-105 active:scale-95 transition-all shadow-sm font-heading uppercase tracking-wider text-xs"
              title="Claim $100 Off HVAC Repair or Installation Coupon"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>$100 Off Coupon</span>
            </button>
          </div>

          {/* Center: Quick Service Tags */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-semibold text-slate-300 font-heading tracking-wide uppercase">
            <span className="flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5 text-royal" /> Repair
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-brightRed" /> Install
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <Snowflake className="w-3.5 h-3.5 text-electric" /> Maintenance
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 text-hvacGreen" /> Replacement
            </span>
          </div>

          {/* Right: Get Your Free Estimate CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-royal hover:bg-royal-hover text-white font-bold text-xs uppercase tracking-wider shadow transition-all duration-200 font-heading"
            >
              <span>Get Your Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
