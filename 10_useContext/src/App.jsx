import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <h1>Hello</h1>
    <Login />
    <Profile/>
    </ContextProvider>
  )
}

export default App
