import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../utils/seoConfig';
import { generateSchema } from './schema';
import ClarityScript from '../tracking/ClarityScript';

const Head: React.FC = () => {
  const schemaMarkup = generateSchema();

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="fvhseMUT975wUsGTBZINA1YCBF4DZASjvpfCCrk27ks" />
        
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.company.website} />
        <meta property="og:image" content={`${seoConfig.company.website}/og-image.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={`${seoConfig.company.website}/twitter-image.jpg`} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <ClarityScript />
    </>
  );
};

export default Head;