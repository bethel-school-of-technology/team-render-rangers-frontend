import axios from 'axios';
import { Recipe } from '../models/recipe';

const API_BASE_URL = 'https://example.com/api'; // Replace with actual API URL

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}/recipes`);
  return response.data;
};

export const getRecipeById = async (id: number): Promise<Recipe> => {
  const response = await axios.get(`${API_BASE_URL}/recipes/${id}`);
  return response.data;
};

export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await axios.post(`${API_BASE_URL}/recipes`, recipe);
  return response.data;
};

export const updateRecipe = async (id: number, updatedRecipe: Recipe): Promise<Recipe> => {
  const response = await axios.put(`${API_BASE_URL}/recipes/${id}`, updatedRecipe);
  return response.data;
};

export const deleteRecipe = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/recipes/${id}`);
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}/recipes/search?q=${query}`);
  return response.data;
};
