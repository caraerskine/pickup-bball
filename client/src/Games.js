import React, {useState, useContext} from 'react'
import {Route, useParams} from 'react-router-dom'
import { UserContext } from './context/user'
// import GameForm from ''./GameForm'

function Games() {
    const {} = useContext(UserContext);
    //she has formFlag state here idk if u want it
    const params = useParams();

  return (
    <div>Games:</div>
  )
}


export default Games

//min 33:46 in Sample Build video not sure
//she has GameLinks and Game as well so idk 