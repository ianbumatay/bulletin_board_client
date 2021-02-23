


import React, { Component } from 'react'

export class BoardForm extends Component {


    
    render() {
        return (
            <div>
                <form>
                    <label> Create boards </label>
                    <input type="text" name="name" // value={this.state.name} 
                    />
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default BoardForm
