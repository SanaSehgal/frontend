import React, { useState } from 'react';
import './App.css';

function App() {
  const [showThemePage, setShowThemePage] = useState(false);
  const [gamePin, setGamePin] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Sample quiz themes data
  const quizThemes = [
    { id: 1, name: 'Science', color: '#00c6ff' },
    { id: 2, name: 'Movies', color: '#ff4e50' },
    { id: 3, name: 'History', color: '#f9d423' },
    { id: 4, name: 'Technology', color: '#a8ff78' },
    { id: 5, name: 'Geography', color: '#ff7e5f' },
    { id: 6, name: 'Sports', color: '#6a11cb' },
  ];

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    setShowThemePage(true);
  };

  const handleBackToHome = () => {
    setShowThemePage(false);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="app-container">
      {showThemePage ? (
        // Theme Page Content
        <div className="theme-page">
          <nav className="navbar">
            <div className="logo">QUIZVERSE</div>
            <div className="auth-buttons">
              <button className="auth-btn login-btn">LOGIN</button>
              <button className="auth-btn signup-btn">SIGN UP</button>
            </div>
          </nav>

          <div className="theme-content">
            <h1 className="selection-title">Choose Your Quiz Theme</h1>
            <p className="selection-subtitle">Hello, {nickname}! Select a category to begin</p>
            
            <div className="themes-carousel">
              {quizThemes.map((theme) => (
                <div 
                  key={theme.id}
                  className={`theme-card ${selectedTheme?.id === theme.id ? 'selected' : ''}`}
                  onClick={() => handleThemeSelect(theme)}
                  style={{ background: theme.color }}
                >
                  <div className="theme-name">{theme.name}</div>
                  {selectedTheme?.id === theme.id && (
                    <div className="selected-icon">✓</div>
                  )}
                </div>
              ))}
            </div>

            <button 
              className="start-quiz-btn"
              disabled={!selectedTheme}
              style={{ 
                background: selectedTheme?.color || '#555',
                opacity: selectedTheme ? 1 : 0.7
              }}
            >
              {selectedTheme ? `START ${selectedTheme.name} QUIZ` : 'SELECT A THEME'}
            </button>

            
          </div>
        </div>
      ) : (
        // Home Page Content
        <div className="home-page">
          <nav className="navbar">
            <div className="logo">QUIZVERSE</div>
            <div className="auth-buttons">
              <button className="auth-btn login-btn">LOGIN</button>
              <button className="auth-btn signup-btn">SIGN UP</button>
            </div>
          </nav>
          
          <div className="main-content">
            <div className="game-box">
              <h1 className="title-gradient">JOIN GAME</h1>
              <form onSubmit={handleJoinSubmit} className="join-form">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;