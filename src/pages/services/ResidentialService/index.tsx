import React from 'react';
import ServiceSEO from '../../../components/SEO/ServiceSEO';
import Hero from './components/Hero';
import ServiceHighlights from './components/ServiceHighlights';
import CleaningProcess from './components/CleaningProcess';
import HealthBenefits from './components/HealthBenefits';
import BeforeAfter from './components/BeforeAfter';
import FAQ from './components/FAQ';
import ServiceAreas from './components/ServiceAreas';
import Pricing from './components/Pricing';
import QuoteSection from '../../../components/QuoteSection';
import RelatedServices from '../../../components/services/RelatedServices';

const ResidentialService = () => {
  const reviews = [
    {
      author: "John D.",
      reviewBody: "Excellent service! The technicians were professional and thorough. My home feels fresher and my allergies have improved significantly.",
      reviewRating: 5,
      datePublished: "2024-03-15"
    },
    {
      author: "Sarah M.",
      reviewBody: "Very impressed with the before and after photos. They took the time to explain everything and did a fantastic job.",
      reviewRating: 5,
      datePublished: "2024-02-20"
    },
    {
      author: "Mike R.",
      reviewBody: "Fair pricing and great results. I noticed an immediate difference in air quality after the service.",
      reviewRating: 5,
      datePublished: "2024-01-25"
    }
  ];

  return (
    <>
      <ServiceSEO 
        title="Residential Air Duct Cleaning Phoenix | Expert Service Near Me"
        description="Professional residential air duct cleaning in Phoenix. NADCA certified technicians, same-day service, and 100% satisfaction guarantee. Free estimates available!"
        serviceName="Residential Air Duct Cleaning"
        serviceDescription="Expert air duct cleaning service for homes in Phoenix, AZ. We remove dust, debris, and contaminants to improve indoor air quality and HVAC efficiency."
        image="https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-1.jpg"
        reviews={reviews}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Hero />
        <ServiceHighlights />
        <CleaningProcess />
        <HealthBenefits />
        <BeforeAfter />
        <Pricing />
        <ServiceAreas />
        <FAQ />
        <RelatedServices currentPath="/Residential-Duct-Cleaning" />
      </div>
      <QuoteSection />
    </>
  );
};

export default ResidentialService;