import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import RecipeForm from "../components/RecipeForm.tsx"; 
import { getRecipe, updateRecipe } from "../services/recipeService.ts";
import './CreateRecipe.css'; 
import { Recipe } from "../models/recipe.ts";

type RecipeFormProps = {
  recipeName: string;
  recipeCategory: string;
  recipeIngredients: string;
  recipeInstructions: string;
  recipeImgUrl: string;
};

const UpdateRecipe: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<RecipeFormProps | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (recipeId) {
        try {
          const recipe = await getRecipe(parseInt(recipeId, 10));
          console.log("Fetched Recipe:", recipe);

          setInitialData(recipe);
        } catch (error) {
          console.error("Failed to fetch recipe:", error);
        }
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const handleUpdate = async (updatedData: RecipeFormProps) => {
    if (!recipeId) {
      console.error("Recipe ID is missing.");
      return;
    }

    const parsedRecipeId = parseInt(recipeId, 10);
    if (isNaN(parsedRecipeId)) {
      console.error("Invalid Recipe ID.");
      return;
    }

    try {
      const updatedPayload: Recipe = {
        recipeId: parsedRecipeId,
        recipeName: updatedData.recipeName,
        recipeCategory: updatedData.recipeCategory,
        recipeIngredients: updatedData.recipeIngredients,
        recipeInstructions: updatedData.recipeInstructions,
        recipeImgUrl: updatedData.recipeImgUrl,
      };

      console.log("Updating with payload:", updatedPayload);
      await updateRecipe(parsedRecipeId, updatedPayload);
      navigate("/profile"); 
    } catch (error) {
      console.error("Failed to update recipe:", error.response?.data || error.message);
    }
  };

  return (
    <div className="create-recipe-container">
      <NavBar />
      <h1>Update Recipe</h1>
      {initialData ? (
        <RecipeForm initialData={initialData} onSubmit={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateRecipe;
