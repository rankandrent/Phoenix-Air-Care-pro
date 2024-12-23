import React, { useState, useEffect } from 'react';

interface OfferTimerProps {
  duration: number; // in seconds
}

const OfferTimer: React.FC<OfferTimerProps> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600 mb-1">Offer expires in:</p>
      <div className="font-mono text-lg font-bold text-blue-600">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default OfferTimer;