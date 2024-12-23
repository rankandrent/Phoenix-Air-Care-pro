import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImagesSelected: (files: FileList) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onImagesSelected(files);
    }
  };

  return (
    <div className="mb-8 text-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Upload className="w-5 h-5 mr-2" />
        Select Service Images
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Select up to 15 images from your device
      </p>
    </div>
  );
};

export default ImageUpload;