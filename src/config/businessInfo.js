export const businessInfo = {
  name: "V R WATER PURIFIER SERVICE",
  shortName: "VR Water Purifier Service",
  phone: "78990 37911",
  rawPhone: "+917899037911",
  telUrl: "tel:+917899037911",
  whatsappNumber: "+91 78990 37911",
  whatsappUrl: "https://wa.me/917899037911",
  category: "Water Purification Company",
  description: "Professional RO, UV and UF water purifier repair, service, installation, filter replacement, membrane replacement, cleaning, maintenance and AMC services at your convenience in Bengaluru.",
  
  address: {
    street: "36, Devarachikkannahalli Road",
    suburb: "Vijaya Bank Layout",
    locality: "Bommanahalli",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560068",
    country: "India",
    full: "36, Devarachikkannahalli Road, Vijaya Bank Layout, Bommanahalli, Bengaluru, Karnataka 560068, India"
  },

  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=36%20Devarachikkannahalli%20Road%20Vijaya%20Bank%20Layout%20Bommanahalli%20Bengaluru%20560068",
  googleReviewUrl: "GOOGLE_REVIEW_URL_HERE",
  websiteUrl: "https://YOUR-DOMAIN.com",

  serviceAreas: [
    "Bommanahalli",
    "Devarachikkannahalli",
    "Vijaya Bank Layout",
    "JP Nagar",
    "Banashankari",
    "Begur",
    "Hulimavu",
    "Arekere",
    "Bannerghatta Road",
    "BTM Layout",
    "Bengaluru"
  ],

  services: [
    {
      id: "ro-repair",
      title: "RO Water Purifier Repair",
      shortDesc: "Professional troubleshooting and repair support for RO water purifier systems.",
      icon: "Wrench",
      popular: true
    },
    {
      id: "ro-service",
      title: "RO Water Purifier Service",
      shortDesc: "Routine servicing to help maintain purifier performance and cleanliness.",
      icon: "CheckCircle2",
      popular: true
    },
    {
      id: "uv-service",
      title: "UV Water Purifier Service",
      shortDesc: "Service and maintenance support for UV water purification systems.",
      icon: "Zap",
      popular: false
    },
    {
      id: "uf-service",
      title: "UF Water Purifier Service",
      shortDesc: "Maintenance and service support for UF water purifier systems.",
      icon: "ShieldCheck",
      popular: false
    },
    {
      id: "filter-replacement",
      title: "Filter Replacement",
      shortDesc: "Replacement of water purifier filters when they require servicing or replacement.",
      icon: "RefreshCw",
      popular: true
    },
    {
      id: "membrane-replacement",
      title: "RO Membrane Replacement",
      shortDesc: "RO membrane replacement when the existing membrane needs to be changed.",
      icon: "Layers",
      popular: true
    },
    {
      id: "installation",
      title: "Water Purifier Installation",
      shortDesc: "Installation and setup support for water purifier systems.",
      icon: "Settings",
      popular: false
    },
    {
      id: "cleaning",
      title: "Water Purifier Cleaning",
      shortDesc: "Cleaning and maintenance support for water purifier systems.",
      icon: "Sparkles",
      popular: false
    },
    {
      id: "amc-maintenance",
      title: "AMC & Maintenance",
      shortDesc: "Regular maintenance and service support for customers who need ongoing purifier care.",
      icon: "CalendarCheck",
      popular: true
    }
  ],

  whyChooseUs: [
    {
      title: "Convenient Home Service",
      desc: "Hassle-free doorstep service at your home or workplace across Bengaluru."
    },
    {
      title: "Quick Customer Support",
      desc: "Fast response via phone and WhatsApp for all urgent repair requirements."
    },
    {
      title: "RO / UV / UF Expertise",
      desc: "Comprehensive expertise across all major domestic water purification technologies."
    },
    {
      title: "Filter & Membrane Replacement",
      desc: "Genuine grade replacement parts to ensure long-lasting clean water flow."
    },
    {
      title: "Installation Support",
      desc: "Careful mounting, tubing setup, and pressure testing for new purifiers."
    },
    {
      title: "Regular Maintenance",
      desc: "Preventative servicing schedules to avoid sudden purifier breakdowns."
    },
    {
      title: "Easy Phone Booking",
      desc: "Direct phone access to book your preferred service slot without delays."
    },
    {
      title: "WhatsApp Enquiries",
      desc: "Instant chat support to send photos of your purifier issue for quick advice."
    }
  ],

  howItWorks: [
    {
      step: "01",
      title: "Contact Us",
      desc: "Customer calls or sends a WhatsApp message with their location and service request."
    },
    {
      step: "02",
      title: "Explain the Problem",
      desc: "Customer tells us the purifier issue or service requirement (e.g. filter change, water taste issue, leakage)."
    },
    {
      step: "03",
      title: "Schedule Service",
      desc: "Service availability is discussed and the convenient technician appointment is arranged."
    }
  ]
};

export const getWhatsAppLink = (customMessage = "") => {
  if (!customMessage) return businessInfo.whatsappUrl;
  const encoded = encodeURIComponent(customMessage);
  return `https://wa.me/917899037911?text=${encoded}`;
};
