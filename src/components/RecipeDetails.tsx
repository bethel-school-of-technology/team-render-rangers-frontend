import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../services/recipeService';
import { Recipe } from '../models/recipe';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // get recipe ID from URL
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      getRecipe(Number(id))
        .then(setRecipe)
        .catch(() => setRecipe(null)); // Handle errors 
    }
  }, [id]);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.recipeName}</h1>
      <p>Category: {recipe.recipeCategory}</p>
      <img
        src={recipe.recipeImage}
        alt={recipe.recipeName}
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />

      <h2>Ingredients</h2>
      <ul>
        {recipe.recipeIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.recipeInstructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
