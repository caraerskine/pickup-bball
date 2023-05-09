import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'

//fix "bring_ball" dropdown like the spelling bee dropdown
//make sure "id" is good in each input

function GameForm( ){
    const [time, setTime] = useState("")
    const [ball, setBall] = useState("")
    const [skill, setSkill] = useState("")
    const [contact, setContact] = useState("")
    const { addGame } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({
            time: time,
            bring_ball: ball,
            skill_level: skill,
            contact_info: contact
        })
        addGame()
    }
    //addGame tells global state there is a new command in the back end and put it in global state

  return (
    <form onSubmit={handleSubmit}>
        <label>Time: </label>
        <input 
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        /> <br/>
        <label>Bring Ball? </label>
        <select
            id="bring_ball"
            value={ball}
            onChange={(e) => setBall(e.target.value)}>
                <option>true</option>
                <option>false</option>
        /</select><br/>
        <label>Skill Level: </label>
        <input 
            type="text"
            id="skill_level"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
        /> <br/>
        <label>Contact Info: </label>
        <input 
            type="text"
            id="contact_info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
        /> <br/>
        <input type="submit"/>
    </form>
  )
}

export default GameForm