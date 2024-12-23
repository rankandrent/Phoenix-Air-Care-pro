import React from 'react';
import ServiceSEO from '../../components/SEO/ServiceSEO';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import QuoteSection from '../../components/QuoteSection';

const DuctAndCarpetPage = () => {
  return (
    <>
      <ServiceSEO 
        title="Air Duct & Carpet Cleaning Phoenix | Professional Service"
        description="Expert air duct and carpet cleaning in Phoenix. NADCA certified, eco-friendly solutions. Transform your indoor air quality and restore your carpets. Free quotes!"
        serviceName="Air Duct & Carpet Cleaning"
        serviceDescription="Comprehensive air duct and carpet cleaning services in Phoenix. Professional-grade equipment and certified technicians for superior results."
        image="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Services />
        <Benefits />
        <Process />
        <Pricing />
        <FAQ />
      </div>
      <QuoteSection />
    </>
  );
};

export default DuctAndCarpetPage;