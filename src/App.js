
//import './App.css';

import React, { Component } from 'react'
import BoardContainer from './containers/BoardContainer' 
import NavBar from './components/NavBar'
import Home from './components/Home'


export class App extends Component { 


// componentDidMount(){
//   //fetch("http://localhost:3000/api/v1/boards") 
//   fetch("http://localhost:3000/api/v1/boards/1/bulletins") 
//   .then(res => res.json())
//   .then(boards => console.log(boards))
// }



  render() {
    return (
      <div>
        <NavBar/>
        <Home/>
        <BoardContainer/>
      </div>
    )
  }
}

export default App
