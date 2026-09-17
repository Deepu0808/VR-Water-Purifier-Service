import React, { useState } from 'react';
import { Camera, Eye, X, Filter } from 'lucide-react';

export const BusinessPhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  // Helper to construct image URL (handles both external URLs and local public/images/ files with GitHub Pages base path)
  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return encodeURI(`${base}${cleanPath}`);
  };

  const galleryItems = [
    {
      id: 1,
      title: 'V R Water Purifier Storefront & Service Shop',
      category: 'Location',
      location: '36, Devarachikkannahalli Road, Vijaya Bank Layout, Bengaluru',
      desc: 'Our official service station and spare parts counter located at Devarachikkannahalli Road, Bommanahalli.',
      img: 'images/V R.png',
      alt: 'V R Water Purifier Service Center Storefront'
    },
    {
      id: 2,
      title: 'RO System Servicing & Deep Cleaning',
      category: 'Servicing',
      location: 'Devarachikkannahalli Road, Vijaya Bank Layout, Bengaluru',
      desc: 'Complete internal cleaning, pipe checkup, and water flow optimization.',
      img: 'images/work pic 1.jpeg',
      alt: 'RO Purifier Servicing Work'
    },
    {
      id: 3,
      title: 'Water Filter & Membrane Cartridge Replacement',
      category: 'Filters',
      location: 'Vijaya Bank Layout, Bommanahalli, Bengaluru',
      desc: 'Replacing clogged sediment filters, pre-carbon cartridges, and high-rejection RO membrane.',
      img: 'images/work pic 2.jpeg',
      alt: 'Filter and Membrane Replacement Work'
    },
    {
      id: 4,
      title: 'Booster Pump & Electrical Repair Work',
      category: 'Servicing',
      location: 'Devarachikkannahalli Road, Bommanahalli, Bengaluru',
      desc: 'Troubleshooting power supply adapters, solenoid valves, and high-pressure booster pumps.',
      img: 'images/work pic 3.jpeg',
      alt: 'Booster Pump Repair Work'
    },
    {
      id: 5,
      title: 'New Wall-Mount RO Purifier Installation',
      category: 'Installation',
      location: 'Vijaya Bank Layout, Bommanahalli, Bengaluru',
      desc: 'Neat wall mounting, inlet pipe connection, reject line alignment, and leak testing.',
      img: 'images/work pic 4.jpeg',
      alt: 'Purifier Installation Work'
    },
    {
      id: 6,
      title: 'TDS Water Quality Test & Final Inspection',
      category: 'Inspection',
      location: 'Devarachikkannahalli Road, Vijaya Bank Layout, Bengaluru',
      desc: 'Checking input and output water TDS levels and verifying UV lamp sterilization performance.',
      img: 'images/work pic 5.jpeg',
      alt: 'TDS Inspection Work'
    }
  ];

  const categories = ['All', 'Servicing', 'Installation', 'Filters', 'Inspection', 'Location'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Service Shop & Recent Field Work
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Real photos from our service shop and technician work across Bengaluru.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-200"
          >
            <div className="relative h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src={getImageUrl(item.img)}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                  <Eye className="w-4 h-4 text-brand-600" /> View Photo
                </span>
              </div>
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold">
                {item.category}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {item.desc}
              </p>
              <p className="text-[11px] font-semibold text-brand-600 mt-2">
                📍 {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] bg-slate-950 flex items-center justify-center overflow-hidden p-2">
              <img
                src={getImageUrl(activePhoto.img)}
                alt={activePhoto.alt}
                className="max-h-[60vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="p-6">
              <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
                {activePhoto.category}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {activePhoto.desc}
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-4 border-t border-slate-100 pt-3">
                📍 Location: {activePhoto.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

