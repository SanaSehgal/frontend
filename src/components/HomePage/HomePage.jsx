import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [gamePin, setGamePin] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/themes', { state: { gamePin, nickname } });
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">QUIZVERSE</div>
        <div className="auth-buttons">
          <button className="auth-btn login-btn">LOGIN</button>
          <button className="auth-btn signup-btn">SIGN UP</button>
        </div>
      </nav>
      
      <main className="main-content">
        <div className="game-box">
          <h1 className="title-gradient">JOIN GAME</h1>
          <form onSubmit={handleSubmit} className="join-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Game PIN"
                value={gamePin}
                onChange={(e) => setGamePin(e.target.value)}
                required
                className="glow-input"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                className="glow-input"
              />
            </div>
            <button type="submit" className="submit-btn pulse-hover">
              ENTER QUIZ
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default HomePage;