import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/projects", element: <Projects/>},
  { path: "/about", element: <About/>}
])

const App = () => <RouterProvider router={router}/>

export default App
