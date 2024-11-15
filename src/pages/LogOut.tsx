import React from 'react';
import NavBar from '../components/NavBar.tsx';

const LogOut = () => {
  const handleLogout = () => {
    // Handle logout functionality here
  };

  return (
    <div>
      <NavBar />
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default LogOut;