import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Internship.css";

import img1 from "../assets/images/aws.jpeg";
import img2 from "../assets/images/awsdevops.jpeg";
import img3 from "../assets/images/azure.jpeg";
import img4 from "../assets/images/cyber.jpeg";
import img5 from "../assets/images/azure.jpg";
import img6 from "../assets/images/gcp.jpeg";
import img7 from "../assets/images/gcp dev.jpeg";
import img8 from "../assets/images/data eng.jpeg";
import img9 from "../assets/images/python.jpg";
import img10 from "../assets/images/java.jpg";
import img11 from "../assets/images/dotnet.jpeg";
import img12 from "../assets/images/fullstack.jpeg";
import img13 from "../assets/images/manual.png";
import img14 from "../assets/images/automation.jpeg";
import img15 from "../assets/images/selenium.jpeg";
import logo from "../assets/images/logo.png";

const Internship = () => {
  const [activeTab, setActiveTab] = useState("trending");

  // ----------- CALLBACK FORM STATE -----------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  // ----------- HANDLE INPUT -----------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // ----------- HANDLE SUBMIT (API CALL) -----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, course } = formData;
    if (!name || !email || !mobile || !course) {
      setMessage("⚠ Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Request Submitted Successfully!");
        setFormData({ name: "", email: "", mobile: "", course: "" }); // reset form
      } else {
        setMessage(data.message || "❌ Something went wrong.");
      }
    } catch {
      setMessage("❌ Server error. Try again later.");
    }

    setLoading(false);
  };


  const internships = [
    {
      course: "Azure Data Engineering",
      faculty: "Mr. Bhaskar Sir (14+ Yrs Exp)",
      demoDate: "Sept-17th",
      time: "9:00 AM (IST)",
      mode: "Online",
      duration: "2 - 2½ Months",
      registerLink: "#",
    },
    {
      course: "Python Fullstack",
      faculty: "Meera Vali Sir (10+ Yrs Exp)",
      demoDate: "Sept-17th",
      time: "11:00 AM (IST)",
      mode: "Online/Offline",
      duration: "4 - 5 Months",
      registerLink: "#",
    },
    {
      course: "Java Fullstack",
      faculty: "Tirumalesh Sir (10+ Yrs Exp)",
      demoDate: "Sept-17th",
      time: "9:00 AM (IST)",
      mode: "Online/Offline",
      duration: "5 - 6 Months",
      registerLink: "#",
    },
    {
      course: "Service Now",
      faculty: "Mr. Dhileep (10+ Yrs Exp)",
      demoDate: "Sept-16th",
      time: "9:00 PM (IST)",
      mode: "Online",
      duration: "3 Months",
      registerLink: "#",
    },
  ];

  const tabs = {
    trending: [
      { title: "AWS", img: img1 },
      { title: "AWS Devops", img: img2 },
      { title: "Azure", img: img3 },
      { title: "Cyber Security", img: img4 },
    ],
    popular: [
      { title: "Azure Data Bricks", img: img5 },
      { title: "GCP", img: img6 },
      { title: "GCP Devops", img: img7 },
      { title: "Data Engineering", img: img8 },
    ],
    fullstack: [
      { title: "Python Full Stack", img: img9 },
      { title: "Java Full Stack", img: img10 },
      { title: "Dot Net", img: img11 },
      { title: "Web Development", img: img12 },
    ],
    testing: [
      { title: "Manual Testing", img: img13 },
      { title: "Automation Testing", img: img14 },
      { title: "Selenium", img: img15 },
      { title: "MERN Full Stack", img: img12 },
    ],
  };

  return (
    <div className="internship-page">

      {/* --- Banner --- */}
      <section
        className="internship-banner"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg')",
        }}
      >
        <div className="overlay">
          <h1 className="banner-title">INTERNSHIP</h1>
          <p className="banner-breadcrumb">
            Home <span className="arrow">→</span> <span>Internship</span>
          </p>
        </div>
      </section>

      {/* --- Internship Table --- */}
      <div className="internship-container">
        <h2 className="internship-title">Internship Courses</h2>

        <table className="internship-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Faculty</th>
              <th>Demo Date</th>
              <th>Time</th>
              <th>Mode</th>
              <th>Duration</th>
              <th>Register</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((item, index) => (
              <tr key={index} className={index % 2 !== 0 ? "alt-row" : ""}>
                <td>{item.course}</td>
                <td>{item.faculty}</td>
                <td>{item.demoDate}</td>
                <td>{item.time}</td>
                <td>{item.mode}</td>
                <td>{item.duration}</td>
                <td><a href={item.registerLink} className="register-btn">Register Now</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ----------- CALLBACK FORM WITH API ----------- */}
      <section className="callback-section">
        <h2 className="callback-title">Request A Callback</h2>

        {message && <p className="callback-message">{message}</p>}

        <form className="callback-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Enter Your Mobile Number*" value={formData.mobile} onChange={handleChange} required />

          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Popular Courses*</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO">SEO</option>
            <option value="SEM">SEM</option>
          </select>

          <button type="submit" className="callback-btn" disabled={loading}>
            {loading ? "Submitting..." : "Enroll Now"}
          </button>
        </form>
      </section>

      {/* --- Tabs Section --- */}
      <section className="tab-courses-section">
        <h2 className="tab-title">Courses By Category</h2>

        <div className="tabs-container">
          {["trending", "popular", "fullstack", "testing"].map(tab => (
            <button key={tab} className={activeTab === tab ? "tab active" : "tab"} onClick={() => setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {tabs[activeTab].map((course, index) => (
            <div className="tab-card" key={index}>
              <img src={course.img} className="tab-card-img" alt={course.title} />
              <h3 className="tab-card-title">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- About Section --- */}
      <section className="about-version-section">
        <div className="about-left">
          <img src={logo} alt="softmaster" className="about-logo" />
        </div>

        <div className="about-right">
          <h2 className="about-title">Welcome To SoftMaster</h2>
          <p className="about-desc">
            SoftMaster Technology is the premier cloud technology training institute in Hyderabad.
            We provide classroom and online training in high-demand technologies.
          </p>

          <Link to="/courses" className="about-btn">
            Explore Our Courses →
          </Link>

          <h2 className="focus-title">What We Focus On</h2>
          <ul className="focus-list">
            <li>Real Project Training</li>
            <li>Industry Expert Mentors</li>
            <li>Placement Assistance</li>
            <li>Hands-on Labs</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Internship;
