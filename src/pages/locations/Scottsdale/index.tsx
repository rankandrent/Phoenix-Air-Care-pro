import React from 'react';
import LocationSEO from '../../../components/SEO/LocationSEO';
import ScottsdaleHero from './components/ScottsdaleHero';
import ScottsdaleContent from './components/ScottsdaleContent';
import ScottsdaleGallery from './components/ScottsdaleGallery';
import ScottsdaleTestimonials from './components/ScottsdaleTestimonials';
import ScottsdaleMap from './components/ScottsdaleMap';
import QuoteSection from '../../../components/QuoteSection';

const ScottsdalePage = () => {
  const reviews = [
    {
      author: "Sarah M.",
      reviewBody: "Exceptional service! They were prompt, professional, and did an amazing job cleaning our home's air ducts. The difference in air quality is remarkable.",
      reviewRating: 5,
      datePublished: "2024-03-15"
    },
    {
      author: "Robert K.",
      reviewBody: "As a property manager in Scottsdale, I've worked with many service providers. This team is by far the most professional and thorough. Highly recommended!",
      reviewRating: 5,
      datePublished: "2024-02-20"
    },
    {
      author: "Jennifer L.",
      reviewBody: "Great experience from start to finish. The technicians were knowledgeable and took the time to explain everything. Our AC is running much more efficiently now.",
      reviewRating: 5,
      datePublished: "2024-01-10"
    }
  ];

  return (
    <>
      <LocationSEO 
        title="Air Duct Cleaning Scottsdale AZ | Same Day Service Near Me"
        description="Expert air duct cleaning in Scottsdale, AZ. NADCA certified local technicians, same-day service available. Serving North Scottsdale, Old Town & surrounding areas. Free estimates!"
        locationName="Scottsdale"
        locationDescription="Professional air duct cleaning services in Scottsdale, Arizona. We serve residential and commercial properties with expert HVAC cleaning and maintenance."
        image="https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-2.jpg"
        reviews={reviews}
      />
      <ScottsdaleHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ScottsdaleContent />
        <ScottsdaleGallery />
        <ScottsdaleTestimonials />
        <ScottsdaleMap />
      </div>
      <QuoteSection />
    </>
  );
};

export default ScottsdalePage;