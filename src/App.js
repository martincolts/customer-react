import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu.js';
import Body from './Body/Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Body/>
      </div>
    );
  }
}

export default App;
