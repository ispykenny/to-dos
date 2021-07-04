import React, {useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY='todoApp.todos'

const AddToDos = ({todos, setTodos}) => {
  const to_do_value = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [setTodos])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const add_to_do = event => {
    event.preventDefault();
    const current_value = to_do_value.current.value;
    if(current_value.length <= 0) return;
    setTodos(previous => {
      return [...previous, {
        id: uuidv4(),
        name: current_value,
        complete: false
      }]

    })
    to_do_value.current.value = null
  }

  return (
    <form onSubmit={(event) => add_to_do(event)} >
      <input type="text" ref={to_do_value}/>
      <button>Submit</button>
    </form>
  )
}

export default AddToDos;