import React from 'react';
import GalleryGrid from '../../../../components/Gallery/GalleryGrid';

const ScottsdaleGallery = () => {
  const images = [
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/cusH3l267neSVZKnsAlfmg/o.jpg",
      caption: "Professional Duct Cleaning in Scottsdale"
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/M0y5eNGWdRDrEtKjuBP1zg/o.jpg",
      caption: "HVAC System Maintenance"
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/WmMhTTOB5Ppv1YQpyXHf6g/o.jpg",
      caption: "Commercial Duct Cleaning"
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/qGHxH0hShkZuGXaNSwzXnA/o.jpg",
      caption: "Residential Air Duct Service"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Work in Scottsdale</h2>
      <GalleryGrid images={images} />
    </section>
  );
};

export default ScottsdaleGallery;