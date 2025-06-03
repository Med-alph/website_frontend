import React from 'react';
import '../styles/TestimonialStyles.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Name',
      title: 'CEO',
      feedback:
        'Medalph built our website in record time with stunning design and flawless performance. Highly recommended!',
    },
    {
      name: 'Name',
      title: 'Founder',
      feedback:
        'Their UI/UX work was top-notch. We saw an immediate improvement in user engagement after launch.',
    },
    {
      name: 'Name',
      title: 'Manager',
      feedback:
        'From planning to deployment, the Medalph team handled everything professionally. True web experts!',
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-title">{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
