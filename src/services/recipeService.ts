import axios from 'axios';
import { Recipe } from '../models/recipe';

const API_BASE_URL = 'http://localhost:5117/api/recipe'; 

// Fetch all recipes
export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

// Fetch a single recipe by ID
export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createRecipe = async (recipeData: any): Promise<any> => {
  try {
    const response = await axios.post(API_BASE_URL, recipeData);
    console.log('Backend response:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error from backend:', error.response?.data || error.message); 
    throw error;
  }
};

// Update an existing recipe
export const updateRecipe = async (id: number, updatedRecipe: Recipe): Promise<Recipe> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedRecipe);
  return response.data;
};

// Delete a recipe by ID
export const deleteRecipe = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};

// Search for recipes by query string
export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}/search?q=${query}`);
  return response.data;
};
