import React, {useState, useContext} from 'react'
import {Route, useParams} from 'react-router-dom'
import { UserContext } from './context/user'
import GameForm from './GameForm'

function Games() {
    const { games, loggedIn } = useContext(UserContext);
    const [formFlag, setFormFlag] = useState(false)
    const params = useParams();
    if (loggedIn) {
        const gamesList = games.map(g => <li>{g.time}</li>)
        //throwing error on this map hmmmm
        console.log(games)
        return (
            <div>
                <h3>Games:</h3>
                <br/>
                {gamesList}
                <br/>
                {formFlag? 
                    <GameForm />
                    :
                    <button onClick={() => setFormFlag(true)}>Add Game</button>
                }

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