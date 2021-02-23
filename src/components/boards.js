import React from 'react'

function Boards(props) { 

    return (
        <div>
            {props.boards.map( board => 
            <h2 key={board.id}>  <Board board={board} /> </h2>)}
        </div>
    )
}

export default Boards
