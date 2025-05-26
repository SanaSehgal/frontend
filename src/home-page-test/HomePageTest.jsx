import React, { useState } from 'react';
import './HomePageTest.css';

function HomePageTest() {
  const [gamePin, setGamePin] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Joining game with:', { gamePin, nickname });
    // Add your game joining logic here
  };

  return (
    <div className="home-page-test">
      <nav className="navbar">
        <div className="logo">QuizGame</div>
        <div className="auth-buttons">
          <button className="auth-btn login-btn">LOGIN</button>
          <button className="auth-btn signup-btn">SIGN UP</button>
        </div>
      </nav>
      
      <div className="content">
        <h1>JOIN GAME</h1>
        <form onSubmit={handleSubmit} className="join-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Game PIN"
              value={gamePin}
              onChange={(e) => setGamePin(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default HomePageTest;