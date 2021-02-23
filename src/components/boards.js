import React from 'react'
import Board from './Board'
import {Route, Link} from 'react-router-dom'

function Boards(props) { 

    return (
        <div>
            {props.boards.map( board => <Link to= {`/boards/ ${board.id}`}>{board.name}</Link>
            // <h2 key={board.id}>  <Board board={board} /> </h2>
            )}
        </div>
    )
}

export default Boards
