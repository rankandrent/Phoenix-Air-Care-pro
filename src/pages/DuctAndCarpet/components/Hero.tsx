import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Clock, Award } from 'lucide-react';
import { COMPANY_PHONE } from '../../../components/ContactInfo';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
              Complete Indoor Cleaning Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Air Duct & Carpet Cleaning Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your indoor environment with our comprehensive cleaning services. 
              NADCA certified technicians, eco-friendly solutions, and guaranteed results.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-blue-300 mb-2" />
                <h3 className="font-semibold">Certified Pros</h3>
                <p className="text-sm text-blue-100">NADCA & IICRC certified</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Sparkles className="h-6 w-6 text-blue-300 mb-2" />
                <h3 className="font-semibold">Deep Clean</h3>
                <p className="text-sm text-blue-100">Advanced equipment</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Clock className="h-6 w-6 text-blue-300 mb-2" />
                <h3 className="font-semibold">Quick Service</h3>
                <p className="text-sm text-blue-100">Same-day available</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Award className="h-6 w-6 text-blue-300 mb-2" />
                <h3 className="font-semibold">Guaranteed</h3>
                <p className="text-sm text-blue-100">100% satisfaction</p>
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

export default Hero;