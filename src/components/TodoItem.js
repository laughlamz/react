import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();

        setTimeout(() => this.inputElement.current.focus(), 2000);

        // this can't run, error, cause we have to wait virtual DOM -> truely DOM
        // this.inputElement.current.focus()        
    }

    render() {
        return (
            <div className="TodoItem">
                <input type="text" ref={this.inputElement}/>
            </div>
        );
    }
}


export default TodoItem;