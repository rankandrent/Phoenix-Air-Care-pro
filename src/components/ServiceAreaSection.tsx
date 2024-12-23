import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const ServiceAreaSection = () => {
  const serviceAreas = [
    {
      name: "Central Valley",
      areas: [
        { name: "Phoenix", path: "/phoenix", active: false },
        { name: "Scottsdale", path: "/scottsdale", active: true },
        { name: "Paradise Valley", path: "/paradise-valley", active: true }
      ]
    },
    {
      name: "East Valley",
      areas: [
        { name: "Mesa", path: "/mesa", active: false },
        { name: "Chandler", path: "/chandler", active: false },
        { name: "Gilbert", path: "/gilbert", active: false }
      ]
    },
    {
      name: "North Valley",
      areas: [
        { name: "Cave Creek", path: "/cave-creek", active: false },
        { name: "Carefree", path: "/carefree", active: false }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Service Areas in Phoenix</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {serviceAreas.map((region, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
              <ul className="space-y-3">
                {region.areas.map((area, areaIndex) => (
                  <li key={areaIndex}>
                    {area.active ? (
                      <Link 
                        to={area.path}
                        className="flex items-center text-blue-600 hover:text-blue-700 group"
                      >
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="font-medium">{area.name}</span>
                        <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ) : (
                      <span className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        {area.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;