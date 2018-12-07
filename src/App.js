import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItem = ['Mua bim bim', 'Di da bong', 'Di do xang'];
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          {this.todoItem.map((item, index) => <TodoItem key={index} tittle={item} />)}
      </div>
    );
  }
}

export default App;
