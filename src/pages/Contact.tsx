import React from 'react';
import PageHero from '../components/shared/PageHero';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ConditionalContactForm from '../components/ConditionalContactForm';
import MapSection from '../components/MapSection';
import { COMPANY_PHONE } from '../components/ContactInfo';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: COMPANY_PHONE,
      link: `tel:${COMPANY_PHONE}`,
      description: "24/7 Emergency Service Available"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "info@phoenixaircare.com",
      link: "mailto:info@phoenixaircare.com",
      description: "Quick Response Guaranteed"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "3305 E Greenway Rd #429",
      description: "Phoenix, AZ 85032",
      link: "https://goo.gl/maps/your-location"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon-Sun: 24/7",
      description: "Emergency Service Available"
    }
  ];

  return (
    <div>
      <PageHero
        title="Contact Us"
        description="Get in touch with Phoenix's most trusted air duct cleaning service. We're here to help with all your air duct cleaning needs."
        showButtons={false}
      >
        <div className="mt-8 inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
          <MessageSquare className="h-5 w-5 mr-2" />
          <span>Quick Response Guaranteed</span>
        </div>
      </PageHero>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-blue-600">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{info.content}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ConditionalContactForm />
            </div>

            {/* Map Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Service Area</h2>
                <p className="text-gray-600">
                  We serve the entire Phoenix metropolitan area and surrounding communities.
                </p>
              </div>
              <MapSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;