export class Recipe {
  recipeId: number;
  recipeName: string;
  recipeCategory: string;
  recipeIngredients: string[];
  recipeInstructions: string[];
  recipeImage: string;

  constructor(recipeId: number, recipeName: string, recipeCategory: string, recipeIngredients: string[], recipeInstructions: string[], recipeImage: string) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.recipeCategory = recipeCategory;
        this.recipeIngredients = recipeIngredients;
        this.recipeInstructions = recipeInstructions;
        this.recipeImage = recipeImage
  } 
}
