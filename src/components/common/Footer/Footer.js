import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Fresh Produce</h3>
            <p>Your local source for fresh fruits and vegetables</p>
          </div>
          <div className="footer__section">
            <h4>Contact</h4>
            <p>Email: cyberslicer1@gmail.com</p>
            <p>Phone: 9493724480</p>
          </div>
          <div className="footer__section">
            <h4>Hours</h4>
            <p>Mon-Fri: 8am-8pm</p>
            <p>Sat-Sun: 9am-6pm</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Fresh Produce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;