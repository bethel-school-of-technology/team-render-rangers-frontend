import React from 'react';
import './ForgotPassword.css';
import NavBar from '../components/NavBar.tsx'; 


const ForgotPassword = () => {
    return (
        <div className="forgot-password-container">
                  <NavBar /> 

            <form className="forgot-password-form">
                <img 
                    src="https://foodtech-files.s3-eu-west-2.amazonaws.com/1dfbb06d9f9eb0d475d8559b4176078863993447b0b1fa758cbb476b2867c73d" 
                    alt="Feastly Logo" 
                    className="feastly-logo" 
                />
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
                <a href="/" className="login-link">Back to Log In</a>
            </form>
        </div>
    );
};

export default ForgotPassword;
