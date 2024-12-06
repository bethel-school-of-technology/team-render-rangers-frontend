import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import axios from "axios";
import { Recipe } from "../models/recipe";
import { getAllRecipes } from "../services/recipeService.ts";


interface RecipeContextProps {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  getRecipeById: (id: number) => Recipe | undefined;
}

// Define provider props
interface RecipeProviderProps {
  children: ReactNode;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipeById = (id: number): Recipe | undefined => {
    return recipes.find((recipe) => recipe.recipeId === id);
  };

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, getRecipeById }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = (): RecipeContextProps => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};

export default RecipeContext;
