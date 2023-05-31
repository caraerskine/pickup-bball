import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Games from './components/Games'
import GameForm from './components/GameForm'
import AllCourts from './components/AllCourts'
import EditGame from './components/EditGame'
import NewCourt from './components/NewCourt'
import './App.css';



function App() {

  return (
  <div>
      <Navigation />
        <div className="App">
          <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/games" element={<Games />}/>
      
                <Route path="/games/:id" element={<EditGame />}/>
                   
                <Route path="/signup" element={<SignUp />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/courts" element={<AllCourts />} />
                
                <Route path="/courts/:id/newgame" element={<GameForm />} />

                <Route path="/courts/new" element={<NewCourt />} />
              </Routes>
        </div>
  </div>

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