import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'

//aka EditSighting(?)
//my use Effect for this is in -- ? user.js so it is in UseContext so hmmm
//old
//also made a NewGame which might be duplicate to GameForm

function GameForm(){
    const [time, setTime] = useState("")
    const [ball, setBall] = useState(false)
    const [skill, setSkill] = useState("")
    const [contact, setContact] = useState("")
    const [court, setCourt] = useState("")
    const params = useParams()
    const { user, addGame, errors } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({
            time: time,
            bring_ball: ball,
            skill_level: skill,
            contact_info: contact,
            // court: court,
            court_id: 5
            // user_id: user.id
        })
        addGame()
        console.log(addGame, "addGame is happening")
    }

//addGame tells global state there is a new command in the back end and put it in global state
//addGame is a function in user.js where the POST is 
//I see it in my Network tab when I look at where it is 
//so I think it is working
//but somehow is it like I am not showing it after it actually works 
//is that the problem

//this form IS rendering but when I click save game i get an "unprocessable entity error" 422

  return (
    //print errors
    <form onSubmit={handleSubmit}>
        <h4>Add new game</h4>
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
            placeholder="1-10 skill level"
        /> <br/>
        <br/>
        <label>Contact Info: </label>
        <input 
            type="text"
            id="contact_info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="phone number"
        /> 
        <label>Court: </label>
        <input 
            type="text"
            id="court"
            value={court}
            onChange={(e) => setCourt(e.target.value)}
            placeholder="i.e., Brower"
        /> 
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

//you can fill it out but it does not save the game
//This button is not doing anything
//WHY because your button type submit is an empty action

//what steps do i need to take to make that action come alive?

//Button does not submit
//on the button being "clicked" you need to POST the game
//why is that not happening
//the post is not connected to the button
// i think the handle change is working just not the handle submit

//bring a basketball boolean not working