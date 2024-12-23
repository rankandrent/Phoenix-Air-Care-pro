import React from 'react';
import LocationSEO from '../../../components/SEO/LocationSEO';
import MesaHero from './components/MesaHero';
import MesaContent from './components/MesaContent';
import MesaGallery from './components/MesaGallery';
import MesaTestimonials from './components/MesaTestimonials';
import MesaMap from './components/MesaMap';
import QuoteSection from '../../../components/QuoteSection';

const MesaPage = () => {
  const reviews = [
    {
      author: "David R.",
      reviewBody: "Best air duct cleaning service in Mesa! They were on time, professional, and did an amazing job cleaning our entire system.",
      reviewRating: 5,
      datePublished: "2024-03-15"
    },
    {
      author: "Linda M.",
      reviewBody: "Very impressed with their attention to detail. Our home feels so much cleaner and fresher after their service.",
      reviewRating: 5,
      datePublished: "2024-02-20"
    },
    {
      author: "James K.",
      reviewBody: "Professional team, fair pricing, and excellent results. Highly recommend for anyone in Mesa looking for duct cleaning.",
      reviewRating: 5,
      datePublished: "2024-01-25"
    }
  ];

  return (
    <>
      <LocationSEO 
        title="Air Duct Cleaning Mesa AZ | Same Day Service Near Me"
        description="Expert air duct cleaning in Mesa, AZ. NADCA certified local technicians, same-day service available. Serving all Mesa areas including East Mesa & downtown. Free estimates!"
        locationName="Mesa"
        locationDescription="Professional air duct cleaning services in Mesa, Arizona. We serve residential and commercial properties with expert HVAC cleaning and maintenance."
        image="https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-1.jpg"
        reviews={reviews}
      />
      <MesaHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <MesaContent />
        <MesaGallery />
        <MesaTestimonials />
        <MesaMap />
      </div>
      <QuoteSection />
    </>
  );
};

export default MesaPage;