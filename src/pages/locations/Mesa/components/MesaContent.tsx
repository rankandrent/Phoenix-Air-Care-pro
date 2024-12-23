import React from 'react';
import { Shield, Fan, Wrench, Users } from 'lucide-react';

const MesaContent = () => {
  return (
    <div className="py-16">
      <div className="grid md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-blue-50 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h4 className="font-semibold mb-2">Licensed & Insured</h4>
          <p className="text-gray-600 text-sm">Full coverage for your peace of mind</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-50 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Fan className="h-8 w-8 text-blue-600" />
          </div>
          <h4 className="font-semibold mb-2">Advanced Equipment</h4>
          <p className="text-gray-600 text-sm">Latest cleaning technology</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-50 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Wrench className="h-8 w-8 text-blue-600" />
          </div>
          <h4 className="font-semibold mb-2">Expert Service</h4>
          <p className="text-gray-600 text-sm">NADCA certified technicians</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-50 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h4 className="font-semibold mb-2">Local Team</h4>
          <p className="text-gray-600 text-sm">Mesa-based experts</p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8">Air Duct Cleaning in Mesa, AZ</h2>
        <p className="text-gray-600 mb-6">
          As Mesa's trusted air duct cleaning service, we understand the unique challenges that desert living presents 
          to your HVAC system. Our comprehensive cleaning services help maintain optimal indoor air quality and system 
          efficiency in Mesa's hot climate.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Residential duct cleaning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Commercial HVAC maintenance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Dryer vent cleaning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Air quality improvement
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                15+ years serving Mesa
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                5-star rated service
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Same-day appointments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                100% satisfaction guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesaContent;