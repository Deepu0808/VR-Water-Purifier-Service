import React from 'react';
import { ShieldCheck, Sparkles, Activity, CheckCircle, Zap } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Glow Effects */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Illustration Container */}
      <div className="relative bg-gradient-to-b from-white to-brand-50/60 p-6 sm:p-8 rounded-3xl border border-brand-100 shadow-2xl shadow-brand-600/10 overflow-hidden">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">
              Multi-Stage Water Purification
            </span>
          </div>
          <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-extrabold">
            RO + UV + UF
          </span>
        </div>

        {/* Central Graphic System Diagram */}
        <div className="py-8 relative flex flex-col items-center justify-center gap-6">
          
          {/* Main Purifier Machine Mockup Graphic */}
          <div className="w-64 sm:w-72 bg-slate-900 rounded-2xl p-5 border-4 border-brand-200 shadow-xl relative overflow-hidden">
            {/* LED Status Bar */}
            <div className="flex items-center justify-between mb-4 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                SYS STATUS: OPTIMAL
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
            </div>

            {/* Stages Stack */}
            <div className="space-y-2.5">
              {/* Stage 1: Sediment Filter */}
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Pre-Sediment Filter</p>
                    <p className="text-[10px] text-slate-400">Dust & Sand Removal</p>
                  </div>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Stage 2: Carbon Filter */}
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Activated Carbon</p>
                    <p className="text-[10px] text-slate-400">Odor & Chlorine Removal</p>
                  </div>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Stage 3: RO Membrane */}
              <div className="bg-gradient-to-r from-brand-900 to-slate-800 p-2.5 rounded-xl border border-brand-500/50 flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-xs shadow">
                    03
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">RO Membrane (0.0001 µm)</p>
                    <p className="text-[10px] text-brand-300">Dissolved Salts & TDS Control</p>
                  </div>
                </div>
                <ShieldCheck className="w-4 h-4 text-brand-300" />
              </div>

              {/* Stage 4: UV Disinfection */}
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">UV Disinfection Column</p>
                    <p className="text-[10px] text-slate-400">Germ & Microbe Protection</p>
                  </div>
                </div>
                <Zap className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* Bottom Pure Water Dispenser simulation */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">TDS Level Result</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                Safe & Pure (~45-75 PPM)
              </span>
            </div>
          </div>

        </div>

        {/* Floating Feature Badges around visual */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
          <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="p-2 bg-brand-50 text-brand-600 rounded-xl">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Doorstep Service</p>
              <p className="text-[11px] text-slate-500">Fast Local Tech Visit</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">TDS Level Check</p>
              <p className="text-[11px] text-slate-500">Quality Inspection</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
