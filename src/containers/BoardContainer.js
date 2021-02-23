import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {Route, Switch} from 'react-router-dom'

import BoardForm from '../components/BoardForm'
import Boards from '../components/Boards' 
import Board from '../components/Board' 


import {fetchBoards} from '../actions/fetchBoards'  



export class BoardContainer extends Component {  



componentDidMount(){
    this.props.fetchBoards()
    // console.log(this.props)
}

    render() {
        return (
            <div>
                <Route path='/boards/new' component={BoardForm} /> 
                <Route path='/boards/:id' render={(routerProps) => <Board {...routerProps} boards={this.props.boards}/> }/>
                <Route exact path='/boards' render={(routerProps) => <Boards {...routerProps} boards={this.props.boards}/> } />
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
 