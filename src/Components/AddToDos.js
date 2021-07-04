import React, {useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY='kennys.todos'

const AddToDos = ({todos, setTodos}) => {
  const to_do_value = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
    to_do_value.current.focus();
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
    <div className="add-to-do">
      <form onSubmit={(event) => add_to_do(event)} >
        <input type="text" ref={to_do_value} placeholder="Take dog for a walk"/>
        <button><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button>
      </form>
    </div>
  )
}

export default AddToDos;