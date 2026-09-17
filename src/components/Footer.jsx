import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Droplets, ArrowRight } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-600 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                V R WATER PURIFIER
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              RO, UV & UF Water Purifier Repair, Service, Installation and Maintenance in Bengaluru. Reliable doorstep care for clean & pure drinking water.
            </p>
            <div className="pt-2">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 hover:text-brand-300"
              >
                <span>View Google Business Location</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-brand-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-brand-400">
              Purifier Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>RO Water Purifier Repair</li>
              <li>RO Water Purifier Servicing</li>
              <li>Filter & Membrane Replacement</li>
              <li>UV & UF Maintenance</li>
              <li>New System Installation</li>
              <li>Annual Maintenance (AMC)</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-brand-400">
              Get In Touch
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 leading-snug">
                {businessInfo.address.full}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm pt-1">
              <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <a href={businessInfo.telUrl} className="font-semibold text-white hover:text-brand-300">
                {businessInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:underline">
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} V R Water Purifier Service. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Bengaluru Water Purification Service Provider • Bommanahalli & Nearby Areas
          </p>
        </div>
      </div>
    </footer>
  );
};
