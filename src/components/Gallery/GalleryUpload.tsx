import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface GalleryUploadProps {
  onUpload: (files: FileList) => void;
  isUploading: boolean;
}

const GalleryUpload: React.FC<GalleryUploadProps> = ({ onUpload, isUploading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onUpload(files);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-center">
        <label className="relative cursor-pointer">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          <div className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <Upload className="h-5 w-5" />
            <span>{isUploading ? 'Uploading...' : 'Upload Images'}</span>
          </div>
        </label>
      </div>
      <p className="mt-2 text-center text-sm text-gray-500">
        Upload up to 15 images (JPG, PNG, WebP)
      </p>
    </div>
  );
};

export default GalleryUpload;