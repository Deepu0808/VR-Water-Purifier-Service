import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../config/businessInfo';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'RO Water Purifier Service',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Hello V R Water Purifier Service,
I need water purifier service.
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message || 'N/A'}`;

    const waUrl = getWhatsAppLink(formattedMessage);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Send WhatsApp Service Booking</h3>
          <p className="text-xs text-slate-500">Fill details & click send to open WhatsApp directly</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Kumar"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Service Required <span className="text-rose-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white transition-all"
          >
            {businessInfo.services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="General Inspection / Inquiry">General Inspection / Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Issue Description / Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. Purifier leakage, water taste changed, low flow speed..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg shadow-emerald-600/25 active:scale-[0.99] transition-all duration-200"
        >
          <Send className="w-5 h-5" />
          <span>BOOK VIA WHATSAPP NOW</span>
        </button>

        <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Direct chat connect with V R Water Purifier Service
        </p>
      </form>
    </div>
  );
};
