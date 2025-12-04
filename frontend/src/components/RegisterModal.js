import React, { useState } from "react";
import axios from "axios";
import "./RegisterModal.css";

const RegisterModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
    termsAccepted: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res = await axios.post("https://softmaster-technology-1.onrender.com/api/register", formData);

      alert("Registration Successful!");
      console.log("Saved Data:", res.data);

      onClose(); // close modal on success

    } catch (error) {
      console.error("Registration Failed:", error);
      alert("Registration Failed! Check your backend.");
    }
  };

  return (
    <div className="reg-overlay">
      <div className="reg-box">

        {/* Close Button */}
        <button className="reg-close-btn" onClick={onClose}>✖</button>

        <h2 className="reg-title">Register now</h2>

        <form className="reg-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number*"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="course"
            placeholder="Course*"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="message"
            placeholder="Message*"
            required
            onChange={handleChange}
          />

          <div className="reg-terms">
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">
              I hereby accept the <a href="#">terms and conditions</a> and{" "}
              <a href="#">privacy policy</a>.
            </label>
          </div>

          <button type="submit" className="reg-submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
