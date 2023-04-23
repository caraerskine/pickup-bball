import React, { useState, useContext } from 'react'
import { UserContext } from './context/user';
import { useNavigate} from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch ('/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    password_confirmation: passwordConfirmation
                })
        })
        .then(response => response.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }
        })
    }

//config object in the {} 
//not a get request, so we have to get the mthod and header
//fetch to the back end
//post the users information
//what i get back should be a User if the validations are passed
//setting them to blank so you can retry in line 28-30
//sent the information to the backend from the form 16-19 (body)
//sending it to signup (create) in the user route
//if no erros want to sign up the user
//handle in the back end and the front end
//signuip the user comes from context in user.js in the signup function

    return (
    <div className="signup-form">
        <h2></h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input 
                type="text" 
                id="name"
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
          <label>Confirm Password:</label>
          <input 
                type="password" 
                id="password_confirmation"
                value={passwordConfirmation} 
                onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br></br>
          <br></br>
          <input type="submit"/>
          </form>
            <ul>
                {errorsList}
            </ul>
    </div>
    )

}

export default SignUp;

//bcrypt will check via authroize that password and pasword conf are the same