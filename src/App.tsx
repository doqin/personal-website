import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ErrorBoundary from "./components/ErrorBoundary"
import Blog from "./pages/Blog"
import Notes from "./pages/Notes"
import NotFound from "./pages/NotFound"

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
  { path: "/blog", element: wrapWithErrorBoundary(Blog) },
  { path: "/notes", element: wrapWithErrorBoundary(Notes) },
  { path: "*", element: wrapWithErrorBoundary(NotFound) }
])

const App = () => <RouterProvider router={router}/>

export default App
