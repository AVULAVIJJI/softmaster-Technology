import React from "react";
import "./AboutUs.css";

import students1 from "../assets/images/student1.jpeg";

const AboutUs = () => {
  return (
    <>
      {/* ======= Top Banner Section ======= */}
      <section
        className="aboutus-banner"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <h1 className="banner-title">ABOUT</h1>
          <p className="banner-breadcrumb">
            Home <span className="arrow">→</span> <span>About Us</span>
          </p>
        </div>
      </section>

      {/* ======= About Content Section ======= */}
      <section className="aboutus-section">
        <div className="aboutus-container">
          {/* Left Section */}
          <div className="aboutus-left">
            <img
              src={students1}
              alt="Students learning"
              className="aboutus-img"
            />

            <div className="batches-box">
              <h2>1000+</h2>
              <p>BATCHES</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="aboutus-right">
            <h2 className="aboutus-heading">
              <span className="icon">📘</span> About Softmaster Technology
            </h2>

            <h1 className="aboutus-title">Overview</h1>

            <p className="aboutus-text">
              <strong>Softmaster Technology</strong> is one of the best training
              institutes in Hyderabad, offering certified job-oriented training
              with live projects and workshops. With 10+ years of excellence, we
              provide both <strong>classroom</strong> and
              <strong> online training </strong> in various technologies
              including Full Stack, Data Science, Cloud, and DevOps.
            </p>

            <p className="aboutus-text">
              Our highly qualified trainers deliver
              <strong> real-world, practical learning </strong>
              experiences designed to prepare students for the IT industry. We
              offer beginner to advanced level programs that cover every aspect
              of software development, deployment, and operations.
            </p>

            <p className="aboutus-text">
              Our mission is to <strong>train, transform, and empower</strong>{" "}
              students to excel in their careers. We aim to connect them with
              top MNCs through our placement support. With well-equipped labs,
              modern classrooms, and dedicated mentors, we ensure every learner
              gains the skills needed to thrive in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE PROVIDE SECTION ============ */}
      <section className="provide-section">
        <h2 className="provide-heading">📘 What We Provide</h2>

        <div className="provide-container">
          {/* Box 1 */}
          <div className="provide-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Professional Trainers"
              className="provide-icon"
            />
            <h3>Professional Trainers</h3>
            <p>
              Competently unleash competitive initiatives for alternative
              interfaces. Enthusiastically supply resource-leveling platforms.
            </p>
          </div>

          {/* Box 2 */}
          <div className="provide-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
              alt="Expert Instructor"
              className="provide-icon"
            />
            <h3>Expert Instructors</h3>
            <p>
              Learn from certified experts working in top MNCs such as Amazon,
              TCS, Infosys, and Microsoft.
            </p>
          </div>

          {/* Box 3 */}
          <div className="provide-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3176/3176368.png"
              alt="1000 Batches"
              className="provide-icon"
            />
            <h3>1000+ Batches</h3>
            <p>
              With 10+ years of experience, we have trained over 1000+ batches
              both online and offline.
            </p>
          </div>

          {/* Box 4 */}
          <div className="provide-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920263.png"
              alt="Mock Interviews"
              className="provide-icon"
            />
            <h3>Mock Interviews</h3>
            <p>
              Trainers provide mock interview sessions and resume preparation
              assistance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
