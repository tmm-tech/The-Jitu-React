import React,{useState} from 'react'
//destructuring
function InputForm(props) {
    const [inputTasks,SetInputTasks]=useState("");
    const [inputDate,SetInputDate]=useState("");
    const handleAddTask=(e)=>{
        e.preventDefault();
        const addedTask={
          // prevent page from reloading
            
            id:props.tasks.length +1,
            title:inputTasks,
            date_due:inputDate,
            isCompleted:false,
        };
       
props.setTasks([...props.tasks,addedTask])
localStorage.setItem("tasks",JSON.stringify([...props.tasks,addedTask]))
        SetInputTasks("");
        SetInputDate("");
    };
  return (
    <form className='form' onSubmit={handleAddTask}>
        <input type="text" className='task-input' required placeholder='Add to Todo List'  value={inputTasks} onChange={(e) => SetInputTasks(e.target.value)} 
         />
        <input type="Date" className='task-input' required value={inputDate} onChange={(f)=> SetInputDate(f.target.value)}/>
        <button className='task-button'onClick={handleAddTask}>Add</button>
    </form>
  );
}


export default InputForm