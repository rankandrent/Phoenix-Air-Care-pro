import React from 'react';
import { Building, Clock, Wrench, Shield, Users, ChartBar } from 'lucide-react';

const CommercialFeatures = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Multi-Story Buildings",
      description: "Specialized equipment for high-rise and multi-story commercial buildings"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "After-hours and weekend service to minimize business disruption"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Commercial Grade",
      description: "Industrial-strength equipment for large-scale commercial systems"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Compliant",
      description: "Following all OSHA and industry safety regulations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "NADCA certified technicians with commercial experience"
    },
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Performance Reports",
      description: "Detailed documentation and system performance analysis"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Service Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommercialFeatures;