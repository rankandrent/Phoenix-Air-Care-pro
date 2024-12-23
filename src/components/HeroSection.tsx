import React from 'react';
import { COMPANY_PHONE } from './ContactInfo';

const HeroSection = () => {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4">
            <span className="text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
              Your Local Air Duct Cleaning Experts
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Air Duct Cleaning
              </span>
              <br />
              <span className="relative">
                Near Me in Phoenix
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-white rounded-full"></span>
              </span>
            </h1>
          </div>
          <p className="text-xl mt-8 mb-8 text-blue-100">
            Looking for professional air duct cleaning near you? We're your local experts in Phoenix, Arizona. 
            Trusted by homeowners and businesses for over 15 years. Call {COMPANY_PHONE} for a free quote!
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">Licensed & Insured</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">24/7 Emergency Service</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Free Estimates</span>
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
    </section>
  );
};

export default HeroSection;