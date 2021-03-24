import './App.css';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([
            { task: 'Köp kaffe' },
            { task: 'Köp kaka' },
            { task: 'Brygg kaffe' },
            { task: 'Fika' }]);

  function addTodo(todo) {
    setTodos((todos) => { return [...todos, todo] });
  }
  
  return (
    <div className="App">
      { todos.map((todo, index) => {
        return <TodoItem task={ todo.task } done="false" />
      })}

      <AddTodo updateState={ addTodo } />
    </div>
  );
}

export default App;
