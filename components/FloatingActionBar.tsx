'use client';

import React from 'react';
import { Phone, Calendar, Tag } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
  onOpenCoupon: () => void;
}

export default function FloatingActionBar({
  onOpenBooking,
  onOpenCoupon,
}: FloatingActionBarProps) {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#061A40]/95 backdrop-blur-md border-t border-royal/40 px-3 py-2.5 shadow-2xl font-heading"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-brightYellow text-navy font-black text-xs shadow-md active:scale-95 transition-transform font-heading uppercase tracking-wider"
        >
          <Phone className="w-4 h-4 text-brightRed fill-current" />
          <span>Call Now</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-hvacGreen text-white font-extrabold text-xs shadow-md active:scale-95 transition-transform font-heading uppercase tracking-wider"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>

        {/* $100 OFF coupon quick trigger */}
        <button
          onClick={onOpenCoupon}
          className="flex items-center justify-center gap-1 py-2.5 px-2.5 rounded-lg bg-white/10 text-brightYellow font-bold text-xs border border-brightYellow/40 active:scale-95 font-heading uppercase tracking-wider"
          title="Claim $100 Coupon"
        >
          <Tag className="w-3.5 h-3.5" />
          <span>$100 OFF</span>
        </button>
      </div>
    </aside>
  );
}
