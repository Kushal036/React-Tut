import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import {Home , BgChanger , Cards , Counter , CurrencyConvertor , RandomString ,ThemeChanger , TodoContext} from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>}>
      <Route path = '' element = {<Home/> }/>
      <Route path = 'counter' element = { <Counter/> }/>
      <Route path = 'cards' element = { <Cards/> }/>
      <Route path = 'bgChanger' element = { <BgChanger/> }/>
      <Route path = 'randomString' element = { <RandomString/> }/>
      <Route path = 'currencyConvertor' element = { <CurrencyConvertor/> }/>
      <Route path = 'themeChanger' element = { <ThemeChanger/> }/>
      <Route path = 'todoContext' element = { <TodoContext/> }/>
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
