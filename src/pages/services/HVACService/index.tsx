import React from 'react';
import ServiceHero from '../../../components/services/shared/ServiceHero';
import ServiceFeatures from '../../../components/services/shared/ServiceFeatures';
import ServiceBenefits from '../../../components/services/shared/ServiceBenefits';
import { Fan, Thermometer, Tool, Gauge } from 'lucide-react';

const HVACService = () => {
  const features = [
    {
      icon: Fan,
      title: "Complete System Care",
      description: "Comprehensive cleaning of all HVAC components"
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Optimize system performance for better climate control"
    },
    {
      icon: Tool,
      title: "Professional Tools",
      description: "Advanced equipment for thorough cleaning"
    },
    {
      icon: Gauge,
      title: "Performance Testing",
      description: "Complete system testing and verification"
    }
  ];

  const benefits = [
    "Enhanced system efficiency",
    "Reduced energy consumption",
    "Extended equipment life",
    "Better temperature control",
    "Improved air quality",
    "Lower maintenance costs"
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <ServiceHero
          title="HVAC System Cleaning"
          description="Professional HVAC system cleaning service. We clean and maintain all components of your heating, ventilation, and air conditioning system for optimal performance."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        />
        <ServiceFeatures features={features} />
        <ServiceBenefits benefits={benefits} />
      </div>
    </div>
  );
};

export default HVACService;