import React, { useContext } from 'react'
import { UserContext } from './context/user'

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return(
            <div>
                <h3>{user.username}'s Home Page</h3>
            </div>
        )
    } else {
        return (<h3>Please Login or Signup</h3>)
    }
}

export default Home

//Nancy video example Home page that shows up after you login
//or is what shows up when you are not logged in

//when you login you get to