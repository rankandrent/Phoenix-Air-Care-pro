import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ServicesList from './ServicesList';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>Services</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 w-[800px] bg-white shadow-xl rounded-lg mt-2 p-6"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ServicesList />
        </div>
      )}
    </div>
  );
};

export default MegaMenu;