import React from 'react'

function Board( props) {

    let board = props.boards[props.match.params.id - 1]

    return (
        <div>
          <h2> { board ? board.name : null }</h2>
        </div>
    )
}

export default Board

