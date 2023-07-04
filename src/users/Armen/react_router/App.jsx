import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'
import Layouts from './components/Layouts'
import ROUTES from './routes/routes'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"

import './App.scss'
import Todos from './Pages/Todos'

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<Layouts />}>
//             <Route  index element={<Home />}/>
//             <Route path='blog' element={<Blog />}/>
//             <Route path='about' element={<About />}/>
//             <Route path='*' element={<ErrorPage />}/>
//         </Route>
//     )
// )
const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layouts />,
        children: [
            {
            index: true,  
            element: <Home />,
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
            element: <Products />,
            },
            {
                path: ROUTES.CONTACT,
                element: <Contact />,
            },
            {
              path: ROUTES.TODOS,
              element: <Todos />,
          },
          {
            path: ROUTES.TODO,
            element: <Todo />,
        },
            {
            path: ROUTES.ERRORPAGE,
            element: <ErrorPage />,
            },
        ]
           
        }

	}
])
export default function App() {
	return (
		<div className='App'>

			<RouterProvider router={router} />

		</div>
	)
}
