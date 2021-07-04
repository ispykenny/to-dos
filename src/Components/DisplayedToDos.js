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
  return (
    <div>
      <h3>To Dos: {todos.length} | Completed: {get_completed()}</h3>
        {todos.length >= 1 ? todos.map((item, index) => (
          <ToDo 
            key={index}
            item={item} 
            onChange={() => update_complete(item.id)}
            onClick={() => toggleItem(item.id)}
          />
        )) : <NoToDos/>
      }
    </div>
  )
}

export default DisplayedToDos;
