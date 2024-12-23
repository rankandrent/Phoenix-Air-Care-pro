import React from 'react';
import ServicePage from '../../components/ServicePage';

const DryerVentService = () => {
  return (
    <ServicePage
      title="Dryer Vent Cleaning"
      description="Professional dryer vent cleaning service in Phoenix. We remove lint buildup and debris to prevent fire hazards and improve dryer efficiency."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/Video-Inspection.jpg"
      features={[
        "Complete vent inspection",
        "Professional cleaning equipment",
        "Lint removal",
        "Blockage removal",
        "System testing",
        "Safety inspection"
      ]}
      benefits={[
        "Reduced fire risk",
        "Improved dryer efficiency",
        "Lower energy bills",
        "Faster drying times",
        "Extended appliance life",
        "Peace of mind"
      ]}
    />
  );
};

export default DryerVentService;