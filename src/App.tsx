import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/projects", element: <Projects/>}
])

const App = () => <RouterProvider router={router}/>

export default App
