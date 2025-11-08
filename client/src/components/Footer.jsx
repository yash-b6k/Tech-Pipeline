import React from "react";

// Importing local PNG icons
import linkedinLogo from "../assets/linkedin.png";
import twitterLogo from "../assets/twitter.png";
import blueskyLogo from "../assets/bluesky.png";
import glassdoorLogo from "../assets/glassdoor.png";
import telegramLogo from "../assets/telegram.png";
import shareLogo from "../assets/share.png";
import codeIcon from "../assets/code.png";
import briefcaseIcon from "../assets/briefcase.png";
import govtIcon from "../assets/govt.png";
import internshipIcon from "../assets/internship.png";
import certificateIcon from "../assets/certificate.png";
import blogIcon from "../assets/blog.png";
import resumeIcon from "../assets/resume.png";
import skillIcon from "../assets/skills.png";
import aboutIcon from "../assets/about.png";
import coachIcon from "../assets/coach.png";
import communityIcon from "../assets/community.png";
import handshakeIcon from "../assets/handshake.png";
import mailIcon from "../assets/mail.png";
import faqIcon from "../assets/faq.png";
import privacyIcon from "../assets/privacy.png";
import termsIcon from "../assets/terms.png";

const Footer = () => {
  const navigate = (page, type = "") => {
    console.log(`Navigating to: ${page} ${type}`);
  };

  const showModal = (title, message) => {
    alert(`${title}: ${message}`);
  };

  return (
    <footer className="bg-gray-900 text-white mt-16 shadow-2xl border-t border-blue-800">
      <div className="w-full px-4 sm:px-16 lg:px-22 py-8">
        {/* --- Desktop Version --- */}
        <div className="hidden lg:block">
          {/* Top Section */}
          <div className="grid grid-cols-5 gap-14 border-b border-gray-800 pb-8 mb-8">
            {/* Logo & Mission */}
            <div className="col-span-2">
              <h4 className="text-3xl font-extrabold mb-3 text-blue-400">
                Help Job
              </h4>
              <p className="text-gray-400 text-base max-w-md">
                Unlock your career potential with real-time job notifications,
                free certifications, career resources, and guidance from
                industry experts. Stay ahead, stay informed, and grow with Help
                Job.
              </p>
              {/* Social Icons (Desktop) */}
              <div className="flex items-center space-x-6 mt-6">
                {[linkedinLogo, glassdoorLogo, blueskyLogo, twitterLogo, telegramLogo].map(
                  (icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="transition-transform duration-200 hover:scale-110"
                    >
                      <img src={icon} alt="social-icon" className="w-6 h-6" />
                    </a>
                  )
                )}
                <a
                  href="#"
                  className="transition-transform duration-200 hover:scale-110 ml-2"
                >
                  <img src={shareLogo} alt="share-icon" className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-span-3">
              <h4 className="text-xl font-semibold mb-3 text-white">
                Join Our Career Newsletter
              </h4>
              <p className="text-gray-400 mb-4">
                Receive the latest job alerts, career tips, and resources
                straight to your inbox weekly.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showModal(
                    "Subscription Successful",
                    "You have been subscribed to our weekly newsletter!"
                  );
                  e.target.reset();
                }}
                className="flex flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-[450px] p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section (Desktop still 4-columns) */}
          <div className="grid grid-cols-4 gap-12 text-left">
            {/* Job Notifications */}
            <div className="flex flex-col w-full items-start">
              <h4 className="text-lg font-bold mb-4 text-gray-200 text-left w-full">
                Job Notifications
              </h4>
              <ul className="space-y-3 text-sm w-full">
                {[{ icon: codeIcon, label: "IT Jobs", page: "IT" },
                  { icon: briefcaseIcon, label: "Non-IT Jobs", page: "Non-IT" },
                  { icon: govtIcon, label: "Govt Exams", page: "Govt" },
                  { icon: internshipIcon, label: "Internships", page: "Internships" },
                ].map((item, idx) => (
                  <li key={idx} className="w-full">
                    <button
                      onClick={() => navigate("jobs", item.page)}
                      className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                    >
                      <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Resources */}
            <div className="flex flex-col w-full items-start">
              <h4 className="text-lg font-bold mb-4 text-gray-200 text-left w-full">
                Career Resources
              </h4>
              <ul className="space-y-3 text-sm w-full">
                {[{ icon: certificateIcon, label: "Free Certifications", action: () => navigate("certifications") },
                  { icon: blogIcon, label: "Expert Blog", action: () => navigate("blog") },
                  { icon: resumeIcon, label: "Resume Builder", action: () => showModal("Information", "Resume Builder coming soon!") },
                  { icon: skillIcon, label: "Skill Assessment", action: () => showModal("Information", "Skill Assessment coming soon!") },
                ].map((item, idx) => (
                  <li key={idx} className="w-full">
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                    >
                      <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Community */}
            <div className="flex flex-col w-full items-start">
              <h4 className="text-lg font-bold mb-4 text-gray-200 text-left w-full">
                Company & Community
              </h4>
              <ul className="space-y-3 text-sm w-full">
                {[{ icon: aboutIcon, label: "About Us", action: () => navigate("about") },
                  { icon: coachIcon, label: "Career Coaching", action: () => showModal("Information", "Career Coaching coming soon!") },
                  { icon: communityIcon, label: "Community Forum", action: () => showModal("Information", "Community coming soon!") },
                  { icon: handshakeIcon, label: "Partnerships", action: () => showModal("Information", "Partnerships coming soon!") },
                ].map((item, idx) => (
                  <li key={idx} className="w-full">
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                    >
                      <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="flex flex-col w-full items-start">
              <h4 className="text-lg font-bold mb-4 text-gray-200 text-left w-full">
                Support & Legal
              </h4>
              <ul className="space-y-3 text-sm w-full">
                {[{ icon: mailIcon, label: "Contact Support", action: () => navigate("contact") },
                  { icon: faqIcon, label: "FAQ", action: () => showModal("Information", "FAQ coming soon!") },
                  { icon: privacyIcon, label: "Privacy Policy", action: () => showModal("Information", "Privacy Policy coming soon!") },
                  { icon: termsIcon, label: "Terms of Service", action: () => showModal("Information", "Terms coming soon!") },
                ].map((item, idx) => (
                  <li key={idx} className="w-full">
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                    >
                      <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Mobile Version --- */}
        <div className="block lg:hidden">
          {/* Logo & Mission */}
          <div className="mb-6 p-2 text-center">
            <h4 className="text-2xl font-bold mb-2 text-blue-400">Help Job</h4>
            <p className="text-gray-400 text-sm mb-3">
              Real-time job alerts, free certifications, and career guidance from experts.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-4">
              {[linkedinLogo, glassdoorLogo, blueskyLogo, twitterLogo, telegramLogo].map(
                (icon, i) => (
                  <a key={i} href="#" className="transition-transform duration-200 hover:scale-120 ml-2">
                    <img src={icon} alt="social-icon" className="w-6 h-6" />
                  </a>
                )
              )}
              <a href="#" className="transition-transform duration-200 hover:scale-120 ml-2">
                <img src={shareLogo} alt="share-icon" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-6 px-4">
            <h4 className="text-lg font-semibold mb-4 text-white text-center">
              Join Our Career Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-2 text-center">
              Weekly job alerts and career tips straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showModal(
                  "Subscription Successful",
                  "You have been subscribed to our weekly newsletter!"
                );
                e.target.reset();
              }}
              className="flex gap-2 items-start justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full max-w-xs p-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
              <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg whitespace-nowrap ">
                Subscribe
              </button>
            </form>
          </div>

          {/* Mobile-Optimized Footer Grid (3 Sections) */}
          <div className="w-full px-4 sm:px-8 mt-8">
            <div className="grid grid-cols-3 gap-6 text-left">
              {/* 1️⃣ Job Notifications */}
              <div className="flex flex-col w-full items-start">
                <h4 className="sm:text-lg font-bold mb-3 text-gray-200 text-left w-full">
                  Hiring Alerts
                </h4>
                <ul className="space-y-2 text-sm w-full">
                  {[{ icon: codeIcon, label: "IT Jobs", page: "IT" },
                    { icon: briefcaseIcon, label: "Non-IT Jobs", page: "Non-IT" },
                    { icon: govtIcon, label: "Govt Exams", page: "Govt" },
                    { icon: internshipIcon, label: "Internships", page: "Internships" },
                  ].map((item, idx) => (
                    <li key={idx} className="w-full">
                      <button
                        onClick={() => navigate("jobs", item.page)}
                        className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                      >
                        <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2️⃣ Career Resources */}
              <div className="flex flex-col w-full items-start">
                <h4 className="sm:text-lg font-bold mb-3 text-gray-200 text-left w-full">
                  Career Assets
                </h4>
                <ul className="space-y-2 text-sm w-full">
                  {[{ icon: certificateIcon, label: "Free Quals", action: () => navigate("certifications") },
                    { icon: blogIcon, label: "Expert Blog", action: () => navigate("blog") },
                    { icon: resumeIcon, label: "Resume Builder", action: () => showModal("Information", "Coming soon!") },
                  
                  ].map((item, idx) => (
                    <li key={idx} className="w-full">
                      <button
                        onClick={item.action}
                        className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                      >
                        <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3️⃣ Company & Support */}
              <div className="flex flex-col w-full items-start">
                <h4 className="sm:text-lg font-bold mb-3 text-gray-200 text-left w-full">
                  Assistance info
                </h4>
                <ul className="space-y-2 text-sm w-full">
                  {[{ icon: aboutIcon, label: "About Us", action: () => navigate("about") },
                    
                    { icon: faqIcon, label: "FAQ", action: () => showModal("Information", "Coming soon!") },
                    { icon: privacyIcon, label: "Privacy Policy", action: () => showModal("Information", "Coming soon!") },
                  ].map((item, idx) => (
                    <li key={idx} className="w-full">
                      <button
                        onClick={item.action}
                        className="text-gray-400 hover:text-blue-400 flex items-center justify-start space-x-2 w-full"
                      >
                        <img src={item.icon} className="w-4 h-4 invert" alt={item.label} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm flex justify-center items-center gap-2 flex-wrap">
          <span>&copy; 2025 All Rights Reserved</span>
          <a
            href="https://www.websitelink.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition font-bold"
          >
            websitelink.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
