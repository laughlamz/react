import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItem = [
      { tittle: 'Mua bim bim', isComplete: true}, 
      { tittle: 'Di da bong', isComplete: true}, 
      { tittle: 'Di do xang', isComplete: false}
    ];
  }

  render() {
    return (
      <div className="App">
          {this.todoItem.length > 0 && this.todoItem.map((item, index) => 
            (<TodoItem key={index} item={item} />)
          )}
          {this.todoItem.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
