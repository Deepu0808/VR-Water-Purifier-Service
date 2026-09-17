import React from 'react';
import { 
  Wrench, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  RefreshCw, 
  Layers, 
  Settings, 
  Sparkles, 
  CalendarCheck,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { getWhatsAppLink } from '../config/businessInfo';

const iconMap = {
  Wrench,
  CheckCircle2,
  Zap,
  ShieldCheck,
  RefreshCw,
  Layers,
  Settings,
  Sparkles,
  CalendarCheck
};

export const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Wrench;
  const whatsappMessage = `Hello V R Water Purifier Service, I need information / booking for ${service.title}.`;
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      
      {/* Popular tag accent */}
      {service.popular && (
        <div className="absolute top-0 right-0">
          <span className="bg-brand-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Popular Service
          </span>
        </div>
      )}

      <div>
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-inner">
          <IconComponent className="w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          "{service.shortDesc}"
        </p>
      </div>

      {/* Action Enquire Button */}
      <div className="pt-4 border-t border-slate-100">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 text-sm font-bold transition-all duration-200"
        >
          <span className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Enquire Now
          </span>
          <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  );
};
