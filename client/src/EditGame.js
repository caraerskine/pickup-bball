import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/user'
import { CourtsContext } from './context/courts'
import { useNavigate, useParams } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'


function EditGame() {

    const [court, setCourt] = useState("")
    const [editGame, setEditGame] = useState([])
    const params = useParams()
    const [errorsList, setErrorsList] = useState([])
    const {user, loggedIn} = useContext(UserContext)

    useEffect(() => {
        fetch(`/games/${params.id}`)
        .then(response => response.json())
        .then(game => {
            if (!game.errors){
                setEditGame(game)
            } else {
                const errorLis = game.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }, [])

      //either use params.id or remove dependency array was my error


    const {patchGame, deleteGame} = useContext(UserContext)
    const {courts} = useContext(CourtsContext)
    const navigate = useNavigate()
    const userCourt = courts.find(court => court.id === editGame.court_id)

    function handleChange(e){
        setEditGame(currentState => (
            {...currentState, [e.target.name]: e.target.value}
        ))
    }

    function handleDelete(e){
        e.preventDefault()
        fetch(`/games/${params.id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok){
                deleteGame(params.id, userCourt)
            }
        })
        alert("game deleted!")
        navigate(`/games`)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`games/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editGame)
        })
        .then(response => response.json())
        .then(game => {
            if (game.errors){
                const errorLis = game.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            } else {
                patchGame(game)
                alert("game updated!")
            }
        })
    }

    if (!loggedIn){
        return <h3>Please log in to view games.</h3>
    } else {
        return(
            <>
            <form onSubmit={handleSubmit}>
                <h4>Edit game</h4>
                <label>Time: </label>
                <input 
                    type="text"
                    id="time"
                    value={editGame.time}
                    onChange={handleChange}
                    placeholder="i.e., 2:00 pm"  
                /> <br/>
                <label>Bring a basketball?</label>
                <select
                    id="bring_ball"
                    value={editGame.bring_ball}
                    onChange={handleChange}>
                <option value={"true"}>true</option>
                <option value={"false"}>false</option>
                </select><br/>
                <br/>
                <label>Skill Level: </label>
                <input 
                    type="text"
                    id="skill_level"
                    value={editGame.skill_level}
                    onChange={handleChange}
                    placeholder="1-10 skill level"
                /> <br/>
                <label>Contact Info:</label>
                <input 
                      type="text"
                      id="contact_info"
                      value={editGame.contact_info}
                      onChange={handleChange}
                      placeholder="phone number"
                />
                <label>Court:</label>
                <select
                    // type="text"
                    id="court"
                    value={editGame.court}
                    onChange={(e) => setCourt(e.target.value)}>
                        <option value={court}>Choose court</option>
                </select><br/>
                <br/>
                <br/>
                <button type="submit">Save game</button>
                <button onClick={handleDelete}>Delete game</button>
            </form>
            {errorsList}
            {/* <NavLink to={`/games`}>Back to Games</NavLink> */}
            </>
        )
    }
}

export default EditGame

//line 55 used to have ,userCourt after params.id idfk