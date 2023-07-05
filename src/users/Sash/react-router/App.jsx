import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import { 
	Gallery, 
	Home, 
	Blog,
	About, 
	Contacts, 
	Users, 
	User, 
	ErrorPage } from './pages'
import Layouts from './components/Layouts'
import ROUTES from './routes/routes'


import "./App.scss"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.USER} element={<User />} />
        <Route path={ROUTES.ERRORPAGE} element={<ErrorPage />} />
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
