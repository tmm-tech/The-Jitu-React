import React, {useState,useEffect} from 'react';
import './App.css';
import InputForm from './InputForm'
import ListDisplay from './ListDisplay';
function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todolist')) || [
    {id: 1, title: "Washing Clothes", date_due: "2023-02-10", isCompleted: false },
    {id: 2, title: "Washing the Car", date_due: "2023-02-03", isCompleted: false },
    {id: 3, title: "Buy Groceries", date_due: "2023-02-03", isCompleted: false },
    {id: 4, title: "Complete Online Course Week 2", date_due: "2023-02-05", isCompleted: false },
    {id: 5, title: "Renew Car Insurance", date_due: "2023-02-04", isCompleted: false },
  ]);
  const handleEmpty=(e)=>{
   setTasks([]);
  };
  useEffect(()=>{
    localStorage.setItem('todolist',JSON.stringify(tasks));
      },[tasks]);
 
  //handle checkbox action
  const handleCheckbox=(id)=>{
    setTasks(
tasks.map(event=>{
  if (event.id === id) {
    event.isCompleted=!event.isCompleted;
  }
  return event;
})
    );
   
  };
  //handle edit
  const handleEditTask=(id)=>{
    const todoEdit=tasks.find(todo=> todo.id === id);
    const editedTodo={...todoEdit};
    editedTodo.title=prompt('Enter the updated task:');
   const newDate=prompt('Enter the updated due date (optional):');
    if(newDate){
      editedTodo.date_due=newDate;
    }

    const updatedTodos=[...tasks];
    updatedTodos.splice(tasks.indexOf(todoEdit), 1, editedTodo);
    setTasks(updatedTodos);
  };
//handle the task of deleting
    const handleDeleteTask = (id) =>{
     
      setTasks(tasks.filter((task)=>task.id !==id));
      localStorage.setItem('Todo List',JSON.stringify(tasks));
      
    };
  return (
    <div className="App">
      <h1><i className="fa fa-list"></i>  Todo List</h1>
      <InputForm tasks={tasks} setTasks={setTasks}/>
      <ListDisplay tasks={tasks} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} handleCheckbox={handleCheckbox}/>
      <div className='btn_container'>
      <button type="button" className='reset' onClick={handleEmpty}>RESET</button>
      </div>
    </div>
  );
}

export default App;
