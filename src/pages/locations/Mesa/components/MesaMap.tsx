import React from 'react';

const MesaMap = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Service Area Coverage in Mesa</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213387.4088299669!2d-111.96046685!3d33.4150516!4m2!3d33.4151843!4d-111.8314724!5e0!3m2!1sen!2sus!4v1710817037252!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mesa Service Area Map"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Serving All of Mesa</h3>
          <p className="text-gray-600 mb-6">
            We provide comprehensive air duct cleaning services throughout Mesa and surrounding areas:
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">East Mesa</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Red Mountain</li>
                <li>• Las Sendas</li>
                <li>• Alta Mesa</li>
                <li>• Eastmark</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">West Mesa</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Downtown Mesa</li>
                <li>• Dobson Ranch</li>
                <li>• Fiesta District</li>
                <li>• Superstition Springs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MesaMap;