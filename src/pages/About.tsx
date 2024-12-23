import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyHistory from '../components/about/CompanyHistory';
import TeamSection from '../components/about/TeamSection';
import ValueProposition from '../components/about/ValueProposition';
import Certifications from '../components/about/Certifications';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import TestimonialSection from '../components/TestimonialSection';

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CompanyHistory />
        <ValueProposition />
        <TeamSection />
        <WhyChooseUs />
        <ProcessSection />
        <Certifications />
        <TestimonialSection />
      </div>
    </div>
  );
};

export default About;