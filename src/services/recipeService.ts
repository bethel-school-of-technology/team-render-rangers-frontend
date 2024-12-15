import axios from 'axios';
import { Recipe } from '../models/recipe';

const API_BASE_URL = 'http://localhost:5117/api/recipe';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await axios.get<Recipe>(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createRecipe = async (recipeData: any): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(API_BASE_URL, recipeData, config);
    console.log('Backend response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error from backend:', error.response?.data || error.message);
    throw error;
  }
};

export const updateRecipe = async (id: number, recipeData: Partial<Recipe>) => {
  const token = localStorage.getItem("token"); 
  const response = await axios.put(
    `${API_BASE_URL}/${id}`,
    recipeData,
    {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    }
  );
  return response.data;
};

export const deleteRecipe = async (id: number): Promise<void> => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}/search?q=${query}`);
  return response.data;
};

export const getSavedRecipes = async (): Promise<Recipe[]> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_BASE_URL}/user`, { 
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

