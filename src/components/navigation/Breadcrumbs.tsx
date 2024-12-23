import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbMap: { [key: string]: string } = {
    'services': 'Services',
    'scottsdale': 'Scottsdale',
    'paradise-valley': 'Paradise Valley',
    'mesa': 'Mesa',
    'Residential-Duct-Cleaning': 'Residential Duct Cleaning',
    'Commercial-Duct-Cleaning': 'Commercial Duct Cleaning',
    'HVAC-System-Cleaning': 'HVAC System Cleaning',
    'Dryer-Vent-Cleaning': 'Dryer Vent Cleaning',
    'Air-Quality-Testing': 'Air Quality Testing',
    'Sanitization-Services': 'Sanitization Services',
    'Emergency-Services': 'Emergency Services',
    'Maintenance-Programs': 'Maintenance Programs',
    'Mold-Remediation': 'Mold Remediation',
    'Duct-Repair-Services': 'Duct Repair Services'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={name}>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <li>
                  {isLast ? (
                    <span className="text-blue-600 font-medium">
                      {breadcrumbMap[name] || name}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-gray-500 hover:text-blue-600"
                    >
                      {breadcrumbMap[name] || name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;