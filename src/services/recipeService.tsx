import axios from 'axios';
import { Recipe } from '../models/recipe';

const API_BASE_URL = 'http://localhost:5117/api/recipe'; // Replace with actual API URL

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await axios.post(`${API_BASE_URL}`, recipe);
  return response.data;
};

export const updateRecipe = async (id: number, updatedRecipe: Recipe): Promise<Recipe> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedRecipe);
  return response.data;
};

export const deleteRecipe = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}/recipe/search?q=${query}`);
  return response.data;
};
