import React from 'react';
import ServicePage from '../../components/ServicePage';

const SanitizationService = () => {
  return (
    <ServicePage
      title="Sanitization Services"
      description="Professional duct sanitization service in Phoenix. We eliminate bacteria, mold, and other contaminants from your duct system using EPA-approved sanitizing agents."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/Sanitization-Services.jpg"
      features={[
        "EPA-approved sanitizers",
        "Complete system treatment",
        "Mold prevention",
        "Odor elimination",
        "Allergen reduction",
        "Safe for all occupants"
      ]}
      benefits={[
        "Eliminated bacteria and viruses",
        "Reduced allergies",
        "Fresh, clean air",
        "Improved indoor air quality",
        "Healthier environment",
        "Odor-free home"
      ]}
    />
  );
};

export default SanitizationService;