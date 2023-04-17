import React from 'react';
// import { NavLink } from 'react-router-dom';


const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'black',
        background: 'lime'
}

function Navigation () {
    return (
        <div>
            {/* <NavLink
                to="/"
                style={link}
                activestyle={{background: 'blue'}}                
            >Home</NavLink>
            
          <NavLink
                to="/artists"
                style={link}
                activestyle={{background: 'blue'}}
            >Artists</NavLink>

           <NavLink
                to="/paintings"
                style={link}
                activestyle={{background: 'blue'}}
            >Paintings</NavLink>  */}
        </div>
    )
}

export default Navigation;

