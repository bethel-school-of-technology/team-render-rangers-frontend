import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaUser, FaUtensils, FaPlus, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <ul className="navbar-links">
        <li><Link to="/profile"><FaUser /> Profile</Link></li>
        <li><Link to="/feed"><FaUtensils /> Feed</Link></li>
        <li><Link to="/create-recipe"><FaPlus /> Create Recipe</Link></li>
        <li><Link to="/search"><FaSearch /> Search</Link></li>
        <li><Link to="/logout"><FaSignOutAlt /> Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;