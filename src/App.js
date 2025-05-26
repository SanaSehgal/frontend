import React, { useState } from 'react';
import './App.css';

function App() {
  const [userType, setUserType] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const selectUserType = (type) => {
    setUserType(type);
    setCurrentPage('auth');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage selectUserType={selectUserType} />;
      case 'auth':
        return <AuthPage userType={userType} setCurrentPage={setCurrentPage} />;
      case 'join':
        return <JoinGamePage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage selectUserType={selectUserType} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

// Home Page Component
function HomePage({ selectUserType }) {
  return (
    <div className="home-page">
      <h1>Welcome to Quiz Game</h1>
      <p>Are you a:</p>
      <div className="user-type-buttons">
        <button onClick={() => selectUserType('educator')}>Educator</button>
        <button onClick={() => selectUserType('student')}>Student</button>
      </div>
    </div>
  );
}

// Authentication Page Component
function AuthPage({ userType, setCurrentPage }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <h1>{userType === 'educator' ? 'Educator' : 'Student'} {isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        {!isLogin && <input type="text" placeholder="Name" required />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      <button onClick={() => setCurrentPage('join')}>Join Game</button>
      <button onClick={() => setCurrentPage('home')}>Back</button>
    </div>
  );
}

// Join Game Page Component
function JoinGamePage({ setCurrentPage }) {
  return (
    <div className="join-game-page">
      <h1>Join a Game</h1>
      <form>
        <input type="text" placeholder="Game Code" required />
        <button type="submit">Join</button>
      </form>
      <button onClick={() => setCurrentPage('auth')}>Back</button>
    </div>
  );
}

export default App;