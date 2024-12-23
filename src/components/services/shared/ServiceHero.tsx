import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Clock } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  badges?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  title, 
  description, 
  image,
  badges = [
    { icon: <Shield className="h-4 w-4" />, text: 'Licensed & Insured' },
    { icon: <Star className="h-4 w-4" />, text: '5-Star Rated Service' },
    { icon: <Clock className="h-4 w-4" />, text: 'Same-Day Service' }
  ]
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <div className="flex flex-wrap gap-4 mb-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
              <span className="mr-2">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceHero;