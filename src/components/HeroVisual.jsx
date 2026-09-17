import React from 'react';
import { ShieldCheck, CheckCircle2, Wrench, Droplet, Clock, MapPin } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Soft Glow */}
      <div className="absolute -top-6 -left-6 w-60 h-60 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card */}
      <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl overflow-hidden space-y-6">
        
        {/* Card Title Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">V R Water Purifier</h3>
              <p className="text-xs font-medium text-slate-500">Service & Repair • Bengaluru</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">
            Open Today
          </span>
        </div>

        {/* Real Service Features List */}
        <div className="space-y-3">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">RO, UV & UF Purifier Repair</p>
                <p className="text-[11px] text-slate-500">All major brands serviced</p>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Filter & Membrane Replacement</p>
                <p className="text-[11px] text-slate-500">Genuine sediment & carbon filters</p>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Doorstep Technician Visit</p>
                <p className="text-[11px] text-slate-500">Vijaya Bank Layout & nearby areas</p>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Location & Contact Highlight */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 bg-brand-50/60 p-4 rounded-2xl">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
            <span className="font-semibold text-slate-800">Vijaya Bank Layout, Bengaluru</span>
          </div>
          <span className="font-bold text-brand-700">Doorstep Care</span>
        </div>

      </div>
    </div>
  );
};

