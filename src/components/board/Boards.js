import React from 'react'
import Board from './Board'
//import '../../Boards.css'
import {Route, Link} from 'react-router-dom'

function Boards(props) { 

    const boardstyle = {
        width: '200px', 
        padding: '40px',
        margin: '0 20px 20px',
        background: '', 
        textDecoration: 'none',
        color:'white',
        border: '1px soloid'
    }

    return (
        <div className="boardDiv">
            {props.boards.map( board => 
            <h2  style={boardstyle} key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h2>)}
        </div>
    )
}

export default Boards
