import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Star, ExternalLink } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';

export const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact V R Water Purifier Service | Bengaluru"
        description="Contact V R Water Purifier Service in Vijaya Bank Layout, Bommanahalli, Bengaluru. Call 78990 37911 or WhatsApp us for RO, UV & UF purifier repair and filter service."
        path="/contact"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-900/60 rounded-full border border-brand-800">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-4">
            Contact V R Water Purifier Service
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Call or WhatsApp us for prompt water purifier repair, servicing, filter change, or installation in Bengaluru.
          </p>
        </div>
      </section>

      {/* Contact Content & Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information Card */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {businessInfo.name}
                  </h2>
                  <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mt-1">
                    {businessInfo.category}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-100">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                      <a href={businessInfo.telUrl} className="text-xl font-extrabold text-slate-900 hover:text-brand-600">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</p>
                      <a
                        href={businessInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-emerald-700 hover:underline"
                      >
                        Chat with us on WhatsApp ({businessInfo.whatsappNumber})
                      </a>
                    </div>
                  </div>

                  {/* Location Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 text-slate-700 rounded-2xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location Address</p>
                      <address className="not-italic text-sm font-semibold text-slate-800 leading-relaxed">
                        {businessInfo.address.street},<br />
                        {businessInfo.address.suburb},<br />
                        {businessInfo.address.locality},<br />
                        {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.postalCode}
                      </address>
                    </div>
                  </div>

                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={businessInfo.telUrl}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL NOW</span>
                  </a>

                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP NOW</span>
                  </a>

                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
                  >
                    <Navigation className="w-4 h-4 text-brand-400" />
                    <span>GET DIRECTIONS</span>
                  </a>
                </div>

              </div>

              {/* Google Business Profile & Review Placeholder Section */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Google Business Profile Review</h3>
                    <p className="text-xs text-slate-500">Official business profile feedback link</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Have you recently used V R Water Purifier Service in Bengaluru? You can leave your genuine experience on Google Business Profile.
                </p>

                {/* Google Review URL Placeholder Button */}
                <div>
                  {businessInfo.googleReviewUrl === "GOOGLE_REVIEW_URL_HERE" ? (
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-xs text-slate-600 flex items-center justify-between">
                      <span>[ Google Review Link Placeholder: <code className="font-mono font-bold text-slate-800">GOOGLE_REVIEW_URL_HERE</code> ]</span>
                      <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">Pending Owner Link</span>
                    </div>
                  ) : (
                    <a
                      href={businessInfo.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md"
                    >
                      <Star className="w-4 h-4 fill-white" />
                      <span>Leave a Google Review</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
