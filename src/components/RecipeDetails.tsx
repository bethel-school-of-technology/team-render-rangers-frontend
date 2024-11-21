import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../context/RecipeContext";
import { Recipe } from "../models/recipe";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract recipe ID from the URL
  const { recipes } = useRecipeContext(); // Access the recipes from context

  // Find the recipe by its ID
  const recipe: Recipe | undefined = recipes.find(
    (recipe) => recipe.recipeId === Number(id)
  );

  // If the recipe is not found, display an error message
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
        style={{ width: "300px", height: "auto", marginBottom: "20px" }}
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
