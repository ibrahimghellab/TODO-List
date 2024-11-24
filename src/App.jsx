import { useState } from 'react'
import './App.css'
import FormToDo from './components/FormToDo'
import ToDo from './components/ToDo'

function App() {
  const [todo, setToDo] = useState([
    {id : 1, valeur:"Jeter les poubelles" },
    {id : 2, valeur:"Devoir" },
    {id : 3, valeur:"Faire a manger" }
  ])
 
  const handleStateForm=(todoCopyToAdd)=>{
    const todoCopy=[...todo];
    todoCopy.push(todoCopyToAdd);
    setToDo(todoCopy);
  }

  const handleDelete=(id)=>{
    const todoCopy=[...todo];
    const todoCopyUpdated=todoCopy.filter(eachTodo=>eachTodo.id !== id);
    setToDo(todoCopyUpdated);
  }

  return (
    <>
      <h1 className='text-7xl'>To-Do List</h1>
      <FormToDo handleState={handleStateForm} ></FormToDo>
      <ul>
        {todo.map(todoValue=>(
            <ToDo key={todoValue.id} todoInfo={todoValue} handleDelete={handleDelete}></ToDo>
          ))}
      </ul>
      
    </>
    
  )
}

export default App
