import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer-out'>
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-pages">
            <ul>
              <h3>BMI recommendation system</h3>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul>
              <h3>About Us</h3>
              <li><a href="#">Meet Our Team</a></li>
              <li><a href="#">Our Codes</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
        </div>
      </footer> 
    </div>
  );
}

export default Footer;
