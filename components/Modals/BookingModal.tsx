'use client';

import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService = 'AC Repair – Repair & Maintenance',
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    service: defaultService,
    isEmergency: false,
    date: '',
    timeSlot: 'Morning (8:00 AM - 12:00 PM)',
    name: '',
    phone: '',
    address: '',
    zip: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#061A40] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-hvacGreen text-white flex items-center justify-center font-bold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">Schedule HVAC Service</h3>
              <p className="text-xs text-electric">Fast Dispatch Across Long Island, NY</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-hvacGreen flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-black text-navy">Service Appointment Booked!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name || 'Valued Customer'}</strong>! We have reserved your service slot for{' '}
                <strong className="text-royal">{formData.service}</strong>. A dispatch coordinator will call{' '}
                <strong className="text-navy">{formData.phone || '(516) 717-7515'}</strong> with technician arrival details.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                <span>Confirmation ID: </span>
                <span className="font-mono font-bold text-navy">#LI-HVAC-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-navy text-white font-bold text-sm hover:bg-navy-light"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Emergency toggle */}
              <div
                onClick={() => setFormData({ ...formData, isEmergency: !formData.isEmergency })}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  formData.isEmergency
                    ? 'bg-red-50 border-brightRed'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-3 h-3 rounded-full ${formData.isEmergency ? 'bg-brightRed animate-ping' : 'bg-slate-400'}`} />
                  <div>
                    <p className="text-xs font-bold text-navy uppercase tracking-wider">
                      Is this an Emergency? (No Heat / Freezing / AC Breakdown)
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Dispatches immediate first available truck in Nassau / Suffolk
                    </p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${formData.isEmergency ? 'bg-brightRed text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {formData.isEmergency ? '✓' : ''}
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Required Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:border-royal"
                >
                  <option>Furnace – Installation, Repair & Replacement</option>
                  <option>Boiler – Installation, Repair & Replacement</option>
                  <option>Water Heater – Installation, Repair & Replacement</option>
                  <option>Air Conditioners – Installation & Replacement</option>
                  <option>AC Repair – Repair & Maintenance</option>
                  <option>Mini Splits – Installation, Repair & Replacement</option>
                  <option>Seasonal HVAC Tune-Up / Inspection</option>
                </select>
              </div>

              {/* Date & Time slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium bg-white focus:outline-none focus:border-royal"
                  >
                    <option>Morning (8:00 AM - 12:00 PM)</option>
                    <option>Afternoon (12:00 PM - 4:00 PM)</option>
                    <option>Evening (4:00 PM - 8:00 PM)</option>
                    <option>First Available (ASAP)</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal"
                  />
                </div>
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
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal"
                  />
                </div>
              </div>

              {/* Address & Zip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street Address & Town"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 11530"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-hvacGreen hover:bg-hvacGreen-hover text-white font-black text-sm shadow-lg transition-all"
              >
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
