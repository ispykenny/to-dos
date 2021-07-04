import React from 'react'; 
import NoToDos from './NoToDos';
import ToDo from './ToDo';

const DisplayedToDos = ({todos, setTodos}) => {
  const toggleItem = (id) => {
    const newTodos = [...todos];
    newTodos.forEach(todo => {
      if(todo.id === id) newTodos.splice( newTodos.indexOf(todo) , 1)
    });
    setTodos(newTodos)
  }

  const get_completed = () => {
    let count = 0;
    todos.forEach((item) => item.complete === true ?  count++ : null)
    return count
  }

  const update_complete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach(todo => {
      if(todo.id === id) todo.complete = !todo.complete
    });
    setTodos(newTodos)
  }

  const Congrats = () => {
    if(get_completed() >= todos.length && todos.length >= 1) {
      return <h4>Congrats you finished your list!</h4>
    } else if(todos.length >= 1 && get_completed() < todos.length) {
      return <h4>{todos.length - get_completed()} more to go!</h4>
    } else {
      return null
    }
  }


  return (
    <div>
      <div className="list">
        <h3>To Dos: {todos.length} <span>|</span> Completed: {get_completed()}</h3>
        <Congrats/>
        { todos.length >= 1 ? todos.map((item, index) => (
          <ToDo 
            key={index}
            item={item} 
            onChange={() => update_complete(item.id)}
            onClick={() => toggleItem(item.id)}
          />
        )) : <NoToDos/> 
        }
      </div>
    </div>
  )
}

export default DisplayedToDos;
