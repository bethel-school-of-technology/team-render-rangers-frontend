import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import { getSavedRecipes } from '../services/recipeService.ts';
import NavBar from '../components/NavBar.tsx';
import './Profile.css';
import { Recipe } from '../models/recipe.ts';

const Profile = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // if (!token) {
    //   navigate('/signin'); // redirect if not qualified 
    //   return;
    // }

    const fetchSavedRecipes = async () => {
      try {
        const recipes = await getSavedRecipes();
        setSavedRecipes(recipes);
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      }
    };

    fetchSavedRecipes();
  }, [navigate]);

  // if (!user) {
  //   return null;
  // }

  return (
    <div className="profile-container">
      <NavBar />
      <div className="profile-header">
        {/* <img
          src={user.avatar || 'https://via.placeholder.com/150'}
          alt="User avatar"
          className="profile-avatar"
        />
        <div className="profile-name-container">
          <span className="profile-name">{user.name || 'User Name'}</span>
        </div> */}
      </div>
      <div className="saved-recipes">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <div key={recipe.id} className="saved-recipe-card">
              <img
                src={recipe.image || 'https://via.placeholder.com/100'}
                alt={recipe.name}
              />
              <div className="saved-recipe-info">
                <h2 className="saved-recipe-name">{recipe.recipeName}</h2>
                <p className="saved-recipe-image">{recipe.recipeImage}</p>
                <button className="view-recipe-button">
                  <a href={`/recipe/${recipe.id}`}>View Recipe</a>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No saved recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
