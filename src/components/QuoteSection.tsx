import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get a Free Quote</h2>
            <p className="text-xl text-white/90">
              Request your free estimate for professional air duct cleaning services
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
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

export default QuoteSection;