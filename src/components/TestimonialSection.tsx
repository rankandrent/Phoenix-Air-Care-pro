import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  date: string;
  text: string;
  response?: {
    name: string;
    text: string;
    date: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "John V.",
    location: "Chandler, AZ",
    date: "Oct 11, 2024",
    text: "Integrity Duct cleaning came to my home on 10/11/2024 and cleaned all my duct work including all registers returns fans and laundry dryer vent. The team of 3 people were very professional polite and very skilled with excellent clean up. Once completed, A final tour of our home with pictures were provided to ensure we got what we paid for at a very reasonable price... 5 Star company with plenty of integrity",
    response: {
      name: "Doug S.",
      text: "John thank you for your wonderful review. It means a lot and really helps our business.",
      date: "Oct 11, 2024"
    }
  },
  {
    name: "James S.",
    location: "Gilbert, AZ",
    date: "Aug 19, 2024",
    text: "Brian and his team of tech's took care of everything and reduced the airflow loss by 80%.....that was crazy to think how much air was just trying to cool the attic space. They provided all of the information and our tenant was happy that the system was working better!",
    response: {
      name: "Doug S.",
      text: "James, Thank you so much for the five star review! I'm glad we could help you with with our proprietary air duct cleaning process and Aeroseal air duct sealing for your home.",
      date: "Aug 19, 2024"
    }
  },
  {
    name: "Elisa T.",
    location: "St Charles, MO",
    date: "Nov 30, 2024",
    text: "My tech arrived late but then I found out they drive across multiple states to get to you. He did a great job and the Groupon price was absolutely unbeatable. I'm very happy with my experience and recommend! Just be sure to give yourself some extra time."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-600 mb-2" />
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
              {testimonial.response && (
                <div className="mt-4 pt-4 border-t border-gray-100 bg-gray-50 p-4 rounded">
                  <p className="text-sm font-semibold">{testimonial.response.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.response.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.response.date}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;