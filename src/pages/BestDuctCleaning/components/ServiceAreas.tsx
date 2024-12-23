import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    {
      region: "Phoenix Metro",
      areas: ["Downtown Phoenix", "North Phoenix", "South Phoenix", "Ahwatukee"]
    },
    {
      region: "East Valley",
      areas: ["Scottsdale", "Mesa", "Chandler", "Gilbert", "Tempe"]
    },
    {
      region: "West Valley",
      areas: ["Glendale", "Peoria", "Surprise", "Goodyear"]
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Best Air Duct Cleaning Near You
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">{area.region}</h3>
            </div>
            <ul className="space-y-2">
              {area.areas.map((location, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreas;