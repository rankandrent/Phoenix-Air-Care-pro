import React from 'react';
import { CheckCircle } from 'lucide-react';

const ResidentialBenefits = () => {
  const benefits = [
    {
      title: "Healthier Living Environment",
      description: "Remove allergens, dust, and contaminants for better indoor air quality",
      items: [
        "Reduced allergies and asthma symptoms",
        "Less dust in your home",
        "Elimination of odors"
      ]
    },
    {
      title: "Energy Savings",
      description: "Improve HVAC efficiency and reduce energy consumption",
      items: [
        "Lower utility bills",
        "Better airflow",
        "Extended system life"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Clean Air Ducts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialBenefits;