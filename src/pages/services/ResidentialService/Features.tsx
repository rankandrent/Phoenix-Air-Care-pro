import React from 'react';
import { Fan, Gauge, Shield, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Fan className="h-6 w-6" />,
      title: "Complete System Cleaning",
      description: "Thorough cleaning of all supply and return vents, main trunk lines, and branch lines"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Advanced Equipment",
      description: "State-of-the-art HEPA filtration and powerful vacuum systems"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Technicians",
      description: "Experienced, background-checked, and fully trained professionals"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Same-Day Service",
      description: "Flexible scheduling with same-day service available"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Service Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              {feature.icon}
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;