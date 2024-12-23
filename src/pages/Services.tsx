import React from 'react';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceGallery from '../components/Gallery/ServiceGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import QuoteSection from '../components/QuoteSection';

const Services = () => {
  return (
    <div>
      {/* Improved Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Air Duct Services in Phoenix
              </h1>
              <p className="text-xl mb-8">
                From residential to commercial, our comprehensive air duct services ensure clean, 
                healthy air and optimal HVAC performance. Licensed technicians, state-of-the-art 
                equipment, and guaranteed satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-full">Licensed & Insured</div>
                <div className="bg-white/10 px-4 py-2 rounded-full">Same-Day Service</div>
                <div className="bg-white/10 px-4 py-2 rounded-full">Free Estimates</div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://s3-media0.fl.yelpcdn.com/bphoto/FQiodEBfBqPD3zn9Z4PJHQ/o.jpg"
                alt="Air Duct Cleaning Service"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <ServiceGrid />
        <div className="mt-20">
          <WhyChooseUs />
        </div>
        <div className="mt-20">
          <ServiceGallery />
        </div>
      </div>
      <QuoteSection />
    </div>
  );
};

export default Services;