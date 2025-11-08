import React from "react";
import { Link } from "react-router-dom";

const GovtJobs = () => {
  return (
    <div className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm mb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Govt Jobs</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900">
            Government Job Notifications
          </h1>
          <p className="text-gray-600 mt-2">
            Latest notifications for Banking, SSC, Railways, UPSC & State Govt exams.
          </p>
        </div>

        {/* ✅ Govt Job Cards */}
        <div className="space-y-6">

          {/* ✅ SBI PO Recruitment */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-600 hover:shadow-md transition flex flex-col md:flex-row gap-6">
            
            {/* Logo */}
            <div className="shrink-0 flex justify-center items-start pt-1">
              <img
                src="https://placehold.co/80x80/e11d48/ffffff?text=SBI"
                className="w-20 h-20 object-contain"
                alt="SBI"
              />
            </div>

            {/* Content */}
            <div className="grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  SBI Probationary Officer (PO) Recruitment 2025
                </h3>

                <span className="mt-2 sm:mt-0 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                  LAST DATE SOON
                </span>
              </div>

              <p className="text-gray-600 mb-4">
                State Bank of India invites applications for 2000+ PO vacancies 
                across India. Any Graduate can apply.
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm mb-6">

                <div className="bg-gray-50 px-3 py-2 rounded-lg border">
                  <p className="text-gray-500 text-xs">Total Vacancies</p>
                  <p className="font-semibold">2000+ Posts</p>
                </div>

                <div className="bg-gray-50 px-3 py-2 rounded-lg border">
                  <p className="text-gray-500 text-xs">Eligibility</p>
                  <p className="font-semibold">Any Graduate</p>
                </div>

                <div className="bg-gray-50 px-3 py-2 rounded-lg border">
                  <p className="text-gray-500 text-xs">Age Limit</p>
                  <p className="font-semibold">21 - 30 Years</p>
                </div>

                <div className="bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                  <p className="text-red-600 text-xs">Last Date</p>
                  <p className="font-bold text-red-700">Nov 27, 2025</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                  📄 Notification PDF
                </button>

                <button className="flex items-center px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                  Apply Online ↗
                </button>
              </div>
            </div>
          </div>

          {/* ✅ SSC CGL Notification */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition flex flex-col md:flex-row gap-6">
            
            {/* Logo */}
            <div className="shrink-0 flex justify-center items-start pt-1">
              <img
                src="https://placehold.co/80x80/2563eb/ffffff?text=SSC"
                className="w-20 h-20 object-contain"
                alt="SSC"
              />
            </div>

            {/* Content */}
            <div className="grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  SSC Combined Graduate Level (CGL) 2025
                </h3>

                <span className="mt-2 sm:mt-0 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                  APPLICATIONS OPEN
                </span>
              </div>

              <p className="text-gray-600 mb-4">
                SSC notification for Group B & C posts in Central Govt Ministries & Departments.
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm mb-6">

                <div className="bg-gray-50 px-3 py-2 rounded-lg border">
                  <p className="text-gray-500 text-xs">Total Vacancies</p>
                  <p className="font-semibold">7500+ (Approx)</p>
                </div>

                <div className="bg-gray-50 px-3 py-2 rounded-lg border">
                  <p className="text-gray-500 text-xs">Eligibility</p>
                  <p className="font-semibold">Bachelor's Degree</p>
                </div>

                <div className="bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                  <p className="text-blue-600 text-xs">Last Date</p>
                  <p className="font-bold text-blue-700">Dec 15, 2025</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                  📄 Notification PDF
                </button>

                <button className="flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Apply Online ↗
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GovtJobs;
