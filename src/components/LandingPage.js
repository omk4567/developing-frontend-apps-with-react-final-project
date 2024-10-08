import React from 'react';
import { Link } from 'react-router-dom';
// import './LandingPage.css'; // Add custom styles here

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="/path-to-background-image.jpg" alt="Nursery Background" className="background-image" />
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery, where we offer the finest selection of houseplants to brighten your home!</p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;         
