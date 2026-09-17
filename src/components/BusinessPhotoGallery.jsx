import React from 'react';
import { Camera, Image as ImageIcon, Info } from 'lucide-react';

export const BusinessPhotoGallery = () => {
  const photoSlots = [
    {
      id: 'store-location',
      title: 'Store / Service Location',
      subtitle: '36, Devarachikkannahalli Road, Vijaya Bank Layout',
      tag: 'Location Photo'
    },
    {
      id: 'ro-unit',
      title: 'RO Water Purifier Systems',
      subtitle: 'Domestic RO, UV and UF Units',
      tag: 'Equipment'
    },
    {
      id: 'service-work',
      title: 'Service & Maintenance Work',
      subtitle: 'Descaling, Cleaning & Pressure Check',
      tag: 'Service Work'
    },
    {
      id: 'filter-replacement',
      title: 'Filter & Membrane Change',
      subtitle: 'Sediment, Carbon & RO Membranes',
      tag: 'Parts'
    },
    {
      id: 'installation-work',
      title: 'Water Purifier Installation',
      subtitle: 'Wall Mounting & Plumbing Connections',
      tag: 'Installation'
    },
    {
      id: 'technician-work',
      title: 'Technician at Work',
      subtitle: 'Doorstep Troubleshooting in Bengaluru',
      tag: 'On-Site'
    }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Real Business Gallery Placeholders</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Our Service & Work Gallery
        </h2>
        <p className="text-slate-600 text-sm">
          We believe in transparency. Genuine photos of our Vijaya Bank Layout location, technician tools, filter replacements, and installation work can be added here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photoSlots.map((slot) => (
          <div
            key={slot.id}
            className="group relative bg-white border-2 border-dashed border-slate-200 hover:border-brand-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[220px] transition-all duration-200 hover:shadow-lg"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center mb-4 transition-colors">
              <ImageIcon className="w-7 h-7" />
            </div>

            <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono font-bold mb-2 uppercase">
              {slot.tag}
            </span>

            <h3 className="font-bold text-slate-800 text-base mb-1">
              {slot.title}
            </h3>

            <p className="text-xs text-slate-500 max-w-[200px]">
              {slot.subtitle}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
              [ Replace with photo: <span className="font-mono text-slate-600">{slot.id}.jpg</span> ]
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-brand-50/80 rounded-2xl border border-brand-100 text-xs text-slate-600 flex items-start gap-3">
        <Info className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-800">Note for Business Owner:</strong> To display actual shop and service photos, save your photo files into the <code className="bg-white px-1.5 py-0.5 rounded border border-brand-200 font-mono text-brand-700">public/images/</code> folder and update the image src attributes in code.
        </p>
      </div>
    </div>
  );
};
