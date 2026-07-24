import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Home , About , Contact , User , Github , GithubHC ,CallTheApi } from './components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element= {<Home />}/>
      <Route path='about' element= {<About />}/>
      <Route path='contact' element= {<Contact />}/>
      <Route path='user/:userId' element= {<User />}/>
      <Route path='github/:userName' element= {<Github />}/>
      <Route 
      path='github' 
      loader= {CallTheApi}
      element= {<GithubHC />}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
