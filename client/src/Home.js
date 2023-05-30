import React, { useContext } from 'react'
import { UserContext } from './context/user'

function Home() {
    const { user, autoLoginError } = useContext(UserContext)

    if (user) {
        return(
            <div>
                <h3>{user.username}'s Home Page</h3>
            </div>
        )
    } 
        
    return (
        <ul>
            <h4>Please login to see your games!</h4>
            {autoLoginError}
        </ul>
    )
    
}

export default Home



//Nancy video example Home page that shows up after you login
//or is what shows up when you are not logged in

//when you login you get to