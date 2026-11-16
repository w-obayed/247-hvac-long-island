'use client';

import React, { useState } from 'react';

interface FinancingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function FinancingModal({
  isOpen,
  onClose,
  onOpenBooking,
}: FinancingModalProps) {
  const [amount, setAmount] = useState(6500);

  if (!isOpen) return null;

  // Monthly payment estimates for 60-month low interest and 12-month 0% APR
  const monthly60 = Math.round((amount * 1.15) / 60);
  const monthly12 = Math.round(amount / 12);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#061A40] to-[#0066CC] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-electric">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">HVAC Financing Solutions</h3>
              <p className="text-xs text-electric">0% APR & Low Monthly Payment Plans</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            Don&apos;t let unexpected HVAC breakdowns compromise your comfort. 247 HVAC of Long Island
            partners with top home improvement lenders to provide fast, same-day credit approvals
            with $0 down options.
          </p>

          {/* Interactive Calculator Slider */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">Estimated Project Total</span>
              <span className="text-2xl font-black text-navy">${amount.toLocaleString()}</span>
            </div>

            <input
              type="range"
              min="2000"
              max="16000"
              step="500"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
            />

            <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-200">
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] font-bold text-slate-500 uppercase">60 Months Low APR</span>
                <p className="text-2xl font-black text-royal mt-0.5">${monthly60}<span className="text-xs font-normal text-slate-500">/mo</span></p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] font-bold text-slate-500 uppercase">12 Mo Same As Cash</span>
                <p className="text-2xl font-black text-hvacGreen mt-0.5">${monthly12}<span className="text-xs font-normal text-slate-500">/mo</span></p>
              </div>
            </div>
          </div>

          {/* Perks list */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-1.5 text-hvacGreen">
              <span>✓</span> <span className="text-slate-800">No Prepayment Penalties</span>
            </div>
            <div className="flex items-center gap-1.5 text-hvacGreen">
              <span>✓</span> <span className="text-slate-800">Instant Online Decision</span>
            </div>
            <div className="flex items-center gap-1.5 text-hvacGreen">
              <span>✓</span> <span className="text-slate-800">Does Not Affect Credit Score to Check</span>
            </div>
            <div className="flex items-center gap-1.5 text-hvacGreen">
              <span>✓</span> <span className="text-slate-800">PSEG & NYSERDA Rebate Guidance</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 rounded-lg bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-md"
            >
              Apply With Next Service
            </button>
            <a
              href="tel:5167177515"
              className="py-3 px-4 rounded-lg bg-navy text-white font-bold text-sm hover:bg-navy-light text-center"
            >
              Speak to Finance Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
