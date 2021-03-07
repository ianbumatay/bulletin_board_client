import React from 'react'
import {NavLink} from 'react-router-dom' 


function NavBar() {

const link = {
    width: '100px', 
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color:'white',
   
}

    return (
        <div className="navBar">
            <NavLink className="nav-home" to="/" exact style={link}>Home</NavLink>
            <NavLink className="nav-new" to="/boards/new" exact  style={link} >Create</NavLink>
            <NavLink className="nav-boards" to="/boards" exact style={link}>Boards</NavLink>
        </div>
    )
}

export default NavBar

