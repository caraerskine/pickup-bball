import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from './context/user'
// import { CourtsContext } from './context/courts'
import { useNavigate, useParams } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'


function EditGame() {
    // const [court, setCourt] = useState("")
    // const [editGame, setEditGame] = useState([])
    const {id} = useParams()   
    const params = useParams()
    const [editTime, setEditTime] = useState("")
    const [editBall, setEditBall] = useState(false)
    const [editSkill, setEditSkill] = useState("")
    const [editContact, setEditContact] = useState("")
    // const [errorsList, setErrorsList] = useState([])
    const {patchGame, user, loggedIn, deleteGame, errors} = useContext(UserContext)
    // const {courts} = useContext(CourtsContext)
    const navigate = useNavigate()
    // const userCourt = courts.find(court => court.id === editGame.court_id)


//pass user down from global state aka useContext

    console.log(user, "user data")

    //added a handleSubmit because it was missing
    const handleSubmit = (e) => {
        e.preventDefault();
       patchGame({
            time: editTime,
            bring_ball: false,
            skill_level: editSkill,
            contact_info: editContact,
            court_id: id,
            user_id: user.id
        })
        console.log(patchGame, "patchGame is happening")
    }




    //commented out useEffect because I do not think I need it here 
    // useEffect(() => {
    //     (console.log("useEffect for EditGame '/games/:id'"))
    //     fetch(`/games/${params.id}`)
    //     .then(response => response.json())
    //     .then(game => {
    //         if (!game.errors){
    //             setEditGame(game)
    //         } else {
    //             const errorLis = game.errors.map(error => <li>{error}</li>)
    //             setErrorsList(errorLis)
    //         }
    //     })
    // }, [])

      //either use params.id or remove dependency array was my error

    //fix first
      //state for every value like you did on GameForm
      //completely separate form from GameForm
      //need onChange like I did on GameForm 
      //i don't think i need a fetch here?
      //the PATCH does not work so you get 404


    //comment this out and make it a one line function
    // function handleChange(e){
    //     setEditGame(currentState => (
    //         {...currentState, [e.target.name]: e.target.value}
    //     ))
    // }

    function handleDelete(e){
        e.preventDefault()
        fetch(`/games/${params.id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok){
                deleteGame(params.id)
            }
        })
        alert("game deleted!")
        navigate(`/games`)
    }

//userCourt was on line 85 after params.id, but idfk I took it out and i commented out that state for it)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     editGame({
    //         time: time,
    //         bring_ball: false,
    //         skill_level: skill,
    //         contact_info: contact,
    //         court_id: id,
    //         user_id: user.id
    //     })
    //     console.log(editGame, "editGame is happening")



//i put the PATCH in user.js
        // fetch(`games/${params.id}`,{
        //     method: "PATCH",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(editGame)
        // })
        // .then(response => response.json())
        // .then(game => {
        //     if (game.errors){
        //         const errorLis = game.errors.map(error => <li>{error}</li>)
        //         setErrorsList(errorLis)
        //     } else {
        //         patchGame(game)
        //         alert("game updated!")
        //     }
        // })

    if (!loggedIn){
        return <h3>Please log in to view games.</h3>
    } else {
        return ( 
            <form onSubmit={handleSubmit}>
                <h4>Edit game</h4>
                <label>Time: </label>
                <input 
                    type="text"
                    id="time"
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                    placeholder="i.e., 2:00 pm"  
                /> <br/>
                <label>Bring a basketball?</label>
                <select
                    id="bring_ball"
                    value={editBall}
                    onChange={(e) => setEditBall(e.target.value === "false")}>
                        <option value={"true"}>true</option>
                        <option value={"false"}>false</option>
                </select><br/>
                <br/>
                <label>Skill Level: </label>
                <input 
                    type="text"
                    id="skill_level"
                    value={editSkill}
                    onChange={(e) => setEditSkill(e.target.value)}
                    placeholder="1-10 skill level"
                /> <br/>
                <label>Contact Info:</label>
                <input 
                      type="text"
                      id="contact_info"
                      value={editContact}
                      onChange={(e) => setEditContact(e.target.value)}
                      placeholder="phone number"
                />
                {/* <label>Court:</label>
                <select
                    // type="text"
                    id="court"
                    value={editGame.court}
                    onChange={(e) => setCourt(e.target.value)}>
                        <option value={court}>Choose court</option>
                </select><br/> */}
                <br/>
                <br/>
                <button type="submit">Save edited game</button>
                <button onClick={handleDelete}>Delete game</button>
                
                {errors.map((error, index) => (
                <p key={index} className="errors">
                  {error}
                </p>
                ))}
            </form>
        )
    }
}
export default EditGame

//line 55 used to have ,userCourt after params.id idfk