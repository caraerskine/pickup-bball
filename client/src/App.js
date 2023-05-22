// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Login from './Login'
import Games from './Games'
// import Game from './Game'
import GameForm from './GameForm'
import Courts from './Courts'
// import Court from './Court'
import EditCourt from './EditCourt'
import EditGame from './EditGame'
import NewCourt from './NewCourt'
import { UserProvider } from './context/user'
import { CourtsProvider } from './context/courts'
// import { NavLink } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
        {console.log("App rendering")}
          <UserProvider>
           <CourtsProvider>
          <NavBar />
              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/signup" element={<SignUp />} />
                
                <Route exact path="/login" element={<Login />} />
                
                <Route exact path="/games" element={<Games />} />

                <Route path="/games/:id" element={<EditGame />} />
                
                <Route exact path="/courts" element={<Courts />} />
                
                <Route path="/courts/:id/edit" element={<EditCourt />} />
                
                <Route path="/courts/:id/newgame" element={<GameForm />} />

                <Route path="/courts/new" element={<NewCourt />} />
              </Routes>
            </CourtsProvider>
          </UserProvider>
        </div>
    </Router>

  );
}

export default App;

//react router dom gives you these routes
//this is what an SPA does

//path or exact path???

//global state to store user
//wrap app in provdier
//line 18 is local host 4000 render element home

//look at ph4 project and figure out missing routes

//commented out Games and therefore GameForm
//see if App works now with Games_b and NewGame idfk

//or you can comment out Games_b and NewGame
//and keep Games and GameForm