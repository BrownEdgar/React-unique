
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Layouts from './components/Layouts'
import ROUTES from './routes/routes'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import "./App.scss"





export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.ERRORPAGE} element={<ErrorPage />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
