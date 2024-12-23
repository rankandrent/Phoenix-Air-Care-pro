import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your air duct cleaning service the best?",
      answer: "We're consistently rated as the best due to our NADCA certified technicians, advanced equipment, comprehensive cleaning process, and 100% satisfaction guarantee. Our team uses state-of-the-art HEPA filtration and video inspection technology to ensure superior results."
    },
    {
      question: "How often should I have my air ducts cleaned?",
      answer: "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3-5 years. However, homes with pets, smokers, or recent renovations may need more frequent cleaning. We can assess your specific needs during inspection."
    },
    {
      question: "What's included in your premium air duct cleaning service?",
      answer: "Our premium service includes complete system inspection with video documentation, thorough cleaning of all supply and return vents, main trunk lines, and branch lines, HEPA filtration, sanitization treatment, and a final quality assurance check with before/after documentation."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes! As the best air duct cleaning service in Phoenix, we understand urgency and offer same-day service appointments. Contact us early in the day for the best availability."
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
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
    </section>
  );
};

export default FAQSection;