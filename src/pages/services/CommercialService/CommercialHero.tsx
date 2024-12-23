import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Clock, Building, Tool, Users } from 'lucide-react';
import { COMPANY_PHONE } from '../../../components/ContactInfo';

const CommercialHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Professional Commercial Air Duct Cleaning Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert air duct cleaning solutions for businesses of all sizes. Our certified team ensures clean, healthy air and optimal HVAC performance with minimal disruption.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Shield className="h-6 w-6 mb-2 text-blue-300" />
                <h3 className="font-semibold">Certified Team</h3>
                <p className="text-sm text-blue-100">NADCA certified experts</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Building className="h-6 w-6 mb-2 text-blue-300" />
                <h3 className="font-semibold">All Industries</h3>
                <p className="text-sm text-blue-100">Customized solutions</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Tool className="h-6 w-6 mb-2 text-blue-300" />
                <h3 className="font-semibold">Advanced Tech</h3>
                <p className="text-sm text-blue-100">Latest equipment</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Users className="h-6 w-6 mb-2 text-blue-300" />
                <h3 className="font-semibold">Expert Team</h3>
                <p className="text-sm text-blue-100">Experienced staff</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-semibold"
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

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Commercial Air Duct Cleaning"
              className="rounded-lg shadow-2xl object-cover h-[600px] w-full"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded backdrop-blur-sm">
              <p className="text-sm">
                Our commercial air duct cleaning services maintain optimal indoor air quality for businesses across Phoenix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialHero;