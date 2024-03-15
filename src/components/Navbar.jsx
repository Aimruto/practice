import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo">Logo</div>
      </div>
      <div className="right">
        <div className="toggle" onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </div>
        <ul className={['nav-list', isActive ? 'active' : ''].join(' ')}>

          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">login</a></li>
          <li><a href="#">sign up</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
