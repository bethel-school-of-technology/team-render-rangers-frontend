import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import { getAllRecipes } from '../services/recipeService.ts'; 
import { Recipe } from '../models/recipe'; 
import './Feed.css';
import { useRecipeContext } from '../context/RecipeContext.tsx';

const Feed = () => {
  const { recipes, setRecipes } = useRecipeContext();
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const fetchedRecipes = await getAllRecipes();
        setRecipes(fetchedRecipes); 
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

      
      {isLoading && <p>Loading recipes...</p>}
      {error && <p className="error-message">{error}</p>}

      
      {!isLoading && !error && (
        <>
         
          <div className="post-section">
            <h2>Your Post</h2>
            {recipes.length > 0 ? (
              <div className="recipe-card">
                <img src={recipes[0].recipeImage} alt={recipes[0].recipeName} />
                <h3>{recipes[0].recipeName}</h3>
                <p>{recipes[0].recipeCategory}</p>
                <button className="view-recipe-button"><a href="/recipe/:id">View Recipe</a></button>
              </div>
            ) : (
              <p>No recipes to display yet!</p>
            )}
          </div>

        
          <div className="post-section">
            <h2>Other Users</h2>
            {recipes.length > 1 ? (
              recipes.slice(1).map((recipe) => (
                <div key={recipe.recipeId} className="recipe-card">
                  <img src={recipe.recipeImage} alt={recipe.recipeName} />
                  <h3>{recipe.recipeName}</h3>
                  <p>{recipe.recipeCategory}</p>
                  <button className="view-recipe-button" >View Recipe</button>
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
