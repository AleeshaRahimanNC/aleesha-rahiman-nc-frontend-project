import React from "react";
import "./Testimonials.css";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";


function Testimonials() {
  return (
    <>
      <div className="testimonials-wrapper">
        <div className="testimonials-left">
          <ul>
            <li className="test">Testimonials</li>
          </ul>
        </div>
        <div className="testimonials-right">

          <p className="test-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Id inventore
            delectus non expedita laudantium eius necessitatibus nulla excepturi
            sunt unde.
          </p>

          <div className="employee-info">
            <FaUser className="employee-icon" />
            <div>
              <p className="employee-name">John Doe</p>
              <p className="employee-designation">Senior Developer</p>
            </div>
          </div>

          {/* Arrows below testimonial */}
          <div className="arrow-controls">
            <FaArrowLeft className="arrow-icon" />
            <FaArrowRight className="arrow-icon" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Testimonials;
