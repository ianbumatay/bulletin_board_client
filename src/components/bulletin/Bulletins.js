import React from 'react'

function Bulletins(props) { 

    //console.log(props.bulletins)
    // const bulletinStyle = {
    //     border: '1px solid black',
    //     padding: '5px',
    //     margin: '0 6px 6px',
    //     //background: 'white', 
    //     //color: 'black'
    // }
   


    return (
    
        <div>
            {props.bulletins && props.bulletins.map( bulletin => <div className="color-row" key={bulletin.id} > <h4 key={bulletin.id}> {bulletin.title}</h4> 
            <p>{bulletin.content} </p> </div>) }
        </div>
        
    )
}

export default Bulletins
