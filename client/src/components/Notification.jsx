// Notifications.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Eye, Landmark, Award, FileCheck, PartyPopper } from "lucide-react";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "New Job Match: Senior React Developer",
      description:
        "A new job opening at Google matches your profile preferences for location and skill set.",
      time: "25m ago",
      actionText: "View Job",
      actionLink: "/jobs/it",
      new: true,
      bg: "bg-blue-50/30",
    },
    {
      id: 2,
      icon: <Eye className="w-6 h-6 text-green-600" />,
      title: "Application Viewed by Recruiter",
      description:
        "Good news! Your application for Cloud Solutions Architect was just viewed by the hiring team at Microsoft.",
      time: "2h ago",
      bg: "",
    },
    {
      id: 3,
      icon: <Landmark className="w-6 h-6 text-red-600" />,
      title: "Deadline Approaching: SBI PO",
      description:
        "Reminder: You have 3 days left to complete your application for the SBI Probationary Officer Recruitment 2025.",
      time: "5h ago",
      actionText: "Complete Application →",
      actionLink: "/jobs/govt",
      bg: "",
    },
    {
      id: 4,
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      title: "New Certification Available",
      description:
        "We've added 'AWS Certified Cloud Practitioner' to our free certifications directory. Start learning today to boost your resume.",
      time: "1d ago",
      actionText: "Browse Certifications →",
      actionLink: "/certifications",
      bg: "",
    },
    {
      id: 5,
      icon: <FileCheck className="w-6 h-6 text-gray-400" />,
      title: "Resume Review Complete",
      description:
        "Your resume score has been updated. You have 3 new suggestions to improve your ATS compatibility.",
      time: "3d ago",
      opacity: "opacity-75",
      bg: "",
    },
    {
      id: 6,
      icon: <PartyPopper className="w-6 h-6 text-blue-400" />,
      title: "Welcome to Help Job!",
      description:
        "Thanks for joining our community. Complete your profile to start getting personalized job recommendations.",
      time: "1w ago",
      opacity: "opacity-75",
      bg: "",
    },
  ];

  return (
    <div className="page-content pt-8 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-4 sm:mb-0">
            <nav className="flex text-gray-500 text-sm mb-2">
              <span
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Notifications</span>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900">Your Notifications</h1>
          </div>
          <button
            onClick={() => alert("All notifications cleared")} // Replace with modal if needed
            className="px-4 py-2 bg-white border border-gray-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition text-sm"
          >
            Clear All
          </button>
        </div>

        {/* Notification List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`p-6 border-b border-gray-100 flex items-start transition hover:bg-blue-50/30 ${item.bg} ${item.opacity ? item.opacity : ""}`}
            >
              <div className="shrink-0 pt-1">{item.icon}</div>
              <div className="ml-4 grow">
                <div className="flex justify-between items-start">
                  <p className={`text-base font-semibold ${item.new ? "text-gray-900" : "text-gray-700"}`}>
                    {item.title}{" "}
                    {item.new && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full font-medium">
                        New
                      </span>
                    )}
                  </p>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{item.time}</span>
                </div>
                <p className="text-gray-600 mt-1">{item.description}</p>
                {item.actionText && item.actionLink && (
                  <button
                    onClick={() => navigate(item.actionLink)}
                    className={`mt-3 text-sm font-medium px-4 py-1.5 rounded-md ${
                      item.actionLink.includes("jobs") ? "bg-blue-600 text-white hover:bg-blue-700" : "text-blue-600 hover:text-blue-800"
                    } transition`}
                  >
                    {item.actionText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
