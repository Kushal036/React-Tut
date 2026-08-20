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
        <form onSubmit={handleAdd} className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
          <input 
            type="text" 
            placeholder='Type your Todo here' 
            className='bg-gray-300 text-base sm:text-lg md:text-2xl font-bold px-3 sm:px-5 py-2 rounded-l-2xl flex-grow' 
            value={todoMessage} 
            onChange={(e)=>setTodoMessage(e.target.value)} 
          />
          <button 
            type="submit" 
            className='bg-blue-600 text-base sm:text-lg md:text-2xl text-white py-2 px-4 sm:px-5 font-bold rounded-r-2xl hover:bg-blue-400 transition duration-300 ease-in-out w-full sm:w-auto'
          >
            Add
          </button>
        </form>
    </div>
  )
}

export default InputTodo
