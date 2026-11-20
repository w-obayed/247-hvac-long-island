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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#252525]/95 backdrop-blur-md border-t border-white/10 px-2 sm:px-3 py-2 sm:py-2.5 shadow-2xl font-heading"
    >
      <div className="flex items-center justify-between gap-1.5 sm:gap-2 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-1.5 xs:px-2.5 sm:px-3 rounded-lg bg-[#F44816] hover:bg-[#d93d10] text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-transform font-heading uppercase tracking-wider min-w-0 truncate"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-current flex-shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-1.5 xs:px-2.5 sm:px-3 rounded-lg bg-[#0B82C3] hover:bg-[#086396] text-white font-extrabold text-xs sm:text-sm shadow-md active:scale-95 transition-transform font-heading uppercase tracking-wider min-w-0 truncate"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="truncate">Book Now</span>
        </button>

        {/* $100 OFF coupon quick trigger */}
        <button
          onClick={onOpenCoupon}
          className="flex items-center justify-center gap-1 py-2 sm:py-2.5 px-2 sm:px-2.5 rounded-lg bg-[#FFF1EB] text-[#F44816] font-bold text-xs sm:text-sm border border-[#F44816]/40 active:scale-95 font-heading uppercase tracking-wider flex-shrink-0 whitespace-nowrap"
          title="Claim $100 Coupon"
        >
          <Tag className="w-3.5 h-3.5 flex-shrink-0" />
          <span>$100 OFF</span>
        </button>
      </div>
    </aside>
  );
}
