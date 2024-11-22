import React from 'react';
import NavBar from '../components/NavBar.tsx';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <NavBar />
      <div className="profile-header">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User avatar" 
          className="profile-avatar"
        />
        <div className="profile-name-container">
          <span className="profile-name">Name</span>
        </div>
      </div>
      <div className="saved-recipes">
        <div className="saved-recipe-card">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Saved Recipe" 
          />
          <div className="saved-recipe-info">
            <h2 className="saved-recipe-title">Recipe Name</h2>
            <p className="saved-recipe-description">Description</p>
            <button className="view-recipe-button"><a href="/recipe/:id">View Recipe</a></button>
          </div>
        </div>
        <div className="saved-recipe-card">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Saved Recipe" 
          />
          <div className="saved-recipe-info">
            <h2 className="saved-recipe-title">Recipe Name</h2>
            <p className="saved-recipe-description">Description</p>
            <button className="view-recipe-button"><a href="/recipe/:id">View Recipe</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;