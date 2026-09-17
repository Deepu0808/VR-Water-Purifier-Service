import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, Droplets } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Business Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 rounded-xl flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Droplets className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-300 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="block font-black text-xl tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                V R WATER PURIFIER
              </span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-brand-600">
                Service • Bengaluru
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isActive(link.path)
                    ? 'bg-brand-50 text-brand-700 font-bold'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={businessInfo.telUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-md shadow-brand-600/25 active:scale-95 transition-all duration-150"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-50 text-brand-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={businessInfo.telUrl}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-brand-600 shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>Call {businessInfo.phone}</span>
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
