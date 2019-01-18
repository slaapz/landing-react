import React, { Component } from 'react';

import Task from './Task';

export default class Tasklist extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="tasklist">
        <ul>
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                task={task}
                deleteTask={this.props.deleteTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
