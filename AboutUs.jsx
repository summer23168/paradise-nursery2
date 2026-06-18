import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Paradise Nursery</h2>
        <p className="about-tagline">Growing happiness, one plant at a time 🌿</p>

        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            Paradise Nursery was founded in 2018 by a group of passionate plant lovers who believed
            that every home deserves a touch of nature. What started as a small backyard greenhouse
            has grown into a beloved online destination for plant enthusiasts across the country.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            We are dedicated to bringing the beauty and tranquility of plants into everyday living spaces.
            We carefully select each plant for its health, vitality, and ability to thrive indoors,
            ensuring that every customer receives only the best quality greenery.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Plant Varieties</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
        </div>

        <div className="about-section">
          <h3>Why Choose Us?</h3>
          <ul className="about-list">
            <li>🌱 All plants carefully grown and inspected before shipping</li>
            <li>📦 Eco-friendly packaging to protect your plants in transit</li>
            <li>💧 Expert care guides included with every order</li>
            <li>🔄 30-day satisfaction guarantee on all purchases</li>
            <li>🌍 Sustainably sourced plants from ethical growers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
