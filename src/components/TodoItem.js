import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';

class TodoItem extends Component {
    onItemClicked() {
        console.log(this.props.item);
    }

    render() {
        const { item } = this.props;

        return (
            <div onClick={() => this.onItemClicked()} className={classNames('TodoItem', {'TodoItem-complete': item.isComplete === true})}>
                <p>{this.props.item.tittle}</p>
            </div>
        );
    }
}

export default TodoItem;