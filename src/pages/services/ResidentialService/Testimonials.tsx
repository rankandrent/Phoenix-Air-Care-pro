import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John D.",
      location: "Phoenix, AZ",
      text: "Excellent service! The technicians were professional and thorough. My home feels fresher and my allergies have improved.",
      rating: 5
    },
    {
      name: "Sarah M.",
      location: "Scottsdale, AZ",
      text: "Very impressed with the before and after photos. They took the time to explain everything and did a great job.",
      rating: 5
    },
    {
      name: "Mike R.",
      location: "Mesa, AZ",
      text: "Fair pricing and great results. I noticed an immediate difference in air quality after the service.",
      rating: 5
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;