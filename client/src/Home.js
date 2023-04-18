import React, { useContext } from 'react'
import { UserContext } from './context/user'

function Home() {
    const { user } = useContext(UserContext)

    if (!user || user.error) {
        return (<h3>Please Login or Sign-up</h3>)
    } else {
        return (
            <div>
                {/* <h3>{ user.username } Home</h3> */} 
            </div>
        )
    }
}

export default Home

//useContext

//UserContext

//look these up