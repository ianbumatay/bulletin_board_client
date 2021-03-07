import React from 'react'
import Board from './Board'
import {Route, Link} from 'react-router-dom'

function Boards(props) { 

    return (
        <div className="board-div">
            {props.boards.map( board => 
            <h2 className="color-row" key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h2>)}
        </div>
    )
}

export default Boards


