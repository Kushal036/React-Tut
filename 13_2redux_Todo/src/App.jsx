import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { store } from './App/store'
import {Provider} from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
  <Provider store = {store}>
  <h1 className='bg-gray-500 p-3 m-7 rounded-2xl'>Hello</h1>

  <AddTodo/>
  <Todos/>
  </Provider>
  )
}

export default App
