import React from 'react'

function Bulletins(props) { 

   
console.log(props.bulletins)

const handleDelete = (bulletin) => {
    //debugger

}

    return (
    
        <div>
            {props.bulletins && props.bulletins.map( bulletin => <div className="color-row" key={bulletin.id} > <h4 key={bulletin.id}> {bulletin.title}</h4> 
            <p>{bulletin.content} </p> <button onClick={() => handleDelete(bulletin)} >X</button></div>) }
        </div>
        
    )
}

export default Bulletins
