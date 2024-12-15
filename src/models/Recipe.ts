export class Recipe {
  recipeId?: number; 
  recipeName: string;
  recipeCategory: string;
  recipeIngredients: string[];
  recipeInstructions: string[];
  recipeImgUrl: string;

  constructor(
    recipeId: number,
    recipeName: string,
    recipeCategory: string,
    recipeIngredients: string[],
    recipeInstructions: string[],
    recipeImgUrl: string
  ) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.recipeCategory = recipeCategory;
    this.recipeIngredients = recipeIngredients;
    this.recipeInstructions = recipeInstructions;
    this.recipeImgUrl = recipeImgUrl;
  }
}
