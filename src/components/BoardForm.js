


import React, { Component } from 'react' 


export class BoardForm extends Component {


constructor(props) {
    super(props)

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
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Create boards </label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default BoardForm
