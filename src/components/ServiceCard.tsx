import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import type { IconType } from './ServiceIcon';

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: IconType;
  path: string;
}

const ServiceCard = ({ title, description, iconType, path }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <div className="text-blue-600 mb-4">
        <ServiceIcon type={iconType} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link 
          to={path} 
          className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors border border-blue-600 rounded-md px-4 py-2"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md px-4 py-2"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;