import React from 'react'
import Board from './Board'
//import '../../Boards.css'
import {Route, Link} from 'react-router-dom'

function Boards(props) { 

    // const boardstyle = {
    //     width: '400px', 
    //     padding: '10px',
    //     margin: '0 6px 6px',
    //     background: '', 
    //     textDecoration: 'none',
    //     color:'white'
    // }

    return (
        <div className="board-div">
            {props.boards.map( board => 
            <h2 className="color-row" key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h2>)}
        </div>
    )
}

export default Boards


//<h2  style={boardstyle} key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h2>)}
