import React from "react";
import { Link } from "react-router-dom";
import "./CoursesPageStyles.css";

// Import images correctly from src/assets/images folder
import pythonImg from "../assets/images/python.jpg";
import javaImg from "../assets/images/java.jpg";
import awsImg from "../assets/images/fullstack.jpeg";

const PopularCourses = () => {
  const courses = [
    {
      title: "Python Full Stack",
      slug: "python-fullstack",
      duration: "6 Months",
      mode: "Online / Offline",
      img: pythonImg,
      desc: "Learn Python, Django, REST APIs, frontend and backend development with real-time projects."
    },
    {
      title: "Java Full Stack",
      slug: "java-fullstack",
      duration: "6 Months",
      mode: "Online / Offline",
      img: javaImg,
      desc: "Master Java, Spring Boot, microservices, and full-stack development with industry standards."
    },
    {
      title: "Mern Full Stack",
      slug: "devops",
      duration: "4 Months",
      mode: "Online / Offline",
      img: awsImg,
      desc: "Learn AWS cloud, CI/CD pipelines, Docker, Kubernetes, monitoring, and automation tools."
    }
  ];

  return (
    <div className="course-page">
      <h1 className="course-title">Popular Courses</h1>

      <div className="course-grid">
        {courses.map((item, index) => (
          <div key={index} className="course-card">

            {/* IMAGE */}
            <img src={item.img} alt={item.title} className="course-image" />

            {/* TITLE */}
            <h2 className="course-name">{item.title}</h2>

            {/* DESCRIPTION */}
            <p className="course-desc">{item.desc}</p>

            {/* EXTRA INFO */}
            <p className="course-info"><strong>Duration:</strong> {item.duration}</p>
            <p className="course-info"><strong>Mode:</strong> {item.mode}</p>

            {/* BUTTON */}
            <Link to={`/course/${item.slug}`}>
              <button className="course-btn">View Details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
