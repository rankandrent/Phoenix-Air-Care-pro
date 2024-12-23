import React from 'react';

const ScottsdaleMap = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Service Area Coverage in Scottsdale</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213387.4088299669!2d-111.96046685!3d33.6892629!4m2!3d33.4941704!4d-111.9260519!5e0!3m2!1sen!2sus!4v1710817037252!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Scottsdale Service Area Map"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Serving All of Scottsdale</h3>
          <p className="text-gray-600 mb-6">
            We provide comprehensive air duct cleaning services throughout Scottsdale and surrounding areas:
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">North Scottsdale</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• DC Ranch</li>
                <li>• Grayhawk</li>
                <li>• Desert Ridge</li>
                <li>• Cave Creek</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">South Scottsdale</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Old Town</li>
                <li>• McCormick Ranch</li>
                <li>• Gainey Ranch</li>
                <li>• Paradise Valley</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScottsdaleMap;