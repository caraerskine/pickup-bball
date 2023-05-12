import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { CourtsContext } from './context/courts'

function EditCourt(){

    const [editedCourt, setEditedCourt] = useState([])
    const [errorsList, setErrorsList] = useState("")
    const params = useParams()
    const navigate = useNavigate()
    const { editCourt } = useContext(CourtsContext)

    useEffect(() => {
        fetch(`/courts/${params.id}`)
        .then(response => response.json())
        .then(response => setEditedCourt(response))
    }, [])

    function handleChange(e){
        setEditedCourt((currentCourtState)=>(
            {...currentCourtState, [e.target.name]: e.target.value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/courts/${params.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editedCourt)
        })
        .then(response => response.json())
        .then(court => {
            if (!court.errors){
                editCourt(court)
                alert("court data updated!")
                navigate(`/courts`)
            } else {
                const errorLis = court.errors.map(error => <li>{ error }</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return(
        <>
        edit court
        <form onSubmit={handleSubmit}>
        <label>Park: </label>
        <input 
            type="text"
            id="park"
            value={editedCourt.park}
            onChange={handleChange}
        /> <br/>
        <label>Neighborhood: </label>
        <input
            type="text"
            id="neighborhood"
            value={editedCourt.neighborhood}
            onChange={handleChange}
        /><br/>
        <label>Street: </label>
        <input 
            type="text"
            id="street"
            value={editedCourt.street}
            onChange={handleChange}
        /> <br/>
        <label>Notes: </label>
        <input 
            type="text"
            id="notes"
            value={editedCourt.notes}
            onChange={handleChange}
        /> <br/>
        <button type="submit"> Save changes to court</button>
    </form>
        {errorsList}
        <br/>
        <Link to='/courts'>Back to all courts</Link>
        </>
  )
}




export default EditCourt