import React from 'react';
import { Search, Fan, Shield, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Thorough Inspection",
      description: "Complete video inspection of your entire duct system to identify problem areas",
      details: ["Camera inspection", "Contamination assessment", "System evaluation"]
    },
    {
      icon: <Fan className="h-8 w-8" />,
      title: "Advanced Cleaning",
      description: "State-of-the-art equipment and techniques for superior results",
      details: ["HEPA filtration", "Power vacuum", "Mechanical agitation"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sanitization",
      description: "EPA-approved sanitizing agents to eliminate contaminants",
      details: ["Antimicrobial treatment", "Deodorization", "Mold prevention"]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Final inspection and documentation of results",
      details: ["Video verification", "System testing", "Performance check"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Superior Cleaning Process
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
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

export default ProcessSection;