import React from "react";
import Lottie from "lottie-react";

// ✅ Icons
import handshake from "../assets/handShake2.png";
import innovation from "../assets/innovation.png";
import transparency from "../assets/transparency.png";

// ✅ Lottie JSON
import teamAnimation from "../assets/animation/team_work.json";

const About = () => {
  return (
    <div className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* ✅ Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Our Mission: Connecting Talent to Opportunity
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto mt-4">
          We believe that finding a fulfilling career shouldn't be a struggle.
          Our platform simplifies the job search process globally.
        </p>
      </header>

      {/* ✅ Story Section (FIXED ALIGNMENT) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        
        {/* ✅ Text Section */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            The Help Job Story
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded in 2022 by a team of career coaches and technology experts,
            Help Job was created to address the frustration of fragmented job
            boards and expensive career training. We are dedicated to providing
            <strong> free, high-quality resources </strong>
            to job seekers at every stage of their professional journey.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our core philosophy is empowerment through access. By centralizing
            job alerts, free certifications, and expert articles, we aim to be
            the single, most reliable source for career development, helping
            millions transition into better, higher-paying roles.
          </p>
        </div>

        {/* ✅ Lottie Animation */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <Lottie 
            animationData={teamAnimation}
            loop={true}
            className="w-full max-w-lg"
          />
        </div>
      </div>

      {/* ✅ Core Values Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Our Core Values
        </h2>
      </div>

      {/* ✅ Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ✅ Accessibility */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400 text-center">
          <img 
            src={handshake} 
            alt="Accessibility" 
            className="w-10 h-10 mx-auto mb-3" 
          />
          <h3 className="text-xl font-bold text-gray-900">Accessibility</h3>
          <p className="text-gray-500 text-sm mt-2">
            All premium career tools should be available to everyone, regardless
            of background or financial means.
          </p>
        </div>

        {/* ✅ Innovation */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 text-center">
          <img 
            src={innovation} 
            alt="Innovation" 
            className="w-10 h-10 mx-auto mb-3" 
          />
          <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
          <p className="text-gray-500 text-sm mt-2">
            Continuously integrating the latest AI and data tools to
            provide the most relevant job matches.
          </p>
        </div>

        {/* ✅ Transparency */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-400 text-center">
          <img 
            src={transparency} 
            alt="Transparency" 
            className="w-10 h-10 mx-auto mb-3" 
          />
          <h3 className="text-xl font-bold text-gray-900">Transparency</h3>
          <p className="text-gray-500 text-sm mt-2">
            Clear, honest information about jobs, training,
            and company partnerships.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
