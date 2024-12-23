import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Inspection",
      description: "Complete visual inspection of your duct system"
    },
    {
      number: "02",
      title: "Setup",
      description: "Preparation and equipment setup for cleaning"
    },
    {
      number: "03",
      title: "Cleaning",
      description: "Thorough cleaning using advanced equipment"
    },
    {
      number: "04",
      title: "Final Check",
      description: "Quality inspection and system testing"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Cleaning Process</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-6">
              {step.number}
            </div>
            <div className="bg-white pt-12 pb-8 px-6 rounded-lg shadow-md h-full">
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;