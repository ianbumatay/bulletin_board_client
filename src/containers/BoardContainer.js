import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {Route, Switch} from 'react-router-dom'

import BoardForm from '../components/board/BoardForm'
import Boards from '../components/board/Boards' 
import Board from '../components/board/Board' 
import {fetchBoards} from '../actions/boardActions/fetchBoards'  



export class BoardContainer extends Component {  

componentDidMount(){
    this.props.fetchBoards()
}

    render() {
        return (
            <div>
                <Switch>
                 
                    <Route exact path='/boards/new' component={BoardForm}/> 
                    <Route exact path="/boards/:id" render={((routerProps) => <Board board={this.props.boards.find(board => board.id === parseInt(routerProps.match.params.id))} /> ) }/> 
                    <Route exact path='/boards' render={(routerProps) => <Boards {...routerProps} boards={this.props.boards}/>}/>
                </Switch>
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
 