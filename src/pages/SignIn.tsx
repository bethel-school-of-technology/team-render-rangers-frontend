import React, { useState } from 'react';
import './SignIn.css'; 
import NavBar from '../components/NavBar.tsx'; 
import { useAuth } from '../context/AuthContext.tsx'; 
import { loginUser } from '../services/authService.ts'; 
import { useNavigate } from 'react-router-dom'; 

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await loginUser(formData); 
      login(token); 
      navigate('/feed'); 
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="signin-container">
      <NavBar /> 
      <form onSubmit={handleSubmit} className="signin-form">
        <img
          src="https://foodtech-files.s3-eu-west-2.amazonaws.com/1dfbb06d9f9eb0d475d8559b4176078863993447b0b1fa758cbb476b2867c73d"
          alt="Feastly Logo"
          className="feastly-logo"
        />
        <p className="sign-up-here">
          Don't have an account? <a href="/signup">Sign up here.</a>
        </p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="signin-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="signin-input"
        />
        <button type="submit" className="signin-button">
          Log In
        </button>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
