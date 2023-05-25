import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import { CourtsContext } from './context/courts'
import { useParams } from 'react-router-dom'

//aka EditSighting(?)
//my use Effect for this is in -- ? user.js so it is in UseContext so hmmm
//old
//also made a NewGame which might be duplicate to GameForm


//aka NewGame

function GameForm(){
    const [time, setTime] = useState("")
    const [ball, setBall] = useState(false)
    const [skill, setSkill] = useState("")
    const [contact, setContact] = useState("")
    const { id } = useParams()
    console.log(id)
    const { user, addGame, errors } = useContext(UserContext)
    const { courts } = useContext(CourtsContext)

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
        console.log(addGame, "addGame is happening")
    }

//drop down for court 
//map over courts like we did in game 
//option tags for all 7 courts
//this shit is insane


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
        <h4>Add new game to {courts.map(court => (
            <div>
                {/* <p>{user.courts_uniq}</p> */}
            </div>
        ))}</h4>
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
            onChange={(e) => setBall(e.target.value === "false")}>
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
        />  <br/>
        <br/>
        {/* <label>Court: </label> */}
        {/* {courts.map(court => (
            <div>
                {court.park}
            </div>
        ))} */}
        {/* <br/> */}
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

//delete game on game form 
//drop down for Court in the game form to show all the available courts

//COURTS
//Read all courts (see them) xx
//Create a court xx
//stretch goals --
//edit a court
//delete a court

//GAMES
//read all games xx
//create a game xx
//delete a game xx
//edit a game xx