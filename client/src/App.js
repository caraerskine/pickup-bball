import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Login from './Login'
import Games from './Games'
import GameForm from './GameForm'
import AllCourts from './AllCourts'
// import EditCourt from './EditCourt'
import EditGame from './EditGame'
import NewCourt from './NewCourt'
import './App.css';
import { UserContext } from './context/user'



function App() {

  return (
  <div>
      <Navigation />
        <div className="App">
        {console.log("App rendering")}
          <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/games" element={<Games />}/>
      
                <Route path="/games/:id" element={<EditGame />}/>
                   
                <Route path="/signup" element={<SignUp />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/games" element={<Games />} />
                    
                <Route path="/games/:id" element={<EditGame />} /> 
                
                <Route path="/courts" element={<AllCourts />} />
                
                {/* <Route path="/courts/:id/edit" element={<EditCourt />} /> */}
                
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