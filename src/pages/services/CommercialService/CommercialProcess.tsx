import React from 'react';

const CommercialProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive inspection of your commercial HVAC system and ductwork"
    },
    {
      number: "02",
      title: "Custom Plan",
      description: "Develop a cleaning strategy that minimizes business disruption"
    },
    {
      number: "03",
      title: "Professional Cleaning",
      description: "Execute thorough cleaning using commercial-grade equipment"
    },
    {
      number: "04",
      title: "Quality Check",
      description: "Final inspection and detailed documentation of service"
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Cleaning Process</h2>
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

export default CommercialProcess;