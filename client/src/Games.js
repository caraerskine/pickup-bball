import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
// import { Link } from 'react-router-dom' 
import GameForm from './GameForm'


function Games() {
    const { games, loggedIn } = useContext(UserContext);
    const [form, setForm] = useState(false)
    const params = useParams();

    const addGame = () => {
        setForm(false)
    }

    if (loggedIn) {
        const gamesList = games.map((g) => g.time)
        //not a function???
        console.log(games)
        console.log(gamesList, "number 23")
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