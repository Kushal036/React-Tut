import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { TodoContextMake} from '../../context/TodoContextMake'
function InputTodo() {
    const [todoMessage , setTodoMessage] = useState('') 
    const {addTodo} = useContext(TodoContextMake)

    const handleAdd = (e)=>{
        e.preventDefault();
        if(todoMessage=='') return 
        addTodo(todoMessage);
        setTodoMessage('');
    }
  return (
    <div className='mx-auto bg-gray-500 w-full'>
        <form  onSubmit={handleAdd}>
            
      <input type="text" 
      placeholder='Type your Todo here' 
      className='bg-gray-300 text-2xl font-bold px-5 py-2 rounded-l-2xl w-6/7' 
      value={todoMessage} 
      onChange={(e)=>setTodoMessage(e.target.value)} />
      <button type="submit" className='bg-blue-600 text-2xl text-white py-2 px-5 w-1/7 font-bold rounded-r-2xl hover:bg-blue-400 transition duration-300 ease-in-out' >Add</button>
      </form>
    </div>
  )
}

export default InputTodo
