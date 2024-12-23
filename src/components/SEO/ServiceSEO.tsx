import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../utils/seoConfig';

interface ServiceSEOProps {
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  image: string;
}

const ServiceSEO: React.FC<ServiceSEOProps> = ({
  title,
  description,
  serviceName,
  serviceDescription,
  image
}) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${seoConfig.company.website}#${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": seoConfig.company.name,
      "address": seoConfig.company.address,
      "telephone": seoConfig.company.phone,
      "image": seoConfig.company.logo
    },
    "areaServed": {
      "@type": "City",
      "name": "Phoenix",
      "state": "Arizona"
    },
    "image": image,
    "category": "Home & Business Services"
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
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default ServiceSEO;