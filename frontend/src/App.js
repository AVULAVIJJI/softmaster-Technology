import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";
import Courses from "./components/Coursess.js";
import WhySoft from "./components/WhySoft.js";
import Testimonials from "./components/Testimonials.js"; // ✅ Added Testimonials

// Pages
import Contact from "./pages/Contact.js";
import Internship from "./pages/Internship.js";
import AboutUs from "./pages/AboutUs.js";
import CoursesPage from "./pages/Courses.js";

// Course Pages
import TrendingCourses from "./pages/TrendingCourses.js";
import PopularCourses from "./pages/PopularCourses.js";
import FullStackCourses from "./pages/FullStackCourses.js";
import TestingCourses from "./pages/TestingCourses.js";

import CourseDetails from "./pages/CourseDetails.js";

function App() {
  // Set browser tab title
  useEffect(() => {
    document.title = "SoftMasterTech";
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Courses />
                <WhySoft />
                <Testimonials />
              </>
            }
          />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursesPage />} />

          {/* Course Category Pages */}
          <Route path="/trending" element={<TrendingCourses />} />
          <Route path="/popular" element={<PopularCourses />} />
          <Route path="/fullstack" element={<FullStackCourses />} />
          <Route path="/testing" element={<TestingCourses />} />

          {/* Dynamic Details Page */}
          <Route path="/course/:slug" element={<CourseDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
