import React from "react";
import { Link } from "react-router-dom";

const ITJobs = () => {
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
            <span className="text-gray-900 font-medium">IT Jobs</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900">
            Information Technology Jobs
          </h1>
          <p className="text-gray-600 mt-2">
            Explore the latest roles in development, data science & more.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
              <h3 className="font-bold mb-4 flex items-center">
                <span className="mr-2">🔍</span> Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experience Level
                  </label>
                  <select className="w-full p-2 border rounded-lg text-sm">
                    <option>All Levels</option>
                    <option>Entry (0–2 years)</option>
                    <option>Mid (3–5 years)</option>
                    <option>Senior (5+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Job Type
                  </label>

                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Full-time
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Contract
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Remote
                    </label>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="w-full lg:w-3/4 space-y-4">

            {/* Job Card */}
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between">
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/64x64/2563eb/ffffff?text=G"
                  className="w-16 h-16 rounded-lg border"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-600">
                    Senior Full Stack Engineer
                  </h3>
                  <p className="font-medium">Google</p>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 Bangalore (Hybrid)</span>
                    <span>💼 5–8 Yrs</span>
                    <span>💰 45–60 LPA</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 sm:mt-0 bg-blue-50 text-blue-700 px-6 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition">
                Apply Now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between">
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/64x64/ea580c/ffffff?text=A"
                  className="w-16 h-16 rounded-lg border"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-600">
                    Data Engineer II
                  </h3>
                  <p className="font-medium">Amazon AWS</p>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 Hyderabad</span>
                    <span>💼 3+ Yrs</span>
                    <span>💰 Best in Industry</span>
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

export default ITJobs;
