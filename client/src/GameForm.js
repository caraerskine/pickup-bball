import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'

//fix "bring_ball" dropdown like the spelling bee dropdown
//make sure "id" is good in each input

function GameForm(){
    const [time, setTime] = useState("")
    // const [ball, setBall] = useState("")
    const [skill, setSkill] = useState("")
    const [contact, setContact] = useState("")
    const { addGame } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({
            time: time,
            // bring_ball: ball,
            skill_level: skill,
            contact_info: contact
        })
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Time: </label>
        <input 
            type="text"
            id="name"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        /> <br/>
         {/* <input 
            type="boolean"
            id="dropdown"
            value={ball}
            onChange={(e) => setTime(e.target.value)}
        /> <br/> */}
         <input 
            type="text"
            id="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
        /> <br/>
        <input 
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
        /> <br/>
        <input type="submit"/>
    </form>
  )
}

export default GameForm