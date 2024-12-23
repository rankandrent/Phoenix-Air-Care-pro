import React from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryUpload from './GalleryUpload';
import { useGallery } from './useGallery';

const GallerySection = () => {
  const { images, uploadImages, isUploading } = useGallery();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Work Gallery</h2>
          <p className="text-gray-600">View our recent air duct cleaning projects in Phoenix</p>
        </div>
        
        <GalleryUpload onUpload={uploadImages} isUploading={isUploading} />
        <GalleryGrid images={images} />
      </div>
    </section>
  );
};

export default GallerySection;