import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
//update to navlink later i think
import { CourtsContext } from './context/courts'

function NewCourt(){

        const initNewCourt = {
            park: "",
            neighborhood: "",
            street: "",
            notes: ""
        }

        const [newCourt, setNewCourt] = useState(initNewCourt)
        const {addCourt} = useContext( CourtsContext )
        const [errorsList, setErrorsList] = useState("")

        function handleChange(e){
            setNewCourt((currentCourtState)=> (
                {...currentCourtState, [e.target.name]: e.target.value}               
            ))
        }


        function handleSubmit(e){
            e.preventDefaut()
            const formData = {
                park: newCourt.park,
                neighborhood: newCourt.neighborhood,
                street: newCourt.street,
                notes: newCourt.notes,
            }
            fetch ('/courts', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(court => {
                if (!court.errors){
                    addCourt(court)
                    alert("new court data created!")
                    setNewCourt(initNewCourt)
                } else {
                    const errorLis = court.errors.map(error =><li>{error}</li>)
                    setErrorsList(errorLis)
                }
            })
        }

        return(
            <>
            Add a new court 🏀
            <form onSubmit={handleSubmit}>
            <label>Park: </label>
            <input 
                type="text"
                id="park"
                value={newCourt.park}
                onChange={handleChange}
            /> <br/>
            <label>Neighborhood: </label>
            <input
                type="text"
                id="neighborhood"
                value={newCourt.neighborhood}
                onChange={handleChange}
            /><br/>
            <label>Street: </label>
            <input 
                type="text"
                id="street"
                value={newCourt.street}
                onChange={handleChange}
            /> <br/>
            <label>Notes: </label>
            <input 
                type="text"
                id="notes"
                value={newCourt.notes}
                onChange={handleChange}
            /> <br/>
            <button type="submit"> Submit changes</button>
        </form>
            {errorsList}
            <br/>
            <NavLink to='/courts'>Back to all courts</NavLink>
            </>
    )
}





export default NewCourt