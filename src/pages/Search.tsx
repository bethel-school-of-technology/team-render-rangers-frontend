import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import { searchRecipes } from '../services/recipeService.tsx';
import { Recipe } from '../models/recipe';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const results = await searchRecipes(query); // Fetch search results
      setRecipes(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-container">
      <NavBar />
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          required
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.recipeId} className="recipe-card">
            <img src={recipe.recipeImage} alt={recipe.recipeName} />
            <h2>{recipe.recipeName}</h2>
            <p>{recipe.recipeCategory}</p>
            <button className="search-button">Save Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
