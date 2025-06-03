import React from 'react';
import '../styles/AboutStyles.css';
import aboutImg from '../assets/about.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImg} alt="Team working" />
      </div>
      <div className="about-text">
        <h1>About Medalph</h1>
        <p>
          Medalph is a passionate team of web creators who love turning ideas into reality. 
          We specialize in building fast, responsive, and beautiful websites tailored to each client’s needs. Medalph is a passionate team of web creators who love turning ideas into reality. 
          We specialize in building fast, responsive, and beautiful websites tailored to each client’s needs. 
        </p>
        <p>
          From startups to enterprises, we believe in clean code, modern design, and long-lasting digital solutions. 
          Let’s build your next great online presence!
        </p>
        <button className="about-button">Know More</button>
      </div>
    </div>
  );
};

export default About;
