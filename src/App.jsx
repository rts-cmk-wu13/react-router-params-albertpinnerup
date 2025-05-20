import { createBrowserRouter, RouterProvider } from "react-router"
import './style.scss'



function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <div>Home</div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
