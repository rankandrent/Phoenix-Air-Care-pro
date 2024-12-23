import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceIcon } from '../ServiceIcon';
import type { IconType } from '../ServiceIcon';

interface RelatedService {
  title: string;
  description: string;
  icon: IconType;
  path: string;
}

interface RelatedServicesProps {
  currentPath: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentPath }) => {
  const allServices: RelatedService[] = [
    {
      title: "HVAC System Cleaning",
      description: "Complete cleaning and maintenance of HVAC systems",
      icon: "fan",
      path: "/services/hvac"
    },
    {
      title: "Sanitization Services",
      description: "Professional sanitization for healthier indoor air",
      icon: "shield",
      path: "/services/sanitization"
    },
    {
      title: "Maintenance Programs",
      description: "Regular maintenance plans for optimal performance",
      icon: "settings",
      path: "/services/maintenance"
    }
  ];

  const relatedServices = allServices.filter(service => service.path !== currentPath);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.path}
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;