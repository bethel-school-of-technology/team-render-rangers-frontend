import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import { getAllRecipes } from '../services/recipeService.ts';
import { Recipe } from '../models/recipe';
import './Feed.css';
import { useRecipeContext } from '../context/RecipeContext.tsx';
import { Link } from 'react-router-dom';

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
            <h2>All recipes</h2>
            {recipes.length > 1 ? (
              recipes.map((recipe) => (
                <div key={recipe.recipeId} className="recipe-card">
                  <img src={recipe.recipeImgUrl} alt={recipe.recipeName} />
                  <h3>{recipe.recipeName}</h3>
                  <p>{recipe.recipeCategory}</p>
                  <button className="view-recipe-button">
                    <Link to={`/recipe/${recipe.recipeId}`}>View Recipe</Link>
                  </button>
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
