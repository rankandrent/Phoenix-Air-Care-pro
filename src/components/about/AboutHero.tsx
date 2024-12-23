import React from 'react';
import { Shield, Award, Users, Clock, Wrench, ThumbsUp } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Phoenix's Most Trusted Air Duct Cleaning Service
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Since 2008, we've been committed to improving indoor air quality for homes and businesses across Phoenix, Arizona.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/10 p-6 rounded-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Shield className="h-12 w-12 mx-auto animate-pulse" />
            </div>
            <div className="text-2xl font-bold mb-1">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 p-6 rounded-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Users className="h-12 w-12 mx-auto animate-bounce" />
            </div>
            <div className="text-2xl font-bold mb-1">10K+</div>
            <div className="text-sm opacity-90">Happy Clients</div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 p-6 rounded-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Award className="h-12 w-12 mx-auto animate-spin-slow" />
            </div>
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm opacity-90">Satisfaction</div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 p-6 rounded-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Clock className="h-12 w-12 mx-auto animate-ping-slow" />
            </div>
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm opacity-90">Emergency Service</div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 p-6 rounded-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Wrench className="h-12 w-12 mx-auto animate-wiggle" />
            </div>
            <div className="text-2xl font-bold mb-1">Latest</div>
            <div className="text-sm opacity-90">Equipment</div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 p-6 rounded-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <ThumbsUp className="h-12 w-12 mx-auto animate-bounce-slow" />
            </div>
            <div className="text-2xl font-bold mb-1">A+</div>
            <div className="text-sm opacity-90">BBB Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;