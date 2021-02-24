import React from 'react'
import BulletinContainer from '../../containers/BulletinContainer'

function Board( props) {

    let board = props.boards[props.match.params.id - 1]

    return (
        <div>
          <h2> { board ? board.name : null }</h2><button>Delete</button>
          <BulletinContainer/>
        </div>
    )
}

export default Board

