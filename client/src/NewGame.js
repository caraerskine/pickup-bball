import { useState, useEffect, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'

//change to Navlink later
//is this the same as GameForm??
//Games_b and this NewGame go together but they might be repeating

function NewGame() {

    const initNewGame = {
        time: "",
        bring_ball: "",
        skill_level: "",
        contact_info: ""
    }

    const [newCourt, setNewCourt] = useState([])
    const [errorsList, setErrorsList] = useState([])
    const { user, addGame } = useContext(UserContext)
    const params = useParams()
    const [newGame, setNewGame] = useState(initNewGame)

    useEffect(() => {
        fetch(`/courts/${params.id}`)
        .then(response => response.json())
        .then(response=>setNewCourt(response))
    }, [])

    function handleChange(e){
        setNewCourt((currentCourt) => (
            {...currentCourt, [e.target.name]: e.target.value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()

        const formData = {
            time: newGame.time,
            bring_ball: newGame.bring_ball,
            skill_level: newGame.skill_level,
            contact_info: newGame.contact_info,
            court_id: params.id,
            user_id: user.id
        }

        fetch(`/games`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(game => {
            if (!game.errors){
                addGame(game)
                setNewGame(initNewGame)
                alert("Game added!")
            } else {
                const errorLis = game.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add new game at {newCourt.park}</h4>
            <label>Time:</label>
            <input
                type="text"
                name="time"
                value={newGame.time}
                onChange={handleChange}
                placeholder="bbb"            
            />
            <br/>
            <label>Bring a Ball?</label>
            <select
                id="bring_ball"
                value={newGame.bring_ball}>
                onChange={handleChange}
                <option>true</option>
                <option>false</option>
            </select><br/>
            <label>Skill Level:</label>
            <input 
                type="text"
                id="skill level"
                value={newGame.skill_level}
                onChange={handleChange}
                placeholder="bbb"
            /> <br/>
            <label>Contact Info:</label>
            <input
                type="text"
                id="contact_info"
                value={newGame.contact}
                onChange={handleChange}
                placeholder="bbb"
            /> <br/>
            <button type="submit">Save game</button>
        </form>
    )
}



// export default NewGame