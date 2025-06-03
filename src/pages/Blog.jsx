import React from 'react';
import '../styles/BlogStyles.css';
import blogImg from '../assets/Blog.jpg'; 

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Insights, tips, and trends from the world of web development and design.</p>
      </div>

      <div className="blog-posts">
        <div className="blog-post">
          <h2>Why Every Business Needs a Website in 2025</h2>
          <p>
            A strong online presence is no longer optional. Learn why your business should invest in a well-designed website...
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="blog-post">
          <h2>Top UI/UX Trends That Will Dominate</h2>
          <p>
            From neumorphism to dark mode, we explore the hottest design trends in modern user interfaces...
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="blog-post">
          <h2>SEO Basics for Your Website</h2>
          <p>
            Learn the fundamental SEO techniques to improve your website’s visibility and ranking on search engines...
          </p>
          <a href="#">Read More</a>
        </div>
      </div>

      <div className="blog-image">
        <img src={blogImg} alt="Blog visual" />
      </div>
    </div>
  );
};

export default Blog;
