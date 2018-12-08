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

  onItemClicked() {
    // console.log(item);
    this.setState({
      todoItem: [
        { tittle: 'Mua bim bim', isComplete: true}, 
        { tittle: 'Di da bong', isComplete: true}, 
        { tittle: 'Di do xang', isComplete: true}
      ]
    });
  }

  render() {
    const { todoItem } = this.state; 
    // console.log(todoItem);

    return (
      <div className="App">
          {todoItem.length > 0 && todoItem.map((item, index) => 
            (<TodoItem key={index} item={item} onClick={this.onItemClicked}/>)
          )}
          {todoItem.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
