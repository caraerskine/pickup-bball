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
  const { games, user, loggedIn } = useContext(UserContext);

  const [myInfo, setMyInfo] = useState(arr)
  const [name, setMyName] = useState("")

  useEffect(() => {
        setMyInfo(games)
        setMyName(user.username)
  }, [user, games.length]);

  const displayGames = myInfo.map((g) => {
    return (
        <div key={g.id}> 
            <ol>
                <b>Time:</b>{g.time} <br />
                <b>Bring Ball?:</b> {g.bring_ball} <br />
                <b>Skill Level:</b> {g.skill_level} <br />
                <b>Contact info:</b> {g.contact_info} <br />
                {/* <b>Court:</b> {g.court_id} <br /> */}
                <Link to={`/games/${g.id}`}>
                  <button>Edit this Game</button>
                </Link>
            </ol>
        </div>
    );
  });

  if (loggedIn) {
    return (
    <div>
         <h2>{name}'s Games:</h2>
        {displayGames}
    </div>
    );
  } else {
    return <h3>Not Authorized - Please Signup or Login</h3>;
  }
}

export default Games;



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