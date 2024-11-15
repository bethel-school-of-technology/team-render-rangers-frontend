import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';


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
    <div>
      <NavBar />
    <form onSubmit={handleSubmit}>
      <h1>Create Recipe</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
       <input
        type="text"
        name="ingredients"
        placeholder="Ingredients"
        value={formData.ingredients}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="directions"
        placeholder="Directions"
        value={formData.directions}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="picture"
        placeholder="Picture URL"
        value={formData.picture}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Post Recipe</button>
    </form>
    </div>
  );
};

export default CreateRecipe;