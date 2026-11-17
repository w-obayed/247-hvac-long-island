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
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs sm:text-sm">
          {/* Left: Free Estimates & $100 Off Coupon Badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3.5">
            {/* Free Estimates */}
            <div className="flex items-center gap-1.5 font-extrabold text-white font-heading text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brightYellow flex-shrink-0" />
              <span className="tracking-wide uppercase">Free Estimates!</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-300 font-normal hidden sm:inline font-body">No Obligation Upfront Pricing</span>
            </div>

            {/* $100 Off Coupon */}
            <button
              onClick={onOpenCoupon}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-gradient-to-r from-brightYellow to-amber-300 text-navy font-black hover:brightness-105 active:scale-95 transition-all shadow-sm font-heading uppercase tracking-wider text-xs sm:text-xs min-h-[32px]"
              title="Claim $100 Off HVAC Repair or Installation Coupon"
            >
              <Tag className="w-3.5 h-3.5 flex-shrink-0" />
              <span>$100 Off Coupon</span>
            </button>
          </div>

          {/* Center: Quick Service Tags */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-semibold text-slate-300 font-heading tracking-wide uppercase">
            <span className="flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5 text-royal flex-shrink-0" /> Repair
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-brightRed flex-shrink-0" /> Install
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <Snowflake className="w-3.5 h-3.5 text-electric flex-shrink-0" /> Maintenance
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 text-hvacGreen flex-shrink-0" /> Replacement
            </span>
          </div>

          {/* Right: Get Your Free Estimate CTA */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center md:justify-end">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-1.5 rounded-md bg-royal hover:bg-royal-hover text-white font-bold text-xs sm:text-xs uppercase tracking-wider shadow transition-all duration-200 font-heading min-h-[36px]"
            >
              <span>Get Your Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
