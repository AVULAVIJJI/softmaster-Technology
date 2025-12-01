import React from "react";
import { FaGoogle, FaPercent } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import "./WhySoft.css";

const WhySoft = () => {
  return (
    <section className="why-soft">
      <h2 className="title">Why SoftMaster Technology ?</h2>
      <div className="divider"></div>
      <p className="subtitle">
        Combining real-world insights with hands-on learning, we ensure your skills meet today’s tech standards.
      </p>

      <div className="features">
        <div className="feature">
          <HiOutlineIdentification className="icon red" />
          <h3 className="feature-title">Jumbo Pass</h3>
          <p className="feature-text">
            Unlimited Classes <br /> for 365 days
          </p>
        </div>

        <div className="feature">
          <FaPercent className="icon red" />
          <h3 className="feature-title">Interest-Free EMI</h3>
          <p className="feature-text">
            Across All <br /> Credit/Debit Cards.
          </p>
        </div>

        <div className="feature">
          <FaGoogle className="icon blue" />
          <h3 className="feature-title">4.8/5 Stars on</h3>
          <p className="feature-text">Google Reviews</p>
        </div>

        <div className="feature">
          <MdLocationPin className="icon red" />
          <h3 className="feature-title">100% Placement Assistance</h3>
          <p className="feature-text">
            with our dedicated placement cell
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySoft;
