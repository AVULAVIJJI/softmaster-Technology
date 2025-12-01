import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>

          {/* Internship Dropdown */}
          <li
            onMouseEnter={() => toggleMenu("internship")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <NavLink to="/internship">Internship ▾</NavLink>

            {openMenu === "internship" && (
              <ul className="dropdown">
                <li><a href="#">MERN Internship</a></li>
                <li><a href="#">Python Internship</a></li>
                <li><a href="#">Frontend Internship</a></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
