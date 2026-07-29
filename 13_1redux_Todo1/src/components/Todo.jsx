import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
      {todos.map((todo)=>(
        <li key={todo.id} className='list-none'>{todo.text} 
        <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button></li>
      ))}
    </div>
  )
}

export default Todo
