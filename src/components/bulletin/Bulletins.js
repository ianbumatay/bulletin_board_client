import React from 'react'

function Bulletins(props) { 

    //console.log(props.bulletins)
    const bulletinStyle = {
        border: '1px solid black',
        padding: '10px',
        margin: '0 6px 6px',
    }
   


    return (
    
        <div>
      
            {props.bulletins && props.bulletins.map( bulletin => <div key={bulletin.id} style={bulletinStyle}> <h2 key={bulletin.id}> {bulletin.title}</h2> 
            <p>{bulletin.content} </p> </div>) }
   
        </div>
        
    )
}

export default Bulletins
