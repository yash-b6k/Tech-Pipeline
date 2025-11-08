import React from "react";
import { Link } from "react-router-dom";

const NonItJobs = () => {
  return (
    <div className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm mb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Private Jobs</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Non-IT Jobs</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900">
            Non-IT & Management Jobs
          </h1>
          <p className="text-gray-600 mt-2">
            Opportunities in Sales, Marketing, HR, Finance & Operations.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
              <h3 className="font-bold mb-4 flex items-center">
                <span className="mr-2">🧭</span> Categories
              </h3>

              <div className="space-y-2 text-sm font-medium text-gray-600">
                <label className="flex items-center">
                  <input type="radio" name="cat" className="mr-2" defaultChecked />
                  All Categories
                </label>

                <label className="flex items-center">
                  <input type="radio" name="cat" className="mr-2" />
                  Sales & Marketing
                </label>

                <label className="flex items-center">
                  <input type="radio" name="cat" className="mr-2" />
                  Human Resources
                </label>

                <label className="flex items-center">
                  <input type="radio" name="cat" className="mr-2" />
                  Finance & Accounting
                </label>

                <label className="flex items-center">
                  <input type="radio" name="cat" className="mr-2" />
                  Operations
                </label>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="w-full lg:w-3/4 space-y-4">

            {/* Job Card 1 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/64x64/dc2626/ffffff?text=H"
                  className="w-16 h-16 rounded-lg border"
                  alt="HDFC"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-600">
                    Relationship Manager
                  </h3>
                  <p className="font-medium">HDFC Bank</p>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 Mumbai</span>
                    <span>💼 2–4 Yrs</span>
                    <span>💰 8–12 LPA</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 sm:mt-0 bg-blue-50 text-blue-700 px-6 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition">
                Apply Now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/64x64/9333ea/ffffff?text=P"
                  className="w-16 h-16 rounded-lg border"
                  alt="PepsiCo"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-600">
                    HR Business Partner
                  </h3>
                  <p className="font-medium">PepsiCo</p>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 Gurgaon</span>
                    <span>💼 5+ Yrs</span>
                    <span>💰 18–25 LPA</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 sm:mt-0 bg-blue-50 text-blue-700 px-6 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NonItJobs;
