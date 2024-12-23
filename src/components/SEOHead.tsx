import React from 'react';
import { seoConfig } from '../utils/seoConfig';

const SEOHead = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://phoenixaircare.com",
    name: seoConfig.company.name,
    image: "https://phoenixaircare.com/logo.png",
    telephone: seoConfig.company.phone,
    email: seoConfig.company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.company.address.street,
      addressLocality: seoConfig.company.address.city,
      addressRegion: seoConfig.company.address.state,
      postalCode: seoConfig.company.address.postalCode,
      addressCountry: seoConfig.company.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.company.geo.latitude,
      longitude: seoConfig.company.geo.longitude
    },
    areaServed: [
      "85001", "85002", "85003", "85004", "85005", "85006", "85007", "85008", 
      "85009", "85010", "85011", "85012", "85013", "85014", "85015", "85016", 
      "85017", "85018", "85019", "85020", "85021", "85022", "85023", "85024", 
      "85026", "85027", "85028", "85029", "85030", "85031", "85032", "85033", 
      "85034", "85035", "85036", "85037", "85038", "85039", "85040", "85041", 
      "85042", "85043", "85044", "85045", "85046", "85048", "85050", "85051", 
      "85053", "85054", "85060", "85061", "85062", "85063", "85064", "85065", 
      "85066", "85067", "85068", "85069", "85070", "85071", "85072", "85073", 
      "85074", "85075", "85076", "85078", "85079", "85080", "85082", "85083", 
      "85085", "85086", "85087", "85251", "85253", "85254", "85304", "85306", 
      "85307", "85308", "85310", "85331", "85339", "85353", "85383", "85392"
    ].map(zip => ({
      "@type": "PostalCodeRangeSpecification",
      postalCode: zip
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    sameAs: [
      "https://www.facebook.com/phoenixaircare",
      "https://twitter.com/phoenixaircare",
      "https://www.instagram.com/phoenixaircare"
    ],
    priceRange: "$$",
    servesCuisine: "Air Duct Cleaning"
  };

  return (
    <>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://phoenixaircare.com" />
      <meta property="og:image" content="https://phoenixaircare.com/og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      <meta name="twitter:image" content="https://phoenixaircare.com/twitter-image.jpg" />
      
      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </>
  );
};

export default SEOHead;