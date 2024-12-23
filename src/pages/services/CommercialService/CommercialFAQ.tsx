import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CommercialFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should commercial air ducts be cleaned?",
      answer: "The National Air Duct Cleaners Association (NADCA) recommends commercial air duct cleaning every 1-3 years, depending on factors such as building use, occupancy levels, and local environmental conditions. High-traffic facilities or buildings in dusty areas may require more frequent cleaning."
    },
    {
      question: "Will the cleaning process disrupt our business operations?",
      answer: "We minimize disruption by offering flexible scheduling options, including after-hours and weekend service. Our team works efficiently and can clean sections of your facility at a time to maintain business continuity. We'll create a custom plan that works around your schedule."
    },
    {
      question: "Do you provide documentation for building compliance?",
      answer: "Yes, we provide detailed documentation of all services performed, including before and after photos, inspection reports, and maintenance recommendations. This documentation helps maintain compliance with building codes and can be used for insurance purposes."
    },
    {
      question: "What types of commercial buildings do you service?",
      answer: "We service all types of commercial properties, including office buildings, retail spaces, healthcare facilities, schools, hotels, restaurants, warehouses, and manufacturing facilities. Our equipment and techniques are adaptable to various building sizes and HVAC system configurations."
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-left">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialFAQ;