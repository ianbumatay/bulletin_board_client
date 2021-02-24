import React, { Component } from 'react'

export class BulletinForm extends Component {  

    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             content: ''
        }
    }  

     handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    



    render() {
        return (
            <div>
                <form>
                    <label><h2>Bulletins:</h2></label> 
                    <label><h4>Title:</h4></label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/> 
                    <label><h4>content:</h4></label>
                    <input type="text" name="content"  value={this.state.content} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
                
            </div>
        )
    }
}

export default BulletinForm
