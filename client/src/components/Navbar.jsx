import React, { useState, useEffect } from "react";
import { Bell, Menu, X, ChevronDown, ChevronRight, Briefcase, Eye, Landmark, Award, BookOpen, PartyPopper } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [desktopPrivateOpen, setDesktopPrivateOpen] = useState(false);
  const [mobileJobsOpen, setMobileJobsOpen] = useState(false);
  const [mobilePrivateOpen, setMobilePrivateOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 980);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 980;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (hasNotification) setHasNotification(false);
  };

  const markAllRead = () => setHasNotification(false);

  const NotificationItem = ({ icon: Icon, title, subtitle, time, link, color }) => (
    <a
      onClick={() => {
        navigateTo(link);
        setShowNotifications(false);
      }}
      className="block p-4 hover:bg-gray-50 border-b border-gray-100 transition duration-150 cursor-pointer"
    >
      <div className="flex items-start">
        <div className="shrink-0 pt-1">
          <Icon className={`w-5 h-5 text-${color}-600`} />
        </div>
        <div className="ml-3 w-full">
          <p className="text-sm font-semibold text-gray-900 flex justify-between">
            {title} {time === "new" && <span className="text-xs font-normal text-blue-600">New</span>}
          </p>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          {time !== "new" && <p className="text-xs text-gray-400 mt-2">{time}</p>}
        </div>
      </div>
    </a>
  );

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => navigateTo("/")}
            className="text-3xl font-extrabold text-blue-700 hover:text-blue-900 transition duration-150"
          >
            Help Job
          </button>

          {!isMobile ? (
            <div className="flex items-center justify-between flex-1">
              <div className="flex flex-1 justify-center items-center space-x-3.5">
                <button onClick={() => navigateTo("/")} className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md transition duration-150">
                  Home
                </button>

                {/* Job Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                    className="flex items-center text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md transition duration-150"
                  >
                    Job Notifications
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {desktopDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg bg-white shadow-lg z-50">
                      <div className="py-1">
                        {/* Private Jobs */}
                        <div className="relative">
                          <button
                            onClick={() => setDesktopPrivateOpen(!desktopPrivateOpen)}
                            className="flex justify-between items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Private Jobs
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>

                          {desktopPrivateOpen && (
                            <div className="absolute left-full top-0 ml-1 w-48 rounded-lg bg-gray-50 shadow-lg z-50">
                              <div className="py-1">
                                <button onClick={() => navigateTo("/jobs/IT")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                  IT Jobs
                                </button>
                                <button onClick={() => navigateTo("/jobs/Non-IT")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                  Non-IT Jobs
                                </button>
                              </div>
                            </div>
                          )}
                        </div>

                        <button onClick={() => navigateTo("/jobs/internships")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Internships
                        </button>
                        <button onClick={() => navigateTo("/jobs/govt")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Govt Jobs
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button onClick={() => navigateTo("/certifications")} className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md transition duration-150">
                  Free Certifications
                </button>
                <button onClick={() => navigateTo("/blog")} className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md transition duration-150">
                  Blog
                </button>
                <button onClick={() => navigateTo("/about")} className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md transition duration-150">
                  About
                </button>
                <button onClick={() => navigateTo("/contact")} className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md transition duration-150">
                  Contact Form
                </button>
              </div>

              {/* Notification Bell Area */}
              <div className="relative mr-3">
                <button
                  onClick={toggleNotifications}
                  className="relative p-2 rounded-full text-gray-400 hover:text-blue-700 hover:bg-gray-100 focus:outline-none transition duration-150"
                  aria-label="Notifications"
                >
                  <Bell className="w-6 h-6" />
                  {hasNotification && <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden origin-top-right">
                    <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900">
                        Notifications{" "}
                        <span className="ml-1 text-xs bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full">6 New</span>
                      </h3>
                      <button onClick={markAllRead} className="text-xs text-blue-600 hover:text-blue-800 font-medium focus:outline-none">
                        Mark all as read
                      </button>
                    </div>

                    <div className="max-h-112 overflow-y-auto">
                      <NotificationItem
                        icon={Briefcase}
                        title="New Job Match"
                        subtitle="Senior React Developer at Google matches your profile preferences."
                        time="25 minutes ago"
                        link="/jobs/IT"
                        color="blue"
                      />
                      <NotificationItem
                        icon={Eye}
                        title="Application Viewed"
                        subtitle='Your application for "Cloud Solutions Architect" was viewed by Microsoft.'
                        time="2 hours ago"
                        link="#"
                        color="green"
                      />
                      <NotificationItem
                        icon={Landmark}
                        title="Deadline Approaching"
                        subtitle="Only 3 days left to apply for SBI PO Recruitment 2025."
                        time="5 hours ago"
                        link="/jobs/govt"
                        color="red"
                      />
                      <NotificationItem
                        icon={Award}
                        title="New Certification Added"
                        subtitle='"AWS Certified Cloud Practitioner" is now available in our free directory.'
                        time="1 day ago"
                        link="/certifications"
                        color="yellow"
                      />
                      <NotificationItem
                        icon={BookOpen}
                        title="Trending Article"
                        subtitle='"Top 3 Soft Skills Companies Hiring For" is trending among users like you.'
                        time="2 days ago"
                        link="/blog"
                        color="purple"
                      />
                      <NotificationItem
                        icon={PartyPopper}
                        title="Welcome to Help Job!"
                        subtitle="Complete your profile to get better job recommendations."
                        time="1 week ago"
                        link="#"
                        color="blue"
                      />
                    </div>

                    <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                      <button
                        onClick={() => navigateTo("/notifications") || setShowNotifications(false)}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Mobile Bell + Menu
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleNotifications}
                className="relative p-2 rounded-full text-gray-500 hover:text-blue-700 hover:bg-gray-100"
              >
                <Bell className="w-6 h-6" />
                {hasNotification && <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-500 animate-pulse"></span>}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-blue-700 hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
          <button onClick={() => navigateTo("/")} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700">
            Home
          </button>

          <button onClick={() => setMobileJobsOpen(!mobileJobsOpen)} className="w-full flex justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700">
            Job Notifications <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {mobileJobsOpen && (
            <div className="pl-6 space-y-1">
              <button onClick={() => setMobilePrivateOpen(!mobilePrivateOpen)} className="w-full flex justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Private Jobs <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {mobilePrivateOpen && (
                <div className="pl-4 space-y-1">
                  <button onClick={() => navigateTo("/jobs/IT")} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                    IT Jobs
                  </button>
                  <button onClick={() => navigateTo("/jobs/Non-IT")} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                    Non-IT Jobs
                  </button>
                </div>
              )}
              <button onClick={() => navigateTo("/jobs/internships")} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Internships
              </button>
              <button onClick={() => navigateTo("/jobs/govt")} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Govt Jobs
              </button>
            </div>
          )}

          <button onClick={() => navigateTo("/certifications")} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700">
            Free Certifications
          </button>
          <button onClick={() => navigateTo("/blog")} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700">
            Blog
          </button>
          <button onClick={() => navigateTo("/about")} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700">
            About
          </button>
          <button onClick={() => navigateTo("/contact")} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700">
            Contact Form
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
