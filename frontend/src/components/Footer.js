import React from 'react';
import './Footer.css';
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ===== Top Row (Logo + Social Icons) ===== */}
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
          </a>

          <a href="https://whatsapp.com/channel/0029VaynkiWLY6dDqM1uUJ1t" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WhatsApp" />
          </a>

          <a href="https://t.me/smtssc" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/telegram-app.png" alt="Telegram" />
          </a>
        </div>
      </div>

      {/* ===== Footer Content Sections ===== */}
      <div className="footer-container">

        <div className="footer-section">
          <h3>About SoftMaster</h3>
          <p>
            Best Full Stack And AI Bootcamp Training Institute With Expert-Led
            Courses In Python, Java, React, Next.Js, Spring Boot, Databases, And
            AI Technologies.
          </p>
          <p>
            <strong>Address:</strong> Indira Nagar Colony, Peerzadiguda, Hyderabad, Telangana 500098
          </p>
        </div>

        <div className="footer-section">
          <h3>SoftMaster Technology</h3>
          <ul>
            <li><a href="#">Practice</a></li>
            <li><a href="#">Placements</a></li>
            <li><a href="#">Hire Developers</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Internship</a></li>
            <li><a href="#">Git Hub</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">All Courses</a></li>
            <li><a href="#">Java Full Stack</a></li>
            <li><a href="#">Python Full Stack</a></li>
            <li><a href="#">Full Stack - MERN</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Online Training</h3>

          <div className="icons">
            GoToMeeting 
            <img src="https://img.icons8.com/color/48/zoom.png" alt="Zoom" />
          </div>

          <h3>Payment Info</h3>
          <p><strong>GPay / PhonePe / Paytm</strong></p>
          <p>85009 10044</p>
          <p>Smtsolutions@smtssc.com</p>
        </div>
      </div>

      {/* ===== Bottom COPYRIGHT Row ===== */}
      <div className="footer-bottom">
        © 2025 SoftMaster Technology | All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
