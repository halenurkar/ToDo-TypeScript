import React,{ChangeEvent, FC} from 'react';
import './App.css';
import { useState } from 'react';
import {todoType} from './appTypes'
import ToDoItem from './ToDoItem';

const App: FC=()=> {
  const [task, setTask] = useState<string>('');
  const [taskDay, setTaskDay] = useState<number>(0)
  const [todoList, settodoList] = useState<todoType[]>([])
  console.log(todoList);
  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name==='task'){
      setTask(event.target.value)
    }
    else{
      setTaskDay(Number(event.target.value))
    }
  }

  const handleSave= (): void=>{
    const newTask= {taskName:task, taskDay:taskDay};
    settodoList([...todoList, newTask])
    setTask('');
    setTaskDay(0);
    
  }
  const deleteTask=(nameToDelete:string):void=>{
    settodoList(todoList.filter((task)=>{
      return task.taskName !== nameToDelete
    }))
  }
  return (
    <div className="App">
    <div className='mainCard'>
      <input className='mainCardInput' type='text' name='task' value={task} placeholder='Taskınızı giriniz' onChange={handleChange}/>
      <input  className='mainCardInput' type='number' name='taskDay' value={taskDay} placeholder='Taskınızı bitirme günü' onChange={handleChange}/>
      <button className='mainCardButtom' onClick={handleSave}>Kaydet</button>
    </div>
    <div className='todoCard'>
      {todoList.map((task:todoType, index:number)=>{
        return <ToDoItem key={index} task={task} deleteTask={deleteTask}/>
      })}

    </div>

    </div>
    
  );
}

export default App;
