'use client';

import React, { useState } from 'react';

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithCoupon: () => void;
}

export default function CouponModal({
  isOpen,
  onClose,
  onBookWithCoupon,
}: CouponModalProps) {
  const [copied, setCopied] = useState(false);
  const couponCode = 'LONGISLAND100';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border-2 border-brightRed overflow-hidden">
        {/* Header */}
        <div className="bg-[#E50914] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brightYellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H13a1 1 0 100-2H8.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            <h3 className="font-black text-[24px] uppercase tracking-wider">
              Exclusive Web Savings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm font-bold"
          >
            ✕
          </button>
        </div>

        {/* Coupon Body */}
        <div className="p-6 text-center space-y-4">
          <div className="border-3 border-dashed border-brightRed p-5 rounded-2xl bg-gradient-to-b from-red-50/50 to-white relative">
            <span className="text-xs font-black uppercase tracking-widest text-brightRed">
              247 HVAC of Long Island
            </span>
            <div className="text-4xl sm:text-5xl font-black text-navy mt-1">
              $100 <span className="text-brightRed">OFF</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">
              Any Heating or AC System Repair or Replacement
            </p>

            {/* Promo Code Box */}
            <div className="mt-4 p-3 rounded-xl bg-white border border-slate-300 flex items-center justify-between gap-2 shadow-inner">
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400">Promo Code</p>
                <p className="font-mono text-base font-black text-navy tracking-wider">
                  {couponCode}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-navy hover:bg-navy-light text-white text-xs font-bold transition-all shadow-sm"
              >
                {copied ? '✓ Copied!' : 'Copy Code'}
              </button>
            </div>

            <p className="text-[11px] text-slate-500 mt-3 leading-tight">
              *Cannot be combined with other offers. Mention this code when calling{' '}
              <strong className="text-navy">(516) 717-7515</strong> or present to technician on arrival.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <button
              onClick={() => {
                onClose();
                onBookWithCoupon();
              }}
              className="flex-1 py-3 rounded-lg bg-hvacGreen hover:bg-hvacGreen-hover text-white font-bold text-sm shadow-md"
            >
              Book Service & Apply Coupon
            </button>
            <a
              href="tel:5167177515"
              className="py-3 px-4 rounded-lg bg-navy text-white font-bold text-sm hover:bg-navy-light text-center"
            >
              Call to Redeem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
