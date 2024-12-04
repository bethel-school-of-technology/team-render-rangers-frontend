import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
      <div className="forgot-password-container">

        <div className="forgot-password-header">
        <img src="https://foodtech-files.s3-eu-west-2.amazonaws.com/1dfbb06d9f9eb0d475d8559b4176078863993447b0b1fa758cbb476b2867c73d" alt="Feastly Logo" className="feastly-logo" />

        </div>
        <form className="forgot-password-form">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            className="forgot-password-input"
          />
          <button type="submit" className="forgot-password-button">
            Send Reset Link
          </button>
        </form>
        <a href="/" className="login-link">Back to Log In</a>
      </div>
    );
  };
  
  export default ForgotPassword;
  