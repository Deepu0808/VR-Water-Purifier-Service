import React from 'react';
import { MessageSquare } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export const FloatingWhatsApp = () => {
  return (
    <a
      href={businessInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
      </div>
      <span className="text-sm tracking-wide">Need RO Help? Chat on WhatsApp</span>
    </a>
  );
};
