import React from 'react';

export interface BrandItem {
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

export const HVAC_BRANDS: BrandItem[] = [
  {
    name: 'Daikin',
    category: 'VRV & Inverter Ductless Systems',
    renderLogo: () => (
      <div className="flex items-center gap-2 font-black tracking-tighter text-[#0097E6] text-2xl select-none">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transform -rotate-12 flex-shrink-0">
          <polygon points="12,2 22,20 2,20" />
        </svg>
        <span className="italic font-extrabold uppercase tracking-tight text-xl sm:text-2xl">DAIKIN</span>
      </div>
    ),
  },
  {
    name: 'Fujitsu',
    category: 'Halcyon Mini-Split Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#E50012] font-black tracking-tight select-none">
        <span className="font-extrabold tracking-wider text-xl sm:text-2xl">FUJITSU</span>
        <svg viewBox="0 0 24 16" className="w-7 h-5 fill-none stroke-current stroke-2 flex-shrink-0">
          <path d="M4 8c0-3 3-5 5-5s5 5 8 5 5-2 5-5-3-5-5-5-5 5-8 5-5-2-5-5" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Goodman',
    category: 'Residential AC & Gas Furnaces',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center bg-[#D32F2F] text-white px-3.5 py-1.5 rounded-md shadow-sm select-none">
        <span className="font-black tracking-tight text-base sm:text-lg uppercase leading-none">Goodman</span>
        <span className="text-[8.5px] font-bold tracking-widest uppercase opacity-95 leading-tight mt-0.5">Air Conditioning & Heating</span>
      </div>
    ),
  },
  {
    name: 'Heil',
    category: 'High-Efficiency Heating & Cooling',
    renderLogo: () => (
      <div className="flex items-center justify-center bg-gradient-to-r from-[#C62828] to-[#1565C0] text-white px-4 py-1.5 rounded-md font-black italic tracking-widest text-lg sm:text-xl shadow-sm select-none">
        <span>HEIL</span>
      </div>
    ),
  },
  {
    name: 'Lennox',
    category: 'Signature Series AC & Heat Pumps',
    renderLogo: () => (
      <div className="text-[#D32F2F] font-black italic tracking-wider text-2xl sm:text-3xl flex items-center select-none">
        <span className="transform -skew-x-12">LENNOX</span>
      </div>
    ),
  },
  {
    name: 'Maytag',
    category: 'Commercial & Home HVAC',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#003B71] border-2 border-[#003B71] px-3 py-1 rounded-md font-black tracking-tight text-base sm:text-lg uppercase select-none">
        <svg viewBox="0 0 20 20" className="w-5 h-5 fill-[#003B71] flex-shrink-0">
          <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M6 6L10 14L14 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <span>MAYTAG</span>
      </div>
    ),
  },
  {
    name: 'Midea',
    category: 'Smart Inverter Air Conditioners',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#0091DA] font-bold text-2xl sm:text-3xl tracking-tight select-none">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0091DA] flex-shrink-0">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
        <span className="font-sans font-extrabold lowercase tracking-tight">midea</span>
      </div>
    ),
  },
  {
    name: 'Mitsubishi Electric',
    category: 'Diamond Certified Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-slate-900 font-bold select-none">
        <div className="relative w-5 h-5 flex-shrink-0">
          <div className="absolute top-0 left-1.5 w-2.5 h-2.5 bg-[#E60012] rotate-45 transform origin-center" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-[#E60012] rotate-45 transform origin-center" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#E60012] rotate-45 transform origin-center" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-extrabold uppercase text-sm sm:text-base tracking-tight text-[#1A202C]">MITSUBISHI</span>
          <span className="text-[10px] uppercase font-bold text-[#E60012] tracking-wider mt-0.5">ELECTRIC</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Rheem',
    category: 'High-Efficiency Water Heaters & HVAC',
    renderLogo: () => (
      <div className="relative flex items-center justify-center bg-[#D6001C] text-white px-4 py-1.5 rounded-full font-black text-base sm:text-lg italic tracking-widest shadow-sm select-none">
        <span>Rheem</span>
      </div>
    ),
  },
  {
    name: 'Ruud',
    category: 'Commercial & Residential Heating',
    renderLogo: () => (
      <div className="flex items-center justify-center border border-slate-300 bg-black text-white px-4 py-1.5 rounded-md font-black text-base sm:text-lg tracking-wider uppercase select-none">
        <span className="text-[#FF2222]">R</span>UUD
      </div>
    ),
  },
  {
    name: 'Carrier',
    category: 'Turn to the Experts HVAC',
    renderLogo: () => (
      <div className="flex items-center justify-center bg-[#003882] text-white px-4 py-1.5 rounded-full font-black text-base sm:text-lg tracking-tight shadow-sm border border-[#0055c4] select-none">
        <span className="italic font-serif text-lg sm:text-xl tracking-normal">Carrier</span>
      </div>
    ),
  },
  {
    name: 'Coleman',
    category: 'Heating & Air Conditioning Systems',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 bg-[#B71C1C] text-white px-3.5 py-1.5 rounded-md shadow-sm select-none">
        <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white flex-shrink-0">
          <path d="M10 2a3 3 0 00-3 3v2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a3 3 0 00-3-3zm-1 5V5a1 1 0 112 0v2H9z" />
        </svg>
        <span className="font-black text-sm sm:text-base uppercase tracking-wider">Coleman</span>
      </div>
    ),
  },
  {
    name: 'Comfort-Aire',
    category: 'Quality Home Cooling Solutions',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#004B87] font-black text-base sm:text-lg border-b-2 border-[#009CDE] pb-0.5 select-none">
        <span className="italic uppercase">COMFORT</span>
        <span className="text-[#009CDE] italic font-semibold">AIRE</span>
      </div>
    ),
  },
  {
    name: 'Trane',
    category: "It's Hard To Stop A Trane",
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#E65100] font-black text-lg sm:text-xl tracking-wider uppercase select-none">
        <div className="w-6 h-6 rounded-full bg-[#E65100] flex items-center justify-center text-white text-xs font-black flex-shrink-0">
          T
        </div>
        <span className="tracking-tight text-slate-900 font-black">TRANE</span>
      </div>
    ),
  },
  {
    name: 'American Standard',
    category: 'Heating & Air Conditioning',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center border border-[#1A365D] bg-[#F7FAFC] px-3.5 py-1 rounded-md shadow-sm text-center select-none">
        <span className="text-xs sm:text-sm font-black uppercase text-[#1A365D] tracking-tight leading-none">American</span>
        <span className="text-[10px] sm:text-xs font-extrabold uppercase text-[#C53030] tracking-wider leading-none mt-0.5">Standard</span>
      </div>
    ),
  },
  {
    name: 'Bosch',
    category: 'Inverter Ducted Split Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-slate-900 font-black text-lg sm:text-xl tracking-wider select-none">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#E20015] flex-shrink-0">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#E20015" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="#E20015" />
          <line x1="12" y1="2" x2="12" y2="8" stroke="#E20015" strokeWidth="2" />
          <line x1="12" y1="16" x2="12" y2="22" stroke="#E20015" strokeWidth="2" />
        </svg>
        <span className="font-extrabold text-[#111827] uppercase tracking-normal">BOSCH</span>
      </div>
    ),
  },
];
