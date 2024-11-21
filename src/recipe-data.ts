import { Recipe } from "./models/recipe";
  
  export const recipes: Recipe[] = [
    {
      recipeId: 1,
      recipeName: "Blueberry Pancakes",
      recipeCategory: "Breakfast",
      recipeIngredients: [
        "1 cup Flour",
        "2 tbsp Sugar",
        "1 tsp Baking powder",
        "1 cup Milk",
        "1 Egg",
        "1 tbsp Butter",
        "1/2 cup Blueberries",
        "Maple syrup"
      ],
      recipeInstructions: [
        "Mix flour, sugar, and baking powder.",
        "Add milk, egg, and melted butter.",
        "Stir in blueberries.",
        "Cook on a greased skillet until bubbles form, flip and cook until golden.",
        "Serve with maple syrup."
      ],
      recipeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-DcxS4-vENpy8s70bg-b_JTQ6xPCrCn9ew&s",
    },
    // ...other recipes
  ];
  
  export default recipes;
  