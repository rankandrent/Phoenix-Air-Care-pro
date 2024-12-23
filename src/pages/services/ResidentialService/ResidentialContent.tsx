import React from 'react';
import { Shield, Fan, Tool, CheckCircle } from 'lucide-react';

const ResidentialContent = () => {
  return (
    <div className="py-12">
      {/* Core Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Professional Home Air Duct Cleaning</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Fan className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Complete System Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Thorough cleaning of your entire HVAC system, including supply and return vents, main trunk lines, and branch lines.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                HEPA filtration
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Video inspection
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Complete sanitization
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tool className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Advanced Equipment</h3>
            <p className="text-gray-600 mb-4">
              State-of-the-art cleaning equipment and techniques for superior results and maximum system efficiency.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Powerful vacuum systems
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Robotic cleaning tools
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Inspection cameras
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Certified Service</h3>
            <p className="text-gray-600 mb-4">
              NADCA certified technicians with extensive experience in residential air duct cleaning.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Licensed & insured
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Background checked
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Ongoing training
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Schedule Your Home Duct Cleaning</h2>
        <iframe 
          src="//leads.leadsmartinc.com/?api_key=8a982b9fc74db2f93fd5f65045f5a1e370ca59ff&affiliate_source=umavskhff1&funnel=4&category=8&step=1&buttons=btn-info" 
          width="100%" 
          height="545" 
          frameBorder="0"
          title="Residential Service Quote Form"
          className="w-full"
        />
      </section>
    </div>
  );
};

export default ResidentialContent;