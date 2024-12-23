import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Clock } from 'lucide-react';
import { COMPANY_PHONE } from '../../../../components/ContactInfo';

const ScottsdaleHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Scottsdale Luxury Home"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
              Your Local Scottsdale Air Duct Cleaning Experts
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Air Duct Cleaning Near You in Scottsdale
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Serving North Scottsdale, Old Town, and surrounding areas with expert air duct cleaning services. 
              Trusted by local homeowners and businesses since 2008.
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
                className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
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
              src="https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-2.jpg"
              alt="Air Duct Cleaning Service"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScottsdaleHero;