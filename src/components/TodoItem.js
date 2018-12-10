import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();

        // setTimeout(() => this.inputElement.current.focus(), 2000);
    }

    // With this will ok, cause it wait for Truely DOM render ready
    componentDidMount() {
        this.inputElement.current.focus();
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