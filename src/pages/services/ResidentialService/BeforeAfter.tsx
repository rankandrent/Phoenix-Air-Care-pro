import React from 'react';

const BeforeAfter = () => {
  const images = [
    {
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Main Return Vent"
    },
    {
      before: "https://images.unsplash.com/photo-1582247371669-0d85a8d06d7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1582247371669-0d85a8d06d7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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