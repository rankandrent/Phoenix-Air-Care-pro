import React from 'react';
import ServiceSEO from '../../../components/SEO/ServiceSEO';
import CommercialHero from './CommercialHero';
import CommercialBenefits from './CommercialBenefits';
import CommercialProcess from './CommercialProcess';
import CommercialIndustries from './CommercialIndustries';
import CommercialFeatures from './CommercialFeatures';
import CommercialFAQ from './CommercialFAQ';
import RelatedServices from '../../../components/services/RelatedServices';
import QuoteSection from '../../../components/QuoteSection';

const CommercialService = () => {
  return (
    <>
      <ServiceSEO 
        title="Commercial Air Duct Cleaning Phoenix | Professional HVAC Service"
        description="Expert commercial air duct cleaning in Phoenix. NADCA certified technicians, minimal business disruption, and comprehensive HVAC system cleaning for all industries."
        serviceName="Commercial Air Duct Cleaning"
        serviceDescription="Professional air duct cleaning services for businesses, offices, and commercial properties in Phoenix. Our commercial-grade equipment and experienced technicians ensure optimal indoor air quality and HVAC efficiency."
        image="https://s3-media0.fl.yelpcdn.com/bphoto/FQiodEBfBqPD3zn9Z4PJHQ/o.jpg"
      />
      <CommercialHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CommercialFeatures />
        <CommercialBenefits />
        <CommercialProcess />
        <CommercialIndustries />
        <CommercialFAQ />
        <RelatedServices currentPath="/services/commercial" />
      </div>
      <QuoteSection />
    </>
  );
};

export default CommercialService;