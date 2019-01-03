import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListsContainer from './components/ListsContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="app-logo"/>
          <h1 className="App-title">Hello React!</h1>
        </header>
        <ListsContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
