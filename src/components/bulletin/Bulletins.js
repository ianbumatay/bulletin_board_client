import React from 'react'

function Bulletins(props) {
    return (
        <div>
            {props.bulletins && props.bulletins.map( bulletin => 
                <li key={bulletin.id}>{bulletin.title} - {bulletin.content}</li>)}
        </div>
    )
}

export default Bulletins
