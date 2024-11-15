import React from 'react';
import NavBar from '../components/NavBar.tsx';

const Feed = () => {
    return (
      <div>
        <NavBar />
        <h1>Public Feed</h1>
        <div>
          <h2>Recipe Name</h2>
          <button>View Recipe</button>
        </div>
      </div>
    );
  };
  
  export default Feed;
  