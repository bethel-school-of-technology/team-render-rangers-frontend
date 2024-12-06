import React from 'react';
import NavBar from '../components/NavBar.tsx';
import './RecipeDetails.css';

const RecipeDetails = () => {
  return (
    <div className="create-recipe-container">
      <NavBar />
      <h1 className="recipe-name">Recipe Name</h1>
      <img 
        src="https://via.placeholder.com/350" 
        alt="Recipe" 
        className="recipe-image"
      />
      <div className="ingredient-list">
        <p className="ingredient-item">Ingredients/Directions</p>
      </div>
      <button className="save-recipe-button"><a href = "/profile">Save Recipe</a></button>
    </div>
  );
};

export default RecipeDetails;