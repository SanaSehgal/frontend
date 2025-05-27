import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState('social');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Add your social login logic here
  };

  const handleJoinGame = () => {
    console.log('Join game with code');
    // Add your join game logic here
  };

  const handleSignIn = () => {
    console.log('Navigate to sign in');
    // Add your navigation logic here
  };

  const handleBackHome = () => {
    console.log('Navigate back to home');
    // Add your navigation logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create Your Account</h1>
        <p className="subtitle">Join thousands of learners worldwide</p>
        
        <div className="tab-container">
          <div 
            className={`tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => handleTabClick('social')}
          >
            Social Login
          </div>
          <div 
            className={`tab ${activeTab === 'phone' ? 'active' : ''}`}
            onClick={() => handleTabClick('phone')}
          >
            Phone
          </div>
          <div 
            className={`tab ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => handleTabClick('email')}
          >
            Email
          </div>
        </div>

        {activeTab === 'social' && (
          <div className="tab-content">
            <button 
              className="social-btn google-btn"
              onClick={() => handleSocialLogin('Google')}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-2.7.75c-2.09 0-3.87-1.31-4.5-3.08H1.83v2.96A8.14 8.14 0 0 0 8.98 17z"/>
                <path fill="#FBBC05" d="M4.5 10.69A4.8 4.8 0 0 1 4.22 9c0-.59.11-1.17.28-1.69V4.35H1.83A8.14 8.14 0 0 0 .875 9c0 1.31.32 2.54.955 3.69l2.67-2z"/>
                <path fill="#EA4335" d="M8.98 4.72c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8.15 8.15 0 0 0 8.98 1a8.14 8.14 0 0 0-7.15 4.35l2.67 2.37c.63-1.77 2.41-3.08 4.48-3.08z"/>
              </svg>
              Continue with Google
            </button>

            <button 
              className="social-btn facebook-btn"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>

            <button 
              className="social-btn apple-btn"
              onClick={() => handleSocialLogin('Apple')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              Continue with Apple
            </button>

            <button 
              className="social-btn twitter-btn"
              onClick={() => handleSocialLogin('X')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Continue with X
            </button>
          </div>
        )}

        {activeTab === 'phone' && (
          <div className="tab-content">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
            <button className="primary-btn">Continue with Phone</button>
          </div>
        )}

        {activeTab === 'email' && (
          <div className="tab-content">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Create a password" />
            </div>
            <button className="primary-btn">Continue with Email</button>
          </div>
        )}

        <div className="divider">or</div>

        <p className="signin-text">
          Already have an account? 
          <button className="link-btn" onClick={handleSignIn}>Sign In</button>
        </p>

        <button className="join-game-btn" onClick={handleJoinGame}>
          Join Game with Code
        </button>

        <button className="back-home-btn" onClick={handleBackHome}>
          Back to Home
        </button>

        <p className="terms-text">
          By signing up, you agree to our 
          <a href="#" className="link">Terms of Service</a> and 
          <a href="#" className="link">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;