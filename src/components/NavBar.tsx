import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaUtensils, FaPlus, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import './NavBar.css';
import { useAuth } from '../context/AuthContext.tsx';

const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const handleYesClick = () => {
    logout();
  };

  const handleNoClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/profile" className="navbar-link"><FaUser /> Profile</Link></li>
          <li><Link to="/feed" className="navbar-link"><FaUtensils /> Feed</Link></li>
          <li><Link to="/create-recipe" className="navbar-link"><FaPlus /> Create Recipe</Link></li>
          <li><Link to="/search" className="navbar-link"><FaSearch /> Search</Link></li>
          <li><button className="logout-nav-button" onClick={handleLogoutClick}><FaSignOutAlt /> Log Out</button></li>
        </ul>
      </nav>
      {showPopup && (
        <div>
          <div className="popup-overlay" onClick={handleNoClick}></div>
          <div className="logout-popup">
            <p>Are you sure?</p>
            <div className="popup-buttons">
              <button onClick={handleYesClick} className="popup-button yes">Yes</button>
              <button onClick={handleNoClick} className="popup-button no">No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

