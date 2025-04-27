import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from './components/complex/Layout/Layout'
import "./globals.css"
import { Auth } from './components/complex/Auth/Auth'
import { Profile } from './components/complex/Profile/Profile'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/auth",
        element:<Auth/>,
      },
      {
        path:"/account",
        element:<Profile/>
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