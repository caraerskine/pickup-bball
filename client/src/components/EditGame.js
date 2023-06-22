import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user'
import { useNavigate, useParams } from 'react-router-dom'


function EditGame() {
    const { id } = useParams()   
    const {patchGame, user, setUser, errors} = useContext(UserContext)
    const navigate = useNavigate()
    const obj = {
        time: "", 
        bring_ball: "", 
        skill_level: "", 
        contact_info: "",
        id: id
    }
    const [myGame, setMyGame] = useState(obj)

    useEffect(() => {
      let g = user.games.find((e) => {        
        return e.id == id})

        g ? setMyGame(g) : setMyGame(obj)
    }, [user, id])

    const handleSubmit = (e) => {
        e.preventDefault();
        patchGame(myGame)
        console.log(myGame, "patchGame is happening")
    }

    function updateMyGame(e){
        const { id, value } = e.target;
        setMyGame({...myGame, [id]: value})
    }

    function handleDelete(e){
        e.preventDefault()
        
        fetch(`/games/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok){
                let updatedGames = user.games.filter((game) => {
                    return game.id != id
                })
                setUser({...user, games: updatedGames})
                alert("game deleted!")
                navigate(`/games`)
            }
        })
        
    }

    if (!user){
        return <h3>Please log in to view games</h3>
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
