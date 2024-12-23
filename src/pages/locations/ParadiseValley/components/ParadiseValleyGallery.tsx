import React from 'react';
import GalleryGrid from '../../../../components/Gallery/GalleryGrid';

const ParadiseValleyGallery = () => {
  const images = [
    {
      url: "https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-1.jpg",
      caption: "Professional Duct Cleaning in Paradise Valley"
    },
    {
      url: "https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-2.jpg",
      caption: "HVAC System Maintenance"
    },
    {
      url: "https://admirable-gumdrop-3ad5f6.netlify.app/images/before-after-3.jpg",
      caption: "Luxury Home Air Duct Service"
    },
    {
      url: "https://admirable-gumdrop-3ad5f6.netlify.app/images/service-inspection.jpg",
      caption: "Estate HVAC Maintenance"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Work in Paradise Valley</h2>
      <GalleryGrid images={images} />
    </section>
  );
};

export default ParadiseValleyGallery;