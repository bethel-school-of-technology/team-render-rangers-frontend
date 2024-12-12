import { Key, ReactNode } from "react";

export class Recipe {
  recipeId?: number; // make recipeId optional
  recipeName: string;
  recipeCategory: string;
  recipeIngredients: string[];
  recipeInstructions: string[];
  recipeImage: string;
  id: Key | null | undefined;
  image: string;
  name: string | undefined;
  description: ReactNode;

  constructor(
    recipeId: number,
    recipeName: string,
    recipeCategory: string,
    recipeIngredients: string[],
    recipeInstructions: string[],
    recipeImage: string
  ) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.recipeCategory = recipeCategory;
    this.recipeIngredients = recipeIngredients;
    this.recipeInstructions = recipeInstructions;
    this.recipeImage = recipeImage;
  }
}
