import { useState } from 'react';
import { GalleryImage } from './types';

export const useGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const uploadImages = async (files: FileList) => {
    setIsUploading(true);
    
    // Convert FileList to array for easier handling
    const fileArray = Array.from(files);
    
    // Limit to 15 images
    const selectedFiles = fileArray.slice(0, 15);
    
    try {
      // Create object URLs for preview
      const newImages: GalleryImage[] = selectedFiles.map(file => ({
        url: URL.createObjectURL(file),
        caption: file.name
      }));
      
      setImages(prev => [...prev, ...newImages]);
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    images,
    uploadImages,
    isUploading
  };
};

export default useGallery;