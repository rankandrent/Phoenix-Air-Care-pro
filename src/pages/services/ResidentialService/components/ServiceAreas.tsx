import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    {
      region: "Central Phoenix",
      neighborhoods: [
        "Arcadia",
        "Biltmore",
        "Camelback Corridor",
        "Downtown Phoenix"
      ]
    },
    {
      region: "North Phoenix",
      neighborhoods: [
        "Desert Ridge",
        "Paradise Valley",
        "Moon Valley",
        "North Mountain"
      ]
    },
    {
      region: "East Valley",
      neighborhoods: [
        "Scottsdale",
        "Mesa",
        "Chandler",
        "Gilbert"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-lg mb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Service Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                {area.region}
              </h3>
              <ul className="space-y-2">
                {area.neighborhoods.map((neighborhood, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">
          Don't see your area? Contact us - we likely serve your location!
        </p>
      </div>
    </section>
  );
};

export default ServiceAreas;