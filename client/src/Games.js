import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
// import { NavLink } from 'react-router-dom' 
// import GameForm from './GameForm'
import Game from './Game'

//uses addGame fn from user.js

function Games() {
    const { user, loggedIn } = useContext(UserContext);
    // const [form, setForm] = useState(false)
    // const params = useParams();

    // const addGame = () => {
    //     setForm(false)
    // }

    if (loggedIn) {
    
        // console.log(gamesList, "Logged in so that's good")

        const displayGames = user?.games?.map((game) => 
            <Game game={game} />
        )

        return (
            <div>
                {/* <h3>{user.username}'s Games:</h3> */}
                {/* <br/> */}
                {displayGames}
                    {/* {gamesList}               */}
                    {/* {console.log("games looks weird")} */}
                {/* <br/> */}
                <Game />
                {/* {setForm ? 
                    <Game />
                    :
                    <button onClick={() => addGame(true)}>Add Game</button>
                } */}
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
