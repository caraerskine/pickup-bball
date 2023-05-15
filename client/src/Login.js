import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

//important
//check routing on Login and where it navigates to line 27

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {login} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch ('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
          if (response.ok){
            response.json().then(user => {
              login(user)
              navigate('/games')
            })
          } else {
            response.json().then(error => {
              console.log(error.error, "potato")
              setUsername("")
              setPassword("")
              setError(error.error)
            })
          }
            //is this right? should it be directed to this route?
            //when "user" logs in, should it go to /games
        //   } else {
        //   }
        // })
        })
      }

    return (
    <div className="login-form">
        <h2></h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input 
                type="text" 
                id="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
        />
          <br></br>
          <br></br>
          <label>Password:</label>
          <input 
                type="password" 
                id="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <input type="submit"/>
          </form>
            <ul>
                <h3>{error}</h3>
            </ul>
    </div>

    )
}


export default Login