import React, { useState, useRef } from 'react';
import TodoList from './TodoList'

function App() {

  const [todoItems, setTodoItems] = useState([])
  const todoItemNameRef = useRef()

  function addTodoItem(e){
      const name = todoItemNameRef.current.value
      if (name === '') return
      setTodoItems(prevTodoItems => {
        return [...prevTodoItems, {id:2, name:name, complete:false}]
      })
      todoItemNameRef.current.value = null
  }

  return (
    <>
      <TodoList todoItems={todoItems}/>
      <input ref={todoItemNameRef} type='text' />
      <button onClick={addTodoItem}>Add todo item</button>
      <button>Clear todo list</button>
      <div>0 todo left</div>
    </>
  )
}

export default App;
