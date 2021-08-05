import React from 'react'
import {connect} from 'react-redux' 
import {deleteBoard} from '../../actions/boardActions/deleteBoard' 
import BulletinContainer from '../../containers/BulletinContainer'
import {withRouter} from 'react-router-dom'


function Board(props) { 

  

   const handleDelete = () => {
      props.deleteBoard(props.board.id)
      props.history.push('/boards')

    }

    return (
        <div> 
          <h2 className="boards"> { props.board ? props.board.name : null } <button onClick={handleDelete}>Delete</button> </h2>
         
          <BulletinContainer board={props.board}/>
         
        </div>
    )
} 


export default withRouter(connect(null, {deleteBoard})(Board))

