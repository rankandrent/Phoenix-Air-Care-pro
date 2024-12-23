import React from 'react';
import { Phone } from 'lucide-react';

export const COMPANY_PHONE = '877-317-3997';

const ContactInfo = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-blue-600">
      <Phone className="h-5 w-5" />
      <a href={`tel:${COMPANY_PHONE}`} className="text-lg font-semibold hover:text-blue-700">
        {COMPANY_PHONE}
      </a>
    </div>
  );
};

export default ContactInfo;