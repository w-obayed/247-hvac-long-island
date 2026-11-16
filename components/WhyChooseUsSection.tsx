'use client';

import React from 'react';
import { UserCheck, Shield, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      title: 'Professional Service',
      description: 'Polite, uniformed, background-checked technicians who arrive promptly and treat your home with total respect.',
      icon: UserCheck,
      color: 'text-royal',
      bg: 'bg-royal/10',
    },
    {
      title: 'Expertise & Reliability',
      description: 'Over 30 years troubleshooting and servicing complex heating, ventilation, and air conditioning systems.',
      icon: Shield,
      color: 'text-hvacGreen',
      bg: 'bg-hvacGreen/10',
    },
    {
      title: '24/7 Emergency Availability',
      description: 'Round-the-clock emergency dispatch across Long Island. No overtime surcharges on critical diagnostic calls.',
      icon: Clock,
      color: 'text-brightRed',
      bg: 'bg-brightRed/10',
    },
    {
      title: 'Quality Workmanship',
      description: 'High-grade OEM replacement parts, factory warranty protection, and precision code-compliant installations.',
      icon: Award,
      color: 'text-brightYellow',
      bg: 'bg-amber-100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-100">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
            The 247 HVAC Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
            Why Homeowners in Long Island Choose Our HVAC Experts
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            Delivering prompt, honest, and high-efficiency climate solutions backed by decades of proven customer satisfaction.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${pillar.color}`} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2.5 font-heading">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-body">{pillar.description}</p>
                <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
