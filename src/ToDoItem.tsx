import React from 'react'
import {todoType} from './appTypes'

type PropsType={
    task: todoType;
    deleteTask(nameToDelete:string):void
}

function ToDoItem({task, deleteTask}:PropsType) {
  return (
    <div className='card'>
    <div>
      <p>{task.taskName}</p>
      <p>{task.taskDay}</p>
    <button onClick={()=>deleteTask(task.taskName)}>Sil</button>
    </div>
    </div>
  )
}

export default ToDoItem
