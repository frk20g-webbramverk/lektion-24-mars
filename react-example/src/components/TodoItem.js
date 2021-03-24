function TodoItem(props) {
  console.log(props);

  function handleClick() {
    console.log('Hej');
  }

  return (
    <li onClick={ handleClick }>{ props.task } - { props.done }</li>
  )
}

export default TodoItem;