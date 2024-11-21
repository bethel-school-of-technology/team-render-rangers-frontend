import React from 'react';
import './LogOut.css';
import NavBar from '../components/NavBar.tsx';

const LogOut = () => {
  const handleLogout = () => {
    // Handle logout functionality here
  };

  return (
    <div>
      <NavBar />
      <button onClick={handleLogout} className="logout-button">Log Out</button>
    </div>
  );
};

export default LogOut;
