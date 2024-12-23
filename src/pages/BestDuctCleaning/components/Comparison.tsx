import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const features = [
    "NADCA Certified Technicians",
    "Advanced HEPA Filtration",
    "Video Inspection",
    "Complete System Cleaning",
    "Same-Day Service",
    "Satisfaction Guarantee"
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose the Best vs. the Rest
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Premium Service</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-600 mb-6">Other Services</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <X className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comparison;