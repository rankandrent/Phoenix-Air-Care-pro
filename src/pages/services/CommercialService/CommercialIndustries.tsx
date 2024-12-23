import React from 'react';
import { Building, ShoppingBag, Hotel, School, Hospital, Factory } from 'lucide-react';

const CommercialIndustries = () => {
  const industries = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Office Buildings",
      description: "Multi-story office complexes and corporate centers"
    },
    {
      icon: <ShoppingBag className="h-12 w-12" />,
      title: "Retail Spaces",
      description: "Shopping centers, malls, and retail stores"
    },
    {
      icon: <Hotel className="h-12 w-12" />,
      title: "Hospitality",
      description: "Hotels, resorts, and restaurants"
    },
    {
      icon: <School className="h-12 w-12" />,
      title: "Educational",
      description: "Schools, universities, and daycare centers"
    },
    {
      icon: <Hospital className="h-12 w-12" />,
      title: "Healthcare",
      description: "Hospitals, clinics, and medical offices"
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial",
      description: "Warehouses, factories, and manufacturing facilities"
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-blue-600 mb-4 flex justify-center">{industry.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
            <p className="text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialIndustries;