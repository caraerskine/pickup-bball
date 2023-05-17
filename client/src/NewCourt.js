import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CourtsContext } from './context/courts'


//will need a variable in App called onAddCourt I think and pass it down here?
//or usecontext and user context will do that for me?

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

        function handleSubmit(e) {
            e.preventDefault();
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
                defaultValue={newCourt.park}
                onChange={handleChange}
                placeholder="i.e., Palisades"  
            /> <br/>
            <label>Neighborhood: </label>
            <input
                type="text"
                id="neighborhood"
                defaultValue={newCourt.neighborhood}
                onChange={handleChange}
                placeholder="i.e., Crown Heights"  
            /><br/>
            <label>Street: </label>
            <input 
                type="text"
                id="street"
                defaultValue={newCourt.street}
                onChange={handleChange}
                placeholder="i.e., 22nd St."  
            /> <br/>
            <label>Notes: </label>
            <input 
                type="text"
                id="notes"
                defaultValue={newCourt.notes}
                onChange={handleChange}
                placeholder="i.e., NE end of park by subway stop"  
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