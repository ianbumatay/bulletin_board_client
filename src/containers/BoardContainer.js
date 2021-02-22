import React, { Component } from 'react'
import {connect} from 'react-redux'

import BoardForm from '../components/BoardForm'
import Boards from '../components/Boards' 

import {fetchBoards} from '../actions/fetchBoards'  



export class BoardContainer extends Component {  



componentDidMount(){
    this.props.fetchBoards()
    // console.log(this.props)
}

    render() {
        return (
            <div>
                <BoardForm/> 
                <Boards boards={this.props.boards}/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        boards: state.boards
    }

}

export default connect(mapStateToProps, {fetchBoards})(BoardContainer)
 