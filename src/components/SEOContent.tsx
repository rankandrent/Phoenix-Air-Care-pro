import React from 'react';
import ServiceAreaMap from './ServiceAreaMap';
import WhyChooseUs from './WhyChooseUs';
import ProcessSection from './ProcessSection';

const SEOContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Air Duct Cleaning Near Me in Phoenix, AZ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Looking for professional air duct cleaning near you? Phoenix Air Care is your local trusted provider of expert air duct cleaning services in Phoenix and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Local Air Duct Cleaning Experts</h3>
            <p className="text-gray-600 leading-relaxed">
              Located at 3305 E Greenway Rd #429, Phoenix, AZ 85032, we serve residential and commercial clients 
              throughout the Phoenix metropolitan area. When searching for "air duct cleaning near me," choose the local experts 
              trusted by your neighbors since 2008.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3">Why Choose Your Local Experts?</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Fast response times - we're nearby!
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Knowledge of local air quality challenges
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Same-day service available in your area
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Local reputation and trusted service
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Service Areas Near You</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Central Valley</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Phoenix</li>
                  <li>• Scottsdale</li>
                  <li>• Paradise Valley</li>
                  <li>• Tempe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">East Valley</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mesa</li>
                  <li>• Chandler</li>
                  <li>• Gilbert</li>
                  <li>• Queen Creek</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <WhyChooseUs />
        <ProcessSection />
        <ServiceAreaMap />
      </div>
    </section>
  );
}

export default SEOContent;