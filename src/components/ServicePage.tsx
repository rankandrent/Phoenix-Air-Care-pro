import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

interface ServicePageProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  image,
  features,
  benefits
}) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 inline-block"
            >
              Get a Quote
            </Link>
          </div>
          <div>
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Service Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Request Service</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;