import "./globals.css"
import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from './components/complex/Layout/Layout'
import { Auth } from './components/complex/Auth/Auth'
import { Profile } from './components/complex/Profile/Profile'
import { AddPost } from './components/complex/AddPost/AddPost'
import { Newest } from './components/complex/Newest/Newest'
import { Post } from "./components/complex/Post/Post"

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
      },
      {
        path:"/post/add",
        element:<AddPost/>
      },
      {
        path:"/newest",
        element:<Newest/>
      },
      {
        path:"/post/:id",
        element:<Post/>
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