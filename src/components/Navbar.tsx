import React from 'react';
import { Link } from 'react-router-dom';
import { Fan } from 'lucide-react';
import ContactInfo from './ContactInfo';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Fan className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Phoenix Air Care</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ContactInfo />
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;