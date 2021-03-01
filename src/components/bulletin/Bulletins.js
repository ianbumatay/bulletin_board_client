import React from 'react'

function Bulletins(props) { 

    //console.log(props.bulletins)

    return (
    
        <div>
      
            {props.bulletins && props.bulletins.map( bulletin => <> <h2 key={bulletin.id}> {bulletin.title}</h2> 
            <p>{bulletin.content} </p> </> ) }
   
        </div>
        
    )
}

export default Bulletins
