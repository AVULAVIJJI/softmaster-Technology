import React, { useState } from "react";
import "./HeroSection.css";
import RegisterModal from "./RegisterModal.js";


const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section">
      {/* Side Callback Button */}
      <div className="callback-btn" onClick={() => setShowModal(true)}>
        Request a call back
      </div>

      {/* Call & WhatsApp Icons */}
      <div className="contact-icons">
        <div className="call-icon">📞</div>
        <div className="whatsapp-icon">💬</div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h2 className="hero-subtitle">We don't just TRAIN</h2>
        <h1 className="hero-title">We build CAREERS</h1>

        <div className="search-form">
          <div className="form-group">
            <div className="form-label">I'm looking for</div>
            <select>
              <option>Data Science</option>
              <option>Full Stack</option>
              <option>AI/ML</option>
              <option>Java</option>
            </select>
          </div>

          <div className="form-group">
            <div className="form-label">My location is</div>
            <select>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="button-group">
            <button className="search-btn">Search</button>
            <button className="enquire-btn">Enquire Now</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default HeroSection;
