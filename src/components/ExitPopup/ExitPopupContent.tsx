import React from 'react';
import { Tag, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../ContactInfo';
import CloseButton from './CloseButton';
import OfferTimer from './OfferTimer';

interface ExitPopupContentProps {
  onClose: () => void;
}

const ExitPopupContent: React.FC<ExitPopupContentProps> = ({ onClose }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-fade-in">
      <CloseButton onClose={onClose} />

      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform">
          <Tag className="h-8 w-8" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            🎉 Exclusive Offer Inside!
          </h2>
          <p className="text-gray-600">
            Don't leave without your special discount
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
          <div className="text-center">
            <span className="text-4xl font-bold text-blue-600">20% OFF</span>
            <p className="text-gray-700 mt-2">Your Air Duct Cleaning Service</p>
            <OfferTimer duration={900} /> {/* 15 minutes */}
          </div>
        </div>

        <div className="space-y-4">
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold"
          >
            <Phone className="h-5 w-5" />
            Call Now: {COMPANY_PHONE}
          </a>

          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-gray-700">
              ✓ Limited Time Offer
            </p>
            <p className="text-xs text-gray-500">
              *Cannot be combined with other promotions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitPopupContent;