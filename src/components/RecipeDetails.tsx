import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../services/recipeService';
import { Recipe } from '../models/recipe';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      getRecipe(Number(id))
        .then(setRecipe)
        .catch(() => setRecipe(null)); 
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
        src={recipe.recipeImgUrl}
        alt={recipe.recipeName}
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />

      <h2>Ingredients</h2>
      <ul>
        {recipe.recipeIngredients}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.recipeInstructions}
      </ol>
    </div>
  );
};

export default RecipeDetails;
