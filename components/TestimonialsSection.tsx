'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface CustomerReview {
  id: string;
  name: string;
  comment: string;
}

export const REVIEWS: CustomerReview[] = [
  {
    id: '1',
    name: 'Josephine Pires',
    comment:
      "Of course my furnace went kaput on our first day of snow! I called several companies for service but only 247 HVAC OF LONG ISLAND could schedule a visit so timely. Very pleased with the professionalism of David who installed a new blower. The total price was on par with online estimates that I'd researched. Office staff was pleasant and efficient. I was texted confirming my appointment, which was great. I would highly recommend this company for super service and affordability. I'd use them again if I have to. Fingers crossed, though.",
  },
  {
    id: '2',
    name: 'Ronald Joslin',
    comment:
      'The new Central Air install went well. Price was competitive. Got 5 estimates. They were right in the middle. David gave the estimate. The office is easy to deal with. The technicians were super nice guys who cleaned everything up and worked hard. Edgar should have a cocktail as he was in the attic for the day. We decided on using Trane Equipment based on their recommendations as well as researching on our own. So far so good.',
  },
  {
    id: '3',
    name: 'Angle Moie',
    comment:
      "I just want to give a big shout out for the outstanding work that was done by 247 HVAC OF LONG ISLAND. They came within an hour of the initial call, diagnosed the problem quickly, ordered a new motor for our furnace then installed it as soon as it came to their office. They didn't try to upsell us on a new unit like other HVAC companies. They were very professional from David courtesy all the way to our Tech (Edgar). I would highly recommend them and the best part was their prices were extremely fair. Great job!!!",
  },
  {
    id: '4',
    name: 'Terry Nelson',
    comment:
      'I was in need of a heating repair and I called 24/7 HVAC of Long Island when it started to get cold outside. They came out and had the problem fixed in about 30 minutes for me. Great job guys!',
  },
  {
    id: '5',
    name: 'Judson Chambers',
    comment:
      'They repaired our heater. All the staff members were excellent. Easy to book an appointment. Matthew arrived on time, diagnosed, and repaired our water heater very quickly. He had parts needed to fix it.',
  },
  {
    id: '6',
    name: 'KokoMaumg ေဂဟာနယ္',
    comment:
      'Our ac takes a long time to heat or cool our home. We called 247 HVAC and they ran a full diagnostic on our house including the seal on the doors and windows. They recommended we fox the seals in the doors and it has been running much better ever since.',
  },
  {
    id: '7',
    name: 'Vincent Watkins',
    comment:
      'Top of the line work! They installed a mini split in my sons room and we are very happy with the work and service provided by this company!',
  },
  {
    id: '8',
    name: 'Upul Mendis',
    comment:
      "I called 247 HVAC to come check out my heating system. They came and made sure everything was working and recommended I change the seals on my doors because air was coming through the old seals. Let's see if I save on my heat this winter! Great service and very nice people!",
  },
  {
    id: '9',
    name: 'T R',
    comment:
      'I called this business on 6/2 to inquire about central air installation and David gave me an appt the very same day. I had it installed today 6/4, and the technicians literally just completed the job, from start to finish it was about 12 hours, which was longer than I anticipated, because my set up was a bit complicated, but they got the job done. The 2 technicians was professional, knowledgeable, and their work was done neatly. Customer Service is really A1 which makes all the difference.',
  },
  {
    id: '10',
    name: 'Thomas Morgan',
    comment:
      'Luis replaced a heat pump. He was very professional, polite, and solved the problem. We would use Luis for other appliance needs..?',
  },
  {
    id: '11',
    name: 'Joesph Johnson',
    comment:
      "I recently had an issue with my AC unit. Glad to say that thanks to 24/7 HVAC of Long Island, problem solved! David was easy to work with, quick to respond, continued to check in to make sure all was good and didn't ask for a penny until I was 100% satisfied with the results. I'd definitely recommend him for anyone looking for an HVAC person.",
  },
  {
    id: '12',
    name: 'Lyric Lamb',
    comment:
      'I called 24/7 HVAC of Long Island in the evening and Matthew came 15-20 mins after. He was able to diagnose the issue within 15 mins and provide a fix for us. Thanks to him for a great service.',
  },
  {
    id: '13',
    name: 'Charlie Taylor',
    comment:
      'Excellent service today from David and Edgar of 247 HVAC OF LONG ISLAND! They arrived promptly and were friendly/comfortable to have in my home. Took care of maintenance issues with our boiler and radiators. So pleased with their service that we signed up for yearly maintenance plan. I highly recommend this company, and these 2 employees in particular.',
  },
  {
    id: '14',
    name: 'C curts',
    comment:
      "Excellent experience with David and his team! I called them on a Sunday, I got a call from David almost immediately, and they showed up within the hour of my call. They diagnosed the problem, kept me updated and tried their best to get the replacement part the same day, but were only able to get it the following day. David showed up the very next morning and had everything working again, all for a very reasonable price. I can't recommend them enough!",
  },
  {
    id: '15',
    name: 'Connor Chambers',
    comment:
      'The old furnace was removed and new furnace was installed. Well done and the new furnace warms up the home quickly, thank you. I would recommend for any home installation job.',
  },
  {
    id: '16',
    name: 'David McMillan',
    comment:
      '24/7 HVAC is a very professional company. I was extremely happy with the service I received and how quick the service was. I also love that they do great work and are also very affordable. The website is easy to use and the customer service is great. I would recommend this company to anyone looking for an affordable and quality HVAC service.',
  },
  {
    id: '17',
    name: 'Andrew Eaves',
    comment:
      'We are very pleased with the service of this company!!! Five stars!!!',
  },
  {
    id: '18',
    name: "Anthony P. O'Connor",
    comment:
      'Easy to schedule an appointment, arrive on time, clean, proffessional, friendly. Explained everything and got the humidifier to work again also. Installed AC in my living room. I love having a maintenance plan so I can catch things before the weather hits.',
  },
  {
    id: '19',
    name: 'Willamina Hamnerio',
    comment:
      'I can not recommend them enough. I’ve had two emergencies and both times David showed up quickly and was able to fix my problems on both my heat and ac. My wife was 9 months pregnant at the time and David showed up at 9 at night to make sure she had AC in the middle of the summer! Trustworthy, honest, and a huge help when you need a repair.',
  },
  {
    id: '20',
    name: 'Lee Moreno',
    comment:
      'I called them and spoke to David around 630pm as my AC stopped working. He was prompt and arrived at my house within 1 hour. Provided great service. Thanks',
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(REVIEWS.length / reviewsPerPage);

  const displayedReviews = showAll
    ? REVIEWS
    : REVIEWS.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F5F7FA] text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#F44816] text-xs font-black uppercase tracking-wider mb-3 font-heading">
            <span>Customer reviews:</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10243E] tracking-tight mb-4 font-heading">
            What Our Customers Say About Our HVAC Services
          </h2>

          {/* 5.0 Average & Rated 5 out of 5 */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-amber-500" />
              ))}
            </div>
            <span className="font-extrabold text-[#10243E] text-lg font-heading">5.0 Average</span>
            <span className="text-slate-400">•</span>
            <span className="font-bold text-slate-600 text-sm sm:text-base font-heading">Rated 5 out of 5</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Customer Review Description */}
                <p className="text-base text-slate-700 leading-relaxed italic mb-6 font-body">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Customer Name */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#10243E] text-base font-heading">— {review.name}</h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FFF1EB] flex items-center justify-center text-xs font-bold text-[#F44816] font-heading">
                  5★
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Show All Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-slate-200">
          <div className="text-xs sm:text-sm text-slate-500 font-heading">
            Showing {displayedReviews.length} of {REVIEWS.length} Customer Reviews
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-[#10243E] font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-[#0B82C3] transition-colors font-heading"
            >
              {showAll ? 'Show Paginated View' : 'View All 20 Reviews'}
            </button>

            {!showAll && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-300 text-[#10243E] flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs sm:text-sm font-bold text-slate-700 font-heading px-2">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-300 text-[#10243E] flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
