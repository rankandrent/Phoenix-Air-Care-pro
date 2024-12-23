import React from 'react';
import ServicePage from '../../components/ServicePage';

const MaintenanceService = () => {
  return (
    <ServicePage
      title="Maintenance Programs"
      description="Regular maintenance programs for your air duct system in Phoenix. Our scheduled maintenance keeps your system running efficiently year-round."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-hvac.jpg"
      features={[
        "Scheduled inspections",
        "Regular cleaning",
        "Filter replacement",
        "System optimization",
        "Performance monitoring",
        "Preventive maintenance"
      ]}
      benefits={[
        "Consistent performance",
        "Prevent breakdowns",
        "Lower operating costs",
        "Extended system life",
        "Regular air quality checks",
        "Peace of mind"
      ]}
    />
  );
};

export default MaintenanceService;