import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'black',
        background: 'orange'
}

function Navigation () {
    return (
        <div>
            <NavLink
                to="/"
                style={link}
                activestyle={{background: 'blue'}}                
            >Home</NavLink>
            
          <NavLink
                to="/games"
                style={link}
                activestyle={{background: 'blue'}}
            >Games</NavLink>

           <NavLink
                to="/courts"
                style={link}
                activestyle={{background: 'blue'}}
            >Courts</NavLink> 
        </div>
    )
}

export default Navigation;

