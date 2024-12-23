import React from 'react';
import { Search, Wrench, Fan, CheckCircle } from 'lucide-react';

const CleaningProcess = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Initial Inspection",
      description: "Thorough video inspection of your entire duct system",
      details: [
        "Camera inspection of all ducts",
        "Contamination assessment",
        "System evaluation"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Setup & Preparation",
      description: "Professional setup of cleaning equipment",
      details: [
        "Protection of your home",
        "Equipment preparation",
        "Negative air pressure setup"
      ]
    },
    {
      icon: <Fan className="h-8 w-8" />,
      title: "Deep Cleaning",
      description: "Comprehensive cleaning of entire system",
      details: [
        "Power vacuum cleaning",
        "Mechanical agitation",
        "Air washing"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Final Verification",
      description: "Complete system check and documentation",
      details: [
        "Video verification",
        "System testing",
        "Final inspection"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Professional Cleaning Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-6">
                {index + 1}
              </div>
              <div className="bg-white pt-12 pb-8 px-6 rounded-lg shadow-md h-full border border-gray-100">
                <div className="text-blue-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;