import React, { useContext } from 'react'
import { UserContext } from './context/user';
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch ('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }
    //takes user out of session hash
    //naviagte to the home

    if (loggedIn) {
        return (
            <div>
                <h1>Hello {user.username}</h1>
                <br/>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to='/games'>
                    <button>Games</button>
                </NavLink>
            </div>
        )          
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
            </div>
        )
    }
}

export default NavBar

//user and logout are in UserContext and that is where they come from
//.then arrow function is empty becasue it is not sending anything back