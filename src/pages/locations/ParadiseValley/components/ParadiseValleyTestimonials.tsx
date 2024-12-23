import React from 'react';
import { Star, Quote } from 'lucide-react';

const ParadiseValleyTestimonials = () => {
  const testimonials = [
    {
      name: "Michael R.",
      location: "Paradise Valley",
      text: "Outstanding service for our estate's air duct system. The team was professional, thorough, and respectful of our property. Highly recommended!",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Elizabeth S.",
      location: "Paradise Valley",
      text: "We've used their services for years to maintain our home's air quality. Always reliable, professional, and deliver excellent results.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "David M.",
      location: "Paradise Valley",
      text: "Expert service from start to finish. They took great care with our custom HVAC system and improved our air quality significantly.",
      rating: 5,
      date: "January 2024"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Paradise Valley Residents Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <Quote className="h-8 w-8 text-blue-600 mb-4" />
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
              <p className="text-sm text-gray-400">{testimonial.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParadiseValleyTestimonials;