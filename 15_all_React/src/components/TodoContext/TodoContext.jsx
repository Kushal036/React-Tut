import React,{useState , useEffect} from 'react'
import InputTodo from './InputTodo'
import ShowTodos from './ShowTodos'
import {TodoProvider , TodoContextMake } from '../../context/TodoContextMake.js'


function TodoContext() {

  const [todos, setTodos] = useState([])
  const addTodo = (todo)=>{
    setTodos(prev => [{id:Date.now() , todo:todo , editable: false}, ...prev])
  }
  const updateTodo = (id,todo)=>{
    setTodos(prev => prev.map((singleTodo)=>singleTodo.id==id ? {...singleTodo , todo :todo } : singleTodo ))
  }
  const deleteTodo = (id)=>{
    setTodos(prev => prev.filter((singleTodo)=>singleTodo.id != id))
  }
  const isEditable = (id)=>{
    setTodos(prev => prev.map((singleTodo)=>singleTodo.id == id ?{...singleTodo , editable : !singleTodo.editable } :singleTodo))
  }
  
    useEffect(()=>{
      const localTodo = JSON.parse(localStorage.getItem("Todos"))
      if (localTodo && localTodo.length>0 ) {
        setTodos(localTodo)
      }
    },[])
    
    useEffect(()=>{
      localStorage.setItem("Todos" ,JSON.stringify(todos))

      
    },[todos])

  return (
    <div className='flex flex-col w-full min-h-screen justify-center mx-auto dark:bg-gray-950 light:bg-gray-300 py-10 px-4 sm:py-20'>
      <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , isEditable}}> 
        <div className='bg-gray-500 mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-10 rounded-3xl w-full sm:w-3/4 md:w-2/3 lg:w-3/5 max-w-2xl'>
          <InputTodo/>
          <div className='mx-auto mt-6 sm:mt-8'>
            {
              todos.map((todo)=>(
                <div key={todo.id}>
                  <ShowTodos todo ={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </TodoProvider>
    </div>
  )
}

export default TodoContext
