import React from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Monitor,
  Cloud,
  Code,
  TrendingUp,
  Rocket,
  Megaphone,
  CloudLightning,
  PieChart,
  Recycle,
} from "lucide-react";

const Certifications = () => {
  // ✅ Modal placeholder (replace later with real modal)
  const showModal = (title, message) => alert(`${title}\n${message}`);

  // ✅ Card Data (all your certifications)
  const certifications = [
    {
      category: "Digital Marketing",
      color: "blue",
      title: "Fundamentals of Digital Marketing",
      desc: "Learn the basics of digital marketing, SEO, content, and more from the industry leader.",
      hours: "40 Hours",
      provider: "Google",
      icon: <Monitor className="w-4 h-4 mr-1" />,
      btn: "Get Certified",
      border: "border-blue-600",
      bg: "text-blue-600 bg-blue-50",
      providerColor: "text-green-600",
    },
    {
      category: "Cloud Computing",
      color: "green",
      title: "Microsoft Azure Fundamentals (AZ-900 Prep)",
      desc: "Master cloud concepts and prepare for the AZ-900 certification exam.",
      hours: "12 Hours",
      provider: "Microsoft Learn",
      icon: <Cloud className="w-4 h-4 mr-1" />,
      btn: "Start Learning",
      border: "border-green-600",
      bg: "text-green-600 bg-green-50",
      providerColor: "text-green-600",
    },
    {
      category: "Programming",
      color: "indigo",
      title: "Introduction to Python Programming",
      desc: "Beginner-friendly Python training covering syntax, loops, and OOP.",
      hours: "30 Hours",
      provider: "Himalayas Academy",
      icon: <Code className="w-4 h-4 mr-1" />,
      btn: "Enroll Now",
      border: "border-indigo-600",
      bg: "text-indigo-600 bg-indigo-50",
      providerColor: "text-green-600",
    },
    {
      category: "Data Science",
      color: "yellow",
      title: "Data Visualization with Python",
      desc: "Learn to build charts and graphs using Pandas & Matplotlib.",
      hours: "6 Hours",
      provider: "LinkedIn Learning (Free Trial)",
      icon: <TrendingUp className="w-4 h-4 mr-1" />,
      btn: "View Course",
      border: "border-yellow-600",
      bg: "text-yellow-600 bg-yellow-50",
      providerColor: "text-green-600",
    },
    {
      category: "CRM / Sales",
      color: "red",
      title: "Salesforce Admin Beginner Trailmix",
      desc: "Platform essentials for an entry-level Salesforce admin role.",
      hours: "20 Hours",
      provider: "Salesforce Trailhead",
      icon: <Rocket className="w-4 h-4 mr-1" />,
      btn: "Explore Trails",
      border: "border-red-600",
      bg: "text-red-600 bg-red-50",
      providerColor: "text-green-600",
    },
    {
      category: "Marketing Strategy",
      color: "pink",
      title: "Inbound Marketing Certification Course",
      desc: "Master inbound methodology, SEO, and content strategy.",
      hours: "5 Hours",
      provider: "HubSpot Academy",
      icon: <Megaphone className="w-4 h-4 mr-1" />,
      btn: "Enroll Free",
      border: "border-pink-600",
      bg: "text-pink-600 bg-pink-50",
      providerColor: "text-green-600",
    },
    {
      category: "Cloud Computing",
      color: "orange",
      title: "AWS Certified Cloud Practitioner",
      desc: "Understand AWS cloud concepts, core services, and security.",
      hours: "15 Hours",
      provider: "AWS Skill Builder",
      icon: <CloudLightning className="w-4 h-4 mr-1" />,
      btn: "Start Learning",
      border: "border-orange-500",
      bg: "text-orange-600 bg-orange-50",
      providerColor: "text-green-600",
    },
    {
      category: "Data & Analytics",
      color: "yellow",
      title: "Google Analytics Individual Qualification (GAIQ)",
      desc: "Master Google Analytics from basics to advanced reporting.",
      hours: "4–6 Hours",
      provider: "Google Skillshop",
      icon: <PieChart className="w-4 h-4 mr-1" />,
      btn: "Get Certified",
      border: "border-yellow-500",
      bg: "text-yellow-600 bg-yellow-50",
      providerColor: "text-green-600",
    },
    {
      category: "Agile & Business",
      color: "cyan",
      title: "Professional Scrum Master I (PSM I) Prep",
      desc: "Learn Scrum fundamentals and prepare for the PSM I exam.",
      hours: "16 Hours",
      provider: "Scrum.org",
      icon: <Recycle className="w-4 h-4 mr-1" />,
      btn: "View Resources",
      border: "border-cyan-500",
      bg: "text-cyan-600 bg-cyan-50",
      providerColor: "text-green-600",
    },
  ];

  return (
    <div id="certifications-page" className="page-content pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Free Certifications to Boost Your Career
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            A curated list of high-quality, free courses and exams from top institutions.
          </p>
        </header>

        {/* ✅ FILTER BAR */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <Filter className="w-5 h-5 mr-2 text-blue-600" />
            Filter & Search
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by topic, provider, or skill"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <select className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500">
                <option value="">Filter by Category</option>
                <option>IT & Software</option>
                <option>Digital Marketing</option>
                <option>Data Science</option>
                <option>Business & Finance</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500">
                <option value="">Sort By</option>
                <option>Most Popular</option>
                <option>Newest Added</option>
                <option>Shortest Time</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* ✅ CERTIFICATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-xl border-t-4 ${item.border} flex flex-col justify-between transform hover:shadow-2xl hover:scale-[1.01] transition duration-300`}
            >
              <div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full mb-3 inline-block ${item.bg}`}>
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>

                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center text-gray-600 text-sm">
                  {item.icon}
                  {item.hours} |{" "}
                  <strong className={`ml-1 ${item.providerColor}`}>{item.provider}</strong>
                </div>

                <button
                  onClick={() => showModal("Redirect", `Simulating redirect to ${item.provider}.`)}
                  className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Certifications;
