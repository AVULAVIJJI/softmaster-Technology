import React from "react";
import "./RegisterModal.css";

const RegisterModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {/* Logo Section */}
        <div className="modal-header">
          <img
            src="https://www.excelr.com/images/logo.png"
            alt="ExcelR Logo"
            className="modal-logo"
          />
        </div>

        <h2 className="modal-title">Register now</h2>

        {/* Form */}
        <form className="register-form">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="E-mail*" required />
          <input type="tel" placeholder="Mobile Number*" required />
          <input type="text" placeholder="Course*" required />
          <input type="text" placeholder="City*" required />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I hereby accepting agree the{" "}
              <a href="#">terms and conditions</a> and{" "}
              <a href="#">privacy policy</a> of ExcelR Solutions
            </label>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
