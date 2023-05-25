import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { CourtsContext } from './context/courts'
import { UserContext } from './context/user'

//const editCourt = (editedCourt) => {
//    const updatedCourts = courts.map(court => court.id === editedCourt.id ? editedCourt : court)
//    setCourts(updatedCourts)
//}

//from CourtsContext ^ addCourt cb fn

const courtObj = {
    park: "",
    neighborhood: "",
    street: "",
    notes: ""
}

function EditCourt(){
    const [editedCourt, setEditedCourt] = useState([])
    const [errorsList, setErrorsList] = useState("")
    // const [errors, setErrors] = useState([])
    const params = useParams()
    const { id } = useParams()
    const navigate = useNavigate()
    const { editCourt } = useContext(CourtsContext)

    useEffect(() => {
        (console.log("useEffect for EditCourt '/courts/:id'"))
        fetch(`/courts/${params.id}`)
        .then(response => response.json())
        .then(response => setEditedCourt(response))
    }, [params.id])
    
    //manage state for each field
    //either use params.id or remove dependency array was my error, why is it saying that?

    function handleChange(e){
        setEditedCourt((currentCourtState)=>(
            {...currentCourtState, [e.target.id]: e.target.value}
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
        <br/>
        Edit court
        <br/>
        <br/>
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
        <button type="submit"> Save changes</button>
    </form>
        {errorsList}
        <br/>
        <Link to='/courts'>Back to all courts</Link>
        </>
  )
}




export default EditCourt