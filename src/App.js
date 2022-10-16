import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in

      } else {
        // logged out
      }
    })
    return unsubscribe
  }, [])

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
