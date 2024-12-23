import React from 'react';
import { Tool, Building, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const CommercialContent = () => {
  return (
    <div className="py-12">
      {/* Industry-Specific Solutions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Industry-Specific Air Duct Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Office Buildings</h3>
            <p className="text-gray-600 mb-4">
              Specialized solutions for multi-story office buildings, ensuring minimal disruption to business operations. Our advanced equipment handles complex HVAC systems efficiently.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                After-hours service available
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Floor-by-floor cleaning options
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Minimal tenant disruption
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tool className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Industrial Facilities</h3>
            <p className="text-gray-600 mb-4">
              Heavy-duty cleaning solutions for manufacturing plants and warehouses. Our industrial-grade equipment handles the most challenging environments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                High-capacity vacuum systems
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                OSHA compliance support
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Custom maintenance plans
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Healthcare Facilities</h3>
            <p className="text-gray-600 mb-4">
              Specialized cleaning protocols for medical facilities, ensuring compliance with healthcare regulations and maintaining sterile environments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Hospital-grade sanitization
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                HEPA filtration systems
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                24/7 emergency service
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comprehensive Service Details */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">Our Commercial Cleaning Process</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Initial Assessment</h3>
            <p className="text-gray-600">
              Our certified technicians conduct a thorough inspection of your HVAC system, including video documentation of problem areas. We assess system size, accessibility, and specific cleaning requirements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">2. Custom Service Plan</h3>
            <p className="text-gray-600">
              We develop a tailored cleaning strategy that minimizes business disruption while ensuring comprehensive system cleaning. This includes scheduling options and specific cleaning protocols.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">3. Advanced Cleaning Techniques</h3>
            <p className="text-gray-600">
              Using state-of-the-art equipment, we perform thorough cleaning of all system components, including supply and return ducts, registers, grilles, heat exchangers, and cooling coils.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">4. Quality Assurance</h3>
            <p className="text-gray-600">
              Post-cleaning inspection with video documentation ensures all work meets our high standards. We provide detailed reports and maintenance recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Benefits of Professional Commercial Duct Cleaning</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Improved Indoor Air Quality</h3>
            <p className="text-gray-600">
              Regular duct cleaning removes accumulated dust, debris, and contaminants, significantly improving indoor air quality. This creates a healthier environment for employees and customers, potentially reducing sick days and improving productivity.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Reduced airborne particles
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Elimination of odors
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Better ventilation
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Energy Efficiency</h3>
            <p className="text-gray-600">
              Clean ducts allow your HVAC system to operate at peak efficiency, reducing energy consumption and lowering utility costs. Regular maintenance can extend equipment life and prevent costly repairs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Lower energy bills
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Extended equipment life
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Reduced maintenance costs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Commercial Maintenance Plans</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Preventive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive maintenance plans help prevent system issues before they occur, ensuring consistent performance and air quality year-round.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Regular inspections
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Scheduled cleaning services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Performance monitoring
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency service available for unexpected issues, ensuring minimal downtime for your business operations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  Rapid response times
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                  Priority service for plan members
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-green-600 mr-2" />
                  Comprehensive coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Request a Commercial Service Quote</h2>
        <iframe 
          src="//leads.leadsmartinc.com/?api_key=8a982b9fc74db2f93fd5f65045f5a1e370ca59ff&affiliate_source=umavskhff1&funnel=4&category=8&step=1&buttons=btn-info" 
          width="100%" 
          height="545" 
          frameBorder="0"
          title="Commercial Service Quote Form"
          className="w-full"
        />
      </section>
    </div>
  );
};

export default CommercialContent;