import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'
import Games from './Games'
import Courts from './Courts'
import { UserProvider } from './context/user'
import { CourtsProvider } from './context/courts'
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
          <UserProvider>
           <CourtsProvider>
          <NavBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/games" element={<Games />} />
                <Route exact path="/courts" element={<Courts />} />
              </Routes>
            </CourtsProvider>
          </UserProvider>
        </div>
    </Router>

  );
}

export default App;

//global state to store user
//wrap app in provdier
//line 18 is local host 4000 render element home