'use client';

import React from 'react';

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function MaintenanceModal({
  isOpen,
  onClose,
  onOpenBooking,
}: MaintenanceModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Silver Protection',
      price: '$19.99',
      period: 'per month',
      features: [
        '1 Precision Annual HVAC Tune-Up',
        '10% Discount on All Repairs',
        'Priority Service Scheduling',
        'Standard Air Filter Replacements',
        'No Overtime Rates for Evenings',
      ],
      recommended: false,
    },
    {
      name: 'Gold Total Comfort',
      price: '$29.99',
      period: 'per month',
      features: [
        '2 Precision Tune-Ups (Spring AC & Fall Heating)',
        '15% Discount on All Parts & Labor',
        'Guaranteed 24-Hour Emergency Dispatch',
        'Free Refrigerant Top-Off (up to 1 lb)',
        'Carbon Monoxide Safety Inspection',
        'Transferable Agreement',
      ],
      recommended: true,
    },
    {
      name: 'Platinum VIP Commercial/Home',
      price: '$49.99',
      period: 'per month',
      features: [
        'Quarterly 4-Season Precision Checkups',
        '20% Discount on All Repairs & Upgrades',
        'VIP Immediate Same-Day Front-of-Line Dispatch',
        'Zero Diagnostic / Trip Fees Ever',
        'Free Wi-Fi Smart Thermostat Upgrade',
      ],
      recommended: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#10243E] to-[#0B82C3] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[24px] font-black tracking-tight">Air Conditioners Repair & Maintenance</h3>
              <p className="text-xs text-slate-200">Keep Your Home or Business Comfortable Throughout the Year</p>
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
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-sm text-slate-600">
              If your system is showing these signs, you can explore air conditioner repair and maintenance to address potential problems early.
            </p>
          </div>

          {/* 3 Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-xl p-5 flex flex-col justify-between border-2 transition-all ${
                  p.recommended
                    ? 'border-[#0B82C3] bg-[#0B82C3]/5 shadow-md relative'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {p.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F44816] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow">
                    Most Popular
                  </div>
                )}

                <div>
                  <h4 className="font-black text-[#10243E] text-base">{p.name}</h4>
                  <div className="mt-2 mb-4">
                    <span className="text-2xl font-black text-[#10243E]">{p.price}</span>
                    <span className="text-xs text-slate-500 font-medium ml-1">{p.period}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#0B82C3] font-black">✓</span>
                        <span className="leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className={`mt-6 w-full py-2.5 rounded-lg text-xs font-bold transition-all ${
                    p.recommended
                      ? 'bg-[#F44816] hover:bg-[#d93d10] text-white shadow'
                      : 'bg-[#10243E] hover:bg-[#0B82C3] text-white'
                  }`}
                >
                  Enroll in Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
