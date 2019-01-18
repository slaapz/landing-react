import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.css';

import Clock from './components/clock/Clock';
import Greeting from './components/greeting/Greeting';
import Message from './components/message/Message';
import Taskform from './components/tasks/Taskform';
import Tasklist from './components/tasks/Tasklist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
      greet: '',
      msg: '',
      img: '',
      tasks: []
    };

    this.images = [
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
      '/img/5.jpg',
      '/img/6.jpg',
      '/img/7.jpg'
    ];
  }

  componentDidMount() {
    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    if (!tasks) {
      console.log('Empty Array');
    } else {
      this.setState({ tasks: tasks });
    }
    this.setState({
      img: this.images[Math.floor(Math.random() * 7)]
    });
    this.clockIntervalID = setInterval(() => this.tick(), 1000);
    this.imgIntervalID = setInterval(() => this.shuffle(), 1800000);
  }

  componentWillMount() {
    clearInterval(this.clockIntervalID);
    clearInterval(this.imgIntervalID);
  }

  tick = () => {
    const hours = new Date().getHours();
    let greet = '';
    let msg = '';

    if (hours >= 0 && hours < 12) {
      greet = 'Rise and shine!';
      msg = 'What are we doing this morning?';
    } else if (hours >= 12 && hours < 17) {
      greet = "It's a bright, beautiful day!";
      msg = 'What are we doing this afternoon?';
    } else {
      greet = "Shut 'er down!";
      msg = "What's going on this evening?";
    }
    this.setState({
      time: new Date().toLocaleTimeString(),
      greet,
      msg
    });
  };
  getTasks = () => {
    const tasks = localStorage.getItem(JSON.parse('tasks'));
    return tasks;
  };

  addTask = text => {
    const item = {
      id: uniqid(),
      text
    };
    let tasks = this.state.tasks;
    tasks.push(item);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  deleteTask = id => {
    console.log(id);
    let tasks = this.state.tasks.filter(task => task.id !== id);
    console.log(tasks);
    this.setState({ tasks });
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  shuffle = () => {
    const imgIndex = Math.floor(Math.random() * 7);
    this.setState({
      img: this.images[imgIndex]
    });
  };

  render() {
    const style = {
      backgroundImage: 'url(' + this.state.img + ')'
    };
    return (
      <header style={style}>
        <div id="opacity">
          <div id="display">
            <Clock data={this.state.time} />
            <Greeting greet={this.state.greet} />
            <Message msg={this.state.msg} />
          </div>
          <Taskform addTask={this.addTask} />
          <Tasklist deleteTask={this.deleteTask} tasks={this.state.tasks} />
        </div>
      </header>
    );
  }
}

export default App;
