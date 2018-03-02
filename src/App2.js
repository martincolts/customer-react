import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './Menu/Menu.js';
import Body from './Body/Body.js';

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Body/>
      </div>
    );
  }
}

export default App2;


