import React from 'react'

function Bulletins() {
    return (
        <div>
            {props.bulletins.map( bulletin => 
                <li key={bulletin.id}>{bulletin.title} - {bulletin.content}</li>)}
        </div>
    )
}

export default Bulletins
