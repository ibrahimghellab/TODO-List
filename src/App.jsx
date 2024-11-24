import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [todo, setToDo] = useState([
    {id : 1, valeur:"Jeter les poubelles" },
    {id : 2, valeur:"Devoir" },
    {id : 3, valeur:"Faire a manger" }
  ])
  const [newTodo,setNewTodo]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  const handleChange=(event)=>{
      setNewTodo(event.target.value);
  }

  const handleAdd=(event)=>{
    event.preventDefault();
    const todoCopy=[...todo];
    const todoCopyToAdd={id: new Date().getTime(),valeur:newTodo}
    todoCopy.push(todoCopyToAdd);
    setToDo(todoCopy);
    setNewTodo("");
  }

  const handleDelete=(id)=>{
      const todoCopy=[...todo];
      const todoCopyUpdated=todoCopy.filter(eachTodo=>eachTodo.id !== id);
      setToDo(todoCopyUpdated);
    }

  return (
    <>
      <h1 className='text-7xl'>To-Do List</h1>
      <form action='submit'onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input value={newTodo} type="text" className="grow" placeholder="To do ..." onChange={handleChange}/>
          <button onClick={handleAdd}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
        </label>
      </form>
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
