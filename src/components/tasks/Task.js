import React, { Component, Fragment } from 'react';

export default class Task extends Component {
  onClick = id => {
    this.props.deleteTask(id);
  };

  render() {
    const { task } = this.props;
    return (
      <Fragment>
        <li>
          {task.text}
          <span className="delete" onClick={() => this.onClick(task.id)}>
            x
          </span>
        </li>
      </Fragment>
    );
  }
}
