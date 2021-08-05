import React from 'react'
import {Link} from 'react-router-dom' 
import {useState} from 'react' 


function Boards(props) { 

    const [search, setSearch] = useState('') 

    const filterBoards = props.boards.filter( board => { return board.name.toLowerCase().includes(search.toLowerCase() )} )
    

    return ( 
            <>
                <div><input type= "text"placeholder="Search Boards..." onChange={e => setSearch(e.target.value)}/></div> 
                <div className="board-div">
                    { filterBoards.map( board => 
                    <h2 className="board-div" key={board.id}><Link to={`/boards/${board.id}`}>{board.name}</Link></h2>) 
                    }
                </div> 
            </>
    )
}

export default Boards  




