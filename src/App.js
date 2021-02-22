
// import './App.css';

import React, { Component } from 'react'

export class App extends Component { 


componentDidMount(){
  fetch("http://localhost:3000/api/v1/boards") 
  //fetch("http://localhost:3000/api/v1/boards/1/bulletins") 
  .then(res => res.json())
  .then(boards => console.log(boards))
}



  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

export default App
