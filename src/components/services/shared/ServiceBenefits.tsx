import React from 'react';
import { Check } from 'lucide-react';

interface ServiceBenefitsProps {
  title?: string;
  benefits: string[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ 
  title = "Benefits of Our Service",
  benefits 
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-12 mb-20">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-green-100 p-1 rounded-full mr-3">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;