import React from 'react';
import NavBar from '../components/NavBar.tsx';


const RecipeDetails = () => {
    return (
      <div>
        <NavBar />
        <h1>Recipe Name</h1>
        <p>Ingredients: ...</p>
        <p>Directions: ...</p>
        <button>Save Recipe</button>
      </div>
    );
  };
  
  export default RecipeDetails;