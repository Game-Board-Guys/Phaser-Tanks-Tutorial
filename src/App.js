import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tanks from './Tanks/Tanks';
class App extends Component {
  render() {
    Tanks();
    return (
      <div id="myCanvas">
       
      </div>
    );
  }
}

export default App;
