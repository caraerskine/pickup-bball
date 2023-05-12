import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/user'
import { useParams, Link } from 'react-router-dom'

//sighting

function Game() {

    const {user} = useContext(UserContext)
    const params = useParams()

    const userGames = user.games.filter(game => game.court_id == params.id)
    const userCourt = user.courts_uniq.find(court => court.id == params.id)

    if (!user || user.error){
        return <h3>Please log in to view games</h3>
    } else {
        return (
            <>
                <h3>{userCourt.park} Courts</h3>
                {userGames.map(game => (
                    <>
                    <ol>
                        <b>Time:</b> {game.time} <br/>
                        <b>Bring Ball?:</b> {game.bring_ball} <br/>
                        <b>Skill Level:</b> {game.skill_level} <br/>
                        <b>Contact info:</b> {game.contact_info} <br/>  
                        <Link to={`/games/${game.id}`}><button>Edit Games</button></Link>       
                    </ol>
                    </>
                ))}
                <Link to={`/games`}>Back to All Games</Link>
            </>
          )

    }


  
}

export default Game