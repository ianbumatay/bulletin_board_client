
import React, { Component } from 'react'

export class Like extends Component {

constructor(props) {
    super(props)

    this.state = {
         count: 0
    }
} 

handleClick = () => {
  //this.setState({count: this.state.count + 1}) 
  this.setState(prevState => { return {count: prevState.count + 1} })
} 

// handleClick = () => {
//     this.setState(prevState => {
//        return {count: prevState.count + 1}
//     })
// }





    render() {
        return (
            <div>
                <button onClick={this.handleClick}> like: {this.state.count} </button>
            </div>
        )
    }
}

export default Like
