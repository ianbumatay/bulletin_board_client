import React from 'react'
import Board from './Board'
import {Route, Link} from 'react-router-dom'



function Boards(props) {

 

    return (
        <div className="board-div">
            {props.boards.map( board => 
            <h2 className="board-div" key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h2>) 
            }
        </div>
    )
}

export default Boards  

// -------

// import React, { Component } from 'react'

// export class Boards extends Component {
//     render() {
//         return (
//             <div> 
//                 <div className="board-div"> 
//                 {
//                  this.props.boards.map( board => 
//                  <h1 key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h1>) 
//                 }
//                </div>    
//             </div>
//         )
//     }
// }

// export default Boards


//className="color-row"
