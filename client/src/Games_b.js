import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { CourtsContext } from './context/courts'
import { Link } from 'react-router-dom'

//new 
//if works just call it Games
//NavLink changes ?
//GameForm is the child of games now (idk)

function Games_b (){
    const { user } = useContext(UserContext)
    // const { courts } = useContext(CourtsContext) ??

    if (!user || user.error){
        return <h3>Please log in to view games</h3>
    } else {
        return (
            <>
            <h3>You have {user.games.length} total games, on {user.courts_uniq?.length} different courts</h3>
            {user.courts_uniq?.map(court => (
                <>
                <Link to={`/courts/${court.id}/games`}><h4>View {court.park} games</h4></Link>
                <br/>
                </>
            ))}
            </>
        )
    }
}

export default Games_b

//this will show you after you login how many games you have on how many courts