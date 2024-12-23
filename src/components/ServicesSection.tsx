import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
        <div className="text-center mt-12">
          <a href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;