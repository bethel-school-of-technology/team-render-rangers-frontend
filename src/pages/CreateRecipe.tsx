import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import './CreateRecipe.css';


const CreateRecipe = () => {
  const [formData, setFormData] = useState({ title: '', ingredients: '', directions: '', picture: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

};

  return (
    <div className="create-recipe-container">
      <NavBar />
      <form onSubmit={handleSubmit} className="create-recipe-form">
      <h1>Create Recipe</h1>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
        className="create-recipe-input"
        placeholder="Title"
/>
        <input
        type="text"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleInputChange}
        required
        className="create-recipe-input"
        placeholder="Ingredients"
        />

        <input
        type="text"
        name="directions"
        value={formData.directions}
        onChange={handleInputChange}
        required
        className="create-recipe-input"
        placeholder="Directions"
        />

        <input
        type="text"
        name="picture"
        value={formData.picture}
        onChange={handleInputChange}
        required
        className="create-recipe-input"
        placeholder="Picture URL"
        />

    <button type="submit" className="create-recipe-button">Post Recipe</button>
        </form>
        </div>
  );
};

export default CreateRecipe;