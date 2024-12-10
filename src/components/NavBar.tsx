import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaUtensils, FaPlus, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const handleYesClick = () => {
    navigate('/');
  };

  const handleNoClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="/profile" className="navbar-link"><FaUser /> Profile</a></li>
          <li><Link to="/feed" className="navbar-link"><FaUtensils /> Feed</Link></li>
          <li><Link to="/create-recipe" className="navbar-link"><FaPlus /> Create Recipe</Link></li>
          <li><a href="/search" className="navbar-link"><FaSearch /> Search</a></li>
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

