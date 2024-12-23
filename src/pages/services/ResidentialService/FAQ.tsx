import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I have my air ducts cleaned?",
      answer: "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3-5 years. However, homes with pets, smokers, or recent renovations may need more frequent cleaning."
    },
    {
      question: "How long does the cleaning process take?",
      answer: "A typical residential air duct cleaning service takes 2-4 hours, depending on the size of your home and the complexity of your HVAC system."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we offer a 90-day satisfaction guarantee on all our residential duct cleaning services. If you're not completely satisfied, we'll return to address any concerns at no additional cost."
    },
    {
      question: "Are your technicians certified?",
      answer: "Yes, all our technicians are NADCA certified and undergo regular training to stay current with industry best practices and safety standards."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
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

export default FAQ;