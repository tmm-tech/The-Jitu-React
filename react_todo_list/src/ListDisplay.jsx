import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";
//get data difference
function getDueDate(dueDate){
  const today=new Date();
  const due_date=new Date(dueDate);
  if (due_date.toDateString()===today.toDateString()) {
    return 'red';
    
  }else{
    return 'green';
  }
}
function ListDisplay({tasks,handleEditTask,handleDeleteTask,handleCheckbox}) {

 
  return (
    <div className="container">
    <table className='task-table'>
       <thead>
         <tr>
          <th></th>
          <th>id</th>
          <th>Task</th>
          <th>Due Date</th>
          <th>Action</th>
         </tr>
       </thead>
       <tbody>
          {tasks.map((task)=>(
            <tr key={task.id}>
              <td><input type="checkbox" checked={task.isCompleted} onClick={()=>handleCheckbox(task.id)}/></td>
              <td style={{textDecoration:task.isCompleted ? 'line-through':''}}>{task.id}</td>
              <td style={{textDecoration:task.isCompleted ? 'line-through' : ''}}>{task.title}</td>
              <td style={{textDecoration:task.isCompleted ? 'line-through' : '',color:getDueDate(new Date(task.date_due))}}>{task.date_due}</td>
              <td className='icon-display'>
              <FontAwesomeIcon icon={faEdit} style={{cursor:'pointer',color:'rgb(2, 129, 172)'}} onClick={()=>handleEditTask(task.id)}/>
                <FontAwesomeIcon icon={faTrash} style={{cursor:'pointer',color:'red'}} onClick={()=>handleDeleteTask(task.id)}/></td>
            </tr>
            

          ))}
       </tbody>
    </table>
    </div>
   
  );
}

export default ListDisplay
