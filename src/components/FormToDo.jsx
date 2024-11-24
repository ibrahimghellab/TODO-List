import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function FormToDo({handleState}){
    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    const [newTodo,setNewTodo]=useState("");
    
  const handleChange=(event)=>{
    setNewTodo(event.target.value);
    }

    const handleAdd=(event)=>{
        event.preventDefault();
        
        const todoCopyToAdd={id: new Date().getTime(),valeur:newTodo}
        handleState(todoCopyToAdd);
        
        setNewTodo("");
      }

    return(
        <div>
            <form action='submit'onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2">
                    <input value={newTodo} type="text" className="grow" placeholder="To do ..." onChange={handleChange}/>
                    <button onClick={handleAdd}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
                </label>
            </form>
        </div>
    )
   
}