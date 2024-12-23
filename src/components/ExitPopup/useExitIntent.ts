import { useState, useEffect } from 'react';

export const useExitIntent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    let lastMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseY = e.clientY;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown && lastMouseY > 50) {
        timeoutId = window.setTimeout(() => {
          setIsVisible(true);
          setHasBeenShown(true);
          localStorage.setItem('exitPopupShown', 'true');
        }, 300);
      }
    };

    // Check if popup has been shown in this session
    const hasBeenShownBefore = localStorage.getItem('exitPopupShown') === 'true';
    if (!hasBeenShownBefore) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [hasBeenShown]);

  return {
    isVisible,
    setIsVisible,
    hasBeenShown
  };
};