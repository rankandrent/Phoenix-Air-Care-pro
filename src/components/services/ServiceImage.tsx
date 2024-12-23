import React from 'react';

const ServiceImage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/FQiodEBfBqPD3zn9Z4PJHQ/o.jpg"
          alt="Air Duct Cleaning Service"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Professional Air Duct Cleaning</h2>
            <p className="text-lg">
              State-of-the-art equipment and experienced technicians for superior results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImage;