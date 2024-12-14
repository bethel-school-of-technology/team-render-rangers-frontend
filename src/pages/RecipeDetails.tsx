import React from 'react';
import NavBar from '../components/NavBar.tsx';
import './RecipeDetails.css';

const RecipeDetails = () => {
  return (
    <div className="create-recipe-container">
      <NavBar />
      <img 
        src="https://cdn.dribbble.com/users/88000/screenshots/2487367/shot.png" 
        alt="Recipe" 
        className="recipe-image"
      />
      <div className="ingredient-list">
      </div>
    </div>
  );
};

export default RecipeDetails;