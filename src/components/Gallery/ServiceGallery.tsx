import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../../data/galleryImages';
import type { GalleryImage } from '../../data/galleryImages';
import ImageLightbox from './ImageLightbox';

const ServiceGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Work Gallery</h2>
          <p className="text-gray-600">See our professional air duct cleaning services in action</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <h3 className="text-lg font-semibold mb-1">{image.caption}</h3>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <ImageLightbox
            image={galleryImages[selectedImage]}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default ServiceGallery;