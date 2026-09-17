import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Droplets } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          
          {/* Column 1: Business Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                V R WATER PURIFIER
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Doorstep RO, UV & UF water purifier repair, servicing, filter replacement, and installation in Vijaya Bank Layout, Bommanahalli & nearby Bengaluru areas.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-3 text-brand-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-2.5 text-xs">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-3 text-brand-400">
              Contact & Address
            </h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 leading-snug">
                {businessInfo.address.full}
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <a href={businessInfo.telUrl} className="font-semibold text-white hover:text-brand-300">
                {businessInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:underline">
                WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {currentYear} V R Water Purifier Service. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Vijaya Bank Layout, Bommanahalli, Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
};

