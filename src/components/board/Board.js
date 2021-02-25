import React from 'react'
import BulletinContainer from '../../containers/BulletinContainer'

function Board(props) { 

  console.log(props.boards)

  let board = props.boards.filter(board => board.id == props.match.params.id)[0]

    //let board = props.boards[props.match.params.id - 1]

    return (
        <div>
          <h2> { board ? board.name : null }</h2><button>Delete</button>
          <BulletinContainer board={board}/>
        </div>
    )
}

export default Board

