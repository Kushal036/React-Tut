import React, { useState, useContext } from 'react'
import { TodoContextMake } from '../../context/TodoContextMake'

function ShowTodos({ todo }) {
    const { updateTodo, deleteTodo, isEditable } = useContext(TodoContextMake)
    const [todoMessage, setTodoMessage] = useState(todo?.todo || '')

  return (
    <div className='text-xl w-full '>
      <input
      className='bg-amber-400 my-1 w-5/7 px-5 rounded-l-2xl py-2'
        type="text"
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        disabled={!todo.editable}
      />
      <button
      className='bg-orange-500 px-3 w-1/7 text-white py-2 hover:bg-orange-400 transition duration-300 ease-in-out '
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
      >{!todo.editable ? "Edit" : "Save"}</button>
      <button 
      className='bg-red-700 px-3 text-white rounded-r-2xl w-1/7 py-2 hover:bg-red-500 transition duration-300 ease-in-out'
      onClick={()=>{
        deleteTodo(todo.id)
      }}>Delete</button>
    </div>
  )
}

export default ShowTodos
