import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CourtsContext } from './context/courts'

//birds is courts
//courts is birds

//do key prop thing check old project

function Court(){
 
    const { courts } = useContext(CourtsContext)
 
    return (
        <>
         {courts.map(court => (
            <div>
                <h1>{court.park}</h1>
                <h2>{court.neighborhood}</h2>🏀<h2>@ {court.street}</h2>
                <p>{court.notes}</p>
                <Link to={`/courts/${court.id}/newgame`}>
                    Add a Game 
                </Link>
                <br/>
                <Link to={`/courts/${court.id}/edit`}>
                    Edit {court.park}
                </Link>
            </div>
         ))}   
        </>
  )
}


export default Court