import React from 'react';

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Service Area Coverage</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d211298.95559393763!2d-111.936322!3d33.566123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1710817037252!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-fetch"
              title="Phoenix Service Area Map"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Serving Greater Phoenix Area</h3>
            <p className="text-gray-600 mb-6">
              We provide comprehensive air duct cleaning services throughout Phoenix and surrounding areas, including:
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Central Valley</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Phoenix</li>
                  <li>• Scottsdale</li>
                  <li>• Paradise Valley</li>
                  <li>• Tempe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">East Valley</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mesa</li>
                  <li>• Chandler</li>
                  <li>• Gilbert</li>
                  <li>• Queen Creek</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;