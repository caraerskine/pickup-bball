import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './context/user'

//where would i put key={court.id} in here?

function MyCourt(){
 
    const { courts } = useContext(UserContext)

    return (
        <>
         {courts.map(court => (
            <div  key={court.id}>
                🏀 🏀 🏀
                <h1>{court.park}</h1>
                <h2>{court.neighborhood}</h2><h2>@ {court.street}</h2>
                <p>{court.notes}</p>
                <NavLink to={`/courts/${court.id}/newgame`}>
                    Add a Game to {court.park}
                </NavLink>
                <br/>
                <NavLink to={`/courts/${court.id}/edit`}>
                    Edit {court.park} 
                </NavLink>
            </div>
         ))}   
        </>
  )
}


export default MyCourt
