import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/user";
import { Link } from "react-router-dom";


const arr = [{
    time: "", 
    bring_ball: "", 
    skill_level: "", 
    contact_info: "",
    id: 0, 
    username: ""
}]

function Games() {
  const { user } = useContext(UserContext);

  console.log(user, "from Games")

  if (!user.games && user){
    return <h2>Please add some games, {user.username}!</h2>
  }

  if (user.games && user) {
  const displayGames = user.games.map((g) => {
    console.log(g)
    return (
        <div key={g.id}> 
            <ol>
                <b>Court:</b> {g.court_name} <br />
                <b>Time:</b>{g.time} <br />
                <b>Bring Ball?:</b> {g.bring_ball}<br />
                <b>Skill Level:</b> {g.skill_level} <br />
                <b>Contact info:</b> {g.contact_info} <br />
                <Link to={`/games/${g.id}`}>
                  <button>Edit this Game</button>
                </Link>
            </ol>
        </div>
    );
  });
    return <div> {displayGames} </div>;
 }

    return <div></div>
}

export default Games;

//bring_ball does not show up once the game is created
//hmmmm
//used to just be {g.bring_ball}

//I would like to also be able to see the court it is on
//I can see the court id but i want the name to show up 

  //update display games and populate the info
  //try to find the main user
  //set a useEffect on it to fetch data
  //then it will be available to the rest of the app

  //5-24-23
  //i logged out and had 3 games 
  //when I logged back in, my games did not display

  //chatgpt suggested I do games.length instead of games

  //place a ternary in your app when local user is valid 
  //user has to register as an null
  //use an async function for that
  //once thee promise is returned the app is re-rendered
  //and then user is valid and games rendered

  //look everywhere where user is used
  //look for where user 
  //1. write an async function where the first useEffect is in user
  //2. write a ternary for you route that renders games is local user valid
  //an empty object is valid 
  //set initisal user to null
  //then set your user with the object you get from thae back end
  //ternary for local user route games other wise route loading games 

  //chatgpt step by tsep
  //async fun
  //set state
  //write ternary