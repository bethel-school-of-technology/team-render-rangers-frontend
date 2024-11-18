import React, { useState } from 'react';
import './SignIn.css';
import NavBar from '../components/NavBar.tsx';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in functionality here
  };

  return (
    <div className="signin-container">
      <NavBar />
      <form onSubmit={handleSubmit} className="signin-form">
        <h1>Log In</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="signin-button">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;