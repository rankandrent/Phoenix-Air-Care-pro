import React from 'react';

const ParadiseValleyMap = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Service Area Coverage in Paradise Valley</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53346.84839391682!2d-111.97744282089838!3d33.53263459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b75dc0e8ea21f%3A0xc472a5dcc6eb0c32!2sParadise%20Valley%2C%20AZ!5e0!3m2!1sen!2sus!4v1710817037252!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Paradise Valley Service Area Map"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Serving All of Paradise Valley</h3>
          <p className="text-gray-600 mb-6">
            We provide comprehensive air duct cleaning services throughout Paradise Valley and surrounding areas:
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">Paradise Valley Areas</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Camelback Mountain</li>
                <li>• Mummy Mountain</li>
                <li>• Paradise Valley Village</li>
                <li>• Indian Bend</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Nearby Areas</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Scottsdale</li>
                <li>• Phoenix</li>
                <li>• Arcadia</li>
                <li>• Biltmore</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParadiseValleyMap;