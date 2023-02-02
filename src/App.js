
import { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';

function App() {
  const [todoList, setTodoList] = useState([])
  const [task, setTask] = useState("")
  //getter (todolist)= recuperer le contenu du du state
  //settodolist(donnee) - Mettre a jour le state
  // Ne pas faire : todoliste = nouvelle donnée 
  //non plus todolist.push(nouvelle donnee)

  const addTask = (event) => {
    event.preventDefault();
    // on defini notre state sur : [... ancienne donée, nouvelle donnée]
    setTodoList([...todoList, task])
    setTask("")

  }
  return (
    <div className="App">
      {/*onSubmit={(event) => addTask(event)}*/}
      <form onSubmit={(event) => addTask(event)}>
      {/*
      value={task}
      onChange={event} => setTask(event.currentTarget.value)} */}
        <input value ={task} onChange={(event) => setTask(event.currentTarget.value)} 
        type = "text" placeholder='New Task'></input>
        <button type='submit'>Add Task</button>
      </form>

      <TaskList tasksList ={todoList} />
    </div>
  );
}

export default App;
