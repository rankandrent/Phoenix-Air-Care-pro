import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LocationLinks = () => {
  const locations = [
    { name: 'Scottsdale', path: '/scottsdale' },
    { name: 'Paradise Valley', path: '/paradise-valley' },
    { name: 'Mesa', path: '/mesa' }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
      <div className="space-y-3">
        {locations.map((location) => (
          <Link
            key={location.path}
            to={location.path}
            className="flex items-center text-gray-600 hover:text-blue-600 group"
          >
            <MapPin className="h-4 w-4 mr-2" />
            <span>Air Duct Cleaning in {location.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocationLinks;