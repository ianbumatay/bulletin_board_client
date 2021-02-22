import React, { Component } from 'react'

import BoardForm from '../components/BoardForm'
import Boards from '../components/Boards'

export class BoardContainer extends Component { 


    render() {
        return (
            <div>
                <BoardForm/> 
                <Boards/>
            </div>
        )
    }
}

export default BoardContainer
