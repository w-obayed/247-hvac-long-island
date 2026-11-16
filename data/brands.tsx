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
      <div className="flex items-center gap-1.5 font-black tracking-tighter text-[#0097E6] text-xl">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transform -rotate-12">
          <polygon points="12,2 22,20 2,20" />
        </svg>
        <span className="italic font-extrabold uppercase tracking-tight">DAIKIN</span>
      </div>
    ),
  },
  {
    name: 'Fujitsu',
    category: 'Halcyon Mini-Split Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#E50012] font-black tracking-tight text-xl">
        <span className="font-extrabold tracking-wider">FUJITSU</span>
        <svg viewBox="0 0 24 16" className="w-6 h-4 fill-none stroke-current stroke-2">
          <path d="M4 8c0-3 3-5 5-5s5 5 8 5 5-2 5-5-3-5-5-5-5 5-8 5-5-2-5-5" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Goodman',
    category: 'Residential AC & Gas Furnaces',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center bg-[#D32F2F] text-white px-2.5 py-0.5 rounded shadow-sm">
        <span className="font-black tracking-tight text-sm uppercase leading-none">Goodman</span>
        <span className="text-[7.5px] font-bold tracking-widest uppercase opacity-90 leading-tight">Air Conditioning & Heating</span>
      </div>
    ),
  },
  {
    name: 'Heil',
    category: 'High-Efficiency Heating & Cooling',
    renderLogo: () => (
      <div className="flex items-center justify-center bg-gradient-to-r from-[#C62828] to-[#1565C0] text-white px-3 py-1 rounded font-black italic tracking-widest text-base shadow-sm">
        <span>HEIL</span>
      </div>
    ),
  },
  {
    name: 'Lennox',
    category: 'Signature Series AC & Heat Pumps',
    renderLogo: () => (
      <div className="text-[#D32F2F] font-black italic tracking-wider text-xl flex items-center">
        <span className="transform -skew-x-12">LENNOX</span>
      </div>
    ),
  },
  {
    name: 'Maytag',
    category: 'Commercial & Home HVAC',
    renderLogo: () => (
      <div className="flex items-center gap-1 text-[#003B71] border-2 border-[#003B71] px-2 py-0.5 rounded font-black tracking-tighter text-sm uppercase">
        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[#003B71]">
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
      <div className="flex items-center gap-1.5 text-[#0091DA] font-bold text-xl tracking-tight">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0091DA]">
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
      <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
        <div className="relative w-4 h-4 flex-shrink-0">
          <div className="absolute top-0 left-1 w-2 h-2 bg-[#E60012] rotate-45 transform origin-center" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#E60012] rotate-45 transform origin-center" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#E60012] rotate-45 transform origin-center" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-extrabold uppercase text-xs tracking-tight text-[#1A202C]">MITSUBISHI</span>
          <span className="text-[8.5px] uppercase font-semibold text-[#E60012] tracking-wider">ELECTRIC</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Rheem',
    category: 'High-Efficiency Water Heaters & HVAC',
    renderLogo: () => (
      <div className="relative flex items-center justify-center bg-[#D6001C] text-white px-3 py-1 rounded-full font-black text-sm italic tracking-widest shadow-sm">
        <span>Rheem</span>
      </div>
    ),
  },
  {
    name: 'Ruud',
    category: 'Commercial & Residential Heating',
    renderLogo: () => (
      <div className="flex items-center justify-center border border-slate-300 bg-black text-white px-3 py-1 rounded font-black text-sm tracking-wider uppercase">
        <span className="text-[#FF2222]">R</span>UUD
      </div>
    ),
  },
  {
    name: 'Carrier',
    category: 'Turn to the Experts HVAC',
    renderLogo: () => (
      <div className="flex items-center justify-center bg-[#003882] text-white px-3.5 py-1 rounded-full font-black text-sm tracking-tight shadow-sm border border-[#0055c4]">
        <span className="italic font-serif text-base tracking-normal">Carrier</span>
      </div>
    ),
  },
  {
    name: 'Coleman',
    category: 'Heating & Air Conditioning Systems',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 bg-[#B71C1C] text-white px-2.5 py-1 rounded shadow-sm">
        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
          <path d="M10 2a3 3 0 00-3 3v2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a3 3 0 00-3-3zm-1 5V5a1 1 0 112 0v2H9z" />
        </svg>
        <span className="font-black text-xs uppercase tracking-wider">Coleman</span>
      </div>
    ),
  },
  {
    name: 'Comfort-Aire',
    category: 'Quality Home Cooling Solutions',
    renderLogo: () => (
      <div className="flex items-center gap-1 text-[#004B87] font-black text-sm border-b-2 border-[#009CDE] pb-0.5">
        <span className="italic uppercase">COMFORT</span>
        <span className="text-[#009CDE] italic font-semibold">AIRE</span>
      </div>
    ),
  },
  {
    name: 'Trane',
    category: "It's Hard To Stop A Trane",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#E65100] font-black text-base tracking-wider uppercase">
        <div className="w-5 h-5 rounded-full bg-[#E65100] flex items-center justify-center text-white text-[10px] font-black">
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
      <div className="flex flex-col items-center justify-center border border-[#1A365D] bg-[#F7FAFC] px-2.5 py-0.5 rounded shadow-sm text-center">
        <span className="text-[11px] font-black uppercase text-[#1A365D] tracking-tight leading-none">American</span>
        <span className="text-[9px] font-extrabold uppercase text-[#C53030] tracking-wider leading-none">Standard</span>
      </div>
    ),
  },
  {
    name: 'Bosch',
    category: 'Inverter Ducted Split Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-slate-900 font-black text-base tracking-wider">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E20015]">
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
