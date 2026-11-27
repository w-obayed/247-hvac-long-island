'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  Search,
  ExternalLink,
  Globe,
  Building2,
  ChevronLeft,
  ChevronRight,
  Layers,
  X,
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import FinalCtaBanner from '@/components/FinalCtaBanner';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';

import QuoteModal from '@/components/Modals/QuoteModal';
import BookingModal from '@/components/Modals/BookingModal';
import CouponModal from '@/components/Modals/CouponModal';
import FinancingModal from '@/components/Modals/FinancingModal';
import MaintenanceModal from '@/components/Modals/MaintenanceModal';
import ServiceDetailModal from '@/components/Modals/ServiceDetailModal';
import ServiceAreaModal from '@/components/Modals/ServiceAreaModal';

import { HVAC_SERVICES, ServiceItem } from '@/components/ServicesSection';
import { SERVICE_AREAS, ServiceAreaItem } from '@/components/ServiceAreasSection';
import {
  PUBLIC_BUSINESS_LISTINGS,
  LISTING_CATEGORIES,
  ListingCategory,
} from '@/data/business-listings';

const ITEMS_PER_PAGE = 24;

export default function BusinessListingsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | ListingCategory>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectServiceByName = (name: string) => {
    const found = HVAC_SERVICES.find(
      (s) => s.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(s.id)
    );
    setSelectedService(found || HVAC_SERVICES[0]);
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    setSelectedArea(found || SERVICE_AREAS[0]);
  };

  const filteredListings = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PUBLIC_BUSINESS_LISTINGS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        !q ||
        item.platformName.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedListings = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredListings.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredListings, safePage]);

  const handleCategoryChange = (cat: 'All' | ListingCategory) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const el = document.getElementById('directory-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <ManufacturerStrip />

      <MainHeader
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <Navbar
        onSelectService={handleSelectServiceByName}
        onOpenCoupon={() => setIsCouponOpen(true)}
        onOpenFinancing={() => setIsFinancingOpen(true)}
        onOpenMaintenance={() => setIsMaintenanceOpen(true)}
        onOpenArea={handleSelectAreaByName}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotos={() => setIsQuoteOpen(true)}
      />

      <PageBanner
        id="business-listings-banner"
        badgeText="Online Business Directory Profiles"
        title="Find 24/7 HVAC Local of Long Island Online"
        description="Find 24/7 HVAC Local of Long Island across business directories and online platforms. Explore our business profiles and connect with us through these platforms."
        showCallButton
        callButtonLabel="Call Us Now"
        onOpenQuote={() => setIsQuoteOpen(true)}
        quoteButtonLabel="Get A Free Quote"
        onOpenBooking={() => setIsBookingOpen(true)}
        bookButtonLabel="Request Service"
      />

      {/* Directory Summary, Search, Filters & Paginated Grid */}
      <section
        id="directory-grid"
        className="py-12 sm:py-16 md:py-20 bg-[#EAF4FF]/45 text-slate-800 border-b border-slate-200"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Summary & Search Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FF] text-[#003399] text-xs font-black uppercase tracking-wider mb-2 font-heading">
                  <Building2 className="w-3.5 h-3.5 text-[#006BFF]" />
                  <span>{PUBLIC_BUSINESS_LISTINGS.length} Published Business Listings</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight font-heading">
                  Verified Directory &amp; Platform Profiles
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-body">
                  Showing {filteredListings.length} of {PUBLIC_BUSINESS_LISTINGS.length} active directory profiles
                  {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}.
                </p>
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-96">
                <label htmlFor="directory-search" className="sr-only">
                  Search business directories
                </label>
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="directory-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search directory name (e.g., zipleaf, merchantcircle)..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#006BFF] focus:ring-2 focus:ring-[#006BFF]/20 outline-none text-sm text-slate-800 font-body transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Directory categories">
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'All'}
                onClick={() => handleCategoryChange('All')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading uppercase tracking-wide transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-[#006BFF] text-white shadow-sm'
                    : 'bg-[#EAF4FF] text-[#003399] hover:bg-[#006BFF]/10'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All ({PUBLIC_BUSINESS_LISTINGS.length})</span>
              </button>

              {LISTING_CATEGORIES.map((category) => {
                const count = PUBLIC_BUSINESS_LISTINGS.filter((item) => item.category === category).length;
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(category)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading uppercase tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#006BFF] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-[#EAF4FF] hover:text-[#003399]'
                    }`}
                  >
                    <span>{category}</span>
                    <span className="opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Listing Grid */}
          {paginatedListings.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
              <Globe className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-navy font-heading mb-1">
                No matching directories found
              </h3>
              <p className="text-sm text-slate-600 font-body mb-4">
                Try clearing your search term or selecting All categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setCurrentPage(1);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#006BFF] hover:bg-[#0055E7] text-white font-bold text-xs uppercase tracking-wider font-heading"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {paginatedListings.map((listing) => (
                <article
                  key={listing.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#006BFF]/40 shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#003399] flex items-center justify-center flex-shrink-0 font-heading font-black text-sm">
                        {listing.logo ? (
                          <div className="relative w-7 h-7">
                            <Image
                              src={listing.logo}
                              alt={`${listing.platformName} logo`}
                              fill
                              className="object-contain object-center"
                            />
                          </div>
                        ) : (
                          <Globe className="w-5 h-5 text-[#006BFF]" aria-hidden="true" />
                        )}
                      </div>

                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF4FF] text-[#003399] text-[11px] font-bold uppercase tracking-wider font-heading">
                        {listing.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-navy font-heading break-words leading-snug mb-1">
                      {listing.platformName}
                    </h3>
                    <p className="text-xs text-slate-500 font-body mb-4">
                      {listing.category}
                    </p>
                  </div>

                  <a
                    href={listing.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View Business Profile for 24/7 HVAC Local of Long Island on ${listing.platformName} (opens in a new tab)`}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#006BFF] hover:bg-[#0055E7] text-white font-bold text-xs uppercase tracking-wider font-heading transition-colors"
                  >
                    <span>View Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav
              aria-label="Business listings pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-navy font-bold text-xs uppercase tracking-wider font-heading disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EAF4FF] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  aria-current={page === safePage ? 'page' : undefined}
                  className={`w-9 h-9 rounded-lg font-bold text-xs font-heading transition-colors ${
                    page === safePage
                      ? 'bg-[#006BFF] text-white shadow-sm'
                      : 'bg-white border border-slate-300 text-navy hover:bg-[#EAF4FF]'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-navy font-bold text-xs uppercase tracking-wider font-heading disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EAF4FF] transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          )}
        </div>
      </section>

      <FinalCtaBanner
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />

      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* Modals */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <CouponModal
        isOpen={isCouponOpen}
        onClose={() => setIsCouponOpen(false)}
        onBookWithCoupon={() => setIsBookingOpen(true)}
      />
      <FinancingModal
        isOpen={isFinancingOpen}
        onClose={() => setIsFinancingOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <MaintenanceModal
        isOpen={isMaintenanceOpen}
        onClose={() => setIsMaintenanceOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <ServiceAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </main>
  );
}
