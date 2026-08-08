import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Header , Footer } from './components/index'
import {Outlet} from 'react-router'

function App() {

  return (
  <div className='dark'>
  
  <Header/>
  <Outlet/>
  <Footer/>
  
  </div>
  )
}

export default App
