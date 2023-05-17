import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/user'
import { useParams, Link } from 'react-router-dom'

//sighting
//this isn't functional

function Game() {

    const {user, games, loggedIn} = useContext(UserContext)
    // const params = useParams()

    // const userGames = user.games.filter(game => game.court_id === params.id)
    // const userCourt = user.courts_uniq.find(court => court.id === params.id)

    const gamesList = games?.map((g) => 
                <ol>
                        <b>Time:</b> {g.time} <br/>
                        <b>Bring Ball?:</b> {g.bring_ball} <br/>
                        <b>Skill Level:</b> {g.skill_level} <br/>
                        <b>Contact info:</b> {g.contact_info} <br/>  
                        <Link to={`/games/${g.id}`}><button>Edit this Game</button></Link>       
                </ol>    
                 )

    console.log (user.games, "tomato")

    if (!loggedIn){
        return <h3>Please log in to view your games</h3>

    } else {
        return (
            <>
                <h3> {user.username}'s Games:</h3>
                    {gamesList}
                {/* <Link to={`/games`}>Back to All Games</Link> */}
            </>
          )
    }
}

export default Game

//line 23 <h3> used to have {userCourt.park} in it but it was not rendering or whatever so idk what to do
//i just took it out