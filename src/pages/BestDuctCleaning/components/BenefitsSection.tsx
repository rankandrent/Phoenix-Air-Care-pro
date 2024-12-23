import React from 'react';
import { Heart, Wind, Home, ThermometerSun } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Health Benefits",
      items: [
        "Reduced allergies and asthma symptoms",
        "Decreased respiratory issues",
        "Better sleep quality",
        "Improved overall health"
      ]
    },
    {
      icon: <Wind className="h-12 w-12" />,
      title: "Air Quality",
      items: [
        "Elimination of dust and allergens",
        "Removal of pet dander",
        "Reduced indoor air pollution",
        "Fresh, clean air throughout"
      ]
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Benefits",
      items: [
        "Less dust accumulation",
        "Improved HVAC efficiency",
        "Extended system lifespan",
        "Lower energy bills"
      ]
    },
    {
      icon: <ThermometerSun className="h-12 w-12" />,
      title: "Comfort Benefits",
      items: [
        "Better temperature control",
        "Improved airflow",
        "Consistent heating/cooling",
        "Enhanced comfort"
      ]
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Benefits of Choosing the Best
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default BenefitsSection;