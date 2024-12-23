import React from 'react';
import { Search, Fan, Sparkles, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Inspection",
      description: "Thorough assessment of ducts and carpets",
      details: ["Video inspection", "Condition assessment", "Treatment planning"]
    },
    {
      icon: <Fan className="h-8 w-8" />,
      title: "Duct Cleaning",
      description: "Complete HVAC system cleaning",
      details: ["HEPA filtration", "Power vacuum", "Sanitization"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning and treatment",
      details: ["Steam cleaning", "Stain removal", "Deodorizing"]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Final Check",
      description: "Quality assurance inspection",
      details: ["System testing", "Results verification", "Final walkthrough"]
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-6">
              {index + 1}
            </div>
            <div className="bg-white pt-12 pb-8 px-6 rounded-lg shadow-md h-full">
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
    </section>
  );
};

export default Process;