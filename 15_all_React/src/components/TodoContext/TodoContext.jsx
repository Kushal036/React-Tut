import React from 'react'
import InputTodo from './InputTodo'
import ShowTodos from './ShowTodos'

function TodoContext() {
  return (
    <div>
      <InputTodo/>
      <ShowTodos/>
      Todo with Context Api
    </div>
  )
}

export default TodoContext
