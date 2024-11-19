import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { Recipe } from "../recipe-data"; // Make sure this import path is correct

interface RecipeContextProps {
  recipes: Recipe[];
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get('https://example.com/api/recipes') // Replace with the real endpoint or mock data
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = React.useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

export default RecipeContext;
