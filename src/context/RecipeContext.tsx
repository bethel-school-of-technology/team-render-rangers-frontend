import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { Recipe } from "../models/recipe";

// Define the shape of the RecipeContext
interface RecipeContextProps {
  recipes: Recipe[];
  getRecipeById: (id: number) => Recipe | undefined; 
}

// RecipeContext
const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

// RecipeProvider component
export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Fetch recipes from the API
  useEffect(() => {
    axios
      .get("https://example.com/api/recipes") // replace with the real endpoint
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  // Helper function to get a recipe by ID
  const getRecipeById = (id: number): Recipe | undefined => {
    return recipes.find((recipe) => recipe.recipeId === id);
  };

  return (
    <RecipeContext.Provider value={{ recipes, getRecipeById }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook to access the RecipeContext
export const useRecipeContext = (): RecipeContextProps => {
  const context = React.useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

export default RecipeContext;
