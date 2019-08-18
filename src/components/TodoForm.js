import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    value: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) return;
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Add Todo..."
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </form>
    );
  }
}

export default TodoForm;
