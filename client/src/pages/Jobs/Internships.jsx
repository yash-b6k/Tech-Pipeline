import React from "react";
import { Link } from "react-router-dom";

const Internships = () => {
  return (
    <div className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm mb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Internships</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900">
            Internship Opportunities
          </h1>
          <p className="text-gray-600 mt-2">
            Kickstart your career with internships from top companies.  
            Ideal for students & fresh graduates.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Internship Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border relative overflow-hidden hover:shadow-md transition">
            <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
              STIPEND AVAILABLE
            </div>

            <div className="flex items-start gap-4">
              <img
                src="https://placehold.co/56x56/2563eb/ffffff?text=I"
                className="w-14 h-14 rounded-md border"
                alt="Intel"
              />

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Software Engineering Intern
                </h3>
                <p className="text-blue-600 font-medium">Intel Corporation</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Location</p>
                <p className="font-medium">📍 Bangalore</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Duration</p>
                <p className="font-medium">⏳ 6 Months</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Stipend</p>
                <p className="font-medium text-green-600">₹35,000 / month</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Apply By</p>
                <p className="font-medium">Nov 30, 2025</p>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          {/* Internship Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border relative overflow-hidden hover:shadow-md transition">
            <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
              STIPEND AVAILABLE
            </div>

            <div className="flex items-start gap-4">
              <img
                src="https://placehold.co/56x56/eab308/ffffff?text=S"
                className="w-14 h-14 rounded-md border"
                alt="Swiggy"
              />

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Product Marketing Intern
                </h3>
                <p className="text-blue-600 font-medium">Swiggy</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Location</p>
                <p className="font-medium">📍 Remote</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Duration</p>
                <p className="font-medium">⏳ 3 Months</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Stipend</p>
                <p className="font-medium text-green-600">₹20,000 / month</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Apply By</p>
                <p className="font-medium">Dec 15, 2025</p>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Internships;
