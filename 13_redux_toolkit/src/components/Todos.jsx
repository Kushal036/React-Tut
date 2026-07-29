import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Todos() {

    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()

  return (
    <div>
      {todos.map((todo)=> (
        <li key={todo.id} className='bg-white my-3 mx-20 text-black rounded-2xl'>
        {todo.text}
        <button className='px-5 bg-blue-500 rounded-2xl hover:bg-blue-300 ml-20' onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default Todos
