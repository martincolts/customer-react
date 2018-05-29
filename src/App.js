import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter } from 'react-router-dom'
import './App.css';
import Menu from './Menu/Menu.js';
import Body from './Body/Body.js';
import App2 from './App2';


class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <App2/>
      </HashRouter>
      </div>
    );
  }
}

export default App;
