import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50 rounded-lg mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Complete Home Package</h3>
            <p className="text-lg opacity-90">Professional Air Duct Cleaning Service</p>
          </div>
          <div className="p-8">
            <div className="grid gap-4 mb-8">
              {[
                "Complete system inspection",
                "HVAC system cleaning",
                "All vents and returns",
                "Main trunk line cleaning",
                "Sanitization treatment",
                "Before & after photos",
                "90-day satisfaction guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Starting at</p>
              <p className="text-4xl font-bold mb-6">$299</p>
              <Link 
                to="/contact"
                className="block w-full bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Schedule Service
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                *Price may vary based on system size and condition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;