import React from "react";
import "./ContactForm.css"; // Create this CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightDots,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="left-side">
        <h1>Feel free to connect with us!</h1>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="contact-info">
          <p className="phoneNo">
            <FontAwesomeIcon icon={faPhone} /> 0972 663 633
          </p>
          <p className="mailId">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> hello@wefo.com
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="input-row">
          <label>
            Name<span className="required">*</span>
          </label>
          <input type="text" placeholder="Your name" required />
        </div>
        <div className="input-row">
          <label>
            Email<span className="required">*</span>
          </label>
          <input type="email" placeholder="Your email address" required />
        </div>
        <div className="input-row">
          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <form className="d-flex" role="search">
          <button className="btn box-out" type="submit">
            Send
            <FontAwesomeIcon icon={faArrowUpRightDots} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
