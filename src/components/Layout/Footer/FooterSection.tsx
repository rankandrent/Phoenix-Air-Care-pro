import React from 'react';
import { Link } from 'react-router-dom';
import { Fan, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_PHONE } from '../../ContactInfo';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Fan className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Phoenix Air Care</span>
            </div>
            <p className="mb-4">Professional air duct cleaning services in Phoenix, Arizona. Licensed, insured, and trusted since 2008.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link to="/scottsdale" className="hover:text-blue-500">Scottsdale</Link></li>
              <li><Link to="/paradise-valley" className="hover:text-blue-500">Paradise Valley</Link></li>
              <li><Link to="/phoenix" className="hover:text-blue-500">Phoenix</Link></li>
              <li><Link to="/mesa" className="hover:text-blue-500">Mesa</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/Residential-Duct-Cleaning" className="hover:text-blue-500">Residential Duct Cleaning</Link></li>
              <li><Link to="/Commercial-Duct-Cleaning" className="hover:text-blue-500">Commercial Duct Cleaning</Link></li>
              <li><Link to="/HVAC-System-Cleaning" className="hover:text-blue-500">HVAC System Cleaning</Link></li>
              <li><Link to="/Emergency-Services" className="hover:text-blue-500">Emergency Services</Link></li>
              <li><Link to="/Maintenance-Programs" className="hover:text-blue-500">Maintenance Programs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-blue-500">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@phoenixaircare.com" className="hover:text-blue-500">info@phoenixaircare.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>3305 E Greenway Rd #429<br />Phoenix, AZ 85032</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Phoenix Air Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;