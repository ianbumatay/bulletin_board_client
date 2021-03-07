
import React, { Component } from 'react'
import BoardContainer from './containers/BoardContainer' 
import NavBar from './components/NavBar'
import Home from './components/Home'


export class App extends Component { 

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
