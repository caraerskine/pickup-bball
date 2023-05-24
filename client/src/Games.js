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
        <div>
            <ol>
                <b>Time:</b>{g.time} <br />
                <b>Bring Ball?:</b> {g.bring_ball} <br />
                <b>Skill Level:</b> {g.skill_level} <br />
                <b>Contact info:</b> {g.contact_info} <br />
            <Link to={`/games/${g.id}`}><button>Edit this Game</button></Link>
            </ol>
        </div>
    );
  });

  //update display games and populate the info
  //try to find the main user
  //set a useEffect on it to fetch data
  //then it will be available to the rest of the app

  //5-24-23
  //i logged out and had 3 games 
  //when I logged back in, my games did not display

  //chatgpt suggested I do games.length instead of games

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
