'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Sparkles, Printer, Mail } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithCoupon?: () => void;
}

export default function CouponModal({
  isOpen,
  onClose,
  onBookWithCoupon,
}: CouponModalProps) {
  // Close on Escape key press and manage body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Print Coupon: prints ONLY the coupon card via scoped @media print rules
  const handlePrint = () => {
    window.print();
  };

  // Email Coupon: opens default email client with prefilled subject and formatted coupon details
  const handleEmail = () => {
    const subject = encodeURIComponent('$100 Off HVAC Coupon - 24/7 HVAC of Long Island');
    const body = encodeURIComponent(
      `24/7 HVAC OF LONG ISLAND - SPECIAL CUSTOMER OFFER\n\n` +
      `$100 OFF\n` +
      `On all services totaling $1,000 or more.\n\n` +
      `Valid for heating, cooling, air conditioning, furnace, and boiler repairs or installations.\n\n` +
      `To redeem, call our 24/7 Long Island dispatch at ${PHONE_NUMBER} or present this coupon to your technician at the time of service.\n\n` +
      `24/7 HVAC of Long Island\n` +
      `Phone: ${PHONE_NUMBER}\n` +
      `Website: https://247hvaclongisland.com\n`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#003399]/80 backdrop-blur-sm animate-fadeIn overflow-y-auto no-print"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coupon-modal-heading"
    >
      {/* Scoped print override style so only the coupon ticket renders when printing */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body * { visibility: hidden !important; }
            #printable-coupon-card, #printable-coupon-card * { visibility: visible !important; }
            #printable-coupon-card {
              position: fixed !important;
              left: 0 !important;
              top: 0 !important;
              right: 0 !important;
              width: 100% !important;
              max-width: 600px !important;
              margin: 40px auto !important;
              padding: 32px !important;
              border: 2px dashed #006BFF !important;
              border-radius: 16px !important;
              background: #ffffff !important;
              color: #003399 !important;
              box-shadow: none !important;
              page-break-inside: avoid !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .no-print { display: none !important; }
          }
        `
      }} />

      {/* Centered Modal Container */}
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-slate-800 animate-scaleIn transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button in Top-Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy flex items-center justify-center transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal cursor-pointer z-10"
          aria-label="Close coupon modal"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Company Logo at the Top */}
        <div className="flex justify-center mb-3">
          <Image
            src="/images/logo.png"
            alt="247 HVAC of Long Island"
            width={180}
            height={60}
            priority
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>

        {/* 2. Promotional Section Label */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider font-heading border border-royal/15">
            <Sparkles className="w-3.5 h-3.5 text-royal flex-shrink-0" />
            <span>Special Customer Offer</span>
          </div>
        </div>

        {/* 3. Header: $100 OFF (Largest, most prominent element) & Supporting Text */}
        <div className="text-center mb-4">
          <h2
            id="coupon-modal-heading"
            className="text-5xl sm:text-6xl font-black text-navy tracking-tight font-heading leading-none"
          >
            $100 <span className="text-royal">OFF</span>
          </h2>
          <p className="text-base sm:text-lg font-bold text-slate-800 font-heading mt-2">
            On all services totaling $1,000 or more.
          </p>
        </div>

        {/* 4. Separate Printable Coupon Card (Dashed borders, ticket notches, professional typography) */}
        <div
          id="printable-coupon-card"
          className="my-4 rounded-2xl border-2 border-dashed border-royal/40 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 p-5 sm:p-6 relative text-center shadow-xs overflow-hidden"
        >
          {/* Ticket Semicircle Notches */}
          <div className="hidden sm:block absolute -left-3.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-r-2 border-dashed border-royal/40 pointer-events-none" />
          <div className="hidden sm:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-l-2 border-dashed border-royal/40 pointer-events-none" />

          {/* Coupon Card Branding */}
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 font-heading">
            247 HVAC of Long Island • Service Voucher
          </div>

          {/* Prominent Coupon Value */}
          <div className="text-4xl sm:text-5xl font-black text-navy tracking-tight font-heading my-1.5">
            $100 <span className="text-royal">OFF COUPON</span>
          </div>

          {/* Qualification Requirement */}
          <div className="text-sm sm:text-base font-bold text-slate-800 font-heading">
            On all our services for $1,000 or over
          </div>

          {/* Applicable Services */}
          <p className="text-xs text-slate-600 font-body mt-2 max-w-sm mx-auto leading-relaxed">
            Heating • Cooling • AC Installation & Repair • Boilers • Furnaces • Water Heaters
          </p>

          {/* Dashed Separator */}
          <div className="my-3 border-t border-dashed border-slate-300" />

          {/* Redemption Details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-slate-600 font-body">
            <span className="font-semibold text-navy font-heading">
              Direct Dispatch:{' '}
              <a href={PHONE_TEL} className="text-royal font-bold hover:underline">
                {PHONE_NUMBER}
              </a>
            </span>
            <span className="text-slate-500 font-medium">
              Present to technician at time of service
            </span>
          </div>
        </div>

        {/* 5. Two Action Buttons: Print Coupon and Email Coupon */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 font-heading">
          {/* Print Coupon Button */}
          <button
            onClick={handlePrint}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-md shadow-royal/20 active:scale-95 transition-all font-heading uppercase tracking-wider min-h-[46px] cursor-pointer"
            title="Print printable coupon card"
          >
            <Printer className="w-4 h-4 flex-shrink-0" />
            <span>Print Coupon</span>
          </button>

          {/* Email Coupon Button */}
          <button
            onClick={handleEmail}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white border-2 border-slate-200 hover:border-royal text-navy hover:text-royal font-bold text-sm shadow-xs active:scale-95 transition-all font-heading uppercase tracking-wider min-h-[46px] cursor-pointer"
            title="Email this coupon to yourself"
          >
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span>Email Coupon</span>
          </button>
        </div>

        {/* 6. Closing Message Encouraging Customers to Schedule */}
        <p className="text-xs text-slate-500 font-body mt-4 text-center leading-relaxed">
          Ready to save? Call our 24/7 Long Island dispatch at{' '}
          <a href={PHONE_TEL} className="text-royal font-bold hover:underline">
            {PHONE_NUMBER}
          </a>{' '}
          or mention this coupon when scheduling your HVAC service.
        </p>

        {/* Optional Online Booking Link if onBookWithCoupon was provided */}
        {onBookWithCoupon && (
          <div className="mt-2 text-center">
            <button
              onClick={() => {
                onClose();
                onBookWithCoupon();
              }}
              className="text-xs font-bold text-slate-600 hover:text-royal hover:underline font-heading uppercase tracking-wider inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Schedule Service Online & Apply Coupon &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
