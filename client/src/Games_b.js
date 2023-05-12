import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { CourtsContext } from './context/courts'
import { Link } from 'react-router-dom'

//new 
//if works just call it games
//NavLink changes ?

function Games_b (){
    const { user } = useContext(UserContext)

    if (!user || user.error){
        return <h3>Please log in to view games</h3>
    } else {
        return (
            <>
            <h3>You have {user.games.length} total games, on {user.courts_uniq?.length} different courts</h3>
            {user.courts_uniq?.map(bird => (
                <>
                <Link to={`/courts/${court.id}/games`}><h4>View {court.park} games</h4></Link>
                <br/>
                </>
            ))}
            </>
        )
    }


  return (
    <div>Games_b</div>
  )
}

export default Games_b