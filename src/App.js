import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

function App() {
  const taskItemComponents = todosData.map((item) => <TodoItem key={item.id} task={item} />);

  return <div className='todo-list'>{taskItemComponents}</div>;
}

export default App;
