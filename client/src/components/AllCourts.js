import React from 'react'
import { Link } from 'react-router-dom' 
import { useContext } from 'react'
import { UserContext } from '../context/user'
import MyCourt from './MyCourt'


function Courts() {

  const { user } = useContext(UserContext)

  if (!user){
      return <h3>Please login to view courts.</h3>
  } else {
      return (
          <>
          <Link to='/courts/new'>
            <br></br>
              <div>
                <h3>Create a new court</h3>
              </div>
            <br></br>
          </Link> 
            <MyCourt />
          </>
    )
  }
}

export default Courts
