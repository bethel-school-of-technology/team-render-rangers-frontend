import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import { getSavedRecipes } from '../services/recipeService.ts';
import NavBar from '../components/NavBar.tsx';
import './Profile.css';
import { Recipe } from '../models/recipe.ts';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // if (!token) {
    //   navigate('/signin'); // redirect if not qualified 
    //   return;
    // }
    console.log(user);

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
        <img
          src={user.avatar || 'https://via.placeholder.com/150'}
          alt="User avatar"
          className="profile-avatar"
        />
        <div className="profile-name-container">
          <span className="profile-name">{user.Name || 'User Name'}</span>
        </div>
        <div className="profile-name-container">
          <span className="profile-name">{user.Email || 'User Email'}</span>
        </div>
      </div>
      <div className="saved-recipes">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <div key={recipe.id} className="saved-recipe-card">
              <img
                src={recipe.recipeImgUrl || 'https://via.placeholder.com/100'}
                alt={recipe.name}
              />
              <div className="saved-recipe-info">
                <h2 className="saved-recipe-name">{recipe.recipeName}</h2>
                <p className="saved-recipe-image">{recipe.recipeInstructions}</p>
                <button className="view-recipe-button">
                  <Link to={`/recipe/${recipe.recipeId}`}>View Recipe</Link>
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
