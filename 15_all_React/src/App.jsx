import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Header , Footer } from './components/index'
import {Outlet} from 'react-router'
import { ThemeProvider } from './context/ThemeContext'
function App() {
    const [themeMode, setThemeMode] = useState('light')
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
  <ThemeProvider value= {{themeMode , lightTheme, darkTheme}} >
  
  <Header/>
  <Outlet/>
  <Footer/>
  
  </ThemeProvider>
  )
}

export default App
