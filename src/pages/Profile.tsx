import React from 'react';
import NavBar from '../components/NavBar.tsx';

const Profile = () => {
  return (
    <div>
      <NavBar />
    <div>
      <h1>Your Profile</h1>
      <img src="https://via.placeholder.com/150" alt="User avatar" />
      <h2>Name</h2>
      <div>
        <button>View Recipe</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;