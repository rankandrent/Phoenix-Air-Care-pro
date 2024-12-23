import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fan, Menu, X } from 'lucide-react';
import ContactInfo from '../ContactInfo';
import MegaMenu from '../navigation/MegaMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Fan className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Phoenix Air Care</span>
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Home
            </Link>
            <MegaMenu />
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`${isActive('/blog') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ContactInfo />
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`${isActive('/services') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className={`${isActive('/blog') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;