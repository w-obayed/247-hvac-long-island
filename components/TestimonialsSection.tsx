'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface Review {
  id: string;
  name: string;
  location?: string;
  date?: string;
  rating?: number;
  service?: string;
  comment: string;
}

export interface TestimonialsSectionProps {
  reviews?: Review[];
  badgeText?: string;
  heading?: string;
  id?: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Josephine Pires',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Furnace Repair & Blower Motor',
    comment:
      "Of course my furnace went kaput on our first day of snow! I called several companies for service but only 247 HVAC OF LONG ISLAND could schedule a visit so timely. Very pleased with the professionalism of David who installed a new blower. The total price was on par with online estimates that I'd researched. Office staff was pleasant and efficient. I was texted confirming my appointment, which was great. I would highly recommend this company for super service and affordability. I'd use them again if I have to. Fingers crossed, though.",
  },
  {
    id: '2',
    name: 'Ronald Joslin',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Central Air Conditioning Installation',
    comment:
      'The new Central Air install went well. Price was competitive. Got 5 estimates. They were right in the middle. David gave the estimate. The office is easy to deal with. The technicians were super nice guys who cleaned everything up and worked hard. Edgar should have a cocktail as he was in the attic for the day. We decided on using Trane Equipment based on their recommendations as well as researching on our own. So far so good.',
  },
  {
    id: '3',
    name: 'Angle Moie',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Emergency Furnace Repair',
    comment:
      "I just want to give a big shout out for the outstanding work that was done by 247 HVAC OF LONG ISLAND. They came within an hour of the initial call, diagnosed the problem quickly, ordered a new motor for our furnace then installed it as soon as it came to their office. They didn't try to upsell us on a new unit like other HVAC companies. They were very professional from David courtesy all the way to our Tech (Edgar). I would highly recommend them and the best part was their prices were extremely fair. Great job!!!",
  },
  {
    id: '4',
    name: 'Terry Nelson',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Emergency Heating Repair',
    comment:
      'I was in need of a heating repair and I called 24/7 HVAC of Long Island when it started to get cold outside. They came out and had the problem fixed in about 30 minutes for me. Great job guys!',
  },
  {
    id: '5',
    name: 'Judson Chambers',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Water Heater & Heater Repair',
    comment:
      'They repaired our heater. All the staff members were excellent. Easy to book an appointment. Matthew arrived on time, diagnosed, and repaired our water heater very quickly. He had parts needed to fix it.',
  },
  {
    id: '6',
    name: 'KokoMaumg ေဂဟာနယ္',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'AC Diagnostics & Efficiency Inspection',
    comment:
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
  },
  {
    id: '7',
    name: 'Vincent Watkins',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Ductless Mini Split Installation',
    comment:
      'Top of the line work! They installed a mini split in my sons room and we are very happy with the work and service provided by this company!',
  },
  {
    id: '8',
    name: 'Upul Mendis',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Heating Inspection & Tune-Up',
    comment:
      "I called 247 HVAC to come check out my heating system. They came and made sure everything was working and recommended I change the seals on my doors because air was coming through the old seals. Let's see if I save on my heat this winter! Great service and very nice people!",
  },
  {
    id: '9',
    name: 'T R',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Central Air Conditioning Installation',
    comment:
      'I called this business on 6/2 to inquire about central air installation and David gave me an appt the very same day. I had it installed today 6/4, and the technicians literally just completed the job, from start to finish it was about 12 hours, which was longer than I anticipated, because my set up was a bit complicated, but they got the job done. The 2 technicians was professional, knowledgeable, and their work was done neatly. Customer Service is really A1 which makes all the difference.',
  },
  {
    id: '10',
    name: 'Thomas Morgan',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Heat Pump Replacement',
    comment:
      'Luis replaced a heat pump. He was very professional, polite, and solved the problem. We would use Luis for other appliance needs..?',
  },
  {
    id: '11',
    name: 'Joesph Johnson',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Air Conditioner Repair',
    comment:
      "I recently had an issue with my AC unit. Glad to say that thanks to 24/7 HVAC of Long Island, problem solved! David was easy to work with, quick to respond, continued to check in to make sure all was good and didn't ask for a penny until I was 100% satisfied with the results. I'd definitely recommend him for anyone looking for an HVAC person.",
  },
  {
    id: '12',
    name: 'Lyric Lamb',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Rapid AC Diagnostics & Repair',
    comment:
      'I called 24/7 HVAC of Long Island in the evening and Matthew came 15-20 mins after. He was able to diagnose the issue within 15 mins and provide a fix for us. Thanks to him for a great service.',
  },
  {
    id: '13',
    name: 'Charlie Taylor',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Boiler & Radiators Maintenance',
    comment:
      'Excellent service today from David and Edgar of 247 HVAC OF LONG ISLAND! They arrived promptly and were friendly/comfortable to have in my home. Took care of maintenance issues with our boiler and radiators. So pleased with their service that we signed up for yearly maintenance plan. I highly recommend this company, and these 2 employees in particular.',
  },
  {
    id: '14',
    name: 'C curts',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Sunday Emergency Heating Service',
    comment:
      "Excellent experience with David and his team! I called them on a Sunday, I got a call from David almost immediately, and they showed up within the hour of my call. They diagnosed the problem, kept me updated and tried their best to get the replacement part the same day, but were only able to get it the following day. David showed up the very next morning and had everything working again, all for a very reasonable price. I can't recommend them enough!",
  },
  {
    id: '15',
    name: 'Connor Chambers',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'New Furnace Removal & Installation',
    comment:
      'The old furnace was removed and new furnace was installed. Well done and the new furnace warms up the home quickly, thank you. I would recommend for any home installation job.',
  },
  {
    id: '16',
    name: 'David McMillan',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Affordable Quality HVAC Service',
    comment:
      '24/7 HVAC is a very professional company. I was extremely happy with the service I received and how quick the service was. I also love that they do great work and are also very affordable. The website is easy to use and the customer service is great. I would recommend this company to anyone looking for an affordable and quality HVAC service.',
  },
  {
    id: '17',
    name: 'Andrew Eaves',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'HVAC System Service',
    comment:
      'We are very pleased with the service of this company!!! Five stars!!!',
  },
  {
    id: '18',
    name: "Anthony P. O'Connor",
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Living Room AC & Humidifier Repair',
    comment:
      'Easy to schedule an appointment, arrive on time, clean, proffessional, friendly. Explained everything and got the humidifier to work again also. Installed AC in my living room. I love having a maintenance plan so I can catch things before the weather hits.',
  },
  {
    id: '19',
    name: 'Willamina Hamnerio',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Emergency Summer AC & Heat Repair',
    comment:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac. My wife was 9 months pregnant at the time and David showed up at 9 at night to make sure she had AC in the middle of the summer! Trustworthy, honest, and a huge help when you need a repair.',
  },
  {
    id: '20',
    name: 'Lee Moreno',
    location: 'Long Island, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Same-Day Evening AC Repair',
    comment:
      'I called them and spoke to David around 630pm as my AC stopped working. He was prompt and arrived at my house within 1 hour. Provided great service. Thanks',
  },
  {
    id: '21',
    name: 'Samuel Whiteside',
    location: 'Garden City, NY (Nassau County)',
    date: 'Verified Review',
    rating: 5,
    service: 'Emergency Heating Repair',
    comment:
      'Great technician arrived on time during a freezing Sunday morning, quickly diagnosed the boiler flame sensor issue, and restored our heat within an hour. Professional, honest pricing, and highly recommended!',
  },
  {
    id: '22',
    name: 'Jason Chambers',
    location: 'Huntington, NY (Suffolk County)',
    date: 'Verified Review',
    rating: 5,
    service: 'Central AC Replacement',
    comment:
      'Very reliable and clean installation crew. They replaced our 18-year-old outdoor condenser and indoor air handler with a high-efficiency system. Pricing was completely upfront with zero hidden charges.',
  },
  {
    id: '23',
    name: 'Luke Fitzgerald',
    location: 'Astoria, Queens, NY',
    date: 'Verified Review',
    rating: 5,
    service: 'Ductless Mini-Split Installation',
    comment:
      'We’ve hired 247 HVAC for both our home and commercial property. Always prompt, polite, and great quality workmanship. The multi-zone mini-split has dramatically reduced our electric bills.',
  },
  {
    id: '24',
    name: 'Elena Rostova',
    location: 'Massapequa, NY (Nassau County)',
    date: 'Verified Review',
    rating: 5,
    service: 'Furnace Maintenance & Tune-Up',
    comment:
      'Scheduled an annual tune-up for our gas furnace. The technician was extremely thorough, inspected the heat exchanger, checked carbon monoxide levels, and answered all our questions. 5-star service!',
  },
];

export default function TestimonialsSection({
  reviews = REVIEWS,
  badgeText = 'Verified Customer Reviews',
  heading = 'What Our Customers Say About Our HVAC Services',
  id,
}: TestimonialsSectionProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeReviews = reviews.length > 0 ? reviews : REVIEWS;

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? activeReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === activeReviews.length - 1 ? 0 : prev + 1));
  };

  // On desktop, display up to 3 reviews in a continuous carousel window without duplicating
  const desktopReviews =
    activeReviews.length >= 3
      ? [
          activeReviews[currentIndex % activeReviews.length],
          activeReviews[(currentIndex + 1) % activeReviews.length],
          activeReviews[(currentIndex + 2) % activeReviews.length],
        ]
      : activeReviews;

  const mobileReview = activeReviews[currentIndex % activeReviews.length];

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-50 text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
            <span>{badgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
            {heading}
          </h2>

          {/* 5.0 Average (Rated 5 out of 5) Rating Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-1 text-brightYellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-brightYellow" />
              ))}
            </div>
            <span className="font-extrabold text-navy text-lg font-heading">5.0 Average</span>
            <span className="text-slate-400 font-bold font-heading">(Rated 5 out of 5)</span>
            <span className="text-slate-400">•</span>
            {/* Google Review Indicator */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs font-heading">
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
              <span>Verified Customer Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Carousel / Grid */}
        <div className="relative">
          {/* Desktop 3-Card Carousel View */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {desktopReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brightYellow">
                      {[...Array(review.rating ?? 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-brightYellow" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>

                  {/* Customer Review Description */}
                  <p className="text-base text-slate-700 leading-relaxed italic mb-6 font-body">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Customer Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy text-sm font-heading">{review.name}</h4>
                    {review.location && (
                      <p className="text-xs text-slate-500 font-body">{review.location}</p>
                    )}
                    {review.service && (
                      <span className="text-[11px] font-semibold text-royal block mt-0.5 font-heading uppercase tracking-wider">
                        {review.service}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-royal font-heading">
                    ★
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
                  {[...Array(mobileReview.rating ?? 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium font-body">
                  {mobileReview.date ?? 'Verified Review'}
                </span>
              </div>

              <p className="text-base text-slate-700 leading-relaxed italic mb-6 font-body">
                &ldquo;{mobileReview.comment}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-navy text-base sm:text-base font-heading">{mobileReview.name}</h4>
                  {mobileReview.location && (
                    <p className="text-xs sm:text-sm text-slate-500 font-body">{mobileReview.location}</p>
                  )}
                  {mobileReview.service && (
                    <span className="text-xs font-semibold text-royal mt-0.5 block font-heading uppercase tracking-wider">
                      {mobileReview.service}
                    </span>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-royal font-heading">
                  ★
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls (Desktop & Mobile) */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 text-navy flex items-center justify-center hover:bg-slate-100 active:scale-95 shadow-xs transition-colors"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 max-w-xs overflow-hidden">
              <span className="text-xs font-bold text-slate-500 font-heading">
                Showing {currentIndex + 1} of {activeReviews.length} Reviews
              </span>
            </div>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 text-navy flex items-center justify-center hover:bg-slate-100 active:scale-95 shadow-xs transition-colors"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
