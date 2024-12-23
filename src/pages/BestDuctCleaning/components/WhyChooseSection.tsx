import React from 'react';
import { Shield, Award, Wrench, Users, Clock, Check } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Licensed & Certified",
      description: "NADCA certified technicians with proper licensing and insurance"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Top-Rated Service",
      description: "Consistently rated 5 stars by satisfied customers"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Advanced Equipment",
      description: "State-of-the-art cleaning technology and tools"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Experienced professionals with extensive training"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Response",
      description: "Same-day service and flexible scheduling"
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction or your money back"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why We're Rated the Best Air Duct Cleaning Service
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;