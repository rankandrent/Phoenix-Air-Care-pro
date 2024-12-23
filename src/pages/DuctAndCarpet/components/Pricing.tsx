import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      name: "Complete Package",
      price: "499",
      description: "Full air duct and carpet cleaning service",
      features: [
        "Complete HVAC system cleaning",
        "Up to 5 rooms carpet cleaning",
        "Sanitization treatment",
        "Deodorization",
        "Stain protection",
        "90-day guarantee"
      ]
    },
    {
      name: "Air Duct Only",
      price: "299",
      description: "Professional air duct cleaning service",
      features: [
        "Complete system inspection",
        "HEPA filtration",
        "All vents and returns",
        "Main trunk line cleaning",
        "Sanitization treatment",
        "90-day guarantee"
      ]
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Service Packages</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="opacity-90">{pkg.description}</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 mb-2">Starting at</p>
                <p className="text-4xl font-bold">${pkg.price}</p>
              </div>
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Schedule Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;