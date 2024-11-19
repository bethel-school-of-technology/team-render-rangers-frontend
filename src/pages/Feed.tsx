import React from 'react';
import NavBar from '../components/NavBar.tsx';
import './Feed.css';


const Feed = () => {
    return (
        <div className="feed-container">
        <NavBar />
        <h1 className="feed-header">Public Feed</h1>
        <div className="post-section">
  <h2>Your Post</h2>
        <div className="recipe-card">
            <img src="https://via.placeholder.com/300" alt="Recipe" />
            <h3>Recipe Name</h3>
            <p>Description</p>
            <button className="view-recipe-button">View Recipe</button>
        </div>
        </div>
        <div className="post-section">
        <h2>Other User</h2>
        <div className="recipe-card">
            <img src="https://via.placeholder.com/300" alt="Recipe" />
            <h3>Recipe Name</h3>
            <p>Description</p>
            <button className="view-recipe-button">View Recipe</button>
        </div>
        </div>
        </div>
    );
  };
  
  export default Feed;
  