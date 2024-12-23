import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Service Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceFeatures;