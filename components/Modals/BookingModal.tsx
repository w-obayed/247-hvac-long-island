'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
  Phone,
  Flame,
  Wrench,
  Sparkles,
} from 'lucide-react';

import {
  serviceRequestSchema,
  ServiceRequestFormData,
  SERVICE_REQUEST_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  SYSTEM_AGE_OPTIONS,
  WORKING_STATUS_OPTIONS,
  URGENCY_OPTIONS,
  TIME_WINDOW_OPTIONS,
  BRAND_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  INSTALLATION_TYPE_OPTIONS,
  MAINTENANCE_TYPE_OPTIONS,
  isInstallationService,
  isRepairService,
} from '@/lib/validations/service-request';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService,
}: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Today's date string for min date in date picker (YYYY-MM-DD in local time)
  const todayStr = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
    mode: 'onTouched',
    defaultValues: {
      formType: 'service-request',
      fullName: '',
      phone: '',
      email: '',
      zipCode: '',
      serviceAddress: '',
      service: (defaultService as any) || ('' as any),
      installationType: undefined,
      propertyType: '' as any,
      systemAge: undefined,
      workingStatus: undefined,
      urgency: 'Standard – Next 1–2 Days',
      preferredDate: '',
      preferredTime: '' as any,
      brand: '',
      description: '',
      preferredContactMethod: undefined,
      maintenanceType: '',
      otherServiceDescription: '',
      honeypot: '',
    },
  });

  const selectedService = watch('service');
  const selectedInstallationType = watch('installationType');
  const selectedSystemAge = watch('systemAge');
  const selectedUrgency = watch('urgency');

  // Conditional flags
  const isInstall = isInstallationService(selectedService);
  const isMaintenance = selectedService === 'HVAC Maintenance / Tune-Up';
  const isOther = selectedService === 'Other';
  const isEmergency = selectedService === 'Emergency 24/7 No Heat / No AC Service';
  const isBrandNewInstall =
    selectedInstallationType === 'New Installation' ||
    selectedSystemAge === 'Brand New Installation';

  // Synchronize default service if passed
  useEffect(() => {
    if (defaultService && !selectedService) {
      setValue('service', defaultService as any);
    }
  }, [defaultService, selectedService, setValue]);

  // Auto-urgency when Emergency service is selected
  useEffect(() => {
    if (isEmergency) {
      setValue('urgency', 'Emergency – Within 2 Hours', { shouldValidate: true });
    }
  }, [isEmergency, setValue]);

  // When Brand New Installation is chosen, set workingStatus automatically to "Not applicable – New Installation"
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
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on outside backdrop click
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

  const onSubmit = async (data: ServiceRequestFormData) => {
    setSubmitError(null);

    // Prepare clean payload: strip stale hidden values
    const payload: ServiceRequestFormData = {
      ...data,
      formType: 'service-request',
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

    if (!isMaintenance) {
      payload.maintenanceType = undefined;
    }

    if (!isOther) {
      payload.otherServiceDescription = undefined;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit your service request.');
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setSubmitError(
        err.message ||
          'Unable to submit your service request right now. Please call us directly at (516) 717-7515.'
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
      aria-labelledby="service-modal-heading"
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
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-black uppercase tracking-wider mb-2 font-heading">
              <Wrench className="w-3.5 h-3.5" />
              <span>Certified HVAC Master Technicians</span>
            </div>
            {/* Modal Heading & Description (Exact Requirements) */}
            <h2
              id="service-modal-heading"
              className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight"
            >
              Request Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-body mt-1">
              Schedule HVAC service with our professional team. Tell us what you need and when you'd prefer service.
            </p>
          </div>

          <button
            type="button"
            onClick={handleModalClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-electric flex-shrink-0 ml-4"
            aria-label="Close service request modal"
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
                  Thank You! Your Service Request Has Been Received.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                  Our dispatch coordinator will contact you shortly to review your service details and confirm technician arrival window and availability.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                  <Clock className="w-4 h-4 text-hvacGreen" />
                  <span>24/7 Immediate Emergency Dispatch</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  If this is a heating or air conditioning emergency requiring immediate dispatch, call our dispatch office directly at:
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
                  className="px-8 py-3 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-heading"
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
                <label htmlFor="service-honeypot">Leave blank</label>
                <input
                  type="text"
                  id="service-honeypot"
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
                    <span className="w-6 h-6 rounded-full bg-hvacGreen text-white text-xs font-bold inline-flex items-center justify-center">
                      1
                    </span>
                    <span>Contact Information</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Full Name */}
                  <div>
                    <label
                      htmlFor="service-fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Full Name <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="service-fullName"
                      placeholder="Enter your full name"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      {...register('fullName')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen ${
                        errors.fullName ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* 2. Phone Number */}
                  <div>
                    <label
                      htmlFor="service-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Phone Number <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="tel"
                      id="service-phone"
                      placeholder="Enter your phone number"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      {...register('phone')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen ${
                        errors.phone ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* 3. Email Address (Optional) */}
                  <div>
                    <label
                      htmlFor="service-email"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="service-email"
                      placeholder="Enter your email address"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen ${
                        errors.email ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* 4. ZIP Code */}
                  <div>
                    <label
                      htmlFor="service-zipCode"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      ZIP Code <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="service-zipCode"
                      placeholder="Enter your ZIP code"
                      aria-required="true"
                      aria-invalid={!!errors.zipCode}
                      {...register('zipCode')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen ${
                        errors.zipCode ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>

                  {/* 5. Full Service Address */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service-address"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Full Service Address <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="service-address"
                      placeholder="Enter your street address, city, and state"
                      aria-required="true"
                      aria-invalid={!!errors.serviceAddress}
                      {...register('serviceAddress')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen ${
                        errors.serviceAddress ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.serviceAddress && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.serviceAddress.message}
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
                    <span className="w-6 h-6 rounded-full bg-hvacGreen text-white text-xs font-bold inline-flex items-center justify-center">
                      2
                    </span>
                    <span>HVAC Service Details</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 6. What HVAC service do you need? */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      6. What HVAC service do you need? <span className="text-brightRed">*</span>
                    </label>
                    <select
                      id="service-select"
                      aria-required="true"
                      aria-invalid={!!errors.service}
                      {...register('service')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen font-medium ${
                        errors.service ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select service</option>
                      {SERVICE_REQUEST_OPTIONS.map((srv) => (
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

                  {/* CONDITIONAL B: Installation Services (New Installation vs Replacement) */}
                  {isInstall && (
                    <div className="sm:col-span-2 p-4 rounded-xl bg-hvacGreen/5 border border-hvacGreen/20 space-y-2 animate-fadeIn">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        Is this a new installation or a replacement? <span className="text-brightRed">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {INSTALLATION_TYPE_OPTIONS.map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedInstallationType === opt
                                ? 'bg-white border-hvacGreen shadow-sm text-hvacGreen font-bold'
                                : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              value={opt}
                              {...register('installationType')}
                              className="w-4 h-4 text-hvacGreen focus:ring-hvacGreen"
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

                  {/* CONDITIONAL E: Maintenance Details */}
                  {isMaintenance && (
                    <div className="sm:col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 animate-fadeIn">
                      <label
                        htmlFor="service-maintenanceType"
                        className="block text-xs font-bold uppercase tracking-wider text-navy font-heading"
                      >
                        What type of maintenance do you need?
                      </label>
                      <select
                        id="service-maintenanceType"
                        {...register('maintenanceType')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen font-medium"
                      >
                        <option value="">Select maintenance type (optional)</option>
                        {MAINTENANCE_TYPE_OPTIONS.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* CONDITIONAL F: Other Service Description */}
                  {isOther && (
                    <div className="sm:col-span-2 p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2 animate-fadeIn">
                      <label
                        htmlFor="service-otherDesc"
                        className="block text-xs font-bold uppercase tracking-wider text-navy font-heading"
                      >
                        Please describe the service you need <span className="text-brightRed">*</span>
                      </label>
                      <textarea
                        id="service-otherDesc"
                        rows={2}
                        placeholder="Explain what HVAC service or assistance you require..."
                        aria-required="true"
                        aria-invalid={!!errors.otherServiceDescription}
                        {...register('otherServiceDescription')}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen resize-y ${
                          errors.otherServiceDescription ? 'border-brightRed' : 'border-slate-300'
                        }`}
                      />
                      {errors.otherServiceDescription && (
                        <p className="text-xs text-brightRed font-medium mt-1">
                          {errors.otherServiceDescription.message}
                        </p>
                      )}
                    </div>
                  )}

                  {/* 7. What type of property is this? (Required radio group) */}
                  <div className="sm:col-span-2 space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                      7. What type of property is this? <span className="text-brightRed">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      {PROPERTY_TYPE_OPTIONS.map((prop) => (
                        <label
                          key={prop}
                          className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all ${
                            watch('propertyType') === prop
                              ? 'bg-hvacGreen/10 border-hvacGreen text-hvacGreen font-bold shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            value={prop}
                            {...register('propertyType')}
                            className="w-3.5 h-3.5 text-hvacGreen focus:ring-hvacGreen"
                          />
                          <span className="text-xs sm:text-sm font-medium">{prop}</span>
                        </label>
                      ))}
                    </div>
                    {errors.propertyType && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>

                  {/* 8. How old is your current HVAC system? (Hidden for Brand New Installation) */}
                  {!isBrandNewInstall && (
                    <div className="sm:col-span-2 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        8. How old is your current HVAC system? <span className="text-brightRed">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                        {SYSTEM_AGE_OPTIONS.map((age) => (
                          <label
                            key={age}
                            className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedSystemAge === age
                                ? 'bg-hvacGreen/10 border-hvacGreen text-hvacGreen font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              value={age}
                              {...register('systemAge')}
                              className="w-3.5 h-3.5 text-hvacGreen focus:ring-hvacGreen"
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

                  {/* 9. Is your HVAC system currently working? (Hidden for Brand New Installation) */}
                  {!isBrandNewInstall && (
                    <div className="sm:col-span-2 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        9. Is your HVAC system currently working? <span className="text-brightRed">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {WORKING_STATUS_OPTIONS.filter((opt) => opt !== 'Not applicable – New Installation').map(
                          (status) => (
                            <label
                              key={status}
                              className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                                watch('workingStatus') === status
                                  ? 'bg-hvacGreen/10 border-hvacGreen text-hvacGreen font-bold shadow-xs'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <input
                                type="radio"
                                value={status}
                                {...register('workingStatus')}
                                className="w-4 h-4 text-hvacGreen focus:ring-hvacGreen"
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
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 3: SERVICE SCHEDULING */}
              {/* ========================================================================= */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-black text-navy font-heading flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-hvacGreen text-white text-xs font-bold inline-flex items-center justify-center">
                      3
                    </span>
                    <span>Service Scheduling</span>
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* 10. How soon do you need service? (Required radio group) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading">
                        10. How soon do you need service? <span className="text-brightRed">*</span>
                      </label>
                      {isEmergency && (
                        <span className="text-xs font-bold text-brightRed flex items-center gap-1 font-heading">
                          <Flame className="w-3.5 h-3.5 animate-pulse" />
                          <span>HIGH PRIORITY EMERGENCY</span>
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
                                  : 'bg-hvacGreen/10 border-hvacGreen text-hvacGreen font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              value={urg}
                              {...register('urgency')}
                              className={`w-4 h-4 ${
                                isEmergOption ? 'text-brightRed focus:ring-brightRed' : 'text-hvacGreen focus:ring-hvacGreen'
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

                  {/* 11 & 12: Preferred Date and Preferred Time Slot Side by Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* 11. What date would you prefer for service? */}
                    <div>
                      <label
                        htmlFor="service-date"
                        className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                      >
                        11. Preferred Service Date <span className="text-brightRed">*</span>
                      </label>
                      <input
                        type="date"
                        id="service-date"
                        min={todayStr}
                        aria-required="true"
                        aria-invalid={!!errors.preferredDate}
                        {...register('preferredDate')}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen ${
                          errors.preferredDate ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs text-brightRed font-medium mt-1">
                          {errors.preferredDate.message}
                        </p>
                      )}
                    </div>

                    {/* 12. What time works best for you? */}
                    <div>
                      <label
                        htmlFor="service-time"
                        className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                      >
                        12. Preferred Time Window <span className="text-brightRed">*</span>
                      </label>
                      <select
                        id="service-time"
                        aria-required="true"
                        aria-invalid={!!errors.preferredTime}
                        {...register('preferredTime')}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen font-medium ${
                          errors.preferredTime ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                        }`}
                      >
                        <option value="">Select preferred time</option>
                        {TIME_WINDOW_OPTIONS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p className="text-xs text-brightRed font-medium mt-1">
                          {errors.preferredTime.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 4: ADDITIONAL INFORMATION */}
              {/* ========================================================================= */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-black text-navy font-heading flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-hvacGreen text-white text-xs font-bold inline-flex items-center justify-center">
                      4
                    </span>
                    <span>Additional Information</span>
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* 13. What is the brand of your current HVAC system? (Hidden for Brand New Installation) */}
                  {!isBrandNewInstall && (
                    <div>
                      <label
                        htmlFor="service-brand"
                        className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                      >
                        13. What is the brand of your current HVAC system?{' '}
                        <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        id="service-brand"
                        {...register('brand')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen font-medium"
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

                  {/* 14. Please describe your HVAC issue or service needs. (Optional) */}
                  <div>
                    <label
                      htmlFor="service-description"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      14. Please describe your HVAC issue or service needs.{' '}
                      <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="service-description"
                      rows={3}
                      placeholder="Describe your HVAC problem or the service you need..."
                      {...register('description')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-hvacGreen resize-y"
                    />
                    {errors.description && (
                      <p className="text-xs text-brightRed font-medium mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* 15. What is your preferred contact method? (Optional radio group) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5">
                      15. What is your preferred contact method?{' '}
                      <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {CONTACT_METHOD_OPTIONS.map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                            watch('preferredContactMethod') === method
                              ? 'bg-hvacGreen/10 border-hvacGreen text-hvacGreen font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            value={method}
                            {...register('preferredContactMethod')}
                            className="w-3.5 h-3.5 text-hvacGreen focus:ring-hvacGreen"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-heading min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Submit Service Request</span>
                  )}
                </button>

                <p className="text-xs text-slate-500 font-body">
                  Submitting a request does not confirm an appointment. Our team will contact you to confirm availability.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
