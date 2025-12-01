import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CourseDetails.css";

const courseInfo = {
  // ⭐ TRENDING COURSES
  aws: {
    title: "AWS Training in Hyderabad",
    description:
      "AWS is Amazon’s cloud computing platform offering compute, storage, security, networking and much more.",
    modules: "24 Modules",
    language: "English",
    certificate: "After Completion",
  },

  awsdevops: {
    title: "AWS DevOps Training in Hyderabad",
    description:
      "AWS DevOps combines AWS services with DevOps pipelines for CI/CD, automation and monitoring.",
    modules: "20 Modules",
    language: "English",
    certificate: "After Completion",
  },

  azure: {
    title: "Azure Training in Hyderabad",
    description:
      "Azure is Microsoft’s cloud platform offering VMs, databases, AI, networking and enterprise solutions.",
    modules: "26 Modules",
    language: "English",
    certificate: "After Completion",
  },

  // ⭐ POPULAR COURSES
  python: {
    title: "Python Training in Hyderabad",
    description:
      "Python is a powerful programming language used for web development, AI, automation and data analysis.",
    modules: "18 Modules",
    language: "English",
    certificate: "After Completion",
  },

  java: {
    title: "Java Training in Hyderabad",
    description:
      "Java is a robust programming language widely used for building enterprise-level applications.",
    modules: "22 Modules",
    language: "English",
    certificate: "After Completion",
  },

  datascience: {
    title: "Data Science Training in Hyderabad",
    description:
      "Data Science includes data analysis, machine learning, AI, statistics and real-time projects.",
    modules: "30 Modules",
    language: "English",
    certificate: "After Completion",
  },

  // ⭐ FULL STACK COURSES
  mern: {
    title: "MERN Full Stack Developer Training",
    description:
      "MERN stack covers MongoDB, Express, React JS and Node.js for full-stack web applications.",
    modules: "25 Modules",
    language: "English",
    certificate: "After Completion",
  },

  mean: {
    title: "MEAN Full Stack Developer Training",
    description:
      "MEAN stack includes MongoDB, Express, Angular and Node.js for modern full-stack development.",
    modules: "24 Modules",
    language: "English",
    certificate: "After Completion",
  },

  javafullstack: {
    title: "Java Full Stack Developer Training",
    description:
      "Java Full Stack includes Core Java, Spring Boot, REST APIs, HTML, CSS, JS, React, SQL.",
    modules: "28 Modules",
    language: "English",
    certificate: "After Completion",
  },

  // ⭐ TESTING COURSES
  manualtesting: {
    title: "Manual Testing Training",
    description:
      "Manual Testing covers SDLC, STLC, test cases, bug reporting, agile testing and QA practices.",
    modules: "15 Modules",
    language: "English",
    certificate: "After Completion",
  },

  automationtesting: {
    title: "Automation Testing Training",
    description:
      "Automation Testing includes Selenium, TestNG, Frameworks, WebDriver, CI/CD integration.",
    modules: "20 Modules",
    language: "English",
    certificate: "After Completion",
  },

  selenium: {
    title: "Selenium Testing Training",
    description:
      "Selenium automation includes WebDriver, page object model, hybrid framework and real-time projects.",
    modules: "18 Modules",
    language: "English",
    certificate: "After Completion",
  },
};

const CourseDetails = () => {
  const { slug } = useParams();
  const data = courseInfo[slug];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: data?.title || "",
    message: "",
    termsAccepted: true, // auto-accept since no checkbox here
  });

  if (!data) return <h2 style={{ padding: "40px" }}>Course not found</h2>;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/register", formData);
      alert("Enrolled Successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        course: data?.title || "",
        message: "",
        termsAccepted: true,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="course-wrapper">

      {/* LEFT SECTION — Course Info */}
      <div className="course-left">
        <h1>{data.title}</h1>
        <p className="course-desc">{data.description}</p>

        <div className="details-box">
          <div><strong>Modules:</strong> {data.modules}</div>
          <div><strong>Certificate:</strong> {data.certificate}</div>
          <div><strong>Language:</strong> {data.language}</div>
        </div>

        <div className="more-info">
          <h2>More Information</h2>
          <ul>
            <li>Real-time Projects Included</li>
            <li>100% Placement Assistance</li>
            <li>Expert Trainers with 10+ Years Experience</li>
            <li>Flexible Online & Classroom Batches</li>
            <li>Daily Assignments & Mock Interviews</li>
          </ul>
        </div>
      </div>

      {/* RIGHT — Form */}
      <div className="form-section">
        <h2>Get in Touch with Us</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="First Name*"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email*"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <input
            name="mobile"
            placeholder="Mobile Number*"
            value={formData.mobile}
            required
            onChange={handleChange}
          />

          <input
            name="course"
            placeholder="City*"
            value={formData.course}
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Enroll Now</button>
        </form>
      </div>

    </div>
  );
};

export default CourseDetails;
