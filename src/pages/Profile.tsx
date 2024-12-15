import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import { getSavedRecipes, deleteRecipe } from '../services/recipeService.ts'; 
import NavBar from '../components/NavBar.tsx';
import './Profile.css';
import { Recipe } from '../models/recipe.ts';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const recipes = await getSavedRecipes();
        setSavedRecipes(recipes);
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
      }
    };

    fetchSavedRecipes();
  }, [navigate]); 

  const handleDelete = async (recipeId: number) => {
    try {
      await deleteRecipe(recipeId);
      setSavedRecipes((prev) => prev.filter((recipe) => recipe.recipeId !== recipeId));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className="profile-container">
      <NavBar />
      <div className="profile-header">
        <img
          src={user.avatar || 'https://media.istockphoto.com/id/1345002600/vector/gender-neutral-profile-avatar-front-view-of-an-anonymous-person-face.jpg?s=612x612&w=0&k=20&c=082qj-lppYxoHZkDETLvwLSwt1WaTiRgRaaQDcsdbfg='}
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
            <div key={recipe.recipeId} className="saved-recipe-card">
              <img
                src={recipe.recipeImgUrl || 'https://via.placeholder.com/100'}
                alt={recipe.recipeName}
              />
              <div className="saved-recipe-info">
                <h2 className="saved-recipe-name">{recipe.recipeName}</h2>
                <p className="saved-recipe-image">{recipe.recipeInstructions}</p>
                <div className="recipe-action-buttons">
                  <button className="view-recipe-button">
                    <Link to={`/recipe/${recipe.recipeId}`}>View Recipe</Link>
                  </button>
                  <button
                    className="update-recipe-button"
                    onClick={() => navigate(`/update-recipe/${recipe.recipeId}`)}
                  >
                    Update
                  </button>

                  {recipe.recipeId && (
                    <button
                      className="delete-recipe-button"
                      onClick={() => handleDelete(recipe.recipeId!)}
                    >
                      Delete
                    </button>
                  )}

                </div>
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
