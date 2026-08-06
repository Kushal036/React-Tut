import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Header , Footer } from './components/index'
import {Outlet} from 'react-router'
import { TodoContext} from './components/index.js'
import {TodoProvider} from './context/todoContext.js'
function App() {
  const [todos, setTodos] = useState([])
const addTodo = (todo)=>{
  setTodos([{id:Date.now() , todo:todo , editable: false}, ...todos])
}
const updateTodo = (id,todo)=>{
  setTodos(todos.map((singleTodo)=>singleTodo.id==id ? {...singleTodo , todo :todo } : singleTodo ))
}
const deleteTodo = (id)=>{
  setTodos(todos.filter((singleTodo)=>singleTodo.id != id))
}
const isEditable = (id)=>{
  setTodos(todos.map((singleTodo)=>singleTodo.id == id ?{...singleTodo , editable : !singleTodo.editable } :singleTodo))
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
  <>
  
  <Header/>
  {
    (<Outlet/> == <TodoContext/>) ? <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , isEditable}}> <Outlet/> </TodoProvider> : <Outlet/>

  }

  <Footer/>
  
  </>
  )
}

export default App
