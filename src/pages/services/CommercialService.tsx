import React from 'react';
import ServicePage from '../../components/ServicePage';

const CommercialService = () => {
  return (
    <ServicePage
      title="Commercial Air Duct Cleaning"
      description="Professional air duct cleaning services for businesses, offices, and commercial properties in Phoenix. Our commercial-grade equipment and experienced technicians ensure your HVAC system operates at peak efficiency."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-commercial.jpg"
      features={[
        "Commercial-grade cleaning equipment",
        "Minimal business disruption",
        "After-hours service available",
        "Complete system inspection",
        "Documentation and reporting",
        "Compliance with commercial regulations"
      ]}
      benefits={[
        "Improved indoor air quality for employees",
        "Enhanced HVAC system efficiency",
        "Reduced energy costs",
        "Extended equipment lifespan",
        "Healthier work environment",
        "Compliance with building codes"
      ]}
    />
  );
};

export default CommercialService;