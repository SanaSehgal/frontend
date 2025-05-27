import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [gamePin, setGamePin] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedTheme, setSelectedTheme] = useState(null);

  const quizThemes = [
    { id: 1, name: 'Science', color: '#00c6ff' },
    { id: 2, name: 'Movies', color: '#ff4e50' },
    { id: 3, name: 'History', color: '#f9d423' },
    { id: 4, name: 'Technology', color: '#a8ff78' },
    { id: 5, name: 'Geography', color: '#ff7e5f' },
    { id: 6, name: 'Sports', color: '#6a11cb' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage onBack={() => setCurrentPage('home')} onSignup={() => setCurrentPage('signup')} />;
      case 'signup':
        return <SignupPage onBack={() => setCurrentPage('home')} onLogin={() => setCurrentPage('login')} />;
      case 'theme':
        return (
          <ThemePage 
            gamePin={gamePin} 
            nickname={nickname}
            onBack={() => setCurrentPage('home')}
            quizThemes={quizThemes}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            onSignup={() => setCurrentPage('signup')}
          />
        );
      default:
        return (
          <HomePage 
            onJoin={(pin, name) => {
              setGamePin(pin);
              setNickname(name);
              setCurrentPage('theme');
            }}
            onLogin={() => setCurrentPage('login')}
            onSignup={() => setCurrentPage('signup')}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}

function HomePage({ onJoin, onLogin, onSignup }) {
  const [gamePin, setGamePin] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onJoin(gamePin, nickname);
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">QUIZVERSE</div>
        <div className="auth-buttons">
          <button className="auth-btn login-btn" onClick={onLogin}>LOGIN</button>
          <button className="auth-btn signup-btn" onClick={onSignup}>SIGN UP</button>
        </div>
      </nav>

      <div className="main-content">
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
      </div>
    </div>
  );
}

function LoginPage({ onBack, onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with:', email, password);
  };

  return (
    <div className="auth-page black-bg">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-btn">Sign In</button>
        </form>

        <button className="text-btn">Forgot your password?</button>

        <div className="divider">or</div>

        <p className="auth-footer">
          Don't have an account? <button className="link-btn" onClick={onSignup}>Sign Up</button>
        </p>

        <button className="back-btn" onClick={onBack}>Back to Home</button>
      </div>
    </div>
  );
}

function SignupPage({ onBack, onLogin }) {
  const [activeTab, setActiveTab] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup with:', email, password);
  };

  return (
    <div className="auth-page black-bg">
      <div className="auth-card">
        <h1>Create Your Account</h1>
        <p className="subtitle">Join thousands of learners worldwide</p>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            Social
          </div>
          <div
            className={`tab ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => setActiveTab('email')}
          >
            Email
          </div>
        </div>

        {activeTab === 'social' ? (
          <div className="social-buttons">
            <button className="social-btn google-btn">Continue with Google</button>
            <button className="social-btn facebook-btn">Continue with Facebook</button>
            <button className="social-btn apple-btn">Continue with Apple</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="primary-btn">Continue with Email</button>
          </form>
        )}

        <div className="divider">or</div>

        <p className="auth-footer">
          Already have an account? <button className="link-btn" onClick={onLogin}>Sign In</button>
        </p>

        <button className="secondary-btn">Join Game with Code</button>
        <button className="back-btn" onClick={onBack}>Back to Home</button>

        <p className="terms-text">
          By signing up, you agree to our <a href="#" className="link">Terms of Service</a> and <a href="#" className="link">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

function ThemePage({ gamePin, nickname, onBack, quizThemes, selectedTheme, setSelectedTheme, onSignup }) {
  return (
    <div className="theme-page">
      <nav className="navbar">
        <div className="logo">QUIZVERSE</div>
        <div className="auth-buttons">
          <button className="auth-btn login-btn">LOGIN</button>
          <button className="auth-btn signup-btn" onClick={onSignup}>SIGN UP</button>
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
              onClick={() => setSelectedTheme(theme)}
              style={{ background: theme.color }}
            >
              <div className="theme-name">{theme.name}</div>
              {selectedTheme?.id === theme.id && <div className="selected-icon">✓</div>}
            </div>
          ))}
        </div>
        <button
          className="start-quiz-btn"
          disabled={!selectedTheme}
          style={{ background: selectedTheme?.color || '#555', opacity: selectedTheme ? 1 : 0.7 }}
        >
          {selectedTheme ? `START ${selectedTheme.name} QUIZ` : 'SELECT A THEME'}
        </button>
        <button className="back-btn" onClick={onBack}>Back to Home</button>
      </div>
    </div>
  );
}

export default App;
