import React, {useState} from 'react';
import AddToDos from '../Components/AddToDos';
import DisplayedToDos from '../Components/DisplayedToDos';
import Inner from '../Components/Inner';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Inner>
        <div>Your on the dashboard page</div>
        <AddToDos todos={todos} setTodos={setTodos}/>
        <DisplayedToDos todos={todos} setTodos={setTodos}/>
      </Inner>
    </>
  )
}

export default Dashboard;