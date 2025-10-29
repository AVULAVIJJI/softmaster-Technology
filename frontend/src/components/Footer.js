import React from 'react';
import './Footer.css'; // Import the corresponding CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Pro Stack */}
        <div className="footer-section">
          <h3>About Pro Stack</h3>
          <p>
            Best Full Stack And AI Bootcamp Training Institute With Expert-Led Courses In Python,
            Java, React, Next.Js, Spring Boot, Databases, And AI Technologies.
          </p>
          <p>
            <strong>Address:</strong> RJ Garden, #96, Ground Floor, Chinnappanahalli,
            Marathahalli, Bengaluru, Karnataka 560037.
          </p>
        </div>

        {/* Pro Stack Links */}
        <div className="footer-section">
          <h3>Pro Stack</h3>
          <ul>
            <li><a href="#">Practice</a></li>
            <li><a href="#">Placements</a></li>
            <li><a href="#">Hire Developers</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Internship</a></li>
            <li><a href="#">Git Hub</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">All Courses</a></li>
            <li><a href="#">Java Full Stack</a></li>
            <li><a href="#">Python Full Stack</a></li>
            <li><a href="#">Full Stack - MERN</a></li>
          </ul>
        </div>

        {/* Online Training */}
        <div className="footer-section">
          <h3>Online Training</h3>
          <div className="icons">
            <img src="https://img.icons8.com/color/48/000000/goto-meeting.png" alt="GoToMeeting" />
            <img src="https://img.icons8.com/color/48/000000/zoom.png" alt="Zoom" />
          </div>

          <h3>Payment Info</h3>
          <p><strong>GPay / PhonePe / Paytm</strong></p>
          <p>9591 61 9191</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
