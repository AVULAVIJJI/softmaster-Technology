import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import contactus from "../assets/images/contactus.png";

/* ---------------- CUSTOM ALERT BOX ---------------- */
const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <h3>{message}</h3>

        <button onClick={onClose} className="alert-btn">
          OK
        </button>
      </div>
    </div>
  );
};
/* -------------------------------------------------- */

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    city: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showAlert, setShowAlert] = useState(false); // ALERT STATE

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", {
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        subject: form.city,
        message: form.message,
      });

      setStatus("Message sent successfully ✔");

      // Show alert box
      setShowAlert(true);

      // Clear form
      setForm({
        fullName: "",
        city: "",
        email: "",
        mobile: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <div className="contact-page">

      {/* SHOW ALERT */}
      {showAlert && (
        <CustomAlert
          message="Registration Successful!"
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* Hero Section */}
      <div
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1>Contact Us</h1>
      </div>

      {/* Main Contact Section */}
      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Our Address</h3>
              <p>
                Indira Nagar Colony, Indira Nagar, Peerzadiguda, Hyderabad,
                Telangana 500098
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <h3>Phone Number</h3>
              <p>+91 85009 10044 / +91 79975 10731</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>Smtsolutions@smtssc.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>Fill out the form to reach our team.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Phone Number"
                value={form.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send</button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <h2>Find Us on Map</h2>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.872104223353!2d78.60752557493337!3d17.371312983492704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99b09dd7df2b%3A0xa247d93b597e5566!2sIndira%20Nagar%20Colony%2C%20Peerzadiguda%2C%20Hyderabad%2C%20Telangana%20500098!5e0!3m2!1sen!2sin!4v1731395510000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
