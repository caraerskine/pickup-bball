import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
// import NavBar from './NavBar'
import { UserProvider } from './context/user'
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
          <UserProvider>
            {/* <NavBar /> */}
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
          </UserProvider>
        </div>
    </Router>

  );
}

export default App;

//global state to store user
//wrap app in provdier