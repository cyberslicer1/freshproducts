import React from 'react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="hero-banner__content">
          <h1>Fresh Fruits & Vegetables</h1>
          <p>Locally sourced, organically grown, delivered fresh to your door</p>
          <button className="hero-banner__button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;