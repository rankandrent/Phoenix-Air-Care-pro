import React from 'react';
import { Fan, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Fan className="h-12 w-12" />,
      title: "Air Duct Cleaning",
      features: [
        "Complete HVAC system cleaning",
        "Video inspection",
        "HEPA filtration",
        "Sanitization treatment",
        "Deodorization",
        "Performance check"
      ]
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Carpet Cleaning",
      features: [
        "Deep steam cleaning",
        "Stain removal",
        "Pet odor treatment",
        "Eco-friendly solutions",
        "Spot treatment",
        "Quick-dry process"
      ]
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;