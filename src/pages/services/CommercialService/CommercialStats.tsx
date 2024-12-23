import React from 'react';
import { Building2, Users2, Clock, Award } from 'lucide-react';

const CommercialStats = () => {
  const stats = [
    {
      icon: <Building2 className="h-6 w-6" />,
      value: "1000+",
      label: "Commercial Projects"
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "24/7",
      label: "Emergency Service"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommercialStats;