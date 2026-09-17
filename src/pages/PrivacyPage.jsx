import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import { SEO } from '../components/SEO';

export const PrivacyPage = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | V R Water Purifier Service Bengaluru"
        description="Privacy policy for V R Water Purifier Service in Bengaluru. How customer contact details and service inquiries are safely handled."
        path="/privacy"
      />

      <section className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-900/60 rounded-full border border-brand-800">
            Legal Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            V R Water Purifier Service • Bommanahalli, Bengaluru
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Commitment to Your Privacy</h2>
              <p className="text-xs text-slate-600">
                At <strong>{businessInfo.name}</strong>, we respect your privacy and handle customer contact details exclusively for fulfilling doorstep water purifier repair, servicing, filter replacement, and maintenance bookings.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">1. Information We Collect</h3>
            <p>
              When you call, contact us on WhatsApp, or complete an enquiry form on our website, we receive basic personal details you voluntarily provide, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Your Full Name</li>
              <li>Phone / WhatsApp Number</li>
              <li>Service Address / Area in Bengaluru</li>
              <li>Purifier brand or service requirement description</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">2. How Information is Used</h3>
            <p>
              Your contact details are used strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Arranging convenient technician appointments for water purifier servicing</li>
              <li>Communicating status updates or technical advice regarding your purifier</li>
              <li>Providing service quotes and invoice receipts</li>
            </ul>
            <p className="text-xs font-semibold text-slate-900 pt-1">
              We do NOT sell, rent, or share customer contact details with third-party telemarketers or advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">3. Third-Party Links & Messaging</h3>
            <p>
              Our website provides direct links to third-party services such as WhatsApp (`wa.me`) and Google Maps for your convenience. Please note that interactions on WhatsApp or Google Maps are governed by their respective privacy policies.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h3 className="text-base font-bold text-slate-900">4. Contacting Us</h3>
            <p>
              If you have any questions regarding this privacy policy or your service details, please contact:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
              <p className="font-bold text-slate-900">{businessInfo.name}</p>
              <p>{businessInfo.address.full}</p>
              <p>Phone: {businessInfo.phone}</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
