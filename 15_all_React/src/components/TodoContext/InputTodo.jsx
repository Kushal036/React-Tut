import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { TodoContext} from '../../context/TodoContext'
function InputTodo() {
    const [todoMessage , setTodoMessage] = useState('') 
    const {addTodo} = useContext(TodoContext)

    const handleAdd = (e)=>{
        e.preventDefault();
        if(todoMessage=='') return 
        addTodo(todoMessage);
        setTodoMessage('');
    }
  return (
    <div>
        <form  onSubmit={handleAdd}>
            
      <input type="text" 
      placeholder='Type your Todo here' 
      className='bg-amber-500' 
      value={todoMessage} 
      onChange={(e)=>setTodoMessage(e.target.value)} />
      <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default InputTodo
