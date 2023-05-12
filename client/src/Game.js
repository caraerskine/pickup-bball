import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/user'
import { useParams, NavLink } from 'react-router-dom'

function Game() {

    const {user} = useContext(UserContext)
    const params = useParams()

    

  return (
    <div>Game</div>
  )
}

export default Game