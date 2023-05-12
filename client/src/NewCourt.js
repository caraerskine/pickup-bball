import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
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
            <form onSubmit={handleSubmit}>
            


            </form>    
            </>
        )



}





export default NewCourt