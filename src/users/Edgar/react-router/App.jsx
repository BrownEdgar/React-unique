import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import Layouts from './components/Layouts'
import ROUTES from './routes/routes'
import './App.scss'





export default function App() {
	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path='/' element={<Layouts />}>
	// 			<Route index element={<Home title ="my first react router component is here"/>} />
	// 			<Route path='blog' element={<Blog />} />
	// 			<Route path='about' element={<About />} />
	// 			<Route path='*' element={<ErrorPage />} />
	// 		</Route>
	// 	)
	// )
	const router = createBrowserRouter([
		{
			path: ROUTES.HOME,
			element: <Layouts />,
			children: [
				{
					index: true,
					element: <Home title="my first react router component is here" />,
				},
				{
					path: ROUTES.BLOG,
					element: <Blog />,
				},
				{
					path: ROUTES.ABOUT,
					element: <About />,
				},
				{
					path: ROUTES.ERRORPAGE,
					element: <ErrorPage />,
				}
			]
		}
	])
	return (
		<div className='App'>
			<RouterProvider router={router} />
			
		</div>
	)
}
