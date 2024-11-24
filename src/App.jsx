import { useState } from 'react'
import './App.css'
import FormToDo from './components/FormToDo'

function App() {
  const [todo, setToDo] = useState([
    {id : 1, valeur:"Jeter les poubelles" },
    {id : 2, valeur:"Devoir" },
    {id : 3, valeur:"Faire a manger" }
  ])
 
  const handleState=(todoCopyToAdd)=>{
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
      <FormToDo handleState={handleState} ></FormToDo>
      <ul>
        {todo.map(todoValue=>(
            <li key={todo.id}>
              {todoValue.valeur}<button onClick={()=>{handleDelete(todoValue.id)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
            </li>
          ))}
      </ul>
      
    </>
    
  )
}

export default App
