//src/context/user.js
import React, { useState, useEffect, useParams } from 'react'

//create context
const UserContext = React.createContext();

//create a provider component
function UserProvider( { children } ) {
    const [user, setUser] = useState({
        courts: [],
        games: []
    })
    //set useState to an empty object u r going to 'get'
    //user IS an object
    // const {id} = useParams()   
    // const params = useParams()
    const [loggedIn, setLoggedIn] = useState (false) //add loggedIn status
    const [games, setGames] = useState([])
    const [errors, setErrors] = useState([])
    const [courts, setCourts] = useState([])

    console.log(games, "what is games")

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => {
            // debugger
            console.log(data, "in the fetch of '/me'")
            if (data.errors) {
                setLoggedIn(false)
            } else {
                // console.log(data)
                setUser(data)
                setLoggedIn(true)
                setGames(data.games)
                // fetchGames()
            } 
        })
    }, [])

//useEffect   
//empty dependency array to get user on mount and establish who user is
//run this set the user in here
//fetch the games for that user too (later on)
//hit /me get the user
//in the value return the user
//the user is held in state, if the user changes we know about it

//useEffect - when i refresh the page
//hit the me route, checks user show to see if there is a user n the session hash
//returns a user or an error
//set the user in state 
//setLogged in becomes true or false depending on the obejct you get back

    //send nested json, get the user and their games instead
    //then you'd delete the fetchGames from Login and Signup

    // const fetchGames = () => {
    //     fetch('/games')
    //     .then(response => {
    //         if (response.ok){
    //             response.json().then(data => {
    //                 console.log(data, "new data")
    //                 setGames(data)
    //         })            
    //     } else {
    //         response.json().then(error => {
    //             console.log(error, "new error")
    //         })
    //     }
    //     // .then(data => {
    //     //     console.log("game data", data)
    //     //     setGames(data)
    //     })
    // }

   



//I call addGame in the GameForm component to trigger this POST when I want the user to post
const addGame = (game) => {
    // debugger
 fetch('/games', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(game)
 })       
    .then(response => response.json())
    .then(data => {
        if (data.errors) {
            console.log(data, "gucci")
            const errorLis = data.errors.map((e) => <li>{e}</li>);
            setErrors(errorLis);
    } else {    
        console.log(data, "new with maika")
        setGames([...games, data])
        alert("Game added!")
        setErrors([])
    }}) 
    console.log(games, "in the POST")
}
//clear the errors once it is successful
//all games and the new one aka data w/spread operator
//post it after I stringify it and then add it to the existing games
//coming from GameForm


//Cara's new patchGame that looks like addGame, trying to call this in EditGame component
//so the game can be edited and it can be saved to the db
const patchGame = (editGame) => {
    // debugger
    //URL after /games/ in line 115 is not right idk why
    fetch(`/games/${games.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editGame)
    })
    .then(response => response.json())
    .then(editGameData => {
        if (editGameData.errors){
            console.log(editGameData, "new edited game today")
            const errorLis = editGameData.errors.map(error => <li>{error}</li>)
            setErrors(errorLis);
        } else {
            console.log(editGameData, "new one I made today")
            patchGame([...games, editGameData])
            alert("game updated!")
            setErrors([])
        }})
        console.log(games, "in the PATCH")
}
//do i need to be taking in the event as an argument on line 109 
//can i have patch game in line 121
//is there anything called setErrorsList (line 118) I changed it to setErrors

//old patchGame fn no fucking idea 
//i don't think I need it 
// const patchGame = (patchedGame) => {
//     const updatedGames = user.games.map(game => game.id === patchedGame.id ? patchedGame : game)
//     const updatedUser = {...user}
//     updatedUser.games = updatedGames
//     setUser(updatedUser)
// }

//old deleteGame fn
// const deleteGame = (deletedGameId, userCourt) => {
//     const updatedGames = user.games.filter(game => game.id !== deletedGameId)
//     const updatedUser = {...user}
//     updatedUser.games = updatedGames
//     if((userCourt.games.find(game => game.user_id === user.id)) === undefined){
//         const updatedCourts = updatedUser.courts_uniq.filter(court => court.id !== userCourt.id)
//         console.log(updatedCourts)
//         updatedUser.courts_uniq = updatedCourts
//         setUser(updatedUser)
//     } else {
//         setUser(updatedUser)
//     }
// }


//new Delete game fn
//does this make any sense
function deleteGame(deletedGameId) {
    const updatedGame = games.filter((g) => g.id !== deletedGameId.id)
    setGames(updatedGame)

    const updatedCourts = courts.map((c) => {
        if (c.id === deletedGameId.court_id) {
            return {
                ...c,
                games: c.games.filer((g) => g.id !== deletedGameId.id)
            }
        } else {
            return c
        }
    })
        setCourts(updatedCourts)
}


//useContext makes anything in user.js makes usecontext hook let you pass it
//combine Courts with user.js 


const login = (user) => {
    setUser(user)
    // fetchGames()
    setLoggedIn(true)
} 

const logout = () => {
    setUser({})
    setGames([])
    setLoggedIn(false) //loggedIn now becomes false
}

const signup = (user) => {
    setUser(user)
    // fetchGames()
    setLoggedIn(true) //becomes true as they signed up
}
//setUser in state ^
//who needs acess to global state


    return (
        //loggedIn is now part of global state
        //component just needs to check logged in, t or f
        <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, games, addGame, patchGame, deleteGame, errors}}>
            {children}
        </UserContext.Provider>

    );
}

export { UserContext, UserProvider };

//any child that needs access to global state i can pass here
//nancy video auth in rails if u need
//parents and children
//global state
//wrap any component that needs acces to global state we wrap in consumer 

//good to put useContext in global state 
//refresh the page the context gets refreshed
//fetch to /me we come to user.js 

//global state can be handled internally in react w useContext