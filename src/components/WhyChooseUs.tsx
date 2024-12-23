import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Air Duct Cleaning Services?</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Experienced Technicians",
            description: "Our certified technicians have over 15 years of experience in Phoenix air duct cleaning"
          },
          {
            title: "Advanced Equipment",
            description: "State-of-the-art HEPA filtration and powerful vacuum systems"
          },
          {
            title: "Competitive Pricing",
            description: "Transparent quotes with no hidden fees, starting at competitive rates"
          },
          {
            title: "Comprehensive Service",
            description: "Complete inspection and cleaning of all ductwork components"
          },
          {
            title: "Satisfaction Guaranteed",
            description: "100% satisfaction guarantee on all our services"
          },
          {
            title: "24/7 Availability",
            description: "Emergency services available 24/7 throughout Phoenix"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Check className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;