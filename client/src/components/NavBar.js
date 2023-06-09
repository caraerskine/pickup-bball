import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { NavLink, useNavigate } from 'react-router-dom'


function NavBar() {
    const {user, logout} = useContext(UserContext)
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

    if (user) {
        return (
            <div>
                <h2>Hello {user.username} </h2>
                <h4>Click "Logout" to logout</h4>
                <h4>Click "Games" to see all your basketball games</h4>
                <h4>Click "All Courts" to see all the basketball courts and add a new court or a game</h4>
                <p>🗽🍎🏀</p>
                <br/>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to='/games'>
                    <button>Games</button>
                </NavLink>
                <NavLink to='/courts'>
                    <button>All Courts</button>
                </NavLink>
            </div>
        )          
    } else {
        return (
            <div>
                <h3>Welcome to the NYC Hoop Scheduler🗽🍎🏀</h3>
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

