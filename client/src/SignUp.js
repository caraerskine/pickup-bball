import React, { useState, useContext } from 'react'
import { UserContext } from './context/user';

function SignUp() {

    const [form, setForm] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    const {fetchUser, signUpError} = useContext(UserContext);


    const handleUpdate = (e) => {
        setForm({...form, [e.target.id]: e.target.value})
    }

    const signUp = (e) => {
        e.preventDefault()
        fetchUser('/signup', 'POST', form)
    }
  
    return (
    <div className="signup-form">
        <h2>Sign-up</h2>
        <form onSubmit={(e) => signUp(e)}>
            <label>Username:</label>
            <input 
                type="text" 
                id="username"
                value={form.username} 
                onChange={handleUpdate}
        />
          <br></br>
          <br></br>
          <label>Password:</label>
          <input 
                type="password" 
                id="password"
                value={form.password} 
                onChange={handleUpdate}
          />
          <br></br>
          <br></br>
          <label>Confirm Password:</label>
          <input 
                type="password" 
                id="password_confirmation"
                value={form.password_confirmation} 
                onChange={handleUpdate}
          />
          <br></br>
          <br></br>
          <input type="submit"/>
          </form>
            <ul>
                {signUpError}
            </ul>
    </div>
    )

}

export default SignUp;

//bcrypt will check via authroize that password and pasword conf are the same