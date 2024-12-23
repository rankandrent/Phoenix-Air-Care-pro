import React from 'react';
import { Check } from 'lucide-react';

const CommercialBenefits = () => {
  const benefits = [
    {
      title: "Improved Indoor Air Quality",
      description: "Remove contaminants, allergens, and pollutants from your commercial space"
    },
    {
      title: "Energy Cost Savings",
      description: "Reduce HVAC system strain and lower monthly energy bills"
    },
    {
      title: "Extended Equipment Life",
      description: "Prevent wear and tear on your HVAC system components"
    },
    {
      title: "Healthier Work Environment",
      description: "Create a cleaner, more comfortable space for employees and customers"
    },
    {
      title: "Compliance & Documentation",
      description: "Meet building codes and maintain proper documentation"
    },
    {
      title: "Increased Productivity",
      description: "Better air quality leads to improved employee performance"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 rounded-lg px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Business</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialBenefits;