
import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import {addBoard} from '../../actions/boardActions/addBoard' 
import {withRouter} from 'react-router-dom'


export class BoardForm extends Component {

constructor() {
    super()
    this.state = {
         name: ''
    }
}


 handleChange = event => {
    this.setState({name: event.target.value}) 
}
 

handleSubmit = (event) => {
    event.preventDefault() 
    this.props.addBoard(this.state) 
    this.setState({ name: '' })
    this.props.history.push('/boards')
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <br></br>
                    <label> <span>Create boards</span></label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, {addBoard})(BoardForm))
