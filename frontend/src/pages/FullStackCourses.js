import React from "react";
import { Link } from "react-router-dom";
import "./CoursesPageStyles.css";

// ✅ Import images properly
import mernImg from "../assets/images/python.jpg";
import meanImg from "../assets/images/fullstack.jpeg";
import javaFSImg from "../assets/images/java.jpg";

const FullStackCourses = () => {
  const courses = [
    {
      title: "Python Full Stack Development",
      slug: "mern",
      duration: "5 Months",
      mode: "Online / Offline",
      img: mernImg,
      desc: "Learn MongoDB, Express.js, React.js and Node.js with complete hands-on full stack training."
    },
    {
      title: "MERN Full Stack Development",
      slug: "mean",
      duration: "5 Months",
      mode: "Online / Offline",
      img: meanImg,
      desc: "Master Angular, Node.js, Express.js and MongoDB with real-time MEAN stack applications."
    },
    {
      title: "Java Full Stack Development",
      slug: "javafullstack",
      duration: "6 Months",
      mode: "Online / Offline",
      img: javaFSImg,
      desc: "Learn Java, Spring Boot, JPA, REST APIs, and full stack Java development from scratch."
    },
  ];

  return (
    <div className="course-page">
      <h1 className="course-title">Full Stack Courses</h1>

      <div className="course-grid">
        {courses.map((item, index) => (
          <div key={index} className="course-card">
            
            {/* Image */}
            <img src={item.img} alt={item.title} className="course-image" />

            {/* Title */}
            <h2 className="course-name">{item.title}</h2>

            {/* Description */}
            <p className="course-desc">{item.desc}</p>

            {/* Extra info */}
            <p className="course-info"><strong>Duration:</strong> {item.duration}</p>
            <p className="course-info"><strong>Mode:</strong> {item.mode}</p>

            {/* Button */}
            <Link to={`/course/${item.slug}`}>
              <button className="course-btn">View Details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStackCourses;
