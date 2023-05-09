import React from 'react'
import { Link } from 'react-router-dom' 
import { useContext } from 'react'
import { UserContext } from './context/user'
import Court from './Court'

function Courts() {

  const { user } = useContext(UserContext)

  if (!user || user.error){

    return <h3>Please login to view courts.</h3>
      } else {
        return (
          <>
          <Link to='/courts/new'>
            <div>Create a new court</div>
          </Link> 
            <Court />
          </>
    )
  }
}

export default Courts

//what is on Courts?
//