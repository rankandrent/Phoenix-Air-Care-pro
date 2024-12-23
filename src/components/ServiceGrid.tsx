import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const ServiceGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          iconType={service.iconType}
          path={service.path}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;