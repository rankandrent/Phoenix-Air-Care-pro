import React from 'react';
import { Shield, Fan, Wrench, Users } from 'lucide-react';

const ScottsdaleContent = () => {
  // ... rest of the component code remains the same, just replace Tool with Wrench in the JSX
  return (
    <div className="py-16">
      {/* Previous code remains the same until the icon section */}
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
          <p className="text-gray-600 text-sm">Scottsdale-based experts</p>
        </div>
      </div>
      {/* Rest of the component remains the same */}
    </div>
  );
};

export default ScottsdaleContent;