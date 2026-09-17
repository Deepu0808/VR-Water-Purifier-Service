import React from 'react';
import { Helmet } from 'react-helmet-async';
import { businessInfo } from '../config/businessInfo';

export const SEO = ({ title, description, path = '/' }) => {
  const pageTitle = title || `${businessInfo.name} | RO Repair & Service in Bengaluru`;
  const pageDescription = description || businessInfo.description;
  const canonicalUrl = `${businessInfo.websiteUrl}${path}`;

  // Structured Data (JSON-LD) for Google LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "image": `${businessInfo.websiteUrl}/favicon.svg`,
    "telephone": businessInfo.rawPhone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${businessInfo.address.street}, ${businessInfo.address.suburb}`,
      "addressLocality": businessInfo.address.locality,
      "addressRegion": businessInfo.address.city,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.8943,
      "longitude": 77.6189
    },
    "url": businessInfo.websiteUrl,
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "description": businessInfo.description
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": businessInfo.websiteUrl
      },
      ...(path !== '/' ? [
        {
          "@type": "ListItem",
          "position": 2,
          "name": title ? title.split('|')[0].trim() : path.replace('/', ''),
          "item": canonicalUrl
        }
      ] : [])
    ]
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={businessInfo.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};
