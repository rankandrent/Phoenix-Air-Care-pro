import React from 'react';
import ServicePage from '../../components/ServicePage';

const EmergencyService = () => {
  return (
    <ServicePage
      title="24/7 Emergency Services"
      description="Round-the-clock emergency air duct and HVAC services in Phoenix. We're available 24/7 to handle urgent situations and restore your system's functionality."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-repair.jpg"
      features={[
        "24/7 availability",
        "Rapid response time",
        "Emergency repairs",
        "Immediate assessment",
        "Quick problem resolution",
        "After-hours service"
      ]}
      benefits={[
        "Immediate assistance",
        "Minimize downtime",
        "Prevent further damage",
        "Peace of mind",
        "Expert solutions",
        "Avoid costly repairs"
      ]}
    />
  );
};

export default EmergencyService;