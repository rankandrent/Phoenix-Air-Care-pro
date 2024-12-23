import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import ServiceGallery from '../components/Gallery/ServiceGallery';
import TestimonialSection from '../components/TestimonialSection';
import MapSection from '../components/MapSection';
import SEOContent from '../components/SEOContent';
import QuoteSection from '../components/QuoteSection';

const HomePage = () => {
  console.log("Hello")
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ServiceAreaSection />
      <ServiceGallery />
      <TestimonialSection />
      <MapSection />
      <QuoteSection />
      <SEOContent />
    </div>
  );
};

export default HomePage;