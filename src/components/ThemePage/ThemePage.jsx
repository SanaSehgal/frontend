import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ThemePage.css';

function ThemePage() {
  const location = useLocation();
  const { gamePin, nickname } = location.state || {};
  const [selectedTheme, setSelectedTheme] = useState(null);

  const quizThemes = [
    { id: 1, name: 'Science', color: '#00c6ff' },
    { id: 2, name: 'Movies', color: '#ff4e50' },
    { id: 3, name: 'History', color: '#f9d423' },
    { id: 4, name: 'Technology', color: '#a8ff78' },
    { id: 5, name: 'Geography', color: '#ff7e5f' },
    { id: 6, name: 'Sports', color: '#6a11cb' },
  ];

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="theme-container">
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
  );
}

export default ThemePage;