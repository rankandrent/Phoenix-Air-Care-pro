import React from 'react';
import ServicePage from '../../components/ServicePage';

const AirQualityService = () => {
  return (
    <ServicePage
      title="Air Quality Testing"
      description="Professional indoor air quality testing in Phoenix. We use advanced equipment to measure and analyze your indoor air quality, identifying potential issues and recommending solutions."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/Video-Inspection.jpg"
      features={[
        "Comprehensive air testing",
        "Particle count analysis",
        "Allergen detection",
        "VOC testing",
        "Detailed reporting",
        "Expert recommendations"
      ]}
      benefits={[
        "Identify air quality issues",
        "Healthier indoor environment",
        "Reduced allergy symptoms",
        "Better respiratory health",
        "Peace of mind",
        "Targeted solutions"
      ]}
    />
  );
};

export default AirQualityService;