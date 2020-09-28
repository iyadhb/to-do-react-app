import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }
  render() {
    const taskItemComponents = this.state.todos.map((item) => (
      <TodoItem key={item.id} task={item} />
    ));

    return <div className='todo-list'>{taskItemComponents}</div>;
  }
}

export default App;
