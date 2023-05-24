import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/user'
import { useNavigate, useParams } from 'react-router-dom'

const obj = {
    time: "", 
    bring_ball: "", 
    skill_level: "", 
    contact_info: ""
}

function EditGame() {
    const { id } = useParams()   
    const params = useParams()
    const {patchGame, user, setGames, games, loggedIn, errors} = useContext(UserContext)
    const navigate = useNavigate()
    const [myGame, setMyGame] = useState(obj)

    useEffect(() => {
      let g = games.find((e) => {
        console.log(typeof(e.id))
        return e.id == id})
        
        console.log(g, "igor")
        console.log(games, "chat")
        console.log(id, "bot")
        console.log(typeof(id))
        g ? setMyGame(g) : setMyGame(obj)
    }, [user, id])

    const handleSubmit = (e) => {
        e.preventDefault();
        patchGame(myGame)
        console.log(patchGame, "patchGame is happening")
    }

    function updateMyGame(e){
        console.log(e, "e")
        const { name, value } = e.target;
        setMyGame({...myGame, [e.target.id]: e.target.value})
    }

    //${params.id} chatGpt is saying just change to id for deleteGame and add a catch
    function handleDelete(e){
        e.preventDefault()
        fetch(`/games/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok){
                let updatedGames = games.filter((game) => {
                    return game.id != id
                })
                setGames(updatedGames)
                alert("game deleted!")
                navigate(`/games`)
            }
        })
        
    }

    if (!loggedIn){
        return <h3>Please log in to view games.</h3>
    } 
    
    if (myGame === null) {
        return <p>Loading...</p>
    }
        return ( 
            <form onSubmit={handleSubmit}>
                <h4>Edit game</h4>
                <label>Time: </label>
                <input 
                    type="text"
                    id="time"
                    value={myGame.time}
                    onChange={updateMyGame}
                    placeholder="i.e., 2:00 pm"  
                /> <br/>
                <label>Bring a basketball?</label>
                <select
                    id="bring_ball"
                    value={myGame.bring_ball}
                    onChange={updateMyGame}>
                        <option value={"true"}>true</option>
                        <option value={"false"}>false</option>
                </select><br/>
                <br/>
                <label>Skill Level: </label>
                <input 
                    type="text"
                    id="skill_level"
                    value={myGame.skill_level}
                    onChange={updateMyGame}
                    placeholder="1-10 skill level"
                /> <br/>
                <label>Contact Info:</label>
                <input 
                      type="text"
                      id="contact_info"
                      value={myGame.contact_info}
                      onChange={updateMyGame}
                      placeholder="phone number"
                />
                {/* <label>Court:</label> */}
                {/* <select
                    // type="text"
                    id="court"
                    value={myGame.court_id}
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
export default EditGame
