import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../utils/seoConfig';

interface LocationSEOProps {
  title: string;
  description: string;
  locationName: string;
  locationDescription: string;
  image: string;
  reviews: Array<{
    author: string;
    reviewBody: string;
    reviewRating: number;
    datePublished: string;
  }>;
}

const LocationSEO: React.FC<LocationSEOProps> = ({
  title,
  description,
  locationName,
  locationDescription,
  image,
  reviews
}) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.company.website}#${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": `${seoConfig.company.name} - ${locationName}`,
    "description": locationDescription,
    "url": `${seoConfig.company.website}/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": seoConfig.company.phone,
    "image": image,
    "address": seoConfig.company.address,
    "geo": seoConfig.company.geo,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      
      <script type="application/ld+json">
        {JSON.stringify(locationSchema)}
      </script>
    </Helmet>
  );
};

export default LocationSEO;