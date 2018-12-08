import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoItem: [
        { tittle: 'Mua bim bim', isComplete: true}, 
        { tittle: 'Di da bong', isComplete: false}, 
        { tittle: 'Di do xang', isComplete: false}
      ]
    };

    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      // console.log(item);
      const isComplete = item.isComplete;
      const { todoItem } = this.state;
      const index = todoItem.indexOf(item);
      this.setState({
        todoItem: [
          ...todoItem.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItem.slice(index + 1)
        ]
      });
    };
  }

  render() {
    const { todoItem } = this.state; 
    // console.log(todoItem);

    return (
      <div className="App">
          {todoItem.length > 0 && todoItem.map((item, index) => 
            (<TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>)
          )}
          {todoItem.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
