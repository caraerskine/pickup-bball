import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/user'

function Courts() {

  const { user } = useContext(UserContext)

  if (!user || user.error){
    return <h3>Please login to view courts.</h3>
      } else {
        return (
         <>
          <Link to= '/courts/new'>
            <div>Courts</div>
          </Link> 
          <Court />
          </>
    )
  }
}

export default Courts

//what is on Courts?
//