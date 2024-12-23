import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GalleryImage } from './types';

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.caption || `Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.caption || 'Gallery image'}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          {selectedImage.caption && (
            <p className="absolute bottom-4 left-0 right-0 text-center text-white">
              {selectedImage.caption}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default GalleryGrid;