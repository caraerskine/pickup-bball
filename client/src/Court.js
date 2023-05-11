import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CourtsContext } from './context/courts'

function Court(){
 
    const { courts } = useContext(CourtsContext)
 
    return (
        <>
         {courts.map(court => (
            <div>
                <h2>{court.park}</h2>
                <h2>{court.neighborhood}</h2>
                <h2>{court.street}</h2>
                <h3>{court.notes}</h3>
            </div>
         ))}   
            <div>Court</div>
        </>
  )
}

//add Links later on ??

export default Court