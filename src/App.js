import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  const user = null

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
}

export default App;
