import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the service take?",
      answer: "A combined air duct and carpet cleaning service typically takes 4-6 hours for an average-sized home. The exact duration depends on the size of your home, number of vents, and carpet area to be cleaned."
    },
    {
      question: "Is it safe for children and pets?",
      answer: "Yes, we use eco-friendly, non-toxic cleaning solutions that are safe for children, pets, and people with sensitivities. We recommend keeping pets and children away from the work area during cleaning for their safety and comfort."
    },
    {
      question: "How often should I get these services?",
      answer: "For optimal indoor air quality and cleanliness, we recommend air duct cleaning every 3-5 years and carpet cleaning annually. Homes with pets, allergies, or high traffic may need more frequent cleaning."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we offer a 90-day satisfaction guarantee on all our services. If you're not completely satisfied with the results, we'll return to address any concerns at no additional cost."
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

export default FAQ;