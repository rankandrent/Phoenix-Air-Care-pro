import React from 'react';
import ServicePage from '../../components/ServicePage';

const MoldService = () => {
  return (
    <ServicePage
      title="Mold Remediation"
      description="Professional mold detection and removal services for air duct systems in Phoenix. We identify, remove, and prevent mold growth in your HVAC system."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-sanitization.jpg"
      features={[
        "Mold inspection",
        "Laboratory testing",
        "Complete removal",
        "Prevention treatment",
        "Air quality testing",
        "Follow-up inspection"
      ]}
      benefits={[
        "Eliminate health risks",
        "Prevent mold spread",
        "Improve air quality",
        "Remove musty odors",
        "Protect your property",
        "Healthier environment"
      ]}
    />
  );
};

export default MoldService;