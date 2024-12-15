import axios from 'axios';

const API_BASE_URL = 'http://localhost:5117/api';

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Auth/login?email=${credentials.email}&password=${credentials.password}`);
    return response.data; 
  } catch (error: any) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Log in failed' };
  }
};

export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Auth/register`, userData);
    return response.data; 
  } catch (error: any) {
    console.error('Error registering:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Registration failed' };
  }
};