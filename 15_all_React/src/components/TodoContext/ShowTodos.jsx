import React, { useState, useContext } from 'react'
import { TodoContextMake } from '../../context/TodoContextMake'

function ShowTodos({ todo }) {
    const { updateTodo, deleteTodo, isEditable } = useContext(TodoContextMake)
    const [todoMessage, setTodoMessage] = useState(todo?.todo || '')

  return (
    <div className='text-base sm:text-lg md:text-xl w-full'>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 my-2 sm:my-1'>
        <input
          className='bg-amber-400 px-3 sm:px-5 py-2 rounded-l-2xl text-sm sm:text-base md:text-lg flex-grow'
          type="text"
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
          disabled={!todo.editable}
        />
        <button
          className='bg-orange-500 px-3 text-white py-2 hover:bg-orange-400 transition duration-300 ease-in-out text-sm sm:text-base'
          onClick={() => {
            if (!todo.editable) {
              // switch to edit mode
              isEditable(todo.id)
            } else {
              // save and exit edit mode
              updateTodo(todo.id, todoMessage)
              isEditable(todo.id)
            }
          }}
        >
          {!todo.editable ? "Edit" : "Save"}
        </button>
        <button 
          className='bg-red-700 px-3 text-white rounded-r-2xl py-2 hover:bg-red-500 transition duration-300 ease-in-out text-sm sm:text-base'
          onClick={()=>{
            deleteTodo(todo.id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ShowTodos
