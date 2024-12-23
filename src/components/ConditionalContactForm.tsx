import React, { useState } from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';

const ConditionalContactForm = () => {
  const [userType, setUserType] = useState<'customer' | 'provider'>('customer');

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md ${
              userType === 'customer'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setUserType('customer')}
          >
            I need service
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              userType === 'provider'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setUserType('provider')}
          >
            I'm a service provider
          </button>
        </div>
      </div>

      {userType === 'customer' ? (
        <div>
          <div className="flex items-center mb-6">
            <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Request Service</h3>
          </div>
          <iframe 
            src="//leads.leadsmartinc.com/?api_key=8a982b9fc74db2f93fd5f65045f5a1e370ca59ff&affiliate_source=umavskhff1&funnel=4&category=8&step=1&buttons=btn-info" 
            width="100%" 
            height="545" 
            frameBorder="0"
            title="Contact Form"
            className="w-full"
          />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center mb-6">
            <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Service Provider Contact</h3>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <a 
              href="https://wa.me/9203207570070" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              +92 320 7570070 (WhatsApp)
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <a 
              href="mailto:creative.om3r@gmail.com"
              className="text-blue-600 hover:text-blue-700"
            >
              creative.om3r@gmail.com
            </a>
          </div>
          <p className="text-gray-600 mt-4">
            Please contact us via WhatsApp or email for business inquiries and partnership opportunities.
          </p>
        </div>
      )}
    </div>
  );
};

export default ConditionalContactForm;