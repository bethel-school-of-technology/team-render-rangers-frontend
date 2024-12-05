import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx'; // Navigation Bar
import './CreateRecipe.css'; // Styles for Create Recipe
import { createRecipe } from '../services/recipeService.ts'; // API Service

const CreateRecipe = () => {
  // Form state
  const [formData, setFormData] = useState({
    recipeName: '',
    recipeCategory: '',
    recipeIngredients: '',
    recipeInstructions: '',
    recipeImage: '',
  });

  // Success or error messages
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newRecipe = {
        recipeName: formData.recipeName,
        recipeCategory: formData.recipeCategory,
        recipeIngredients: formData.recipeIngredients, // Already a string
        recipeInstructions: formData.recipeInstructions, // Already a string
        recipeImgUrl: formData.recipeImage, // Corrected field name
      };

      console.log('Submitting recipe:', newRecipe);

      const response = await createRecipe(newRecipe); // Send the updated payload
      console.log('API Response:', response);

      setMessage('Recipe created successfully!');
      setFormData({
        recipeName: '',
        recipeCategory: '',
        recipeIngredients: '',
        recipeInstructions: '',
        recipeImage: '',
      });
    } catch (error) {
      console.error('Error creating recipe:', error.response?.data || error.message);
      setMessage('Failed to create recipe. Please try again.');
    }
  };




  // Render form
  return (
    <div className="create-recipe-container">
      <NavBar />
      <h1>Create Recipe</h1>
      {message && <p>{message}</p>}
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
            name="recipeImage"
            value={formData.recipeImage}
            onChange={handleInputChange}
            required
            className="create-recipe-input"
            placeholder="Image URL"
          />
        </div>
        <button type="submit" className="create-recipe-button">
          Post Recipe
        </button>
      </form>

    </div>
  );
};

export default CreateRecipe;
