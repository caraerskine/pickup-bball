import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'



function Login(){
  const [form, setForm] = useState({
    username: "",
    password: ""
})
 
  const {fetchUser, loginError} = useContext(UserContext);

  const handleUpdate = (e) => {
    setForm({...form, [e.target.id]: e.target.value})
  }

  const login = (e) => {
    e.preventDefault()
    fetchUser('/login', 'POST', form)
}

    return (
    <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={(e) => login(e)}>
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
          <input type="submit"/>
          </form>
            <ul>
                {loginError}
            </ul>
    </div>

    )
}


export default Login