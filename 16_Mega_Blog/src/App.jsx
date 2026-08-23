import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import {Header , Footer} from './components/index';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      }).finally(() => {
        setLoading(false)
      })
  }, [])


  return !loading ? (
    <div>
      <div>
        <Header/>
        {/* <Outlet/> */}
        <Footer/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default App
