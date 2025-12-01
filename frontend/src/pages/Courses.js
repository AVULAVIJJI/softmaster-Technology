import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

// IMPORT ALL IMAGES CORRECTLY
import trendingImg from "../assets/images/Trending.jpeg";
import popularImg from "../assets/images/popular.jpeg";
import fullstackImg from "../assets/images/fullstack.jpeg";
import testingImg from "../assets/images/testing.jpg";

const Courses = () => {
  const courseData = [
    {
      title: "Trending Courses",
      img: trendingImg,
      link: "/trending"
    },
    {
      title: "Popular Courses",
      img: popularImg,
      link: "/popular"
    },
    {
      title: "Full Stack Courses",
      img: fullstackImg,
      link: "/fullstack"
    },
    {
      title: "Testing Courses",
      img: testingImg,
      link: "/testing"
    }
  ];

  return (
    <section className="courses-section">
      <h2 className="courses-title">Courses we Provide</h2>

      <div className="courses-container">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            
            {/* IMAGE DISPLAY */}
            <img 
              src={course.img} 
              alt={course.title} 
              className="course-image" 
            />

            <h3 className="course-name">{course.title}</h3>

            {/* BUTTON LINK */}
            <Link to={course.link}>
              <button className="course-btn">Click here</button>
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
