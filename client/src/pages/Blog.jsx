import React from "react";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 Mistakes to Avoid in Your Next Virtual Interview",
      tag: "Interviewing",
      color: "text-green-600",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Interview+Tips",
      description:
        "Virtual interviews require a different set of skills and preparation than in-person meetings. Learn how to optimize your setup and answers for the best impression.",
    },
    {
      title: "The Ultimate Guide to ATS-Friendly Resume Formats",
      tag: "Resume",
      color: "text-yellow-600",
      image: "https://placehold.co/600x400/f59e0b/ffffff?text=Resume+Writing",
      description:
        "Applicant Tracking Systems (ATS) filter out millions of resumes. Discover the essential formatting tips to ensure your resume makes it to a human reviewer.",
    },
    {
      title: "Top 3 Soft Skills Companies Are Hiring For in 2025",
      tag: "Career Development",
      color: "text-blue-600",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=Career+Growth",
      description:
        "Technical skills are great, but soft skills get you promoted. We analyze the market to bring you the most in-demand interpersonal abilities.",
    },

    {
      title: "How to Network Effectively (Even If You're an Introvert)",
      tag: "Networking",
      color: "text-red-600",
      image: "https://placehold.co/600x400/ef4444/ffffff?text=Networking+Skills",
      description:
        "Networking isn't just about collecting contacts. Learn how to build genuine relationships that can lead to long-term career opportunities.",
    },

    {
      title: "Know Your Worth: A Guide to Salary Negotiation",
      tag: "Salary",
      color: "text-purple-600",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Salary+Negotiation",
      description:
        "Asking for more money can be intimidating. We break down the research, timing, and conversation starters you need to negotiate your salary with confidence.",
    },

          //  Here comes other new cards in this blog section 
  ];

  return (
    <div className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ✅ Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Career Insights & Expert Advice
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Stay ahead with articles on job trends, resume optimization, interview techniques, and skill development.
        </p>
      </header>

      {/* ✅ Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              className="h-48 w-full object-cover"
              alt="Blog visual"
            />

            <div className="p-6">
              <span className={`text-sm font-semibold ${item.color}`}>
                {item.tag}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                {item.title}
              </h3>

              {/* ✅ 3-line description */}
              <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                {item.description}
              </p>

              {/* ✅ Read More */}
              <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium" href="#">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
