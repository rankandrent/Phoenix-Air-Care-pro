import React from 'react';
import { Heart, Wind, Home, ThermometerSun } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Health Benefits",
      items: [
        "Improved indoor air quality",
        "Reduced allergens and dust",
        "Healthier living environment",
        "Better respiratory health"
      ]
    },
    {
      icon: <Wind className="h-12 w-12" />,
      title: "System Benefits",
      items: [
        "Enhanced HVAC efficiency",
        "Extended equipment life",
        "Better airflow",
        "Lower energy costs"
      ]
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Benefits",
      items: [
        "Cleaner living spaces",
        "Fresher indoor air",
        "Reduced dust buildup",
        "Improved home value"
      ]
    },
    {
      icon: <ThermometerSun className="h-12 w-12" />,
      title: "Comfort Benefits",
      items: [
        "Odor elimination",
        "Fresher carpet smell",
        "Even temperature distribution",
        "Enhanced comfort"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12">Service Benefits</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
            <ul className="space-y-2">
              {benefit.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;