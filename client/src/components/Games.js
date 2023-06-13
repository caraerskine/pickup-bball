import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
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
//could be called MyGames or MyMatches
//this logical statement is not showing up and I am not sure why, used to be {!user.games && user}, I took out the bang
//operator and then the statement showed up but then the person's games disappeared.
  if (user.games && user.games.length === 0){
    return (
    <h3>It looks like you don't have any games yet.<br></br>
       Click "All Courts" to add some games, {user.username}!</h3>
  );  
}

  if (user.games && user) {
  const displayGames = user.games.map((g) => {

    return (
        <div key={g.id}> 
            <ol>
                <b>Court:</b> {g.court_name} <br />
                <b>Time:</b> {g.time} <br />
                <b>Bring a Basketball?:</b> {g.bring_ball ? "yes 🏀" : "no ❌"}
                <br />
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


 
 