import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        className="search-input" />
    <button type="submit" className="search-button">Search</button>
</form>

<div className="recipe-list">
  <div className="recipe-card">
    <img src="https://via.placeholder.com/300" alt="Recipe" />
    <h2>Recipe Name</h2>
    <p>Description</p>
    <button className="search-button">Save Recipe</button>
  </div>
  <div className="recipe-card">
    <img src="https://via.placeholder.com/300" alt="Recipe" />
    <h2>Recipe Name</h2>
    <p>Description</p>
    <button className="search-button">Save Recipe</button>
  </div>
</div>


    </div>
  );
};

export default Search;
