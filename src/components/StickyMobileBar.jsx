import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export const StickyMobileBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* Call Now Button */}
        <a
          href={businessInfo.telUrl}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-gradient-to-r from-brand-600 to-brand-700 active:scale-95 font-bold text-sm shadow-lg shadow-brand-600/30 transition-transform"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Now Button */}
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-700 active:scale-95 font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>

      </div>
    </div>
  );
};
