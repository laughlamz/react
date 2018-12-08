import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { item } = this.props;
        let className = 'TodoItem';
        if (item.isComplete)
            className += ' TodoItem-complete';
        return (
            <div className={classNames('TodoItem', {'TodoItem-complete': item.isComplete === true})}>
                <p>{this.props.item.tittle}</p>
            </div>
        );
    }
}

export default TodoItem;