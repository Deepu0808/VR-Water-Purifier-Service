import React from 'react';
import { Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';

export const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Water Purifier Repair & Service in Bengaluru | V R Water Purifier Service"
        description="Comprehensive RO, UV and UF water purifier repair, servicing, installation, filter replacement, RO membrane replacement, cleaning and AMC maintenance in Bengaluru."
        path="/services"
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Our Water Purifier Services
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Professional repair, routine servicing, filter replacement, membrane changes, installation, and annual maintenance for RO, UV, and UF water purifiers.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessInfo.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* Service Scope Explanation */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              RO, UV and UF Water Purification Support
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              At <strong>V R Water Purifier Service</strong>, we assist residential households, apartments, and commercial offices with routine purifier maintenance and unexpected system faults. Whether your water purifier has low water flow, unusual taste, leakage issues, or requires fresh pre-filters, our goal is to deliver straightforward, reliable doorstep service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-brand-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">RO Membrane Replacement</h3>
                  <p className="text-xs text-slate-500">When your existing RO membrane accumulates sediment or salt deposits, we replace it to restore optimal TDS levels.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-brand-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Filter Replacement Care</h3>
                  <p className="text-xs text-slate-500">Regular replacement of sediment and activated carbon filters to safeguard internal pump components.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto pt-6">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
};
