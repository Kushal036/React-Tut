import React from 'react'
import { useContext } from 'react';
import { TodoContext} from '../../context/TodoContext'
function ShowTodos() {
    const {updateTodo , deleteTodo , isEditable} = useContext(TodoContext)
  return (
    <div>
      ShowTodos
    </div>
  )
}

export default ShowTodos
