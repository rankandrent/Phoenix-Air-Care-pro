import React from 'react';
import LocationSEO from '../../../components/SEO/LocationSEO';
import ParadiseValleyHero from './components/ParadiseValleyHero';
import ParadiseValleyContent from './components/ParadiseValleyContent';
import ParadiseValleyGallery from './components/ParadiseValleyGallery';
import ParadiseValleyTestimonials from './components/ParadiseValleyTestimonials';
import ParadiseValleyMap from './components/ParadiseValleyMap';
import QuoteSection from '../../../components/QuoteSection';

const ParadiseValleyPage = () => {
  const reviews = [
    {
      author: "Michael R.",
      reviewBody: "Outstanding service for our estate's air duct system. The team was professional, thorough, and respectful of our property. Highly recommended!",
      reviewRating: 5,
      datePublished: "2024-03-10"
    },
    {
      author: "Elizabeth S.",
      reviewBody: "We've used their services for years to maintain our home's air quality. Always reliable, professional, and deliver excellent results.",
      reviewRating: 5,
      datePublished: "2024-02-15"
    },
    {
      author: "David M.",
      reviewBody: "Expert service from start to finish. They took great care with our custom HVAC system and improved our air quality significantly.",
      reviewRating: 5,
      datePublished: "2024-01-20"
    }
  ];

  return (
    <>
      <LocationSEO 
        title="Air Duct Cleaning Paradise Valley AZ | Same Day Service Near Me"
        description="Expert air duct cleaning in Paradise Valley, AZ. NADCA certified local technicians, same-day service for luxury homes & estates. Serving all Paradise Valley areas. Free estimates!"
        locationName="Paradise Valley"
        locationDescription="Professional air duct cleaning services in Paradise Valley, Arizona. We specialize in luxury homes and estates with expert HVAC cleaning and maintenance."
        image="https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-1.jpg"
        reviews={reviews}
      />
      <ParadiseValleyHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ParadiseValleyContent />
        <ParadiseValleyGallery />
        <ParadiseValleyTestimonials />
        <ParadiseValleyMap />
      </div>
      <QuoteSection />
    </>
  );
};

export default ParadiseValleyPage;