import React, { Component } from 'react'
import BulletinForm from '../components/bulletin/BulletinForm' 
import Bulletins from '../components/bulletin/Bulletins'


export class BulletinContainer extends Component {
    render() {
        return (
            <div>
                <BulletinForm/> 
                <Bulletins bulletins={this.props.board && this.props.board.bulletins}/>
            </div>
        )
    }
}

export default BulletinContainer
