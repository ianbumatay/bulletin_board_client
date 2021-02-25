import React from 'react'
import {NavLink} from 'react-router-dom' 





function NavBar() {

const link = {
    width: '100px', 
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black', 
    textDecoration: 'none',
    color:'white'
}

    return (
        <div className="navBar">
            <NavLink to="/" exact style={link}>Home</NavLink>
            <NavLink to="/boards/new" exact  style={link} >Create</NavLink>
            <NavLink to="/boards" exact style={link}>Boards</NavLink>
        </div>
    )
}

export default NavBar
