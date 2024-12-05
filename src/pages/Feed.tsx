import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import { getAllRecipes } from '../services/recipeService.ts'; // Import your service
import { Recipe } from '../models/recipe'; // Ensure the Recipe type is imported
import './Feed.css';
import { useRecipeContext } from '../context/RecipeContext.tsx';

const Feed = () => {
  const { recipes, setRecipes } = useRecipeContext(); // Use context for global recipe state
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  // Fetch recipes when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const fetchedRecipes = await getAllRecipes();
        setRecipes(fetchedRecipes); // Update global state
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to load recipes. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [setRecipes]);

  return (
    <div className="feed-container">
      <NavBar />
      <h1 className="feed-header">Public Feed</h1>

      {/* Show loading or error messages */}
      {isLoading && <p>Loading recipes...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Show content only when not loading or errored */}
      {!isLoading && !error && (
        <>
          {/* Your Post Section */}
          <div className="post-section">
            <h2>Your Post</h2>
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

          {/* Other Users Section */}
          <div className="post-section">
            <h2>Other Users</h2>
            {recipes.length > 1 ? (
              recipes.slice(1).map((recipe) => (
                <div key={recipe.recipeId} className="recipe-card">
                  <img src={recipe.recipeImage} alt={recipe.recipeName} />
                  <h3>{recipe.recipeName}</h3>
                  <p>{recipe.recipeCategory}</p>
                  <button className="view-recipe-button">View Recipe</button>
                </div>
              ))
            ) : (
              <p>No other user posts to display yet!</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
