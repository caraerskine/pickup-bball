import React, { useState, useEffect} from 'react'

//birds is courts
//courts is birds

const CourtsContext = React.createContext()

function CourtsProvider( {children} ){
    const [courts, setCourts] = useState([])

    useEffect(() => {
        console.log("useEffect for initial fetch for '/courts'")
        fetch('/courts')
        .then(response => {
            if (response.ok){
                response.json().then(data => {
                    console.log(data, "new courts")
                    setTimeout(()=> setCourts(data), 3000)
                    // setCourts(data)
                })
            } else {
                response.json().then(error => {
                    console.log(error, "courts load error")
                })
            } 
        })
    }, [])
//do i need an empty dependency array here ? I put one in


    const editCourt = (editedCourt) => {
        const updatedCourts = courts.map(court => court.id === editedCourt.id ? editedCourt : court)
        setCourts(updatedCourts)
    }

    const addCourt = (addedCourt) => {
        setCourts([...courts, addedCourt])
    }

    return (
        <CourtsContext.Provider value={ {courts, addCourt, editCourt} }>
            { children }
        </CourtsContext.Provider>
    )
}


export {CourtsContext, CourtsProvider}