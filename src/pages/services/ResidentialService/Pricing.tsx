import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Standard Service Package</h3>
          <p className="text-lg opacity-90">Complete air duct cleaning for your home</p>
        </div>
        <div className="p-8">
          <div className="grid gap-4 mb-8">
            {[
              "Up to 10 vents",
              "Main return cleaning",
              "System inspection",
              "Before & after photos",
              "90-day guarantee"
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors w-full">
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;