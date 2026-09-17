import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Shield, 
  ChevronRight, 
  Wrench,
  ThumbsUp,
  Headphones,
  CalendarCheck
} from 'lucide-react';
import { businessInfo } from '../config/businessInfo';
import { SEO } from '../components/SEO';
import { HeroVisual } from '../components/HeroVisual';
import { ServiceCard } from '../components/ServiceCard';
import { BusinessPhotoGallery } from '../components/BusinessPhotoGallery';
import { ContactForm } from '../components/ContactForm';

export const Home = () => {
  const trustHighlights = [
    "Home Service",
    "RO / UV / UF Service",
    "Filter Replacement",
    "Membrane Replacement",
    "Installation & Maintenance",
    "Bengaluru Service Area"
  ];

  return (
    <>
      <SEO 
        title="V R Water Purifier Service | RO Repair & Service in Bengaluru"
        description="V R Water Purifier Service provides RO, UV and UF water purifier repair, service, installation, filter replacement and maintenance in Bengaluru. Call 78990 37911."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Business Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold tracking-wide uppercase">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Devarachikkannahalli Road • Vijaya Bank Layout</span>
              </div>

              {/* Business Name & Main Heading */}
              <div>
                <p className="text-brand-600 font-extrabold text-sm sm:text-base uppercase tracking-widest mb-2">
                  {businessInfo.name}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Reliable Water Purifier Service in <span className="text-brand-600">Bengaluru</span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Professional RO, UV and UF water purifier repair, service, installation, filter replacement and maintenance at your convenience.
              </p>

              {/* Two Prominent CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={businessInfo.telUrl}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-white font-extrabold text-base bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>CALL NOW ({businessInfo.phone})</span>
                </a>

                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-emerald-800 font-extrabold text-base bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 shadow-lg shadow-emerald-600/10 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>WHATSAPP NOW</span>
                </a>
              </div>

              {/* Trust Section Grid */}
              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Service Commitments
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {trustHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-50 rounded-full">
              Comprehensive Purifier Care
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Water Purifier Repair & Servicing Solutions
            </h2>
            <p className="text-slate-600 text-base">
              From sudden breakdowns to filter routine maintenance, we support all major RO, UV, and UF system requirements across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessInfo.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700 text-base group"
            >
              <span>View Full Services Listing & Details</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand-400 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-950/80 border border-brand-800 rounded-full">
              Customer First Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Why Choose V R Water Purifier Service?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We focus on prompt response, reliable filter replacement, and doorstep service convenience for local residents and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInfo.whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-50 rounded-full">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              How Our Service Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Booking your water purifier service or repair visit is quick and easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {businessInfo.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center relative flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-500/20">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={businessInfo.telUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm bg-brand-600 hover:bg-brand-700 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({businessInfo.phone})</span>
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local SEO & Service Area */}
      <section className="py-16 bg-brand-50/50 border-y border-brand-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-brand-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-white rounded-full border border-brand-200">
                Bengaluru Local Service Coverage
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Water Purifier Service in Bengaluru
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                V R Water Purifier Service provides water purifier repair, servicing, installation and maintenance support in Bengaluru and nearby service areas, subject to availability.
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Key Service Areas Covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {businessInfo.serviceAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                Service Location Address
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {businessInfo.address.full}
              </p>
              <div className="space-y-3">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Business Photo Gallery Placeholders */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessPhotoGallery />
        </div>
      </section>

      {/* Quick Booking Form Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
