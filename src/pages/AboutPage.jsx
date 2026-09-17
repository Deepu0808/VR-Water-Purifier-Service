import React from 'react';
import { Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import { SEO } from '../components/SEO';

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About V R Water Purifier Service | Bengaluru"
        description="Learn about V R Water Purifier Service in Vijaya Bank Layout, Bommanahalli, Bengaluru. We provide factual, reliable RO, UV and UF water purifier repair and servicing."
        path="/about"
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-900/60 rounded-full border border-brand-800">
            Local Water Service Provider
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-4">
            About V R Water Purifier Service
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Water purifier repair, servicing, installation and maintenance support in Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Factual Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-4">
              V R Water Purifier Service Overview
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              V R Water Purifier Service provides water purifier repair, servicing, installation and maintenance support in Bengaluru. We help customers with RO, UV and UF purifier service requirements, including filter replacement, membrane replacement, cleaning and regular maintenance.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-slate-900">
                Core Services Provided:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {businessInfo.services.map((service) => (
                  <div key={service.id} className="flex items-center gap-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span className="font-semibold">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Contact Focus */}
          <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900">
                Need Water Purifier Service?
              </h3>
              <p className="text-slate-600 text-sm">
                Located at 36, Devarachikkannahalli Road, Vijaya Bank Layout, Bommanahalli, Bengaluru.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={businessInfo.telUrl}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-brand-600 hover:bg-brand-700 font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessInfo.phone}</span>
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
