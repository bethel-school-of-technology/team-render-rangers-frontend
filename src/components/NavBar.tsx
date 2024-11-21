import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {/* <li><Link to="/">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li> */}
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/create-recipe">Create Recipe</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/logout">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;