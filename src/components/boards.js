import React from 'react'

function Boards(props) { 

    return (
        <div>
            Boards 
            {props.boards.map( board => <h2 key={board.id}>{board.name}</h2>)}
        </div>
    )
}

export default Boards
