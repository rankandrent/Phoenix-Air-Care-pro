import React from 'react';
import { AlertCircle } from 'lucide-react';
import { COMPANY_PHONE } from '../ContactInfo';

const EmergencyBanner = () => {
  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <AlertCircle className="h-5 w-5 mr-2" />
        <span>24/7 Emergency Service Available - Call </span>
        <a href={`tel:${COMPANY_PHONE}`} className="font-bold ml-1 hover:underline">
          {COMPANY_PHONE}
        </a>
      </div>
    </div>
  );
};

export default EmergencyBanner;