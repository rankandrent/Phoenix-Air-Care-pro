import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Michael R.",
      location: "Phoenix, AZ",
      text: "Best air duct cleaning service I've ever used! The technicians were professional, thorough, and took the time to explain everything.",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Sarah L.",
      location: "Scottsdale, AZ",
      text: "Incredible service from start to finish. They showed up on time, did an amazing job, and left my home cleaner than when they arrived.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "David K.",
      location: "Mesa, AZ",
      text: "Finally found the best air duct cleaning service in Phoenix! Their attention to detail and customer service is unmatched.",
      rating: 5,
      date: "January 2024"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Makes Us the Best - Customer Reviews
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <Quote className="h-8 w-8 text-blue-600 mb-4" />
            <p className="text-gray-600 mb-4">{review.text}</p>
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.location}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;