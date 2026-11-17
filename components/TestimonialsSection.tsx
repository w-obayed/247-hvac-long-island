'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  service: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Samuel Whiteside',
    location: 'Garden City, NY (Nassau County)',
    date: '2 weeks ago',
    rating: 5,
    service: 'Emergency Heating Repair',
    comment:
      'Great technician arrived on time during a freezing Sunday morning, quickly diagnosed the boiler flame sensor issue, and restored our heat within an hour. Professional, honest pricing, and highly recommended!',
  },
  {
    id: '2',
    name: 'Jason Chambers',
    location: 'Huntington, NY (Suffolk County)',
    date: '1 month ago',
    rating: 5,
    service: 'Central AC Replacement',
    comment:
      'Very reliable and clean installation crew. They replaced our 18-year-old outdoor condenser and indoor air handler with a high-efficiency system. Pricing was completely upfront with zero hidden charges.',
  },
  {
    id: '3',
    name: 'Luke Fitzgerald',
    location: 'Astoria, Queens, NY',
    date: '3 weeks ago',
    rating: 5,
    service: 'Ductless Mini-Split Installation',
    comment:
      'We’ve hired 247 HVAC for both our home and commercial property. Always prompt, polite, and great quality workmanship. The multi-zone mini-split has dramatically reduced our electric bills.',
  },
  {
    id: '4',
    name: 'Elena Rostova',
    location: 'Massapequa, NY (Nassau County)',
    date: '2 months ago',
    rating: 5,
    service: 'Furnace Maintenance & Tune-Up',
    comment:
      'Scheduled an annual tune-up for our gas furnace. The technician was extremely thorough, inspected the heat exchanger, checked carbon monoxide levels, and answered all our questions. 5-star service!',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
            <span>Verified Customer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
            What Our Customers Say About Our HVAC Services
          </h2>

          {/* 5.0 Star Average Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-1 text-brightYellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-brightYellow" />
              ))}
            </div>
            <span className="font-extrabold text-navy text-lg font-heading">5.0 Average Rating</span>
            <span className="text-slate-400">•</span>
            {/* Google Review Indicator */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm font-heading">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Verified Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Carousel / Grid */}
        <div className="relative">
          {/* Desktop 3-Card View */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-brightYellow" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>

                  {/* Customer Review Description - Inter */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-body">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Customer Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy text-sm font-heading">{review.name}</h4>
                    <p className="text-xs text-slate-500 font-body">{review.location}</p>
                    <span className="text-[11px] font-semibold text-royal block mt-0.5 font-heading uppercase tracking-wider">{review.service}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-royal font-heading">
                    G
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Carousel View */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-brightYellow">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium font-body">{REVIEWS[currentIndex].date}</span>
              </div>

              <p className="text-base sm:text-base text-slate-700 leading-relaxed italic mb-6 font-body">
                &ldquo;{REVIEWS[currentIndex].comment}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-navy text-base sm:text-base font-heading">{REVIEWS[currentIndex].name}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-body">{REVIEWS[currentIndex].location}</p>
                  <span className="text-xs font-semibold text-royal mt-0.5 block font-heading uppercase tracking-wider">
                    {REVIEWS[currentIndex].service}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-royal font-heading">
                  G
                </div>
              </div>
            </div>

            {/* Manual Carousel Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-navy flex items-center justify-center hover:bg-slate-100 active:scale-95 shadow-sm"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1.5">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === i ? 'w-6 bg-royal' : 'w-2.5 bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-navy flex items-center justify-center hover:bg-slate-100 active:scale-95 shadow-sm"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
