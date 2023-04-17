import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import { UserProvider } from './context/user'
import './App.css';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

//global state to store user
//wrap app in provdier