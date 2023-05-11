import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { CourtsContext } from './context/courts'

function EditCourt(){

    const [editedCourt, setEditedCourt] = useState([])
    const [errorsList, setErrorsList] = useState("")
    const params = useParams()
    const history = useHistory()
    const {editCourt} = useContext(CourtsContext)

    useEffect(() => {
        fetch(`/courts/${params.id}`)
        .then(response => response.json())
        .then(response => setEditedCourt(response))
    }, [])

    function handleChange(e){
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
                history.push(`/courts`)
            } else {
                const errorLis = court.errors.map(error => <li>{ error }</li>)
                setErrorsList(errorsLis)
            }
        })
    }

    return(
        <>
        edit court
        <form onSubmit={handleSubmit}>






            
        </form>
        
        
        
        
        
        






        
        </>
    )







}


















export default EditCourt