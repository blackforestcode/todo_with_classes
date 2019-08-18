import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class Todos extends Component {
  state = {
    todos: [
      {
        text: 'Learn React Class Components',
        isCompleted: false
      },
      {
        text: 'Learn React Hooks',
        isCompleted: false
      },
      {
        text: 'Learn React Context',
        isCompleted: false
      }
    ]
  };

  // function to set todo(s)
  addTodo = text => {
    const NewTodos = [...this.state.todos, { text, isCompleted: false }];
    this.setState({ todos: NewTodos });
  };

  // function to complete todo(s)
  completeTodo = index => {
    const NewTodos = [...this.state.todos];
    NewTodos[index].isCompleted = true;
    this.setState({ todos: NewTodos });
  };

  // function to delete todo(s)
  deleteTodo = index => {
    const NewTodos = [...this.state.todos];
    NewTodos.splice(index, 1);
    this.setState({ todos: NewTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
            />
          );
        })}
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Todos;
