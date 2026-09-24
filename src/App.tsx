import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import ErrorBoundary from "./components/ErrorBoundary"
import Blog from "./pages/Blog"
import Notes from "./pages/Notes"

const wrapWithErrorBoundary = (Component: React.ComponentType) => {
  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
}

const router = createBrowserRouter([
  { path: "/", element: wrapWithErrorBoundary(Home) },
  { path: "/projects", element: wrapWithErrorBoundary(Projects) },
  { path: "/about", element: wrapWithErrorBoundary(About) },
  { path: "/blog", element: wrapWithErrorBoundary(Blog) },
  { path: "/notes", element: wrapWithErrorBoundary(Notes) },
  { path: "*", element: <ErrorBoundary><h1>Page Not Found</h1></ErrorBoundary> }
])

const App = () => <RouterProvider router={router}/>

export default App
