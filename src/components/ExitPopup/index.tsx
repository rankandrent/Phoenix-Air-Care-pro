import React from 'react';
import { useExitIntent } from './useExitIntent';
import ExitPopupContent from './ExitPopupContent';

const ExitPopup = () => {
  const { isVisible, setIsVisible } = useExitIntent();

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsVisible(false);
        }
      }}
    >
      <ExitPopupContent onClose={() => setIsVisible(false)} />
    </div>
  );
};

export default ExitPopup;