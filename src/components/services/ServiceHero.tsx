import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Clock } from 'lucide-react';
import { COMPANY_PHONE } from '../ContactInfo';

const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Air Duct Cleaning Services
            </h1>
            <p className="text-xl mb-8">
              Expert air duct cleaning for homes and businesses in Phoenix. 
              Licensed technicians, state-of-the-art equipment, and guaranteed satisfaction.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 mr-2" />
                Licensed & Insured
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-5 w-5 mr-2" />
                5-Star Rated
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 mr-2" />
                Same-Day Service
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Call {COMPANY_PHONE}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Air Duct Cleaning Service"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;