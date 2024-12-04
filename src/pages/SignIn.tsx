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
      <form onSubmit={handleSubmit} className="signin-form">
      <img src="https://foodtech-files.s3-eu-west-2.amazonaws.com/1dfbb06d9f9eb0d475d8559b4176078863993447b0b1fa758cbb476b2867c73d" alt="Feastly Logo" className="feastly-logo" />
      <p className="sign-up-here">Don't have an account? <a href="/signup">Sign up here.</a></p>

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
        <button type="submit" className="signin-button">Log In</button>
        <p className="forgot-password"><a href="/forgot-password">Forgot password?</a></p> 
      </form>
    </div>
  );
};

export default SignIn;
