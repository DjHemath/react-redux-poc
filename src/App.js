import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './actions';

function TodoItem(props) {
  return (
    <div key={props.id}>
      <input type="checkbox" onChange={() => props.toggleTodo(props.todo)} checked={props.todo.checked}/>
      <span style={{textDecoration: props.checked ? 'line-through' : 'none'}}>{props.todo.text}</span>
      <button onClick={() => props.deleteTodo(props.todo)}>Delete</button>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }


  toggleTodo = (todo) => {
    todo.checked = !todo.checked;
    this.props.dispatch(editTodo(todo));
  }

  deleteTodo = (todo) => {
    this.props.dispatch(deleteTodo(todo));
  }

  addTodo = (e) => {
    e.preventDefault();
    this.props.dispatch(addTodo({
      text: this.state.text,
      checked: false,
      id: Math.random()
    }));
  }

  render() {

    const todos = this.props.todos.map(todo => <TodoItem
                                                  todo={todo} 
                                                  deleteTodo={this.deleteTodo}
                                                  toggleTodo={this.toggleTodo}
                                                />
                                        );

    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input placeholder="Enter a task..." onChange={(e) => this.setState({text: e.target.value})}/>
          <button type="submit">Add</button>
        </form>
  
        <div>
          {todos}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todos: store
  }
}


export default connect(mapStateToProps)(App);