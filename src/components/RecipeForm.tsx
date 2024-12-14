import React, { useState, useEffect } from "react";
import '../pages/CreateRecipe.css'; 


interface RecipeFormProps {
  initialData?: {
    recipeName: string;
    recipeCategory: string;
    recipeIngredients: string;
    recipeInstructions: string;
    recipeImgUrl: string;
  };
  onSubmit: (formData: any) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    recipeName: "",
    recipeCategory: "",
    recipeIngredients: "",
    recipeInstructions: "",
    recipeImgUrl: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData); // Populate form with initial data if provided
    }
  }, [initialData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);
    onSubmit(formData);
  };
  

  return (
    <form onSubmit={handleSubmit} className="create-recipe-form">
      <div className="form-group">
        <input
          type="text"
          name="recipeName"
          value={formData.recipeName}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Recipe Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="recipeCategory"
          value={formData.recipeCategory}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Category"
        />
      </div>
      <div className="form-group">
        <textarea
          name="recipeIngredients"
          value={formData.recipeIngredients}
          onChange={handleInputChange}
          required
          className="create-recipe-textarea"
          placeholder="Ingredients (comma-separated)"
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          name="recipeInstructions"
          value={formData.recipeInstructions}
          onChange={handleInputChange}
          required
          className="create-recipe-textarea"
          placeholder="Instructions (period-separated)"
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="recipeImgUrl"
          value={formData.recipeImgUrl}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Image URL"
        />
      </div>
      <button type="submit" className="create-recipe-button">
        Save
      </button>
    </form>
  );
};

export default RecipeForm;
