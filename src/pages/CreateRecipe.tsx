import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import './CreateRecipe.css';
import { createRecipe } from '../services/recipeService.ts';

const CreateRecipe = () => {

  const [formData, setFormData] = useState({
    recipeName: '',
    recipeCategory: '',
    recipeIngredients: '',
    recipeInstructions: '',
    recipeImgUrl: '',
  });


  const [message, setMessage] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newRecipe = {
        recipeName: formData.recipeName,
        recipeCategory: formData.recipeCategory,
        recipeIngredients: formData.recipeIngredients,
        recipeInstructions: formData.recipeInstructions,
        recipeImgUrl: formData.recipeImgUrl,
      };

      console.log('Submitting recipe:', newRecipe);

      const response = await createRecipe(newRecipe);
      console.log('API Response:', response);

      setMessage('Recipe created successfully!');
      setFormData({
        recipeName: '',
        recipeCategory: '',
        recipeIngredients: '',
        recipeInstructions: '',
        recipeImgUrl: '',
      });
    } catch (error) {
      console.error('Error creating recipe:', error.response?.data || error.message);
      setMessage('Failed to create recipe. Please try again.');
    }
  };





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
            value={formData.recipeImgUrl}
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
