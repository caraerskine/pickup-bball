import React, { useContext } from 'react'
import { UserContext } from './context/user';
import { NavLink } from 'react-router-dom'

function NavBar() {
    const {user, logout} = useContext(UserContext)

    const logoutUser = () => {
        fetch ('/logout')
        .then(() => {
            logout()
        })
    }

    if (user) {
        return (
            <div>
                <h1>Hello {user.username}</h1>
                <br/>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )          
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
            </div>
        )
    }
}

export default NavBar

//user and logout are in UserContext and that is where they come from
//.then arrow function is empty becasue it is not sending anything back