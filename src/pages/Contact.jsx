import React from 'react';
import '../styles/ContactStyles.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have questions or want to start a project? We’d love to hear from you.
      </p>

      

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <span>+91 98765 43210</span>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <span>contact@medalph.com</span>
        </div>
        <div className="info-item">
          <FaInstagram className="info-icon" />
          <span>@medalph_web</span>
        </div>
        <div className="info-item">
          <FaLinkedin className="info-icon" />
          <span>linkedin.com/company/medalph</span>
        </div>
      </div>

      <div className="contact-footer">
        <p>Building the web with passion ❤️</p>
      </div>
    </div>
  );
};

export default Contact;
