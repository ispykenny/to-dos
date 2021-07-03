import React from 'react'; 
import NoToDos from './NoToDos';
import ToDo from './ToDo';

const DisplayedToDos = ({todos, setTodos}) => {
  const toggleItem = (id) => {
    const newTodos = [...todos];
    console.log(id)
    const toDo = newTodos.forEach(todo => {
      if(todo.id == id) {
        console.log(newTodos.indexOf(todo) )
        newTodos.splice( newTodos.indexOf(todo) , 1)
      }
    });
    console.log(newTodos)
    setTodos(newTodos)
  }
  return (
    <div>
      <h3>Your To Dos</h3>
        {todos.length >= 1 ? todos.map((item, index) => (
          <ToDo 
            key={index}
            item={item} 
            onClick={() => toggleItem(item.id) 
          }/>
        )) : <NoToDos/>
      }
    </div>
  )
}

export default DisplayedToDos;
