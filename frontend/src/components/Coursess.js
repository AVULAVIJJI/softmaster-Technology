import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Coursess.css";

// Images
import dataImg from "../assets/images/python.jpg";
import testingImg from "../assets/images/java.jpg";
import tableauImg from "../assets/images/AI.jpg";
import manualTestingImg from "../assets/images/testing.jpg";
import apiTestingImg from "../assets/images/azure.jpg";

const courses = [
  {
    title: "Python Full Stack",
    duration: "3.5 Months",
    mode: "Offline / Live Online",
    image: dataImg,
    slug: "python",
  },
  {
    title: "Java Full Stack",
    duration: "5 Months",
    mode: "Offline / Live Online",
    image: testingImg,
    slug: "java",
  },
  {
    title: "Artificial Intelligence",
    duration: "1 Month",
    mode: "Offline / Live Online",
    image: tableauImg,
    slug: "artificial-intelligence",
  },
  {
    title: "Manual Testing Course",
    duration: "2 Months",
    mode: "Offline / Live Online",
    image: manualTestingImg,
    slug: "manualtesting",
  },
  {
    title: "Azure Cloud",
    duration: "1.5 Months",
    mode: "Offline / Live Online",
    image: apiTestingImg,
    slug: "azure",
  },
];

const Courses = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const { current } = scrollRef;
    current.scrollBy({
      left: direction === "left" ? -330 : 330,
      behavior: "smooth",
    });
  };

  return (
    <div className="coursess-container">
      <h2 className="title">Top Certification Courses</h2>
      <div className="scrolll-buttons">
        <button className="arrow-button" onClick={() => scroll("left")}>
          ←
        </button>

        <div className="card-grid-scrolll" ref={scrollRef}>
          {courses.map((course, index) => (
            <div className="course-cardd" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />

              <div className="course-content">
                <h3>{course.title}</h3>

                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Mode:</strong> {course.mode}
                </p>

                {/* 🔥 Navigate to details page */}
                <button
                  className="knoww-more-btn"
                  onClick={() => navigate(`/course/${course.slug}`)}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-button" onClick={() => scroll("right")}>
          →
        </button>
      </div>
    </div>
  );
};

export default Courses;
