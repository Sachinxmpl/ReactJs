import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import Layout from './Layout'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/contact/contact'
import User from './components/user/user'
import Github from './components/github/github'

const router = createBrowserRouter([
  {
    path : "/" , 
    element : <Layout/> , 
    children : [
     {
      path : "" , 
      element : <Home/>
     } , 
     {
      path : "/about" , 
      element: <About/> 
     } , 
     {
      path : "/contact" , 
      element : <Contact/>
     } , {
      path : "/github" , 
      element : <Github/>
     } , 
     {
      path : "/user" , 
      element : <User/>
     }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    
  </RouterProvider>
  </React.StrictMode>,
)
