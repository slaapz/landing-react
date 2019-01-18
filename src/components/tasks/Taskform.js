import React, { Component } from 'react';

class Taskform extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div className="form-div">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="text">What do you want to accomplish today?</label>
            <br />
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Taskform;
