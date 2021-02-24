import React, { Component } from 'react'
import BulletinForm from '../components/bulletin/BulletinForm' 
import Bulletins from '../components/bulletin/Bulletins'


export class BulletinContainer extends Component {
    render() {
        return (
            <div>
                <BulletinForm board={this.props.board}/> 
                <Bulletins bulletins={this.props.board && this.props.board.bulletins}/>
            </div>
        )
    }
}

export default BulletinContainer
