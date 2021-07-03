import React, {useState} from 'react';
import AddToDos from '../Components/AddToDos';
import DisplayedToDos from '../Components/DisplayedToDos';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div>Your on the dashboard page</div>
      <AddToDos todos={todos} setTodos={setTodos}/>
      <DisplayedToDos todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default Dashboard;