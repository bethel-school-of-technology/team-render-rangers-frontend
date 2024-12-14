import React, { useState } from 'react';
import NavBar from '../components/NavBar.tsx'; 
import './SignUp.css'; 
import { useAuth } from '../context/AuthContext.tsx'; 
import { registerUser } from '../services/authService.ts'; 
import { useNavigate } from 'react-router-dom'; 

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerUser(formData); 
      navigate('/feed'); 
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <NavBar /> 
      <form onSubmit={handleSubmit} className="signup-form">
        <img
          src="https://foodtech-files.s3-eu-west-2.amazonaws.com/1dfbb06d9f9eb0d475d8559b4176078863993447b0b1fa758cbb476b2867c73d"
          alt="Feastly Logo"
          className="feastly-logo"
        />
        <h1 className="create-account">Create Your Account</h1>
        <p className="already-registered">
          Already Registered? <a href="/">Log in here.</a>
        </p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
