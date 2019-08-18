import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div
        className="todo"
        style={{
          textDecoration: this.props.todo.isCompleted ? 'line-through' : ''
        }}
      >
        {this.props.todo.text}
        <div>
          <button
            onClick={() => this.props.completeTodo(this.props.index)}
            style={{ cursor: 'pointer' }}
          >
            Complete
          </button>
          <button
            onClick={() => this.props.deleteTodo(this.props.index)}
            style={{ cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
