import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import chopper from '../chopper.png'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo"><img className='chop' src={chopper} alt="Chopper Icon" /></div>
      </div>
      <div className="right">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
