import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {
  const [themeMode, setthemeMode] = useState('light')
  const lightTheme = ()=>{
    setthemeMode('light')
  }
  const darkTheme = ()=>{
    setthemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>


<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeContextProvider value={ {themeMode , lightTheme, darkTheme} }>
                        <ThemeBtn />
                        </ThemeContextProvider> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>


</>
  )
}

export default App
