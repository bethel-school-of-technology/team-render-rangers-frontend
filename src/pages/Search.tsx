import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx';


const Search = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

};

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
