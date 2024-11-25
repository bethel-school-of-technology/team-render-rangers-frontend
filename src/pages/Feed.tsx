import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import { getAllRecipes } from '../services/recipeService.tsx'; // Import your service
import { Recipe } from '../models/recipe'; // Ensure the Recipe type is imported
import './Feed.css';

const Feed = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]); // State to hold recipe data

  // Fetch recipes when the component mounts
  useEffect(() => {
    getAllRecipes()
      .then(setRecipes)
      .catch(console.error); // Handle any errors gracefully
  }, []);

  return (
    <div className="feed-container">
      <NavBar />
      <h1 className="feed-header">Public Feed</h1>

      <div className="post-section">
        <h2>Your Post</h2>
        {/* Render the first recipe dynamically (or a placeholder if no recipes) */}
        {recipes.length > 0 ? (
          <div className="recipe-card">
            <img src={recipes[0].recipeImage} alt={recipes[0].recipeName} />
            <h3>{recipes[0].recipeName}</h3>
            <p>{recipes[0].recipeCategory}</p>
            <button className="view-recipe-button">View Recipe</button>
          </div>
        ) : (
          <p>No recipes to display yet!</p>
        )}
      </div>

      <div className="post-section">
        <h2>Other Users</h2>
        {/* Render all recipes except the first dynamically */}
        {recipes.slice(1).map((recipe) => (
          <div key={recipe.recipeId} className="recipe-card">
            <img src={recipe.recipeImage} alt={recipe.recipeName} />
            <h3>{recipe.recipeName}</h3>
            <p>{recipe.recipeCategory}</p>
            <button className="view-recipe-button">View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
