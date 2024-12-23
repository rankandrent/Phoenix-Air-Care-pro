import React from 'react';
import { Shield, Heart, Target, Users } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in every service we provide."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality",
      description: "Our commitment to excellence ensures the highest standard of service."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Reliability",
      description: "Count on us to deliver consistent, dependable service every time."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Your satisfaction and comfort are our top priorities."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-50 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-blue-600">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueProposition;