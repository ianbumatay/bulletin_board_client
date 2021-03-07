import React from 'react'
import {connect} from 'react-redux'
import {deleteBulletin} from '../../actions/bulletinActions/deleteBulletin'

function Bulletins(props) { 


const handleDelete = (bulletin) => {  
  props.deleteBulletin(bulletin.id, bulletin.board_id)
}

    return (
        <div>
            {props.bulletins && props.bulletins.map( bulletin => <div className="color-row" key={bulletin.id} > <h4 key={bulletin.id}> {bulletin.title}</h4> 
            <p>{bulletin.content} </p> <button onClick={() => handleDelete(bulletin)} >X</button></div>) }
        </div> 
    )
}

export default connect(null, {deleteBulletin})(Bulletins)
