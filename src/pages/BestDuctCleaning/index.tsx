import React from 'react';
import ServiceSEO from '../../components/SEO/ServiceSEO';
import Hero from './components/Hero';
import WhyChooseSection from './components/WhyChooseSection';
import ProcessSection from './components/ProcessSection';
import BenefitsSection from './components/BenefitsSection';
import ServiceAreas from './components/ServiceAreas';
import Comparison from './components/Comparison';
import Reviews from './components/Reviews';
import FAQSection from './components/FAQSection';
import QuoteSection from '../../components/QuoteSection';

const BestDuctCleaning = () => {
  return (
    <>
      <ServiceSEO 
        title="Best Air Duct Cleaning Near Me Phoenix | Top-Rated Service"
        description="Looking for the best air duct cleaning near you in Phoenix? NADCA certified, 5-star rated service with 1000+ satisfied customers. Same-day appointments available!"
        serviceName="Best Air Duct Cleaning Near Me"
        serviceDescription="Professional air duct cleaning service in Phoenix, consistently rated as the best by local customers. Licensed, insured, and NADCA certified technicians."
        image="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <WhyChooseSection />
        <ProcessSection />
        <BenefitsSection />
        <Comparison />
        <ServiceAreas />
        <Reviews />
        <FAQSection />
      </div>
      <QuoteSection />
    </>
  );
};

export default BestDuctCleaning;