'use client';

import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('Air Conditioners – Installation & Replacement');
  const [propertyType, setPropertyType] = useState('Single Family Home');
  const [systemAge, setSystemAge] = useState('10+ Years');
  const [urgency, setUrgency] = useState('Standard (Next 1-2 Days)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    town: 'Garden City',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#10243E] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B82C3] text-white flex items-center justify-center font-black">
              24/7
            </div>
            <div>
              <h3 className="text-[24px] font-black tracking-tight">Instant HVAC Quote Calculator</h3>
              <p className="text-xs text-[#0B82C3]">Fast, honest pricing for Long Island properties</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0B82C3]/10 text-[#0B82C3] flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-black text-[#10243E]">Quote Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-[#10243E]">{formData.name || 'Valued Customer'}</strong>.
                Our Long Island technician is reviewing your {service} request and will call you at{' '}
                <strong className="text-[#0B82C3]">{formData.phone || '(516) 717-7515'}</strong> shortly with your accurate estimate.
              </p>
              <div className="p-4 rounded-xl bg-[#FFF1EB] border border-[#F44816]/30 text-left text-xs text-slate-800">
                <span className="font-bold">Need emergency service right away?</span> Call our 24/7 dispatch desk directly at{' '}
                <a href="tel:5167177515" className="font-black text-[#F44816] underline">
                  (516) 717-7515
                </a>.
              </div>
              <button
                onClick={resetAndClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#10243E] text-white font-bold text-sm hover:bg-[#0B82C3] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B82C3]">
                  Step {step} of 2: {step === 1 ? 'Project Scope' : 'Your Contact Details'}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {step === 1 ? 'Next: Contact info' : 'Final Step'}
                </span>
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      What HVAC service do you need?
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#0B82C3]"
                    >
                      <option>Air Conditioners – Installation & Replacement</option>
                      <option>AC Repair – Repair & Maintenance</option>
                      <option>Furnace – Installation, Repair & Replacement</option>
                      <option>Boiler – Installation, Repair & Replacement</option>
                      <option>Water Heater – Installation, Repair & Replacement</option>
                      <option>Mini Splits – Installation, Repair & Replacement</option>
                      <option>Emergency 24/7 No Heat / No AC Service</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0B82C3]"
                      >
                        <option>Single Family Home</option>
                        <option>Multi-Family / Duplex</option>
                        <option>Condo / Co-Op</option>
                        <option>Commercial Property</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Current System Age
                      </label>
                      <select
                        value={systemAge}
                        onChange={(e) => setSystemAge(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0B82C3]"
                      >
                        <option>Under 5 Years</option>
                        <option>5 - 10 Years</option>
                        <option>10+ Years</option>
                        <option>Brand New Installation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Service Urgency
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Emergency (Within 2 Hours)', 'Standard (Next 1-2 Days)'].map((u) => (
                        <button
                          key={u}
                          type="button"
                          onClick={() => setUrgency(u)}
                          className={`p-2.5 rounded-lg text-xs font-bold text-center border transition-all ${
                            urgency === u
                              ? 'bg-[#0B82C3]/10 border-[#0B82C3] text-[#0B82C3] shadow-sm'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-4 py-3 rounded-lg bg-[#0B82C3] hover:bg-[#086396] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Continue to Contact Info</span>
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0B82C3]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(516) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0B82C3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Town / Long Island Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Garden City, Huntington"
                        value={formData.town}
                        onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0B82C3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0B82C3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Brief Problem Description (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe symptoms: strange noise, no cold air, leaking water, quote for new system..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0B82C3] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-lg bg-[#F44816] hover:bg-[#d93d10] text-white font-black text-sm shadow-md transition-all"
                    >
                      Calculate & Request Free Estimate
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
