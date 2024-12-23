import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';
import { COMPANY_PHONE } from '../../../../components/ContactInfo';

const ParadiseValleyHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
              Your Local Paradise Valley Air Duct Cleaning Experts
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Air Duct Cleaning Near You in Paradise Valley
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Serving Paradise Valley's luxury homes and estates with expert air duct cleaning services. 
              Trusted by local homeowners since 2008.
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
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Call {COMPANY_PHONE}
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get a Free Quote</h2>
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

export default ParadiseValleyHero;