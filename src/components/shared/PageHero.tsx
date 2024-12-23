import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE } from '../ContactInfo';

interface PageHeroProps {
  title: string;
  description: string;
  showButtons?: boolean;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  description, 
  showButtons = true,
  children 
}) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">{description}</p>
          {showButtons && (
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Call {COMPANY_PHONE}
              </a>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;