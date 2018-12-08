import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './images/tick.svg';

class App extends Component {

  constructor() {
    super();

    this.state = {
      newItem: '',
      todoItem: [
        { tittle: 'Mua bim bim', isComplete: true}, 
        { tittle: 'Di da bong', isComplete: false}, 
        { tittle: 'Di do xang', isComplete: false}
      ]
    };

    this.onItemClicked = this.onItemClicked.bind(this); // bỏ được vì, gọi hàm + use return (event) lúc truyền
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(event) {
    // console.log(event.target.value);
    if(event.keyCode == 13) {
      let text = event.target.value;
      if(!text)
        return;
      
      text = text.trim();
      
       if(!text)
        return;
      
      this.setState({
        newItem: '',
        todoItem: [
          { tittle: text, isComplete: false },
          ...this.state.todoItem
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItem, newItem } = this.state; 
    // console.log(todoItem);

    return (
      <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input type="text" placeholder="Add new task" onKeyUp={this.onKeyUp} value={newItem} onChange={this.onChange}/>
          </div>
          {todoItem.length > 0 && todoItem.map((item, index) => 
            (<TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>)
          )}
          {todoItem.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
