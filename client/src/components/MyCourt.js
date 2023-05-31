import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user'


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
                <br/>
            </div>
         ))}   
        </>
  )
}


export default MyCourt
