
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Products from './Pages/Products'
import Product from './Pages/Product'
import ErrorPage from './pages/ErrorPage'
import Layouts from './components/Layouts'
import ROUTES from './routes/routes'
import postLoader from './loader/postLoader'



import './App.scss'
import PrivateRouter from './components/PrivateRouter';




export default function App() {

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
						path: ROUTES.PRODUCTS,
						element: <PrivateRouter />,
						children: [
							{
								index: true,
								element: <Products />,
								loader: postLoader
							},
							{
								path: ROUTES.PRODUCT,
								element: <Product />,
							},
						]
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
