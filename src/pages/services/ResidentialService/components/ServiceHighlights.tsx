import React from 'react';
import { Shield, Star, Clock, Tool, Users, Check } from 'lucide-react';

const ServiceHighlights = () => {
  const highlights = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Full coverage for your peace of mind"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "5-Star Service",
      description: "Consistently top-rated by customers"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Same-Day Service",
      description: "Quick response when you need it"
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Advanced Equipment",
      description: "Latest cleaning technology"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "NADCA certified technicians"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction or your money back"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;