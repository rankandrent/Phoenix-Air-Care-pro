import React from 'react';

const ProcessSection = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Air Duct Cleaning Process</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            step: "1",
            title: "Inspection",
            description: "Complete visual inspection of your duct system"
          },
          {
            step: "2",
            title: "Assessment",
            description: "Detailed assessment of cleaning requirements"
          },
          {
            step: "3",
            title: "Cleaning",
            description: "Thorough cleaning using advanced equipment"
          },
          {
            step: "4",
            title: "Final Check",
            description: "Quality check and system inspection"
          }
        ].map((item, index) => (
          <div key={index} className="relative">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-4 left-4">
              {item.step}
            </div>
            <div className="bg-white pt-8 pb-6 px-6 rounded-lg border border-gray-100 h-full">
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;