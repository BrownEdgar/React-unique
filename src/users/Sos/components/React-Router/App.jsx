
import Home from './Components/pages/Home'
import Blog from './Components/pages/Blog'
import About from './Components/pages/About'
import Posts from './Components/pages/Posts'
import Carts from './Components/pages/Carts'
import Cart from './Components/pages/Cart'
import ErrorPage from './Components/pages/ErrorPage'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import Layouts from './Components/layouts/Layouts'
import ROUTES from './Components/routes/routes'

import './App.scss'


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layouts />}>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.BLOG} element={<Blog />} />
			<Route path={ROUTES.ABOUT} element={<About />} />
			<Route path={ROUTES.POSTS} element={<Posts />} />
			<Route path={ROUTES.CARTS} element={<Carts />} />
			<Route path={ROUTES.CART} element={<Cart />} />
			<Route path={ROUTES.ERRORPAGE} element={<ErrorPage />} />
		</Route>
	)
)

export default function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}
