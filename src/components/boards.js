import React from 'react'
import Board from './Board'
import {Route, Link} from 'react-router-dom'

function Boards(props) { 

    return (
        <div>
            {props.boards.map( board => <h2 key={board.id}><Link to={`/boards/ ${board.id}`}>{board.name}</Link></h2>)}
        </div>
    )
}

export default Boards
