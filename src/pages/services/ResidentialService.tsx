import React from 'react';
import ServicePage from '../../components/ServicePage';

const ResidentialService = () => {
  return (
    <ServicePage
      title="Residential Air Duct Cleaning"
      description="Professional air duct cleaning service for homes in Phoenix. We remove dust, debris, and contaminants from your home's HVAC system to improve indoor air quality and system efficiency."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-residential.jpg"
      features={[
        "Complete inspection of your HVAC system",
        "High-powered vacuum equipment",
        "Advanced HEPA filtration",
        "Thorough cleaning of all supply and return vents",
        "Sanitization and deodorizing treatment",
        "Video inspection before and after service"
      ]}
      benefits={[
        "Improved indoor air quality",
        "Reduced allergies and respiratory issues",
        "Better HVAC system efficiency",
        "Lower energy bills",
        "Extended equipment life",
        "Cleaner home environment"
      ]}
    />
  );
};

export default ResidentialService;