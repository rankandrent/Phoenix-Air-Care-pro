import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Shawn H.",
      role: "Owner & Lead Technician",
      image: "https://s3-media0.fl.yelpcdn.com/photo/Qm7CHmB1En755IjY0unTLQ/ls.jpg",
      description: "Expert in residential and commercial air duct cleaning with over 15 years of experience."
    },
    {
      name: "Jeff B.",
      role: "Senior Technician",
      image: "https://s3-media0.fl.yelpcdn.com/photo/eLwAJC9kAaqD8O-icMbV2w/ls.jpg",
      description: "Specialized in HVAC systems and advanced cleaning techniques."
    },
    {
      name: "Tom C.",
      role: "Service Manager",
      image: "https://s3-media0.fl.yelpcdn.com/photo/Jl1R0Rk-cspRIGcTgnGv6w/ls.jpg",
      description: "Ensures quality service delivery and customer satisfaction."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-3">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;