import React, { useState } from "react";

// Icons
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import general_support from "../assets/general_support.png";
import partnership from "../assets/partnership.png";
import inquiries from "../assets/inquiries.png";
import our_availability from "../assets/our_availability.png";
import business_hours from "../assets/business_hours.png";
import email_response_time from "../assets/email_response_time.png";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    e.target.reset();
  };

  return (
    <div id="contact-page" className="pt-12 pb-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* -------------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------------- */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            We're Here to Help
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Your career journey is important to us. Whether you're a job seeker with
            a question or a company looking to partner, please reach out.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* -------------------------------------- */}
          {/* CONTACT FORM */}
          {/* -------------------------------------- */}
          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full p-3 border border-gray-300 rounded-lg 
                               focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg 
                               focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full p-3 border border-gray-300 rounded-lg 
                               focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full p-3 border border-gray-300 rounded-lg 
                               focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject of Inquiry
                </label>
                <select
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white 
                             focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Please select a reason...</option>
                  <option>General Support (Job Seeker)</option>
                  <option>Technical Support (Website Issue)</option>
                  <option>Partnership & Advertising Inquiry</option>
                  <option>Employer Services Inquiry</option>
                  <option>Certification Question</option>
                  <option>Feedback & Suggestions</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Please provide details about your inquiry..."
                  className="w-full p-3 border border-gray-300 rounded-lg 
                             focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-bold text-white bg-blue-600 
                           rounded-lg shadow-xl hover:bg-blue-700 transition 
                           duration-300 transform hover:scale-[1.01]"
              >
                Send Message
              </button>

            </form>

            {/* Success Message */}
            {success && (
              <p className="mt-4 text-center text-green-600 font-semibold">
                ✅ Message Sent Successfully! Our team will respond within 2 business days.
              </p>
            )}
          </div>

          {/* -------------------------------------- */}
          {/* CONTACT INFO */}
          {/* -------------------------------------- */}
          <div className="lg:col-span-2 bg-blue-700 p-8 rounded-xl shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-10">

              {/* GENERAL SUPPORT */}
              <div>
                <h3 className="flex items-center text-xl font-semibold text-blue-200 mb-4 pb-3 border-b border-blue-600">
                  <img
                    src={general_support}
                    alt="general support"
                    className="w-7 h-7 mr-3 filter invert"
                  />
                  General Support
                </h3>

                <div className="flex items-start mb-4">
                  <img src={emailIcon} className="w-6 h-6 mt-1 filter invert" />
                  <div className="ml-4">
                    <p className="font-semibold text-white">Email Support</p>
                    <p className="text-blue-200">
                      For all job seeker questions and technical help.
                    </p>
                    <a
                      href="mailto:support@helpjob.com"
                      className="text-blue-300 hover:text-white"
                    >
                      support@helpjob.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <img src={phoneIcon} className="w-6 h-6 mt-1 filter invert" />
                  <div className="ml-4">
                    <p className="font-semibold text-white">Phone Support</p>
                    <p className="text-blue-200">Available during business hours.</p>
                    <p className="text-blue-300">+1 (800) 555-1234</p>
                  </div>
                </div>
              </div>

              {/* BUSINESS & PARTNERSHIPS */}
              <div>
                <h3 className="flex items-center text-xl font-semibold text-blue-200 mb-4 pb-3 border-b border-blue-600">
                  <img
                    src={partnership}
                    alt="partnership"
                    className="w-7 h-7 mr-3 filter invert"
                  />
                  Business & Partnerships
                </h3>

                <div className="flex items-start">
                  <img
                    src={inquiries}
                    alt="inquiries"
                    className="w-7 h-7 mt-1 mr-3 filter invert"
                  />
                  <div>
                    <p className="font-semibold text-white">Corporate Inquiries</p>
                    <p className="text-blue-200">
                      For advertising, partnerships, and employer services.
                    </p>
                    <a href="mailto:partners@helpjob.com" className="text-blue-300 hover:text-white">
                      partners@helpjob.com
                    </a>
                  </div>
                </div>
              </div>

              {/* AVAILABILITY */}
              <div>
                <h3 className="flex items-center text-xl font-semibold text-blue-200 mb-4 pb-3 border-b border-blue-600">
                  <img
                    src={our_availability}
                    alt="availability"
                    className="w-7 h-7 mr-3 filter invert"
                  />
                  Our Availability
                </h3>

                <div className="flex items-start mb-4">
                  <img
                    src={business_hours}
                    alt="business hours"
                    className="w-7 h-7 mt-1 mr-3 filter invert"
                  />
                  <div>
                    <p className="font-semibold text-white">Business Hours</p>
                    <p className="text-blue-200">Monday – Friday</p>
                    <p className="text-blue-200">9:00 AM – 5:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <img
                    src={email_response_time}
                    alt="response time"
                    className="w-7 h-7 mt-1 mr-3 filter invert"
                  />
                  <div>
                    <p className="font-semibold text-white">Email Response Time</p>
                    <p className="text-blue-200">
                      We aim to respond to all inquiries within 2 business days.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
