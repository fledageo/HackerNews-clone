import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from './components/complex/Layout/Layout'
import "./globals.css"
import { Auth } from './components/complex/Auth/Auth'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/auth",
        element:<Auth/>,
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
export default App 