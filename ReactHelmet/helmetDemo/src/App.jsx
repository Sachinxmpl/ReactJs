import React from 'react'
import { HelmetProvider } from "react-helmet-async"
import { createBrowserRouter, RouterProvider, Router, Link } from "react-router-dom"
import Layout from "./layout"
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/contact/contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
])

function App() {
  return (
    <HelmetProvider>

      <RouterProvider router={router}>

      </RouterProvider>
    </HelmetProvider>

  )
}

export default App