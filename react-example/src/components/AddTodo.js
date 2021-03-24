import { useState } from 'react';

function AddTodo(props) {
  const [newTodo, setNewTodo] = useState('');

  function handleKeyUp(event) {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  }

  function handleClick() {
    props.updateState({ task: newTodo });
  }

  return (
    <section>
      <input type="text" placeholder="Skriv in en todo" onKeyUp={ handleKeyUp } />
      <button onClick={ handleClick }>Lägg till todo</button>
    </section>
  )
}

export default AddTodo;