import React from 'react';
import { CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "NADCA Certified",
      description: "National Air Duct Cleaners Association"
    },
    {
      name: "EPA Lead-Safe",
      description: "Environmental Protection Agency Certified"
    },
    {
      name: "BBB A+ Rating",
      description: "Better Business Bureau Accredited Business"
    },
    {
      name: "ACCA Member",
      description: "Air Conditioning Contractors of America"
    }
  ];

  return (
    <div className="mb-20 bg-gray-50 rounded-lg p-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="font-semibold">{cert.name}</h3>
            </div>
            <p className="text-gray-600 text-sm">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;