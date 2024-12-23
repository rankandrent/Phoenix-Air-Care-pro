import React from 'react';
import { X } from 'lucide-react';
import type { GalleryImage } from '../../data/galleryImages';

interface ImageLightboxProps {
  image: GalleryImage;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X className="h-8 w-8" />
      </button>
      
      <div className="max-w-4xl mx-auto px-4" onClick={e => e.stopPropagation()}>
        <img
          src={image.url}
          alt={image.caption}
          className="max-h-[80vh] w-auto mx-auto rounded-lg"
        />
        <div className="text-white text-center mt-4">
          <h3 className="text-xl font-semibold mb-2">{image.caption}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;