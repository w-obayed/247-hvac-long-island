'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Phone,
  ShieldCheck,
  Flame,
  Clock,
  Wrench,
  HelpCircle,
} from 'lucide-react';

import {
  quoteFormSchema,
  QuoteFormData,
  QUOTE_SERVICES,
  INSTALLATION_TYPE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  SYSTEM_AGE_OPTIONS,
  WORKING_STATUS_OPTIONS,
  URGENCY_OPTIONS,
  BRAND_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  PREFERRED_TIME_OPTIONS,
  isInstallationService,
} from '@/lib/validations/quote';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    mode: 'onTouched',
    defaultValues: {
      formType: 'quote',
      fullName: '',
      phone: '',
      email: '',
      zipCode: '',
      service: '' as any,
      propertyType: '' as any,
      installationType: undefined,
      systemAge: undefined,
      workingStatus: undefined,
      urgency: 'Standard – Next 1–2 Days',
      brand: '',
      description: '',
      preferredContactMethod: undefined,
      preferredServiceTime: undefined,
      honeypot: '',
    },
  });

  const selectedService = watch('service');
  const selectedInstallationType = watch('installationType');
  const selectedSystemAge = watch('systemAge');
  const selectedUrgency = watch('urgency');

  // Conditional flags
  const isInstall = isInstallationService(selectedService);
  const isEmergencyService = selectedService === 'Emergency 24/7 No Heat / No AC Service';
  const isBrandNewInstall =
    selectedInstallationType === 'New Installation' ||
    selectedSystemAge === 'Brand New Installation';

  // Auto-set urgency when Emergency service is selected
  useEffect(() => {
    if (isEmergencyService) {
      setValue('urgency', 'Emergency – Within 2 Hours', { shouldValidate: true });
    }
  }, [isEmergencyService, setValue]);

  // When switching to Brand New Installation, set workingStatus automatically to "Not applicable – New Installation"
  useEffect(() => {
    if (isBrandNewInstall) {
      setValue('workingStatus', 'Not applicable – New Installation', { shouldValidate: true });
      setValue('brand', '');
    }
  }, [isBrandNewInstall, setValue]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleModalClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    setSubmitError(null);
    onClose();
  };

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitError(null);

    // Prepare clean payload: strip stale hidden values
    const payload: QuoteFormData = {
      ...data,
      formType: 'quote',
    };

    if (isBrandNewInstall) {
      payload.brand = undefined;
      payload.workingStatus = 'Not applicable – New Installation';
      if (selectedInstallationType === 'New Installation') {
        payload.systemAge = 'Brand New Installation';
      }
    }

    if (!isInstall) {
      payload.installationType = undefined;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit your quote request.');
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setSubmitError(
        err.message ||
          'Unable to send your quote request right now. Please call us directly at (516) 717-7515.'
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#061A40]/80 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-heading"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl lg:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* MODAL HEADER */}
        {/* ========================================================================= */}
        <div className="bg-[#061A40] text-white p-5 sm:p-6 flex items-start justify-between border-b border-white/10 flex-shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-royal/40 text-electric border border-electric/30 text-xs font-black uppercase tracking-wider mb-2 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast Estimate &bull; 100% Free</span>
            </div>
            {/* Modal Heading & Description (Exact Requirements) */}
            <h2
              id="quote-modal-heading"
              className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight"
            >
              Get A Free Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-body mt-1">
              Tell us about your HVAC needs. Our team will get back to you.
            </p>
          </div>

          <button
            type="button"
            onClick={handleModalClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-electric flex-shrink-0 ml-4"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* MODAL BODY (SCROLLABLE) */}
        {/* ========================================================================= */}
        <div className="p-5 sm:p-7 md:p-8 overflow-y-auto flex-1 font-body text-slate-800 space-y-6">
          {/* SUCCESS STATE */}
          {isSuccess ? (
            <div className="text-center py-6 sm:py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy font-heading">
                  Thank You! Your Free Quote Request Has Been Received.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                  Our Long Island HVAC coordinators are reviewing your project scope. We will contact you
                  promptly with your detailed pricing and options.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                  <Clock className="w-4 h-4 text-royal" />
                  <span>Immediate Assistance Available</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Have an urgent heating or cooling emergency? Call our 24/7 radio dispatch desk directly at:
                </p>
                <a
                  href={PHONE_TEL}
                  className="block text-xl sm:text-2xl font-black text-navy hover:text-royal font-heading mt-1"
                >
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-8 py-3 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-heading"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
              {/* Submission Error Banner */}
              {submitError && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 animate-fadeIn"
                >
                  <AlertCircle className="w-5 h-5 text-brightRed flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-medium">{submitError}</div>
                </div>
              )}

              {/* Hidden Honeypot Field */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="quote-honeypot">Leave blank</label>
                <input
                  type="text"
                  id="quote-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register('honeypot')}
                />
              </div>

              {/* ========================================================================= */}
              {/* SECTION 1: CONTACT INFORMATION */}
              {/* ========================================================================= */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-black text-navy font-heading flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-royal text-white text-xs font-bold inline-flex items-center justify-center">
                      1
                    </span>
                    <span>Contact Information</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="quote-fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Full Name <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-fullName"
                      placeholder="Enter your full name"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      {...register('fullName')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.fullName ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Phone Number <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="tel"
                      id="quote-phone"
                      placeholder="Enter your phone number"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      {...register('phone')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.phone ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Email Address (Optional) */}
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="quote-email"
                      placeholder="Enter your email address"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.email ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* ZIP Code */}
                  <div>
                    <label
                      htmlFor="quote-zipCode"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      ZIP Code <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-zipCode"
                      placeholder="Enter your ZIP code"
                      aria-required="true"
                      aria-invalid={!!errors.zipCode}
                      {...register('zipCode')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.zipCode ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 2: HVAC SERVICE DETAILS */}
              {/* ========================================================================= */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-black text-navy font-heading flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-royal text-white text-xs font-bold inline-flex items-center justify-center">
                      2
                    </span>
                    <span>HVAC Service Details</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 5. What HVAC service do you need? */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quote-service"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      5. What HVAC service do you need? <span className="text-brightRed">*</span>
                    </label>
                    <select
                      id="quote-service"
                      aria-required="true"
                      aria-invalid={!!errors.service}
                      {...register('service')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal font-medium ${
                        errors.service ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select HVAC service</option>
                      {QUOTE_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* CONDITIONAL A: Installation / Replacement Question */}
                  {isInstall && (
                    <div className="sm:col-span-2 p-4 rounded-xl bg-royal/5 border border-royal/20 space-y-2 animate-fadeIn">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        Is this a new installation or a replacement? <span className="text-brightRed">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {INSTALLATION_TYPE_OPTIONS.map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedInstallationType === opt
                                ? 'bg-white border-royal shadow-sm text-royal font-bold'
                                : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              value={opt}
                              {...register('installationType')}
                              className="w-4 h-4 text-royal focus:ring-royal"
                            />
                            <span className="text-sm font-heading">{opt}</span>
                          </label>
                        ))}
                      </div>
                      {errors.installationType && (
                        <p className="text-xs text-brightRed font-medium mt-1">
                          {errors.installationType.message}
                        </p>
                      )}
                    </div>
                  )}

                  {/* 6. What type of property is this? */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quote-propertyType"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      6. What type of property is this? <span className="text-brightRed">*</span>
                    </label>
                    <select
                      id="quote-propertyType"
                      aria-required="true"
                      aria-invalid={!!errors.propertyType}
                      {...register('propertyType')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal font-medium ${
                        errors.propertyType ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select property type</option>
                      {PROPERTY_TYPE_OPTIONS.map((prop) => (
                        <option key={prop} value={prop}>
                          {prop}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>

                  {/* 7. How old is your current HVAC system? (Hidden for Brand New Installation) */}
                  {!isBrandNewInstall && (
                    <div className="sm:col-span-2 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        7. How old is your current HVAC system? <span className="text-brightRed">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                        {SYSTEM_AGE_OPTIONS.map((age) => (
                          <label
                            key={age}
                            className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedSystemAge === age
                                ? 'bg-royal/10 border-royal text-royal font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              value={age}
                              {...register('systemAge')}
                              className="w-3.5 h-3.5 text-royal focus:ring-royal"
                            />
                            <span className="text-xs sm:text-sm font-medium">{age}</span>
                          </label>
                        ))}
                      </div>
                      {errors.systemAge && (
                        <p className="text-xs text-brightRed font-medium mt-1">
                          {errors.systemAge.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 3: SERVICE REQUIREMENTS */}
              {/* ========================================================================= */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-black text-navy font-heading flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-royal text-white text-xs font-bold inline-flex items-center justify-center">
                      3
                    </span>
                    <span>Service Requirements</span>
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* 8. Is your HVAC system currently working? (Hidden for Brand New Installation) */}
                  {!isBrandNewInstall && (
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        8. Is your HVAC system currently working? <span className="text-brightRed">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {WORKING_STATUS_OPTIONS.filter((opt) => opt !== 'Not applicable – New Installation').map(
                          (status) => (
                            <label
                              key={status}
                              className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                                watch('workingStatus') === status
                                  ? 'bg-royal/10 border-royal text-royal font-bold shadow-xs'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <input
                                type="radio"
                                value={status}
                                {...register('workingStatus')}
                                className="w-4 h-4 text-royal focus:ring-royal"
                              />
                              <span className="text-xs sm:text-sm font-medium">{status}</span>
                            </label>
                          )
                        )}
                      </div>
                      {errors.workingStatus && (
                        <p className="text-xs text-brightRed font-medium mt-1">
                          {errors.workingStatus.message}
                        </p>
                      )}
                    </div>
                  )}

                  {/* 9. How soon do you need service? */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        9. How soon do you need service? <span className="text-brightRed">*</span>
                      </label>
                      {isEmergencyService && (
                        <span className="text-xs font-bold text-brightRed flex items-center gap-1 font-heading">
                          <Flame className="w-3.5 h-3.5 animate-pulse" />
                          <span>Emergency Flagged</span>
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {URGENCY_OPTIONS.map((urg) => {
                        const isEmergOption = urg.startsWith('Emergency');
                        return (
                          <label
                            key={urg}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedUrgency === urg
                                ? isEmergOption
                                  ? 'bg-red-50 border-brightRed text-brightRed font-bold shadow-xs'
                                  : 'bg-royal/10 border-royal text-royal font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              value={urg}
                              {...register('urgency')}
                              className={`w-4 h-4 ${
                                isEmergOption ? 'text-brightRed focus:ring-brightRed' : 'text-royal focus:ring-royal'
                              }`}
                            />
                            <span className="text-xs sm:text-sm font-medium">{urg}</span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.urgency && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.urgency.message}
                      </p>
                    )}
                  </div>

                  {/* 10. What is the brand of your current HVAC system? (Optional, hidden for brand new install) */}
                  {!isBrandNewInstall && (
                    <div>
                      <label
                        htmlFor="quote-brand"
                        className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                      >
                        10. What is the brand of your current HVAC system?{' '}
                        <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        id="quote-brand"
                        {...register('brand')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal font-medium"
                      >
                        <option value="">Select brand</option>
                        {BRAND_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* 11. Please describe your HVAC needs (Optional) */}
                  <div>
                    <label
                      htmlFor="quote-description"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      11. Please describe your HVAC needs{' '}
                      <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="quote-description"
                      rows={3}
                      placeholder="Tell us about your HVAC problem or installation requirements..."
                      {...register('description')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal resize-y"
                    />
                    {errors.description && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 4: ADDITIONAL INFORMATION */}
              {/* ========================================================================= */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-black text-navy font-heading flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-royal text-white text-xs font-bold inline-flex items-center justify-center">
                      4
                    </span>
                    <span>Additional Information</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 12. What is your preferred contact method? */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5">
                      12. What is your preferred contact method?{' '}
                      <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {CONTACT_METHOD_OPTIONS.map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                            watch('preferredContactMethod') === method
                              ? 'bg-royal/10 border-royal text-royal font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            value={method}
                            {...register('preferredContactMethod')}
                            className="w-3.5 h-3.5 text-royal focus:ring-royal"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 13. When would you prefer service? */}
                  <div>
                    <label
                      htmlFor="quote-preferredTime"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      13. When would you prefer service?{' '}
                      <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="quote-preferredTime"
                      {...register('preferredServiceTime')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal font-medium"
                    >
                      <option value="">Select preferred time</option>
                      {PREFERRED_TIME_OPTIONS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SUBMIT BUTTON & FOOTER NOTE (EXACT USER REQUIREMENTS) */}
              {/* ========================================================================= */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-center sm:text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-heading min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Get My Free Quote</span>
                  )}
                </button>

                <p className="text-xs text-slate-500 font-body">
                  No obligation. Our team will contact you about your request.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
