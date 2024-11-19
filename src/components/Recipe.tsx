import React from 'react';
import { useRecipeContext } from '../context/RecipeContext';


interface RecipeProps {
  id: string;
}

const Recipe: React.FC<RecipeProps> = ({ id }) => {
  const { recipes } = useRecipeContext();

  // Find the specific recipe by id
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="recipe">
      <h2>{recipe.recipeName}</h2>
      <img src={recipe.recipeImage} alt={recipe.recipeName} />
      <p><strong>Category:</strong> {recipe.recipeCategory}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.recipeIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.recipeInstructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
