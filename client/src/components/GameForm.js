import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'


function GameForm(){
    const [time, setTime] = useState("")
    const [ball, setBall] = useState(false)
    const [skill, setSkill] = useState("")
    const [contact, setContact] = useState("")
    const { id } = useParams()
    console.log(id)
    const { user, addGame, errors } = useContext(UserContext)

    console.log(user.courts_uniq, "what is user")

    const handleSubmit = (e) => {
        console.log(id, "court id")
        e.preventDefault();
        addGame({
            time: time,
            bring_ball: false,
            skill_level: skill,
            contact_info: contact,
            court_id: id,
            user_id: user.id
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <label>Time: </label>
        <input 
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="i.e., 2:00 pm"  
        /> <br/>
        <br/>
        <label>Bring a basketball? </label>
        <select
            id="bring_ball"
            value={ball}
            onChange={(e) => setBall(e.target.value === "true")}>
                <option value={"true"}>true</option>
                <option value={"false"}>false</option>
        </select><br/>
        <br/>
        <label>Skill Level: </label>
        <input 
            type="text"
            id="skill_level"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="1-10, 10 being best"
        /> <br/>
        <br/>
        <label>Contact Info: </label>
        <input 
            type="text"
            id="contact_info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="phone number"
        />  <br/>
        <br/>
        <br/>
        <button type="submit">Save game</button>

        {errors.map((error, index) => (
        <p key={index} className="errors">
          {error}
        </p>
      ))}
    </form>
  )
}

export default GameForm

