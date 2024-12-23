import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../../../../components/ContactInfo';

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm mb-4">
          Your Local Air Duct Cleaning Experts Near You
        </span>
        <h1 className="text-4xl font-bold mb-6">Residential Air Duct Cleaning Near Me in Phoenix</h1>
        <p className="text-lg text-gray-600 mb-8">
          Looking for professional air duct cleaning near you? We're your local experts serving Phoenix and surrounding areas. 
          Get cleaner air and improve your HVAC system's efficiency with our comprehensive cleaning service.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
            <Shield className="h-4 w-4 mr-2" />
            Local Licensed Experts
          </div>
          <div className="flex items-center text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 mr-2" />
            5-Star Local Service
          </div>
        </div>
        <div className="flex items-center mb-8 text-xl font-semibold text-blue-600">
          <Phone className="h-5 w-5 mr-2" />
          <a href={`tel:${COMPANY_PHONE}`} className="hover:text-blue-700">
            Call Your Local Expert: {COMPANY_PHONE}
          </a>
        </div>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
      <div className="relative">
        <img
          src="https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-1.jpg"
          alt="Local Air Duct Cleaning Service"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded backdrop-blur-sm">
          <p className="text-sm">
            Professional air duct cleaning service near you in Phoenix and surrounding areas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;