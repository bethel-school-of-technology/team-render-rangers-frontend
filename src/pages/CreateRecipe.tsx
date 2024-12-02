import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import { createRecipe } from '../services/recipeService.tsx';
import './CreateRecipe.css';

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    recipeName: '',
    recipeCategory: '',
    recipeIngredients: '',
    recipeInstructions: '',
    recipeImage: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const ingredients = formData.recipeIngredients.split(','); // Convert to array
      const instructions = formData.recipeInstructions.split('.'); // Convert to array
      const newRecipe = {
        recipeName: formData.recipeName,
        recipeCategory: formData.recipeCategory,
        recipeIngredients: ingredients,
        recipeInstructions: instructions,
        recipeImage: formData.recipeImage,
      };
      await createRecipe(newRecipe); // Submit recipe to API
      alert('Recipe created successfully!');
      setFormData({
        recipeName: '',
        recipeCategory: '',
        recipeIngredients: '',
        recipeInstructions: '',
        recipeImage: '',
      });
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  return (
    <div className="create-recipe-container">
      <NavBar />
      <h1>Create Recipe</h1>

      <form onSubmit={handleSubmit} className="create-recipe-form">
        <input
          type="text"
          name="recipeName"
          value={formData.recipeName}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Title"
        />
        <input
          type="text"
          name="recipeCategory"
          value={formData.recipeCategory}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Category"
        />
        <input
          type="text"
          name="recipeIngredients"
          value={formData.recipeIngredients}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Ingredients (comma-separated)"
        />
        <input
          type="text"
          name="recipeInstructions"
          value={formData.recipeInstructions}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Instructions (period-separated)"
        />
        <input
          type="text"
          name="recipeImage"
          value={formData.recipeImage}
          onChange={handleInputChange}
          required
          className="create-recipe-input"
          placeholder="Image URL"
        />
        <button type="submit" className="create-recipe-button">
          Post Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
