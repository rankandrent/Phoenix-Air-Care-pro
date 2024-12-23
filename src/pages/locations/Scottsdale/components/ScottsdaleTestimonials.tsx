import React from 'react';
import { Star, Quote } from 'lucide-react';

const ScottsdaleTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "North Scottsdale",
      text: "Exceptional service! They were prompt, professional, and did an amazing job cleaning our home's air ducts. The difference in air quality is remarkable.",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Robert K.",
      location: "DC Ranch",
      text: "As a property manager in Scottsdale, I've worked with many service providers. This team is by far the most professional and thorough. Highly recommended!",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Jennifer L.",
      location: "Old Town Scottsdale",
      text: "Great experience from start to finish. The technicians were knowledgeable and took the time to explain everything. Our AC is running much more efficiently now.",
      rating: 5,
      date: "January 2024"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Scottsdale Residents Say</h2>
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

export default ScottsdaleTestimonials;