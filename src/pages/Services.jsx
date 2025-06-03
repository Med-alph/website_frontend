import React from 'react';
import '../styles/ServicesStyles.css';
import serviceImg from '../assets/services.jpg'; 

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-text">
        <h1>Our Services</h1>
        <p>We offer a complete range of digital services to bring your vision to life.</p>
        <ul className="services-list">
          <li><strong>Website Development</strong> – Custom-built, fast, and fully responsive.</li>
          <li><strong>UI/UX Design</strong> – Clean, modern, and user-friendly interfaces.</li>
          <li><strong>E-commerce Solutions</strong> – Secure, scalable online stores.</li>
          <li><strong>SEO Optimization</strong> – Boost visibility and ranking on search engines.</li>
        </ul>
        <button className="services-button">Get Started</button>
      </div>
      <div className="services-image">
        <img src={serviceImg} alt="Services illustration" />
      </div>
    </div>
  );
};

export default Services;
