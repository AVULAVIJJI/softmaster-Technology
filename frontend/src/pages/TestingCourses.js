import React from "react";
import { Link } from "react-router-dom";
import "./CoursesPageStyles.css";

// Import images correctly
import manualTestingImg from "../assets/images/manual.png";
import seleniumImg from "../assets/images/automation.jpeg";
import qaTestingImg from "../assets/images/selenium.jpeg";

const TestingCourses = () => {
  const courses = [
    {
      title: "Manual Testing",
      slug: "manualtesting",
      duration: "2 Months",
      mode: "Online / Offline",
      img: manualTestingImg,
      desc: "Learn complete software testing lifecycle, test cases, bug reporting, and QA workflow."
    },
    {
      title: "Automation Testing (Selenium)",
      slug: "selenium",
      duration: "3 Months",
      mode: "Online / Offline",
      img: seleniumImg,
      desc: "Master Selenium WebDriver, Java, TestNG, automation frameworks, and hybrid testing models."
    },
    {
      title: "Full QA Testing",
      slug: "selenium",
      duration: "4 Months",
      mode: "Online / Offline",
      img: qaTestingImg,
      desc: "Complete manual + automation testing with real project-based learning."
    },
  ];

  return (
    <div className="course-page">
      <h1 className="course-title">Testing Courses</h1>

      <div className="course-grid">
        {courses.map((item, index) => (
          <div key={index} className="course-card">
            
            <img src={item.img} alt={item.title} className="course-image" />

            <h2 className="course-name">{item.title}</h2>

            <p className="course-desc">{item.desc}</p>

            <p className="course-info">
              <strong>Duration:</strong> {item.duration}
            </p>

            <p className="course-info">
              <strong>Mode:</strong> {item.mode}
            </p>

            <Link to={`/course/${item.slug}`}>
              <button className="course-btn">View Details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingCourses;
