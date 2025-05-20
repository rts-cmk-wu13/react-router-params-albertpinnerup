import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./views/Home"
import './style.scss'



function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
