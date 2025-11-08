import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notifications from "./components/Notification";

import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Jobs
import GovtJobs from "./pages/Jobs/GovtJobs";
import Internships from "./pages/Jobs/Internships";
import NonItJobs from "./pages/Jobs/Private_jobs/NonITJobs";
import ItJobs from "./pages/Jobs/Private_jobs/ITJobs";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/it" element={<ItJobs />} />
        <Route path="/jobs/non-it" element={<NonItJobs />} />
        <Route path="/jobs/internships" element={<Internships />} />
        <Route path="/jobs/govt" element={<GovtJobs />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
