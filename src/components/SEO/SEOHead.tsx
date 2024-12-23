import React from 'react';
import { Helmet } from 'react-helmet';
import { seoConfig } from '../../utils/seoConfig';
import { generateSchema } from './schema';

const SEOHead = () => {
  const schemaMarkup = generateSchema();

  return (
    <Helmet>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://phoenixaircare.com" />
      <meta property="og:image" content="https://phoenixaircare.com/og-image.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      <meta name="twitter:image" content="https://phoenixaircare.com/twitter-image.jpg" />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEOHead;