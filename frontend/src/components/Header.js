import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [internshipOpen, setInternshipOpen] = useState(false);

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo-wrapper">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* NAV */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">

          <li>
            <NavLink to="/" end className={({ isActive }) =>
              isActive ? "active-link" : ""
            }>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "active-link" : ""
            }>
              About Us
            </NavLink>
          </li>

          {/* INTERNSHIP */}
          <li className="internship-item">
            <div className="internship-link">
              {/* NAVIGATE */}
              <NavLink
                to="/internship"
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                Internship
              </NavLink>

              {/* DROPDOWN TOGGLE */}
              <span
                className="dropdown-arrow"
                onClick={() => setInternshipOpen(!internshipOpen)}
              >
                ▾
              </span>
            </div>

            {internshipOpen && (
              <ul className="dropdown">
                <li><NavLink to="/internship/mern">MERN Internship</NavLink></li>
                <li><NavLink to="/internship/python">Python Internship</NavLink></li>
                <li><NavLink to="/internship/frontend">Frontend Internship</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/courses" className={({ isActive }) =>
              isActive ? "active-link" : ""
            }>
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "active-link" : ""
            }>
              Contact
            </NavLink>
          </li>

          {/* SOCIAL ICONS */}
          <li className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://whatsapp.com/channel/0029VaynkiWLY6dDqM1uUJ1t" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://t.me/smtssc" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/telegram-app.png" alt="Telegram" />
            </a>
          </li>

        </ul>
      </nav>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;
