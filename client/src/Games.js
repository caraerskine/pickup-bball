import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
// import { NavLink } from 'react-router-dom' 
import GameForm from './GameForm'

//Not sure we keep this IDK
//old
//uses addGame from user.js

function Games() {
    const { games, loggedIn } = useContext(UserContext);
    const [form, setForm] = useState(false)
    const params = useParams();

    const addGame = () => {
        setForm(false)
    }

    if (loggedIn) {
        const gamesList = games.map((g) => g.time)
        console.log(gamesList, "Logged in so that's good")
        
        return (
            <div>
                <h3>Games:</h3>
                <br/>
                {gamesList}
                <br/>
                {setForm ? 
                    <GameForm form={form}/>
                    :
                    <button onClick={() => addGame(true)}>Add Game</button>
                }
                {console.log("Game form rendering")}
                  
            </div>
        )
    } else {
        return (
            <h3>Not Authorized - Please Signup or Login</h3>
        )
    }        
}



export default Games

//min 33:46 in Sample Build video not sure
//she has GameLinks and Game as well so idk 

//Games_b does the same thing as this I think

//After nancy HOME this is what you see after you login
//this takes you right to Games and lets you add a game after you log in
//and shows you the GAME FORM like it is in the return above

//gamesList is not showing up therefore I am geting "gamesListerror"