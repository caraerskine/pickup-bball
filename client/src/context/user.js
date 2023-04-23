//src/context/user.js
import React, { useState, useEffect } from 'react'

//create context
const UserContext = React.createContext();

//create a provider component
function UserProvider({ children } ) {
    const [user, setUser] = useState(null)
    //set useState to an empty object u r going to 'get'
    //user IS an object
    const [loggedIn, setLoggedIn] = useState (false) //add loggedIn status

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => {
            setUser(data)
            data.error ? setLoggedIn(false) : setLoggedIn(true) //set LoggedIn
        })
    }, [])
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


const login = (user) => {
    setUser(user)
    setLoggedIn(true)
} 

const logout = () => {
    setUser({})
    setLoggedIn(false) //loggedIn now becomes false
}

const signup = (user) => {
    setUser(user)
    setLoggedIn(true) //becomes true as they signed up
}
//setUser in state ^


    return (
        //loggedIn is now part of global state
        //compoenent just needs to check logged in, t or f
        <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
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