export const seoConfig = {
  // ... existing config
  schema: {
    organization: {
      "@type": "Organization",
      "@id": "https://airductcleaningphoenix.org/#organization",
      name: "Phoenix Air Care",
      url: "https://airductcleaningphoenix.org",
      logo: {
        "@type": "ImageObject",
        url: "https://airductcleaningphoenix.org/logo.png"
      }
    },
    localBusiness: {
      "@type": "LocalBusiness",
      "@id": "https://airductcleaningphoenix.org/#localbusiness",
      name: "Phoenix Air Care",
      image: "https://airductcleaningphoenix.org/logo.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3305 E Greenway Rd #429",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        postalCode: "85032",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.566123,
        longitude: -111.936322
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "250"
      }
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "John Smith"
      }
    }
  }
};