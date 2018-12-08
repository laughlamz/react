import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import check from '../images/check.svg';
import uncheck from '../images/uncheck.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = uncheck;
        if (item.isComplete) {
            url = check;
        }

        return (

            <div className={classNames('TodoItem', {'TodoItem-complete': item.isComplete === true})}>
                <img onClick={onClick} className="checkImg" src={url} />
                <p>{this.props.item.tittle}</p>
            </div>
        );
    }
}

export default TodoItem;