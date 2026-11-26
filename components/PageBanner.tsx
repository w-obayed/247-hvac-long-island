'use client';

import React from 'react';
import Image from 'next/image';
import {
  Calendar,
  Phone,
  FileText,
  MessageSquare,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, PHONE_SMS } from '@/lib/utils';

export interface BannerBullet {
  text: string;
  icon?: React.ReactNode;
}

export interface PageBannerProps {
  id?: string;
  badgeText?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  bullets?: BannerBullet[];
  additionalText?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  // CTA controls preserving each page's exact buttons and actions
  onOpenBooking?: () => void;
  bookButtonLabel?: string;
  showCallButton?: boolean;
  callButtonLabel?: string;
  onOpenQuote?: () => void;
  quoteButtonLabel?: string;
  showTextUs?: boolean;
  onOpenTextUs?: () => void;
  extraActions?: React.ReactNode;
  showRatingBar?: boolean;
  showDispatchCard?: boolean;
}

export default function PageBanner({
  id = 'banner',
  badgeText,
  title,
  subtitle,
  description,
  bullets,
  additionalText,
  backgroundImage = '/247 havc/heat-pump-repair/23788f14-5d4f-4c4f-852b-2023d1705c81.jpg',
  backgroundAlt = '247 HVAC of Long Island technicians servicing outdoor equipment',
  onOpenBooking,
  bookButtonLabel = 'Book Now',
  showCallButton = false,
  callButtonLabel = 'Call Us Now',
  onOpenQuote,
  quoteButtonLabel = 'Get A Free Quote',
  showTextUs = false,
  onOpenTextUs,
  extraActions,
  showRatingBar = true,
  showDispatchCard = true,
}: PageBannerProps) {
  const hasButtons = Boolean(onOpenBooking || showCallButton || onOpenQuote || showTextUs || extraActions);

  return (
    <section
      id={id}
      className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Background Hero Image - Exact homepage banner layout */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center lg:object-right"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
        />
        {/* Soft edge blend for smooth transition into brand navy background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
      </div>

      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Badge, Heading, Subtitle, Description, Bullets, Additional Text, CTA Buttons */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-2xl sm:rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="leading-snug">{badgeText}</span>
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-white font-heading">
              {title}
            </h1>

            {/* Optional Subtitle */}
            {subtitle && (
              <p className="text-lg sm:text-xl font-bold text-[#00BFFF] max-w-2xl leading-snug mb-3.5 sm:mb-5 font-heading">
                {subtitle}
              </p>
            )}

            {/* Supporting Description */}
            {description && (
              <div className="text-base text-slate-200 max-w-2xl font-normal leading-relaxed mb-5 sm:mb-6 font-body space-y-3">
                {description}
              </div>
            )}

            {/* Trust Highlights / Bullet Points */}
            {bullets && bullets.length > 0 && (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3.5 w-full max-w-xl mb-6 sm:mb-8">
                {bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10"
                  >
                    {bullet.icon || (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm font-bold text-white font-heading">
                      {bullet.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Additional Supporting Text */}
            {additionalText && (
              <p className="text-sm sm:text-base font-bold text-brightYellow mb-5 sm:mb-6 font-body">
                {additionalText}
              </p>
            )}

            {/* CTA Buttons */}
            {hasButtons && (
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
                {onOpenBooking && (
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>{bookButtonLabel}</span>
                  </button>
                )}

                {showCallButton && (
                  <a
                    href={PHONE_TEL}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                    <span>{callButtonLabel}</span>
                  </a>
                )}

                {onOpenQuote && (
                  <button
                    onClick={onOpenQuote}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                  >
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>{quoteButtonLabel}</span>
                  </button>
                )}

                {showTextUs && (
                  <a
                    href={PHONE_SMS}
                    onClick={(e) => {
                      if (typeof window !== 'undefined' && window.innerWidth >= 768 && onOpenTextUs) {
                        e.preventDefault();
                        onOpenTextUs();
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>Text Us</span>
                  </a>
                )}

                {extraActions}
              </div>
            )}

            {/* Quick trust reassurance footer */}
            {showRatingBar && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated HVAC Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Nassau &amp; Suffolk County 24/7 Coverage</span>
              </div>
            )}
          </div>

          {/* Right Column: High-Impact Visual Card with Dispatch Status */}
          {showDispatchCard && (
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Fast Dispatch
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">Emergency Mobile Units</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Nassau,
                      Queens &amp; Western Suffolk.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Licensed &amp; Certified:</strong> EPA
                      universal, OSHA compliant master technicians.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Stocked Vehicles:</strong> Over 1,000 OEM
                      replacement parts on every service truck.
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">
                      Direct Emergency Line
                    </p>
                    <a
                      href={PHONE_TEL}
                      className="text-xl font-black text-brightYellow hover:underline font-heading"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                  <a
                    href={PHONE_TEL}
                    className="px-3.5 py-2 rounded-lg bg-brightRed text-white font-bold text-xs uppercase tracking-wider hover:bg-brightRed-hover shadow font-heading"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
