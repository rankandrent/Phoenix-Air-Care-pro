import React from 'react';

const CompanyHistory = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Company History"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">2008 - The Beginning</h3>
              <p className="text-gray-600">
                Founded with a vision to provide superior air duct cleaning services to Phoenix residents.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2013 - Expansion</h3>
              <p className="text-gray-600">
                Expanded our services to include commercial properties and added advanced cleaning equipment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2018 - Innovation</h3>
              <p className="text-gray-600">
                Introduced state-of-the-art HEPA filtration systems and video inspection technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Today</h3>
              <p className="text-gray-600">
                Leading the industry in Phoenix with cutting-edge technology and unmatched customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;