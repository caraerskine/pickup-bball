//src/context/user.js
import React, { useState, useEffect } from 'react'

//create context
const UserContext = React.createContext();

//create a provider component
function UserProvider({ children } ) {
    const [user, setUser] = useState({})
    //set useState to an empty object u r going to 'get'
    //user IS an object

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
    }, [])
//empty dependency array to get user on mount and establish who user is
//run this set the user in here
//fetch the games for that user too (later on)
//hit /me get the user
//in the value returnt he user


    return (
        <UserContext.Provider value={{}}>
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