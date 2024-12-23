import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Building2, Fan, Wind, 
  Gauge, Shield, AlertCircle, Settings,
  Droplets, Wrench, MapPin, Sparkles
} from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      category: "Our Services",
      items: [
        {
          icon: <Home className="h-5 w-5" />,
          title: "Best Air Duct Cleaning",
          description: "Top-rated duct cleaning service",
          path: "/best-air-duct-cleaning-near-me"
        },
        {
          icon: <Sparkles className="h-5 w-5" />,
          title: "Duct & Carpet Cleaning",
          description: "Complete cleaning solutions",
          path: "/air-duct-and-carpet-cleaning"
        },
        {
          icon: <Building2 className="h-5 w-5" />,
          title: "Commercial Service",
          description: "Business solutions",
          path: "/Commercial-Duct-Cleaning"
        },
        {
          icon: <Fan className="h-5 w-5" />,
          title: "HVAC Cleaning",
          description: "System maintenance",
          path: "/HVAC-System-Cleaning"
        }
      ]
    },
    // ... rest of the categories
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {services.map((category, index) => (
        <div key={index}>
          <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
          <div className="space-y-4">
            {category.items.map((service, serviceIndex) => (
              <Link
                key={serviceIndex}
                to={service.path}
                className="flex items-start space-x-3 group hover:bg-blue-50 p-2 rounded-lg transition-colors"
              >
                <div className="text-blue-600">{service.icon}</div>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    {service.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {service.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;