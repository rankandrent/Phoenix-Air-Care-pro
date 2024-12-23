import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Clock } from 'lucide-react';
import { COMPANY_PHONE } from '../../../../components/ContactInfo';

const MesaHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Mesa, Arizona"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
              Your Local Mesa Air Duct Cleaning Experts
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Air Duct Cleaning Near You in Mesa
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Serving East Mesa, West Mesa, and surrounding areas with expert air duct cleaning services. 
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

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Service</h2>
            <iframe 
              src="//leads.leadsmartinc.com/?api_key=8a982b9fc74db2f93fd5f65045f5a1e370ca59ff&affiliate_source=umavskhff1&funnel=4&category=8&step=1&buttons=btn-info" 
              width="100%" 
              height="545" 
              frameBorder="0"
              title="Contact Form"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MesaHero;