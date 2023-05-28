// import { useState, useEffect, useContext } from 'react'
// import { useParams, Link, useNavigate } from 'react-router-dom'
// import { UserContext } from './context/user'

// // const courtObj = {
// //     park: "",
// //     neighborhood: "",
// //     street: "",
// //     notes: ""
// // }

// function EditCourt(){
//     // const [editedCourt, setEditedCourt] = useState([])
//     const params = useParams()
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const { patchCourt, user, setUser, errors } = useContext(UserContext)
//     const courtObj = {
//         park: "",
//         neighborhood: "",
//         street: "",
//         notes: "",
//         id: id
// }

// const [myCourt, setMyCourt] = useState(courtObj)

//     useEffect(() => {
//        let c = user.court.find((e) => {
//             console.log(typeof(e.id))

//             return e.id == id})

//             c ? setMyCourt(c) : setMyCourt(courtObj)
//        }, [user, id])
    
//     // function handleChange(e){
//     //     setEditedCourt((currentCourtState)=>(
//     //         {...currentCourtState, [e.target.id]: e.target.value}
//     //     ))
//     // }

//     function handleSubmit(e) {
//         e.preventDefault();
//         patchCourt(myCourt)
//         console.log(myCourt, "editCourt is happening")
//     }

//     function updateMyCourt(e) {
//         console.log(e, "e")
//         const { id, value } = e.target;
//         setMyCourt({...myCourt, [id] : value})
//     }

//     //     fetch(`/courts/${params.id}`, {
//     //         method: "PATCH",
//     //         headers: {"Content-Type": "application/json"},
//     //         body: JSON.stringify(editedCourt)
//     //     })
//     //     .then(response => response.json())
//     //     .then(court => {
//     //         if (!court.errors){
//     //             editCourt(court)
//     //             alert("court data updated!")
//     //             navigate(`/courts`)
//     //         } else {
//     //             const errorLis = court.errors.map(error => <li>{ error }</li>)
//     //             setErrorsList(errorLis)
//     //         }
//     //     })
//     // }

//     if (!user){
//         return <h3>Please login to view Courts</h3>
//     }

//     if (myCourt === null) {
//         return <p>Loading...</p>
//     }
    
//     return(
//         <form onSubmit={handleSubmit}>
//             <h4>Edit court</h4>
//         <label>Park: </label>
//         <input 
//             type="text"
//             id="park"
//             value={myCourt.park}
//             onChange={updateMyCourt}
//         /> <br/>
//         <label>Neighborhood: </label>
//         <input
//             type="text"
//             id="neighborhood"
//             value={myCourt.neighborhood}
//             onChange={updateMyCourt}
//         /><br/>
//         <label>Street: </label>
//         <input 
//             type="text"
//             id="street"
//             value={myCourt.street}
//             onChange={updateMyCourt}
//         /> <br/>
//         <label>Notes: </label>
//         <input 
//             type="text"
//             id="notes"
//             value={myCourt.notes}
//             onChange={updateMyCourt}
//         /> <br/>
//         <button type="submit">Save edited court</button>

//                 {errors.map((error, index) => (
//                     <p key={index} className="errors">
//                   {error}
//                 </p>
//                 ))}
//     </form>
//   )
// }




// export default EditCourt