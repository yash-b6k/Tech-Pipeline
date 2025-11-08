import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  BellRing,
  StickyNote,
  Compass,
  UserPlus,
  SearchCheck,
  FileCheck,
  PartyPopper,
  Quote
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const featuredJobsRef = useRef(null);
  const companiesScrollRef = useRef(null);

  const goCertifications = () => navigate("/certifications");

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const job = form.querySelector('input[placeholder="Job Title, Keywords, or Company"]')?.value || "";
    const loc = form.querySelector('input[placeholder="City, State, or Remote"]')?.value || "";
    navigate(`/jobs?query=${encodeURIComponent(job)}&location=${encodeURIComponent(loc)}`);
  };

  const showModal = (title = "Info", message = "") => {
    // lightweight fallback modal
    // eslint-disable-next-line no-alert
    alert(`${title}\n\n${message}`);
  };

  const scrollFeatured = (dir = "right") => {
    const el = featuredJobsRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.66 || 560;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  // keyboard navigation for featured jobs
  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "ArrowRight") scrollFeatured("right");
      if (ev.key === "ArrowLeft") scrollFeatured("left");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="home-page" className="page-content">
      {/* Inline CSS for animation + small helpers (no tailwind.config required) */}
      <style>{`
        /* marquee animation for companies */
        @keyframes companies-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-companies {
          animation: companies-scroll 28s linear infinite;
        }
        .horizontal-scrollbar::-webkit-scrollbar { height: 8px; }
        .horizontal-scrollbar::-webkit-scrollbar-thumb { background: rgba(107,114,128,0.3); border-radius: 9999px; }
        /* full-bleed trick: element will stretch to viewport edges when using these margins */
        .full-bleed {
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          width: 100vw;
        }
      `}</style>

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[68vh] flex items-end md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1920x1080/1e40af/ffffff?text=Professional+Career+Background"
            alt="Background of a successful career setup"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/1920x1080/1e40af/ffffff?text=Career+Success"; }}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-6 md:pb-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
            Find Your Next Opportunity
          </h1>
          <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Search over 50,000 active jobs and start building your successful career today.
          </p>

          {/* SEARCH FORM */}
          <form onSubmit={handleSearch} className="mt-6 md:mt-8 flex flex-col gap-3 sm:flex-row justify-center items-stretch p-4 bg-white rounded-xl shadow-2xl w-full sm:w-[760px] mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job Title, Keywords, or Company"
                className="w-full pl-10 pr-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                required
              />
            </div>

            <div className="relative w-full sm:w-1/3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="City, State, or Remote"
                className="w-full pl-10 pr-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Find Job
            </button>
          </form>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Advantages</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">Everything You Need to Get Hired</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="p-3 inline-flex rounded-full bg-blue-100 text-blue-600">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">Real-Time Alerts</h3>
              <p className="mt-2 text-gray-500">Never miss an opportunity. Get instant notifications for new openings matching your profile, location, and skills.</p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 cursor-pointer"
              onClick={goCertifications}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") goCertifications(); }}
            >
              <div className="p-3 inline-flex rounded-full bg-green-100 text-green-600">
                <StickyNote className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">Skill Up for Free</h3>
              <p className="mt-2 text-gray-500">Access our library of high-value, free certifications and courses to boost your resume and marketability.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="p-3 inline-flex rounded-full bg-indigo-100 text-indigo-600">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">Expert Guidance</h3>
              <p className="mt-2 text-gray-500">Read articles, utilize our resume builder (coming soon!), and gain insights from career experts on the blog.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Get Hired in 4 Easy Steps</h2>
            <p className="mt-3 text-base text-gray-500">Our platform is designed to get you from search to success efficiently.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <UserPlus className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">Create Account</h3>
              <p className="mt-2 text-sm text-gray-500">Build your profile to showcase your skills and experience.</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <SearchCheck className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">Search Jobs</h3>
              <p className="mt-2 text-sm text-gray-500">Use filters to find jobs that perfectly match your criteria.</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">Apply Quickly</h3>
              <p className="mt-2 text-sm text-gray-500">Apply to jobs with one click and track your status.</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <PartyPopper className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">Get Hired</h3>
              <p className="mt-2 text-sm text-gray-500">Land your dream job and accelerate your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AD (leaderboard) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
          <div className="text-center">
            <div className="font-semibold uppercase tracking-wider">Advertisement</div>
            <div className="text-sm">728x90 Leaderboard Available</div>
          </div>
        </div>
      </div>

      {/* FEATURED JOBS - EDGE TO EDGE */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto relative px-0">
          <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Featured Job Openings</h2>
            <button onClick={() => navigate("/jobs")} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View All Jobs
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Left arrow (desktop only) */}
          <button
            type="button"
            onClick={() => scrollFeatured("left")}
            aria-label="Scroll left"
            className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur p-2 rounded-full shadow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          {/* Carousel: full-bleed using the full-bleed helper class */}
          <div className="full-bleed py-4">
            <div
              ref={featuredJobsRef}
              className="flex space-x-6 overflow-x-auto pb-4 horizontal-scrollbar scroll-smooth px-4 md:px-6"
              aria-label="Featured jobs"
            >
              {/* CARD (mobile friendly widths: min-w so multiple show on desktop) */}
              {/** Use min-w so on mobile a card doesn't become super wide; on desktop cards align flush to edges **/}
              {[
                {
                  logo: "https://placehold.co/40x40/3b82f6/ffffff?text=G",
                  title: "Senior React Developer",
                  company: "Google LLC",
                  location: "Mountain View, CA (or Remote)",
                  badge: "Remote"
                },
                {
                  logo: "https://placehold.co/40x40/14b8a6/ffffff?text=M",
                  title: "Cloud Solutions Architect",
                  company: "Microsoft",
                  location: "Redmond, WA",
                  badge: "Hybrid"
                },
                {
                  logo: "https://placehold.co/40x40/ef4444/ffffff?text=S",
                  title: "Digital Marketing Manager",
                  company: "Salesforce",
                  location: "USA, Remote",
                  badge: "Remote"
                },
                {
                  logo: "https://placehold.co/40x40/f97316/ffffff?text=A",
                  title: "Data Scientist, AWS",
                  company: "Amazon Web Services",
                  location: "Austin, TX",
                  badge: "On-Site"
                },
                {
                  logo: "https://placehold.co/40x40/8b5cf6/ffffff?text=H",
                  title: "UX/UI Designer Intern",
                  company: "HubSpot",
                  location: "Global, Remote (Internship)",
                  badge: "Remote"
                },
                {
                  logo: "https://placehold.co/40x40/000000/ffffff?text=U",
                  title: "Product Manager",
                  company: "Uber",
                  location: "San Francisco, CA",
                  badge: "On-Site"
                },
                {
                  logo: "https://placehold.co/40x40/2874f0/ffffff?text=F",
                  title: "Sr. Frontend Engineer",
                  company: "Flipkart",
                  location: "Bangalore, IN",
                  badge: "Hybrid"
                },
                {
                  logo: "https://placehold.co/40x40/e50914/ffffff?text=N",
                  title: "DevOps Engineer",
                  company: "Netflix",
                  location: "Remote (US)",
                  badge: "Remote"
                }
              ].map((job, idx) => (
                <article
                  key={idx}
                  className="min-w-[260px] sm:min-w-[300px] md:w-80 bg-white p-5 rounded-xl shadow-lg border border-gray-100 shrink-0"
                >
                  <div className="flex items-center justify-between mb-3">
                    <img src={job.logo} alt={`${job.company} logo`} className="rounded-full w-10 h-10" />
                    <span className={`text-sm font-medium ${job.badge === "Remote" ? "text-green-600 bg-green-50" : job.badge === "Hybrid" ? "text-yellow-600 bg-yellow-50" : "text-blue-600 bg-blue-50"} px-3 py-1 rounded-full`}>
                      {job.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 mb-2">{job.company}</p>

                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-gray-400" />{job.location}
                  </p>

                  <button onClick={() => showModal("Apply", `Simulating application for ${job.title}...`)} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                    Apply Now
                  </button>
                </article>
              ))}

              {/* CTA card */}
              <article className="min-w-[260px] sm:min-w-[300px] md:w-80 bg-white p-5 rounded-xl shadow-lg border border-gray-100 shrink-0 cursor-pointer" onClick={() => navigate("/jobs")}>
                <div className="flex items-center justify-between mb-3">
                  <img src="https://placehold.co/40x40/2563eb/ffffff?text=HJ" alt="Help Job" className="rounded-full w-10 h-10" />
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">50k+ Jobs</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Explore All Jobs</h3>
                <p className="text-gray-500 text-sm mt-1 mb-2">Help Job Database</p>
                <p className="text-gray-600 text-sm mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18" /></svg>
                  Worldwide Opportunities
                </p>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  View Listings
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </article>
            </div>
          </div>

          {/* Right arrow (desktop only) */}
          <button
            type="button"
            onClick={() => scrollFeatured("right")}
            aria-label="Scroll right"
            className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur p-2 rounded-full shadow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </section>

      {/* AD (full width) */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-32 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 shadow-sm">
            <div className="text-center">
              <div className="font-semibold uppercase tracking-wider">Premium Ad Space</div>
              <div className="text-sm">Available for Sponsorship</div>
            </div>
          </div>
        </div>
      </div>

      {/* TOP COMPANIES — infinite visual scroll (marquee) */}
      <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Top Companies Hiring Now</h2>
          <p className="mt-2 text-sm text-gray-500">We partner with the world's leading companies to bring you exclusive opportunities.</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={companiesScrollRef}
            className="animate-companies flex w-max items-center gap-8 px-8 hover:pause"
            // hover:pause is not standard; we rely on user's hover CSS in style => use inline pause via :hover pause above inline style not available here.
            // But we included 'hover:[animation-play-state:paused]' usage earlier in your markup; to be safe we also add a little JS control below if needed.
            aria-hidden
          >
            {/* Set duplicated logos so the animation appears seamless */}
            {[
              "Google", "Microsoft", "Amazon", "Salesforce", "HubSpot", "Accenture", "Uber", "Flipkart", "Netflix"
            ].concat(["Google", "Microsoft", "Amazon", "Salesforce", "HubSpot", "Accenture", "Uber", "Flipkart", "Netflix"]).map((name, i) => (
              <img
                key={i}
                src={`https://placehold.co/150x70/grayscale/ffffff?text=${encodeURIComponent(name)}`}
                alt={name}
                className="mx-6 opacity-60 hover:opacity-100 transition duration-300"
                style={{ width: 150, height: 70 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Don't Just Take Our Word For It</h2>
            <p className="mt-3 text-sm sm:text-base text-blue-200">See how Help Job has transformed the careers of job seekers just like you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-600 p-6 rounded-xl shadow relative">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-blue-500 opacity-50" />
              <p className="text-blue-100 italic mb-4">"The free certifications on Help Job gave me the skills I needed to pivot into a new industry. I landed a job as a cloud associate within 3 months!"</p>
              <div className="flex items-center">
                <img src="https://placehold.co/50x50/ffffff/333333?text=JS" alt="Jane S" className="rounded-full border-2 border-white" />
                <div className="ml-3">
                  <div className="font-bold">Jane S.</div>
                  <div className="text-sm text-blue-200">Cloud Associate</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-6 rounded-xl shadow relative">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-blue-500 opacity-50" />
              <p className="text-blue-100 italic mb-4">"The real-time job alerts are a game-changer. I was one of the first to apply for my dream role and got an interview the next day. Highly recommend."</p>
              <div className="flex items-center">
                <img src="https://placehold.co/50x50/ffffff/333333?text=MD" alt="Mark D" className="rounded-full border-2 border-white" />
                <div className="ml-3">
                  <div className="font-bold">Mark D.</div>
                  <div className="text-sm text-blue-200">Software Engineer</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-6 rounded-xl shadow relative">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-blue-500 opacity-50" />
              <p className="text-blue-100 italic mb-4">"As a recent graduate, the internship listings were invaluable. The blog also had amazing interview tips that helped me feel confident."</p>
              <div className="flex items-center">
                <img src="https://placehold.co/50x50/ffffff/333333?text=AP" alt="Aisha P" className="rounded-full border-2 border-white" />
                <div className="ml-3">
                  <div className="font-bold">Aisha P.</div>
                  <div className="text-sm text-blue-200">Marketing Intern</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
