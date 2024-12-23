import React from 'react';
import { X } from 'lucide-react';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Close popup"
    >
      <X className="h-6 w-6" />
    </button>
  );
};

export default CloseButton;