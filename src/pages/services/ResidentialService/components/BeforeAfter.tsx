import React from 'react';

const BeforeAfter = () => {
  const images = [
    {
      before: "https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-1.jpg",
      after: "https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-2.jpg",
      title: "Main Return Vent"
    },
    {
      before: "https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-3.jpg",
      after: "https://admirable-gumdrop-3ad5f6.netlify.app/images/service-inspection.jpg",
      title: "Supply Duct"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Before & After Results</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{image.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Before</p>
                <img 
                  src={image.before} 
                  alt={`${image.title} Before`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">After</p>
                <img 
                  src={image.after} 
                  alt={`${image.title} After`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfter;