import React from 'react';
import ServicePage from '../../components/ServicePage';

const DuctRepairService = () => {
  return (
    <ServicePage
      title="Duct Repair Services"
      description="Professional air duct repair services in Phoenix. We fix leaks, damage, and improve system efficiency with expert repairs and maintenance."
      image="https://admirable-gumdrop-3ad5f6.netlify.app/images/service-repair.jpg"
      features={[
        "Leak detection",
        "Seal repairs",
        "Duct replacement",
        "Insulation repair",
        "System testing",
        "Quality inspection"
      ]}
      benefits={[
        "Improved efficiency",
        "Reduced energy costs",
        "Better air distribution",
        "Eliminate air leaks",
        "Enhanced comfort",
        "Extended system life"
      ]}
    />
  );
};

export default DuctRepairService;