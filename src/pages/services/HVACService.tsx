import React from 'react';
import ServicePage from '../../components/ServicePage';

const HVACService = () => {
  return (
    <ServicePage
      title="HVAC System Cleaning"
      description="Comprehensive HVAC system cleaning service in Phoenix. We clean all components of your heating, ventilation, and air conditioning system to ensure optimal performance and air quality."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-hvac.jpg"
      features={[
        "Complete system inspection",
        "Cleaning of all HVAC components",
        "Coil cleaning and sanitization",
        "Blower motor cleaning",
        "Filter replacement",
        "Performance testing"
      ]}
      benefits={[
        "Improved system efficiency",
        "Better temperature control",
        "Reduced energy consumption",
        "Extended system lifespan",
        "Fewer repairs needed",
        "Enhanced indoor comfort"
      ]}
    />
  );
};

export default HVACService;