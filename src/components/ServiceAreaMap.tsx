import React from 'react';

const ServiceAreaMap = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Service Areas in Phoenix</h3>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-6">
            We provide comprehensive air duct cleaning services throughout the greater Phoenix metropolitan area, including:
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Central</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Phoenix</li>
                <li>Scottsdale</li>
                <li>Tempe</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">East Valley</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Mesa</li>
                <li>Chandler</li>
                <li>Gilbert</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">North Valley</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Paradise Valley</li>
                <li>Cave Creek</li>
                <li>Carefree</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-4">Service Coverage</h4>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Same-day service available in most areas
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Emergency services 24/7
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              No extra charge for weekend appointments
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Free estimates for all locations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;